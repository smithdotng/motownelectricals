export const COMPANY = {
    name: 'Motown Electrical Services Limited',
    shortName: 'Motown Electrical',
    tagline: 'Powering progress. Lighting lives.',
    rcNumber: '1546690',
    incorporated: '12 December 2018',
    address: '17 Mambolo Street, Wuse 2, Abuja FCT, Nigeria',
    addressShort: '17 Mambolo Street, Wuse 2, Abuja FCT',
    phone: '+234 803 932 7932',
    phoneHref: 'tel:+2348039327932',
    email: 'info@motownelectricals.com',
    emailHref: 'mailto:info@motownelectricals.com',
    website: 'motownelectricals.com',
    websiteUrl: 'https://motownelectricals.com'
};

export const SERVICES = [
    {
        slug: 'electrical-installation',
        number: '1',
        title: 'Electrical Installation',
        icon: 'fa-solid fa-plug-circle-bolt',
        image: '/images/svc-installation.jpg',
        summary: 'Complete building wiring, containment, cabling, final circuits, lighting and power outlets.',
        detail: [
            'Route planning and containment coordination from first fix',
            'Conduit, trunking and cable pathway installation',
            'Recessed box installation and circuit wiring',
            'Lighting points, socket outlets and final equipment connection'
        ]
    },
    {
        slug: 'power-distribution',
        number: '2',
        title: 'Power Distribution',
        icon: 'fa-solid fa-bolt',
        image: '/images/svc-distribution.jpg',
        summary: 'Distribution boards, panels, changeover systems, protection and load management.',
        detail: [
            'Distribution board and panel design support',
            'Manual and automatic changeover arrangements',
            'Circuit protection, metering and load balancing',
            'Labelling, schedules and handover documentation'
        ]
    },
    {
        slug: 'transformer-hv-works',
        number: '3',
        title: 'Transformer & HV Works',
        icon: 'fa-solid fa-tower-broadcast',
        image: '/images/svc-transformer.jpg',
        summary: 'Transformer installation support, cable termination, testing and associated infrastructure.',
        detail: [
            'Transformer positioning and installation support',
            'High- and low-voltage cable routing and termination',
            'Protection, metering and distribution panel integration',
            'Earthing, bonding and equipment safety checks'
        ]
    },
    {
        slug: 'solar-backup-power',
        number: '4',
        title: 'Solar & Backup Power',
        icon: 'fa-solid fa-solar-panel',
        image: '/images/svc-solar.jpg',
        summary: 'Solar PV, inverters, batteries, MPPT controllers, backup power integration and commissioning.',
        detail: [
            'Load profiling and system sizing to client requirements',
            'Solar PV arrays, inverters and battery bank installation',
            'MPPT charge controllers and protection devices',
            'Automatic changeover and commissioning'
        ]
    },
    {
        slug: 'testing-commissioning',
        number: '5',
        title: 'Testing & Commissioning',
        icon: 'fa-solid fa-clipboard-check',
        image: '/images/svc-testing.jpg',
        summary: 'Inspection, testing, troubleshooting, system verification and handover support.',
        detail: [
            'Pre-energisation inspection and continuity checks',
            'Fault finding and troubleshooting',
            'System verification against design intent',
            'Documentation, handover and operational guidance'
        ]
    },
    {
        slug: 'maintenance-support',
        number: '6',
        title: 'Maintenance & Support',
        icon: 'fa-solid fa-screwdriver-wrench',
        image: '/images/svc-maintenance.jpg',
        summary: 'Preventive and corrective maintenance, upgrades and technical after-sales support.',
        detail: [
            'Scheduled preventive maintenance visits',
            'Corrective repairs and component replacement',
            'System upgrades and capacity expansion',
            'Technical after-sales support and advisory'
        ]
    }
];

export const DELIVERY_SCOPE = [
    {
        title: 'Residential',
        icon: 'fa-solid fa-house',
        text: 'Private homes, estates and apartment developments.'
    },
    {
        title: 'Commercial',
        icon: 'fa-solid fa-building',
        text: 'Offices, hospitality, retail and mixed-use buildings.'
    },
    {
        title: 'Infrastructure',
        icon: 'fa-solid fa-tower-cell',
        text: 'Transformer and distribution support, underground routes and site power systems.'
    },
    {
        title: 'Renewable Energy',
        icon: 'fa-solid fa-sun',
        text: 'Solar, battery and inverter solutions.'
    }
];

export const CORE_VALUES = [
    {
        title: 'Safety',
        variant: 'v-navy',
        text: 'We prioritise safe work methods, appropriate protection and disciplined site practices.'
    },
    {
        title: 'Quality',
        variant: 'v-blue',
        text: 'We focus on correct materials, proper installation and tested performance.'
    },
    {
        title: 'Integrity',
        variant: 'v-cyan',
        text: 'We communicate honestly, document decisions and take responsibility for delivery.'
    },
    {
        title: 'Commitment',
        variant: 'v-yellow',
        text: 'We remain engaged through installation, commissioning and technical support.'
    }
];

export const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Survey & Review',
        text: 'Site inspection, load review and coordination with architectural and structural requirements.'
    },
    {
        number: '02',
        title: 'Planning & Procurement',
        text: 'Material schedules, equipment selection and supplier engagement.'
    },
    {
        number: '03',
        title: 'Installation & Supervision',
        text: 'On-site execution, quality checks and coordination with other trades.'
    },
    {
        number: '04',
        title: 'Testing & Handover',
        text: 'Inspection, commissioning, documentation and operational guidance.'
    }
];
