import type { Metadata, Viewport } from 'next';
import './globals.css';
import { COMPANY } from '@/lib/company';
import { SITE_URL, SITE_NAME, OG_IMAGE, ORGANISATION_JSONLD } from '@/lib/seo';

const SITE_TITLE = COMPANY.name;
const SITE_DESCRIPTION =
    'Abuja-based electrical engineering and technical services company delivering electrical installation, power distribution, transformer works, solar and backup power, testing, commissioning and maintenance.';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_TITLE} | Powering progress. Lighting lives.`,
        template: '%s | Motown Electrical'
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: [
        'electrical engineering Abuja',
        'electrical installation Nigeria',
        'transformer installation Abuja',
        'solar and inverter installation Abuja',
        'power distribution',
        'testing and commissioning',
        'Motown Electrical Services'
    ],
    alternates: { canonical: SITE_URL },
    icons: {
        icon: '/images/logo.png',
        apple: '/images/logo.png'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
    },
    openGraph: {
        type: 'website',
        locale: 'en_NG',
        url: SITE_URL,
        siteName: SITE_NAME,
        title: `${SITE_TITLE} | Powering progress. Lighting lives.`,
        description: SITE_DESCRIPTION,
        images: [OG_IMAGE]
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SITE_TITLE} | Powering progress. Lighting lives.`,
        description: SITE_DESCRIPTION,
        images: [OG_IMAGE.url]
    }
};

export const viewport: Viewport = {
    themeColor: '#07184a'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-NG">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANISATION_JSONLD) }}
                />
            </head>
            <body>
                {children}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js" async />
            </body>
        </html>
    );
}
