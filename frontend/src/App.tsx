import { createRouter, RouterProvider, createRootRoute, createRoute, Outlet, Link } from '@tanstack/react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import OperatingStructure from './components/OperatingStructure';
import ComplianceGovernance from './components/ComplianceGovernance';
import Contact from './components/Contact';
import StructurePage from './pages/StructurePage';
import GovernancePage from './pages/GovernancePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import LegalPage from './pages/LegalPage';

// Layout component wrapping all routes
function Layout() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

// Home page — all sections
function HomePage() {
    return (
        <>
            <Hero />
            <div className="gold-divider-full" />
            <About />
            <div className="gold-divider-full" />
            <OperatingStructure />
            <div className="gold-divider-full" />
            <ComplianceGovernance />
            <div className="gold-divider-full" />
            <Contact />
        </>
    );
}

// Not found page
function NotFoundPage() {
    return (
        <div className="section-padding flex flex-col items-center justify-center text-center px-6">
            <span className="section-label">404</span>
            <h1 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: 'var(--color-text)' }}>
                Page Not Found
            </h1>
            <p className="mb-8 max-w-md" style={{ color: 'var(--color-text-muted)', fontFamily: 'Inter, sans-serif' }}>
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="btn-gold-outline">
                Return to Home
            </Link>
        </div>
    );
}

// Route definitions
const rootRoute = createRootRoute({ component: Layout });

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
});

const structureRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/structure',
    component: StructurePage,
});

const governanceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/governance',
    component: GovernancePage,
});

const privacyRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/privacy',
    component: PrivacyPage,
});

const termsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/terms',
    component: TermsPage,
});

const legalRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/legal',
    component: LegalPage,
});

const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '*',
    component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
    homeRoute,
    structureRoute,
    governanceRoute,
    privacyRoute,
    termsRoute,
    legalRoute,
    notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export default function App() {
    return <RouterProvider router={router} />;
}
