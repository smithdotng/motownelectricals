import type { Metadata } from 'next';
import { COMPANY } from './company';

export const SITE_URL = COMPANY.websiteUrl;
export const SITE_NAME = COMPANY.name;

export const OG_IMAGE = {
    url: '/images/og-image.jpg',
    width: 1200,
    height: 630,
    alt: "Motown Electrical Services Limited — Let's build reliable power"
};

/**
 * Builds a complete metadata object for a page: canonical URL, Open Graph
 * tags and a Twitter summary card, all sharing one title and description.
 */
export function pageMetadata({
    title,
    description,
    path,
    image = OG_IMAGE.url,
    imageAlt = OG_IMAGE.alt
}: {
    title: string;
    description: string;
    path: string;
    image?: string;
    imageAlt?: string;
}): Metadata {
    const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
    const ogTitle = path === '/' ? title : `${title} | Motown Electrical`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: 'website',
            locale: 'en_NG',
            url,
            siteName: SITE_NAME,
            title: ogTitle,
            description,
            images: [{ url: image, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: imageAlt }]
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description,
            images: [image]
        }
    };
}

/** LocalBusiness / ElectricalContractor structured data for the home page. */
export const ORGANISATION_JSONLD = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ElectricalContractor'],
    '@id': `${SITE_URL}/#organisation`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    slogan: COMPANY.tagline,
    description:
        'Abuja-based electrical engineering and technical services company delivering electrical installation, power distribution, transformer works, solar and backup power, testing, commissioning and maintenance.',
    email: [COMPANY.email, COMPANY.emailAlt],
    telephone: COMPANY.phone,
    foundingDate: '2018-12-12',
    identifier: { '@type': 'PropertyValue', name: 'RC Number', value: COMPANY.rcNumber },
    address: {
        '@type': 'PostalAddress',
        streetAddress: '17 Mambolo Street',
        addressLocality: 'Wuse 2',
        addressRegion: 'Abuja FCT',
        addressCountry: 'NG'
    },
    areaServed: { '@type': 'Country', name: 'Nigeria' },
    knowsAbout: [
        'Electrical installation',
        'Power distribution',
        'Transformer installation',
        'Solar and backup power',
        'Testing and commissioning',
        'Electrical maintenance'
    ]
};
