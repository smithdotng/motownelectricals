import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, SERVICES } from '@/lib/company';

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <span className="brand-logo-chip mb-3">
                            <Image
                                src="/images/logo.png"
                                alt={COMPANY.name}
                                width={371}
                                height={200}
                                style={{ height: 40, width: 'auto', display: 'block' }}
                            />
                        </span>
                        <p className="small mb-2">
                            {COMPANY.name} is an Abuja-based electrical engineering and technical services company
                            supporting residential, commercial and infrastructure projects.
                        </p>
                        <p className="small mb-0">
                            RC {COMPANY.rcNumber} &middot; Incorporated {COMPANY.incorporated}
                        </p>
                    </div>

                    <div className="col-6 col-lg-3">
                        <h6>Services</h6>
                        <ul className="footer-list">
                            {SERVICES.map((s) => (
                                <li key={s.slug}>
                                    <Link href="/services">{s.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h6>Company</h6>
                        <ul className="footer-list">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Capabilities</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <h6>Get in touch</h6>
                        <ul className="footer-list">
                            <li>
                                <i className="fa-solid fa-location-dot me-2" aria-hidden="true"></i>
                                {COMPANY.address}
                            </li>
                            <li>
                                <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                                <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope me-2" aria-hidden="true"></i>
                                <a href={COMPANY.emailHref}>{COMPANY.email}</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-globe me-2" aria-hidden="true"></i>
                                <a href={COMPANY.websiteUrl}>{COMPANY.website}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <span>
                        &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
                    </span>
                    <span>Electrical Engineering &middot; Power Systems &middot; Solar &amp; Backup Power</span>
                    <span className="footer-credit">
                        Developed by{' '}
                        <a href="https://shedfactory.co" target="_blank" rel="noopener noreferrer">
                            Shedfactory
                        </a>
                    </span>
                </div>
            </div>
            <div className="footer-accent" />
        </footer>
    );
}
