import Image from 'next/image';
import EnquiryForm from '@/components/EnquiryForm';
import { COMPANY, DELIVERY_SCOPE } from '@/lib/company';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Contact Us',
    description:
        'Contact Motown Electrical Services Limited at 17 Mambolo Street, Wuse 2, Abuja FCT. Call +234 803 932 7932 or email info@motownelectricals.com.',
    path: '/contact',
    image: '/images/og-contact.jpg',
    imageAlt: 'Contact Motown Electrical Services Limited, Wuse 2, Abuja'
});

const MAP_QUERY = encodeURIComponent('17 Mambolo Street, Wuse 2, Abuja, Nigeria');

export default function ContactPage() {
    return (
        <>
            <section className="page-banner">
                <div className="container position-relative">
                    <p className="eyebrow mb-1">Let&apos;s build reliable power</p>
                    <h1>Contact Us</h1>
                </div>
            </section>

            <section className="page-shell">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <p className="section-title">Get in touch</p>
                            <h2>Professional electrical solutions for modern projects.</h2>
                            <span className="rule-yellow" aria-hidden="true" />

                            <div className="mt-4">
                                <div className="contact-line">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <span className="contact-label">Address</span>
                                        <span className="contact-value">{COMPANY.address}</span>
                                    </span>
                                </div>
                                <div className="contact-line">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-phone" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <span className="contact-label">Telephone</span>
                                        <span className="contact-value">
                                            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                                        </span>
                                    </span>
                                </div>
                                <div className="contact-line">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <span className="contact-label">Email</span>
                                        <span className="contact-value">
                                            <a href={COMPANY.emailHref}>{COMPANY.email}</a>
                                        </span>
                                        <span className="contact-value">
                                            <a href={COMPANY.emailAltHref}>{COMPANY.emailAlt}</a>
                                        </span>
                                    </span>
                                </div>
                                <div className="contact-line">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-globe" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <span className="contact-label">Website</span>
                                        <span className="contact-value">
                                            <a href={COMPANY.websiteUrl}>{COMPANY.website}</a>
                                        </span>
                                    </span>
                                </div>
                                <div className="contact-line">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-building" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <span className="contact-label">Company</span>
                                        <span className="contact-value">{COMPANY.name}</span>
                                    </span>
                                </div>
                                <div className="contact-line">
                                    <span className="contact-icon">
                                        <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <span className="contact-label">RC Number</span>
                                        <span className="contact-value">{COMPANY.rcNumber}</span>
                                    </span>
                                </div>
                            </div>

                            <div className="callout-navy mt-4">
                                <h5>What we can quote</h5>
                                <ul className="footer-list mb-0">
                                    {DELIVERY_SCOPE.map((scope) => (
                                        <li key={scope.title} style={{ marginBottom: 6, fontSize: 14 }}>
                                            <i className="fa-solid fa-check me-2" style={{ color: 'var(--thm-yellow)' }} aria-hidden="true"></i>
                                            {scope.title} &mdash; {scope.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="card">
                                <div className="card-header py-3 px-4">Project enquiry</div>
                                <div className="p-4">
                                    <p className="text-muted small">
                                        Tell us about the building, site or power requirement. We will come back to you with a
                                        scope and quotation.
                                    </p>
                                    <EnquiryForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Map ---------- */}
            <section className="page-shell-tight" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-8">
                            <iframe
                                className="map-frame"
                                title={`Map showing ${COMPANY.addressShort}`}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
                            />
                        </div>
                        <div className="col-lg-4">
                            <div className="photo-feature h-100">
                                <Image
                                    src="/images/cover-building.jpg"
                                    alt="Completed building illuminated at night"
                                    width={619}
                                    height={1683}
                                    style={{ height: '100%', minHeight: 320 }}
                                />
                                <div className="photo-overlay">
                                    <h5>Powering progress. Lighting lives.</h5>
                                    <p>{COMPANY.addressShort}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container position-relative text-center">
                    <h2>
                        Let&apos;s build <span style={{ color: 'var(--thm-yellow)' }}>reliable power.</span>
                    </h2>
                    <p className="mb-4">Call us directly and speak with the team handling your project.</p>
                    <a href={COMPANY.phoneHref} className="btn btn-yellow btn-lg">
                        <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                        {COMPANY.phone}
                    </a>
                </div>
            </section>
        </>
    );
}
