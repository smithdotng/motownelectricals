import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, CORE_VALUES, PROCESS_STEPS } from '@/lib/company';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'About Us',
    description:
        'Motown Electrical Services Limited is an Abuja-based electrical engineering and technical services company, registered in Nigeria as RC 1546690 and based at 17 Mambolo Street, Wuse 2.',
    path: '/about',
    image: '/images/og-about.jpg',
    imageAlt: 'Motown Electrical Services Limited — company overview'
});

export default function AboutPage() {
    return (
        <>
            <section className="page-banner">
                <div className="container position-relative">
                    <p className="eyebrow mb-1">About Motown</p>
                    <h1>Company Overview</h1>
                </div>
            </section>

            {/* ---------- Who we are ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h2>Who We Are</h2>
                            <span className="rule-yellow" aria-hidden="true" />
                            <p className="text-muted">
                                {COMPANY.name} is an Abuja-based electrical engineering and technical services company.
                                The company supports residential, commercial and infrastructure projects through electrical
                                installation, power distribution, transformer works, solar and inverter systems, testing,
                                commissioning and maintenance.
                            </p>
                            <p className="text-muted mb-0">
                                Our project record reflects hands-on site supervision, disciplined technical delivery and
                                direct engagement with manufacturers and suppliers for equipment inspection and procurement.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="photo-feature">
                                <Image
                                    src="/images/residential-base.jpg"
                                    alt="Completed residential development, Abuja"
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

            {/* ---------- Corporate information ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <h2>Corporate Information</h2>
                            <span className="rule-yellow" aria-hidden="true" />
                            <table className="table info-table mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row">Registered Name</th>
                                        <td>{COMPANY.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">RC Number</th>
                                        <td>{COMPANY.rcNumber}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Date of Incorporation</th>
                                        <td>{COMPANY.incorporated}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Business Address</th>
                                        <td>{COMPANY.address}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Telephone</th>
                                        <td>
                                            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>
                                            <a href={COMPANY.emailHref}>{COMPANY.email}</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-5">
                            <div className="callout-cyan mb-4">
                                <h5>Company Profile</h5>
                                <p>
                                    Our profile presents the company&apos;s operations, capabilities, selected project
                                    activities and international technical engagement. Supporting statutory, contractual and
                                    financial records can be supplied separately when required.
                                </p>
                            </div>
                            <div className="callout-navy">
                                <h5>Powering progress. Lighting lives.</h5>
                                <p className="mb-0 small">
                                    Electrical Engineering &middot; Power Systems &middot; Solar &amp; Backup Power &middot;
                                    Installation &middot; Testing &amp; Commissioning &middot; Technical Procurement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- How we deliver ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="row g-5 align-items-start">
                        <div className="col-lg-6">
                            <p className="section-title">Project Delivery</p>
                            <h2>Hands-On Project Control</h2>
                            <span className="rule-yellow" aria-hidden="true" />
                            <p className="text-muted">
                                Our team works closely with site managers, civil contractors, artisans and equipment
                                suppliers. Field supervision helps align electrical routes and equipment locations with the
                                building programme before finishes are applied.
                            </p>
                            <div className="mt-4">
                                {PROCESS_STEPS.map((step) => (
                                    <div className="process-row" key={step.number}>
                                        <div className="process-num">{step.number}</div>
                                        <div>
                                            <h5 className="mb-1">{step.title}</h5>
                                            <p className="text-muted small mb-0">{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-6">
                                    <div className="photo-tile">
                                        <Image src="/images/supervision-1.jpg" alt="Site supervision during construction" width={336} height={480} />
                                        <div className="photo-caption">Site Supervision</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="photo-tile">
                                        <Image src="/images/supervision-2.jpg" alt="Underground route coordination on site" width={336} height={480} />
                                        <div className="photo-caption">Route Coordination</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="photo-tile">
                                        <Image src="/images/site-team.jpg" alt="Site installation team at work" width={290} height={290} />
                                        <div className="photo-caption">Site Installation Team</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Delivery standards ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Safety, Quality &amp; Accountability</p>
                        <h2>Delivery Standards</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/safety-1.jpg" alt="Technicians working on a battery and inverter system" width={500} height={520} />
                                <div className="photo-caption">Disciplined Site Practice</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/safety-2.jpg" alt="Equipment inspection on site before installation" width={506} height={520} />
                                <div className="photo-caption">Equipment Inspection</div>
                            </div>
                        </div>
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

            <section className="cta-band">
                <div className="container position-relative text-center">
                    <h2>Work with a team that stays on site.</h2>
                    <p className="mb-4">From survey and procurement through installation, testing and handover.</p>
                    <Link href="/contact" className="btn btn-yellow btn-lg">
                        Contact Motown Electrical
                    </Link>
                </div>
            </section>
        </>
    );
}
