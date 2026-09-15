import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import { pageMetadata } from '@/lib/seo';
import { GALLERY_CATEGORIES, GALLERY_COUNT } from '@/lib/gallery';

export const metadata = pageMetadata({
    title: 'Men at Work — Gallery',
    description:
        'Site photography from Motown Electrical Services Limited: first fix and installation, slab coordination, transformer and HV works, panels and inverters, cable routing and groundworks, supervision and testing.',
    path: '/gallery',
    image: '/images/og-gallery.jpg',
    imageAlt: 'Motown Electrical Services — men at work on site'
});

export default function GalleryPage() {
    return (
        <>
            <section className="page-banner">
                <div className="container position-relative">
                    <p className="eyebrow mb-1">On Site</p>
                    <h1>Men at Work</h1>
                </div>
            </section>

            <section className="page-shell">
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-lg-8">
                            <p className="section-title">Gallery</p>
                            <h2>Our crews, on live sites</h2>
                            <span className="rule-yellow center" aria-hidden="true" />
                            <p className="text-muted mb-0">
                                {GALLERY_COUNT} photographs from active projects across Abuja, grouped by the kind of
                                work in frame &mdash; from set-out on the reinforcement deck through to transformer
                                energisation and final terminations. Select a category to filter, or open any image for a
                                closer look.
                            </p>
                        </div>
                    </div>

                    <GalleryGrid />
                </div>
            </section>

            {/* ---------- What the categories cover ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">How the work breaks down</p>
                        <h2>What you are looking at</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4">
                        {GALLERY_CATEGORIES.map((category) => (
                            <div className="col-md-6 col-lg-4" key={category.slug}>
                                <div className="stat-card">
                                    <h5>{category.label}</h5>
                                    <p className="text-muted mb-0 small">{category.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container position-relative text-center">
                    <h2>The same team can be on your site.</h2>
                    <p className="mb-4">
                        Residential, commercial, infrastructure or renewable &mdash; tell us what needs doing.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Link href="/contact" className="btn btn-yellow btn-lg">
                            Request a Quote
                        </Link>
                        <Link href="/projects" className="btn btn-outline-light btn-lg">
                            See completed projects
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
