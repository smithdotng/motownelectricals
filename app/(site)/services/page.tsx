import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, DELIVERY_SCOPE } from '@/lib/company';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Services & Capabilities',
    description:
        'Electrical installation, power distribution, transformer and HV works, solar and backup power, testing and commissioning, and maintenance and support across Abuja and Nigeria.',
    path: '/services',
    image: '/images/og-services.jpg',
    imageAlt: 'Motown Electrical Services — services and capabilities'
});

const TRANSFORMER_SCOPE = [
    'Transformer positioning and installation support',
    'High- and low-voltage cable routing and termination',
    'Protection, metering and distribution panel integration',
    'Earthing, bonding and equipment safety checks',
    'Inspection, testing, energisation support and handover'
];

export default function ServicesPage() {
    return (
        <>
            <section className="page-banner">
                <div className="container position-relative">
                    <p className="eyebrow mb-1">What We Do</p>
                    <h1>Services &amp; Capabilities</h1>
                </div>
            </section>

            {/* ---------- Service grid ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="row g-4">
                        {SERVICES.map((service) => (
                            <div className="col-md-6 col-lg-4" key={service.slug}>
                                <div className="role-card h-100">
                                    <div className="illust-banner">
                                        <Image src={service.image} alt={service.title} width={508} height={150} />
                                        <span className="banner-num">{service.number}</span>
                                    </div>
                                    <div className="role-card-body">
                                        <h5>{service.title}</h5>
                                        <p className="text-muted">{service.summary}</p>
                                        <ul className="text-muted small mb-0 ps-3">
                                            {service.detail.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Building electrical works ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <p className="section-title">Selected Project Activity</p>
                            <h2>From First Fix to Final Fit-Out</h2>
                            <span className="rule-yellow" aria-hidden="true" />
                            <p className="text-muted">
                                Motown supports electrical works from the early construction stage through final
                                installation. Activities include route planning, conduit and cable pathway coordination,
                                recessed box installation, circuit wiring, lighting points, socket outlets and final
                                equipment connection.
                            </p>
                            <div className="row g-3 mt-2">
                                <div className="col-4">
                                    <div className="photo-tile">
                                        <Image src="/images/containment.jpg" alt="Containment and cable routes" width={290} height={290} />
                                        <div className="photo-caption" style={{ fontSize: 11 }}>Containment &amp; Routes</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="photo-tile">
                                        <Image src="/images/final-circuit.jpg" alt="Final circuit works" width={290} height={290} />
                                        <div className="photo-caption" style={{ fontSize: 11 }}>Final Circuit Works</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="photo-tile">
                                        <Image src="/images/site-team.jpg" alt="Site installation team" width={290} height={290} />
                                        <div className="photo-caption" style={{ fontSize: 11 }}>Installation Team</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-6">
                                    <div className="photo-tile">
                                        <Image src="/images/first-fix-1.jpg" alt="Electrical coordination at slab stage" width={500} height={570} />
                                        <div className="photo-caption">Slab-Stage Coordination</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="photo-tile">
                                        <Image src="/images/first-fix-2.jpg" alt="Site supervision during first fix" width={506} height={570} />
                                        <div className="photo-caption">First-Fix Supervision</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Transformer & distribution ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Power Systems</p>
                        <h2>Transformer &amp; Distribution Infrastructure</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/transformer-installed.jpg" alt="Installed transformer and control panels" width={506} height={610} />
                                <div className="photo-caption">Installed Transformer &amp; Control Panels</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/cable-termination.jpg" alt="Cable termination and commissioning" width={506} height={610} />
                                <div className="photo-caption">Cable Termination &amp; Commissioning</div>
                            </div>
                        </div>
                    </div>
                    <div className="callout">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7">
                                <h4>Scope of Work</h4>
                                <span className="rule-yellow" aria-hidden="true" />
                                <ul className="scope-list">
                                    {TRANSFORMER_SCOPE.map((item, index) => (
                                        <li key={item}>
                                            <span className="scope-num">{index + 1}</span>
                                            <span className="text-muted">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <div className="photo-tile">
                                    <Image src="/images/pole-work.jpg" alt="Pole-mounted transformer works" width={340} height={360} />
                                    <div className="photo-caption">Pole-Mounted Installation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Solar & backup ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Energy Solutions</p>
                        <h2>Solar, Inverter &amp; Backup Power</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/inverter-wall.jpg" alt="Wall-mounted inverter and protection devices" width={506} height={504} />
                                <div className="photo-caption">Inverter &amp; Protection Devices</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/battery-bank.jpg" alt="Battery bank and inverter installation" width={506} height={504} />
                                <div className="photo-caption">Battery Bank Installation</div>
                            </div>
                        </div>
                    </div>
                    <div className="callout">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <h4>Configured for Reliability</h4>
                                <span className="rule-yellow" aria-hidden="true" />
                                <p className="text-muted mb-0">
                                    Our backup power solutions are designed around the client&apos;s load profile, operating
                                    requirements and available space. Systems may combine inverters, battery banks, solar
                                    charge controllers, protection devices, distribution panels and automatic changeover
                                    arrangements.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="photo-tile">
                                            <Image src="/images/inverter-system.jpg" alt="Inverter, battery and control system" width={440} height={360} />
                                            <div className="photo-caption" style={{ fontSize: 11 }}>Inverter &amp; Control</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="photo-tile">
                                            <Image src="/images/solar-install.jpg" alt="Installation and commissioning of a backup power system" width={440} height={360} />
                                            <div className="photo-caption" style={{ fontSize: 11 }}>Commissioning</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Delivery scope ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Sectors Served</p>
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

            <section className="cta-band">
                <div className="container position-relative text-center">
                    <h2>Have a scope you need priced?</h2>
                    <p className="mb-4">Share your drawings, load requirement or site details and we will respond with a scope and quotation.</p>
                    <Link href="/contact" className="btn btn-yellow btn-lg">
                        Request a Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
