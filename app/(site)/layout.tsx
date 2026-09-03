import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
        </div>
    );
}
