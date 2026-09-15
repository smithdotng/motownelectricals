export type GalleryCategorySlug =
    | 'installation'
    | 'structural'
    | 'transformer'
    | 'panels'
    | 'groundworks'
    | 'supervision';

export interface GalleryCategory {
    slug: GalleryCategorySlug;
    label: string;
    description: string;
}

export interface GalleryItem {
    src: string;
    width: number;
    height: number;
    caption: string;
    category: GalleryCategorySlug;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
    {
        slug: 'installation',
        label: 'Site Installation & First Fix',
        description:
            'Containment, conduit, chasing, recessed boxes, circuit wiring and final terminations.'
    },
    {
        slug: 'structural',
        label: 'Slab & Structural Coordination',
        description:
            'Set-out and route coordination on the reinforcement deck, before the pour.'
    },
    {
        slug: 'transformer',
        label: 'Transformer & HV Works',
        description:
            'Transformer delivery, positioning, pole-top connections and energisation support.'
    },
    {
        slug: 'panels',
        label: 'Panels, Inverters & Distribution',
        description:
            'Distribution boards, switchgear, metering kiosks, inverters and battery systems.'
    },
    {
        slug: 'groundworks',
        label: 'Cable Routing & Groundworks',
        description:
            'Trenching, underground routes, cable pulling, jointing and reinstatement.'
    },
    {
        slug: 'supervision',
        label: 'Supervision & Testing',
        description:
            'Site coordination, progress reviews, inspection and equipment testing.'
    },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    // installation
    { src: '/images/gallery/first-fix-door-wiring.jpg', width: 1080, height: 864, caption: 'Final circuit wiring at a door position', category: 'installation' },
    { src: '/images/gallery/recessed-box-setout.jpg', width: 1280, height: 854, caption: 'Setting out a recessed box on chased blockwork', category: 'installation' },
    { src: '/images/gallery/wall-box-termination.jpg', width: 1280, height: 854, caption: 'Terminating wall boxes on a new circuit', category: 'installation' },
    { src: '/images/gallery/first-fix-platform.jpg', width: 549, height: 1280, caption: 'Interior wall installation from a work platform', category: 'installation' },
    { src: '/images/gallery/socket-termination.jpg', width: 1280, height: 959, caption: 'Socket outlet termination in a finished room', category: 'installation' },
    { src: '/images/gallery/chased-cable-runs.jpg', width: 1280, height: 1024, caption: 'Chased cable runs ready for conduit and boxes', category: 'installation' },
    { src: '/images/gallery/conduit-drop.jpg', width: 959, height: 1280, caption: 'Vertical conduit drop on blockwork', category: 'installation' },
    { src: '/images/gallery/first-fix-ladders.jpg', width: 816, height: 612, caption: 'Ladder work during first fix', category: 'installation' },
    { src: '/images/gallery/containment-column.jpg', width: 612, height: 816, caption: 'Containment routed at a structural column', category: 'installation' },
    { src: '/images/gallery/wall-chasing.jpg', width: 612, height: 816, caption: 'Chasing a wall for a new cable route', category: 'installation' },
    { src: '/images/gallery/wall-install-ladder.jpg', width: 1080, height: 864, caption: 'Wall installation from a step ladder', category: 'installation' },
    { src: '/images/gallery/two-man-wiring.jpg', width: 1066, height: 1280, caption: 'Two-man wiring at a recessed box', category: 'installation' },
    { src: '/images/gallery/skirting-level-install.jpg', width: 1280, height: 960, caption: 'Wall and skirting-level installation', category: 'installation' },
    { src: '/images/gallery/circuit-wiring-wall.jpg', width: 1066, height: 1280, caption: 'Circuit wiring on a chased wall', category: 'installation' },
    { src: '/images/gallery/conduit-box-detail.jpg', width: 810, height: 1080, caption: 'Recessed conduit and box detail before plastering', category: 'installation' },
    { src: '/images/gallery/cable-pulling.jpg', width: 1066, height: 1280, caption: 'Cable pulling at first-fix stage', category: 'installation' },
    // structural
    { src: '/images/gallery/site-walk.jpg', width: 1040, height: 780, caption: 'Site walk during structural works', category: 'structural' },
    { src: '/images/gallery/slab-setout.jpg', width: 590, height: 1280, caption: 'Electrical set-out on a reinforced slab', category: 'structural' },
    { src: '/images/gallery/pre-pour-coordination.jpg', width: 590, height: 1280, caption: 'Coordinating conduit routes before the pour', category: 'structural' },
    { src: '/images/gallery/slab-coordination.jpg', width: 1050, height: 1400, caption: 'Slab-level coordination with the building programme', category: 'structural' },
    { src: '/images/gallery/rebar-marking.jpg', width: 1024, height: 768, caption: 'Marking service routes on the reinforcement deck', category: 'structural' },
    { src: '/images/gallery/deck-conduit-setout.jpg', width: 816, height: 612, caption: 'Crew setting out conduit across the deck', category: 'structural' },
    { src: '/images/gallery/slab-works.jpg', width: 816, height: 612, caption: 'Slab works alongside the main structure', category: 'structural' },
    // transformer
    { src: '/images/gallery/transformer-panels.jpg', width: 780, height: 894, caption: 'Installed transformer with control and metering panels', category: 'transformer' },
    { src: '/images/gallery/transformer-delivery.jpg', width: 960, height: 1280, caption: 'New transformer delivered and positioned on its plinth', category: 'transformer' },
    { src: '/images/gallery/hv-riser.jpg', width: 780, height: 1040, caption: 'High-voltage riser and pole-top connections', category: 'transformer' },
    { src: '/images/gallery/transformer-plinth.jpg', width: 960, height: 1280, caption: 'Transformer set on a prepared plinth', category: 'transformer' },
    { src: '/images/gallery/pole-transformer.jpg', width: 720, height: 1280, caption: 'Pole-mounted transformer installation', category: 'transformer' },
    { src: '/images/gallery/transformer-site.jpg', width: 960, height: 1280, caption: 'Transformer, panels and cable runs on site', category: 'transformer' },
    { src: '/images/gallery/pole-transformer-urban.jpg', width: 959, height: 1280, caption: 'Pole-mounted transformer in a built-up area', category: 'transformer' },
    // panels
    { src: '/images/gallery/enclosure-fitout.jpg', width: 549, height: 1280, caption: 'Fitting out a distribution enclosure', category: 'panels' },
    { src: '/images/gallery/mccb-board.jpg', width: 756, height: 1008, caption: 'Moulded-case circuit breakers on a new board', category: 'panels' },
    { src: '/images/gallery/enclosure-positioning.jpg', width: 549, height: 1280, caption: 'Positioning a distribution enclosure', category: 'panels' },
    { src: '/images/gallery/inverter-battery-commissioning.jpg', width: 959, height: 1280, caption: 'Solar inverter and battery bank commissioning', category: 'panels' },
    { src: '/images/gallery/outdoor-cabinet.jpg', width: 780, height: 1040, caption: 'Outdoor distribution cabinet installation', category: 'panels' },
    { src: '/images/gallery/switchgear-positioning.jpg', width: 1040, height: 780, caption: 'Positioning a switchgear cabinet', category: 'panels' },
    { src: '/images/gallery/panel-wiring.jpg', width: 780, height: 1040, caption: 'Wiring and labelling a distribution panel', category: 'panels' },
    { src: '/images/gallery/inverter-mppt-array.jpg', width: 607, height: 1080, caption: 'Dual inverters with MPPT controllers and surge protection', category: 'panels' },
    { src: '/images/gallery/metering-kiosk.jpg', width: 810, height: 1080, caption: 'Metering kiosk panel installation', category: 'panels' },
    // groundworks
    { src: '/images/gallery/cable-trench.jpg', width: 768, height: 1024, caption: 'Cable trench alongside a new building', category: 'groundworks' },
    { src: '/images/gallery/cable-pull-road.jpg', width: 959, height: 1280, caption: 'Pulling service cable across the access road', category: 'groundworks' },
    { src: '/images/gallery/ground-cable-route.jpg', width: 768, height: 1024, caption: 'Crew working a cable route at ground level', category: 'groundworks' },
    { src: '/images/gallery/cable-laying.jpg', width: 810, height: 1080, caption: 'Laying cable in an excavated route', category: 'groundworks' },
    { src: '/images/gallery/cable-jointing.jpg', width: 810, height: 1080, caption: 'Jointing and bedding cable in the trench', category: 'groundworks' },
    { src: '/images/gallery/cable-drum.jpg', width: 1040, height: 780, caption: 'Running cable from the drum on site', category: 'groundworks' },
    // supervision
    { src: '/images/gallery/site-coordination.jpg', width: 768, height: 1024, caption: 'Site coordination with the building team', category: 'supervision' },
    { src: '/images/gallery/work-review.jpg', width: 768, height: 1024, caption: 'Reviewing installed work on site', category: 'supervision' },
    { src: '/images/gallery/factory-testing.jpg', width: 1066, height: 1280, caption: 'Equipment testing at the manufacturer\'s facility', category: 'supervision' },
    { src: '/images/gallery/client-walkthrough.jpg', width: 768, height: 1024, caption: 'Discussing progress with the client on site', category: 'supervision' },
];

export const GALLERY_COUNT = GALLERY_ITEMS.length;
