'use client';

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

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const active = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
    return (
        <li className="nav-item">
            <Link className={`nav-link ${active ? 'active' : ''}`} href={href}>
                {children}
            </Link>
        </li>
    );
}

export default function Header() {
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
                        <Link className="navbar-brand" href="/">
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
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#appNav"
                            aria-controls="appNav"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="appNav">
                            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                                {NAV.map((item) => (
                                    <NavLink key={item.href} href={item.href}>
                                        {item.label}
                                    </NavLink>
                                ))}
                                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                                    <a className="btn btn-yellow btn-sm" href={COMPANY.phoneHref}>
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
