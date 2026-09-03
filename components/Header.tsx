'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { COMPANY } from '@/lib/company';

const NAV = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
];

function isActive(href: string, pathname: string) {
    return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
}

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Next.js swaps pages client-side without a reload, so the collapsed
    // mobile menu has to be closed explicitly whenever the route changes.
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Close on Escape, and re-close if the viewport grows past the lg
    // breakpoint while the panel is open (Bootstrap shows the full bar there).
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };
        const onResize = () => {
            if (window.innerWidth >= 992) setOpen(false);
        };

        document.addEventListener('keydown', onKeyDown);
        window.addEventListener('resize', onResize);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('resize', onResize);
        };
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <>
            <div className="header-strip d-none d-lg-block">
                <div className="container d-flex justify-content-between align-items-center">
                    <span>
                        <i className="fa-solid fa-location-dot me-2" aria-hidden="true"></i>
                        {COMPANY.addressShort}
                    </span>
                    <span className="d-flex gap-4">
                        <a href={COMPANY.phoneHref}>
                            <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                            {COMPANY.phone}
                        </a>
                        <a href={COMPANY.emailHref}>
                            <i className="fa-solid fa-envelope me-2" aria-hidden="true"></i>
                            {COMPANY.email}
                        </a>
                    </span>
                </div>
            </div>

            <header className="app-header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" href="/" onClick={closeMenu}>
                            <Image
                                src="/images/logo.png"
                                alt={COMPANY.name}
                                width={371}
                                height={200}
                                className="navbar-logo"
                                priority
                            />
                        </Link>
                        <button
                            className={`navbar-toggler ${open ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            aria-controls="appNav"
                            aria-expanded={open}
                            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="appNav">
                            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                                {NAV.map((item) => (
                                    <li className="nav-item" key={item.href}>
                                        <Link
                                            className={`nav-link ${isActive(item.href, pathname) ? 'active' : ''}`}
                                            href={item.href}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                                    <a className="btn btn-yellow btn-sm" href={COMPANY.phoneHref} onClick={closeMenu}>
                                        <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                                        Request a Quote
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
