import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, SERVICES, DELIVERY_SCOPE, CORE_VALUES } from '@/lib/company';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Motown Electrical Services Limited | Powering progress. Lighting lives.',
    description:
        'Electrical installation, power distribution, transformer works, solar and backup power, testing, commissioning and maintenance for residential, commercial and infrastructure projects in Abuja, Nigeria.',
    path: '/'
});

export default function HomePage() {
    return (
        <>
            {/* ---------- Hero ---------- */}
            <section className="hero-brand">
                <div
                    className="hero-photo"
                    style={{ backgroundImage: 'url(/images/hero-building.jpg)' }}
                    aria-hidden="true"
                />
                <div className="hero-slash" aria-hidden="true" />
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <p className="section-title" style={{ color: 'var(--thm-cyan)' }}>
                                Electrical Engineering &middot; Abuja, Nigeria
                            </p>
                            <h1>
                                Let&apos;s build
                                <br />
                                <span className="accent">reliable power.</span>
                            </h1>
                            <span className="hero-rule" aria-hidden="true" />
                            <p className="lead">
                                {COMPANY.name} delivers electrical installation, power distribution, transformer works,
                                solar and backup power systems for residential, commercial and infrastructure projects &mdash;
                                with hands-on site supervision from first fix to final handover.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <Link href="/contact" className="btn btn-yellow btn-lg">
                                    Request a Quote
                                </Link>
                                <Link href="/services" className="btn btn-outline-light btn-lg">
                                    Our Capabilities
                                </Link>
                            </div>
                            <div className="hero-tags">
                                <span>Electrical Engineering</span>
                                <span>Power Systems</span>
                                <span>Solar &amp; Backup Power</span>
                                <span>Testing &amp; Commissioning</span>
                                <span>Technical Procurement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Credentials strip ---------- */}
            <section className="page-shell-tight" style={{ background: '#fff', borderBottom: '1px solid var(--thm-card-border)' }}>
                <div className="container">
                    <div className="row g-4 text-center text-lg-start">
                        <div className="col-6 col-lg-3">
                            <div className="stat-value" style={{ fontSize: 30, fontWeight: 700, color: 'var(--thm-navy)' }}>2018</div>
                            <div className="stat-label" style={{ color: 'var(--thm-gray)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Incorporated
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="stat-value" style={{ fontSize: 30, fontWeight: 700, color: 'var(--thm-navy)' }}>RC {COMPANY.rcNumber}</div>
                            <div className="stat-label" style={{ color: 'var(--thm-gray)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                CAC Registered
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="stat-value" style={{ fontSize: 30, fontWeight: 700, color: 'var(--thm-navy)' }}>6</div>
                            <div className="stat-label" style={{ color: 'var(--thm-gray)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Service Lines
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="stat-value" style={{ fontSize: 30, fontWeight: 700, color: 'var(--thm-navy)' }}>Abuja</div>
                            <div className="stat-label" style={{ color: 'var(--thm-gray)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Operational Base
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Who we are ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <p className="section-title">About Motown</p>
                            <h2>Who We Are</h2>
                            <span className="rule-yellow" aria-hidden="true" />
                            <p className="text-muted">
                                {COMPANY.name} is an Abuja-based electrical engineering and technical services company.
                                The company supports residential, commercial and infrastructure projects through electrical
                                installation, power distribution, transformer works, solar and inverter systems, testing,
                                commissioning and maintenance.
                            </p>
                            <p className="text-muted">
                                Our project record reflects hands-on site supervision, disciplined technical delivery and
                                direct engagement with manufacturers and suppliers for equipment inspection and procurement.
                            </p>
                            <Link href="/about" className="btn btn-brand mt-2">
                                More about us
                                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="photo-feature">
                                <Image
                                    src="/images/residential-base.jpg"
                                    alt="Completed residential development with external site lighting, Abuja"
                                    width={506}
                                    height={500}
                                />
                                <div className="photo-overlay">
                                    <h5>Operational base: Abuja, Nigeria</h5>
                                    <p>Residential, commercial and infrastructure project delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Services ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">What We Do</p>
                        <h2>Services &amp; Capabilities</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4">
                        {SERVICES.map((service) => (
                            <div className="col-md-6 col-lg-4" key={service.slug}>
                                <div className="role-card">
                                    <div className="illust-banner">
                                        <Image src={service.image} alt={service.title} width={508} height={150} />
                                        <span className="banner-num">{service.number}</span>
                                    </div>
                                    <div className="role-card-body">
                                        <h5>{service.title}</h5>
                                        <p className="text-muted mb-0">{service.summary}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/services" className="btn btn-brand btn-lg">
                            See full capabilities
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------- Delivery scope ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Where We Work</p>
                        <h2>Delivery Scope</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4">
                        {DELIVERY_SCOPE.map((scope) => (
                            <div className="col-md-6 col-lg-3" key={scope.title}>
                                <div className="stat-card">
                                    <div className="stat-icon">
                                        <i className={scope.icon} aria-hidden="true"></i>
                                    </div>
                                    <h5>{scope.title}</h5>
                                    <p className="text-muted mb-0 small">{scope.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Featured work ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Completed Environments</p>
                        <h2>Integrated electrical works for modern buildings</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/interior-lighting.jpg" alt="Interior lighting and controls" width={330} height={510} />
                                <div className="photo-caption">Interior Lighting &amp; Controls</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/transformer-installed.jpg" alt="Installed transformer and control panels" width={506} height={610} />
                                <div className="photo-caption">Transformer &amp; Control Panels</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/battery-bank.jpg" alt="Inverter and battery bank installation" width={506} height={504} />
                                <div className="photo-caption">Inverter &amp; Battery Systems</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <Link href="/projects" className="btn btn-outline-brand btn-lg">
                            View the project gallery
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------- Core values ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Safety, Quality &amp; Accountability</p>
                        <h2>Our Core Values</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4">
                        {CORE_VALUES.map((value) => (
                            <div className="col-md-6 col-lg-3" key={value.title}>
                                <div className={`value-card ${value.variant}`}>
                                    <h5>{value.title.toUpperCase()}</h5>
                                    <p>{value.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section className="cta-band">
                <div className="container position-relative text-center">
                    <h2>Professional electrical solutions for modern projects.</h2>
                    <p className="mb-4">
                        Tell us about your building, site or power requirement and we will scope the works with you.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Link href="/contact" className="btn btn-yellow btn-lg">
                            Talk to our team
                        </Link>
                        <a href={COMPANY.phoneHref} className="btn btn-outline-light btn-lg">
                            <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                            {COMPANY.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
