import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
    title: 'Projects & Portfolio',
    description:
        'Selected project activity: building electrical works, transformer and distribution infrastructure, solar and backup power, the Jahi Mall commercial project and international technical procurement.',
    path: '/projects',
    image: '/images/og-projects.jpg',
    imageAlt: 'Motown Electrical Services — projects and portfolio'
});

const ENGAGEMENT_POINTS = [
    {
        number: '1',
        title: 'Better specification control',
        text: 'Equipment can be matched more closely to project requirements.'
    },
    {
        number: '2',
        title: 'Quality visibility',
        text: 'Factory visits provide insight into production and testing processes.'
    },
    {
        number: '3',
        title: 'Supplier relationships',
        text: 'Direct communication improves response time and after-sales coordination.'
    },
    {
        number: '4',
        title: 'Procurement confidence',
        text: 'Commercial and technical terms are reviewed before commitment.'
    }
];

export default function ProjectsPage() {
    return (
        <>
            <section className="page-banner">
                <div className="container position-relative">
                    <p className="eyebrow mb-1">Selected Project Activity</p>
                    <h1>Projects &amp; Portfolio</h1>
                </div>
            </section>

            {/* ---------- Residential & commercial portfolio ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Completed Environments</p>
                        <h2>Residential &amp; Commercial Portfolio</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>

                    <div className="photo-feature mb-4">
                        <Image
                            src="/images/portfolio-facade.jpg"
                            alt="Completed building with external architectural illumination"
                            width={1046}
                            height={570}
                        />
                        <div className="photo-overlay">
                            <h3>Integrated electrical works for modern buildings</h3>
                            <p>
                                Lighting, power, air-conditioning supply, external illumination and associated electrical
                                infrastructure.
                            </p>
                        </div>
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
                                <Image src="/images/room-power.jpg" alt="Room power and air-conditioning supply" width={330} height={510} />
                                <div className="photo-caption">Room Power &amp; Air-Conditioning</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/external-lighting.jpg" alt="External and site lighting" width={330} height={510} />
                                <div className="photo-caption">External &amp; Site Lighting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Building electrical works ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Project Delivery</p>
                        <h2>Building Electrical Works &amp; Site Supervision</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/supervision-1.jpg" alt="Site supervision during construction" width={336} height={480} />
                                <div className="photo-caption">Site Supervision</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/supervision-2.jpg" alt="Underground route works" width={336} height={480} />
                                <div className="photo-caption">Underground Routes</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/supervision-3.jpg" alt="Earthing and cable trench works" width={334} height={480} />
                                <div className="photo-caption">Trench &amp; Earthing Works</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/containment.jpg" alt="Containment and cable routes" width={290} height={290} />
                                <div className="photo-caption">Containment &amp; Routes</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/final-circuit.jpg" alt="Final circuit works" width={290} height={290} />
                                <div className="photo-caption">Final Circuit Works</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-tile">
                                <Image src="/images/pole-work.jpg" alt="Pole-mounted transformer installation" width={340} height={360} />
                                <div className="photo-caption">Pole-Mounted Installation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Jahi Mall ---------- */}
            <section className="page-shell">
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">Jahi Mall Project</p>
                        <h2>Selected Commercial Project</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-lg-5">
                            <div className="photo-tile h-100">
                                <Image src="/images/jahi-gallery.jpg" alt="Jahi Mall photo gallery, Plot 902 under construction" width={500} height={699} />
                                <div className="photo-caption">Plot 902 Jahi Mall &mdash; Photo Gallery</div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="photo-tile">
                                        <Image src="/images/jahi-1.jpg" alt="Jahi Mall multi-storey development under construction" width={506} height={460} />
                                        <div className="photo-caption">Multi-Storey Development</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="photo-tile">
                                        <Image src="/images/jahi-2.jpg" alt="Jahi Mall facade during construction" width={506} height={420} />
                                        <div className="photo-caption">Facade During Construction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="callout">
                        <h4>Project Snapshot</h4>
                        <span className="rule-yellow" aria-hidden="true" />
                        <p className="text-muted mb-0">
                            The Jahi Mall photographs document a multi-storey commercial development during construction.
                            Motown&apos;s project portfolio includes electrical coordination and installation support for
                            commercial and mixed-use buildings, with emphasis on safe routing, reliable distribution and
                            maintainable systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- International procurement ---------- */}
            <section className="page-shell" style={{ background: 'var(--thm-bg-soft)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p className="section-title">China &mdash; May 2026</p>
                        <h2>International Technical &amp; Procurement Visit</h2>
                        <span className="rule-yellow center" aria-hidden="true" />
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/china-1.jpg" alt="Factory visit, high and low voltage switchgear production area" width={500} height={510} />
                                <div className="photo-caption">Factory Visit</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="photo-tile">
                                <Image src="/images/china-2.jpg" alt="Switchgear review with manufacturer" width={506} height={510} />
                                <div className="photo-caption">Switchgear Review</div>
                            </div>
                        </div>
                    </div>

                    <div className="callout mb-5">
                        <h4>Supplier Engagement and Product Review</h4>
                        <span className="rule-yellow" aria-hidden="true" />
                        <p className="text-muted">
                            The company undertook a technical and procurement visit to China in May 2026. The visit included
                            factory discussions, review of switchgear and electrical equipment, product demonstrations and
                            supplier meetings. This engagement supports informed equipment selection, quality assessment and
                            stronger procurement relationships.
                        </p>
                        <div className="row g-4 mt-1">
                            <div className="col-md-4">
                                <div className="photo-tile">
                                    <Image src="/images/equipment-testing.jpg" alt="Equipment testing at the manufacturer" width={290} height={340} />
                                    <div className="photo-caption">Equipment Testing</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="photo-tile">
                                    <Image src="/images/production-review.jpg" alt="Production line review" width={290} height={340} />
                                    <div className="photo-caption">Production Review</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="photo-tile">
                                    <Image src="/images/commercial-discussions.jpg" alt="Commercial discussions with suppliers" width={290} height={340} />
                                    <div className="photo-caption">Commercial Discussions</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 align-items-start">
                        <div className="col-lg-6">
                            <p className="section-title">Product Development &amp; Inspection</p>
                            <h3>Why International Engagement Matters</h3>
                            <span className="rule-yellow" aria-hidden="true" />
                            <p className="text-muted">
                                Direct interaction with manufacturers enables the company to compare specifications, discuss
                                custom requirements, understand production processes and evaluate technical support before
                                equipment is selected for projects.
                            </p>
                            <div className="mt-4">
                                {ENGAGEMENT_POINTS.map((point) => (
                                    <div className="process-row" key={point.number}>
                                        <div className="process-num">{point.number}</div>
                                        <div>
                                            <h5 className="mb-1">{point.title}</h5>
                                            <p className="text-muted small mb-0">{point.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-6">
                                    <div className="photo-tile">
                                        <Image src="/images/collab-1.jpg" alt="Technical collaboration with manufacturer engineers" width={336} height={510} />
                                        <div className="photo-caption" style={{ fontSize: 11 }}>Technical Collaboration</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="photo-tile">
                                        <Image src="/images/collab-2.jpg" alt="Specification discussions with suppliers" width={336} height={510} />
                                        <div className="photo-caption" style={{ fontSize: 11 }}>Specification Review</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="photo-tile">
                                        <Image src="/images/collab-3.jpg" alt="Product inspection at the factory" width={334} height={510} />
                                        <div className="photo-caption" style={{ fontSize: 11 }}>Product Inspection</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-band">
                <div className="container position-relative text-center">
                    <h2>Bring us your next project.</h2>
                    <p className="mb-4">Residential, commercial, infrastructure or renewable &mdash; we scope, install, test and hand over.</p>
                    <Link href="/contact" className="btn btn-yellow btn-lg">
                        Start a conversation
                    </Link>
                </div>
            </section>
        </>
    );
}
