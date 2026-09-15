'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategorySlug } from '@/lib/gallery';

type Filter = GalleryCategorySlug | 'all';

export default function GalleryGrid() {
    const [filter, setFilter] = useState<Filter>('all');
    const [lightbox, setLightbox] = useState<number | null>(null);

    const items = useMemo(
        () => (filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter)),
        [filter]
    );

    const active = lightbox === null ? null : items[lightbox] ?? null;

    const close = useCallback(() => setLightbox(null), []);
    const step = useCallback(
        (delta: number) =>
            setLightbox((current) => {
                if (current === null) return current;
                return (current + delta + items.length) % items.length;
            }),
        [items.length]
    );

    // Keyboard control, and lock page scroll while the lightbox is open.
    useEffect(() => {
        if (active === null) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowRight') step(1);
            if (event.key === 'ArrowLeft') step(-1);
        };

        document.addEventListener('keydown', onKeyDown);
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previous;
        };
    }, [active, close, step]);

    function changeFilter(next: Filter) {
        setFilter(next);
        setLightbox(null);
    }

    const countFor = (slug: Filter) =>
        slug === 'all' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === slug).length;

    return (
        <>
            {/* ---------- Category filters ---------- */}
            <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
                <button
                    type="button"
                    role="tab"
                    aria-selected={filter === 'all'}
                    className={`gallery-chip ${filter === 'all' ? 'is-active' : ''}`}
                    onClick={() => changeFilter('all')}
                >
                    All Work <span className="chip-count">{countFor('all')}</span>
                </button>
                {GALLERY_CATEGORIES.map((category) => (
                    <button
                        key={category.slug}
                        type="button"
                        role="tab"
                        aria-selected={filter === category.slug}
                        className={`gallery-chip ${filter === category.slug ? 'is-active' : ''}`}
                        onClick={() => changeFilter(category.slug)}
                    >
                        {category.label} <span className="chip-count">{countFor(category.slug)}</span>
                    </button>
                ))}
            </div>

            {filter !== 'all' && (
                <p className="gallery-blurb">
                    {GALLERY_CATEGORIES.find((c) => c.slug === filter)?.description}
                </p>
            )}

            {/* ---------- Masonry grid ---------- */}
            <div className="gallery-grid">
                {items.map((item, index) => (
                    <button
                        type="button"
                        className="gallery-cell"
                        key={item.src}
                        onClick={() => setLightbox(index)}
                        aria-label={`View larger: ${item.caption}`}
                    >
                        <Image
                            src={item.src}
                            alt={item.caption}
                            width={item.width}
                            height={item.height}
                            sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                            loading="lazy"
                        />
                        <span className="gallery-cell-caption">{item.caption}</span>
                        <span className="gallery-cell-zoom" aria-hidden="true">
                            <i className="fa-solid fa-expand"></i>
                        </span>
                    </button>
                ))}
            </div>

            {/* ---------- Lightbox ---------- */}
            {active && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={active.caption}
                    onClick={close}
                >
                    <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>
                    <button
                        type="button"
                        className="lightbox-nav prev"
                        aria-label="Previous image"
                        onClick={(e) => {
                            e.stopPropagation();
                            step(-1);
                        }}
                    >
                        <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={active.src}
                            alt={active.caption}
                            width={active.width}
                            height={active.height}
                            sizes="(max-width: 991px) 94vw, 76vw"
                            priority
                        />
                        <figcaption>
                            <span>{active.caption}</span>
                            <span className="lightbox-index">
                                {(lightbox ?? 0) + 1} / {items.length}
                            </span>
                        </figcaption>
                    </figure>
                    <button
                        type="button"
                        className="lightbox-nav next"
                        aria-label="Next image"
                        onClick={(e) => {
                            e.stopPropagation();
                            step(1);
                        }}
                    >
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            )}
        </>
    );
}
