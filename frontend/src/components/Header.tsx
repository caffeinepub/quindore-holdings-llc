import { useState, useEffect } from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const isHome = router.state.location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [router.state.location.pathname]);

    const handleAnchorNav = (anchor: string) => {
        setMenuOpen(false);
        if (isHome) {
            const el = document.getElementById(anchor);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.navigate({ to: '/' }).then(() => {
                setTimeout(() => {
                    const el = document.getElementById(anchor);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            });
        }
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: scrolled ? 'rgba(11, 11, 11, 0.97)' : 'rgba(11, 11, 11, 0.85)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid rgba(198, 168, 94, 0.25)',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo lockup */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 flex-shrink-0"
                        aria-label="Quindore — Home"
                    >
                        <img
                            src="/assets/generated/qh-logo.dim_200x200.png"
                            alt="QH monogram — Quindore"
                            className="h-10 w-10 md:h-12 md:w-12 object-contain flex-shrink-0"
                            style={{
                                background: 'transparent',
                                mixBlendMode: 'normal',
                            }}
                        />
                        <span
                            className="font-serif font-medium tracking-wide"
                            style={{
                                color: 'var(--color-text)',
                                fontSize: '1.0625rem',
                                letterSpacing: '0.08em',
                            }}
                        >
                            QUINDORE
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
                        <button
                            onClick={() => handleAnchorNav('about')}
                            className="nav-link bg-transparent border-0 cursor-pointer"
                        >
                            About
                        </button>
                        <Link to="/structure" className="nav-link">
                            Structure
                        </Link>
                        <Link to="/governance" className="nav-link">
                            Governance
                        </Link>
                        <button
                            onClick={() => handleAnchorNav('contact')}
                            className="btn-gold-outline text-xs py-2 px-5 min-h-[44px]"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex items-center justify-center w-11 h-11"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen
                            ? <X size={20} style={{ color: 'var(--color-gold)' }} />
                            : <Menu size={20} style={{ color: 'var(--color-text-muted)' }} />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="md:hidden border-t"
                    style={{
                        backgroundColor: 'rgba(11, 11, 11, 0.98)',
                        borderTopColor: 'var(--color-border)',
                    }}
                >
                    <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
                        <button
                            onClick={() => handleAnchorNav('about')}
                            className="nav-link bg-transparent border-0 cursor-pointer text-left w-full py-3"
                        >
                            About
                        </button>
                        <div className="gold-divider-full opacity-10" />
                        <Link
                            to="/structure"
                            className="nav-link py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            Corporate Structure
                        </Link>
                        <div className="gold-divider-full opacity-10" />
                        <Link
                            to="/governance"
                            className="nav-link py-3"
                            onClick={() => setMenuOpen(false)}
                        >
                            Executive Governance
                        </Link>
                        <div className="gold-divider-full opacity-10" />
                        <button
                            onClick={() => handleAnchorNav('contact')}
                            className="nav-link bg-transparent border-0 cursor-pointer text-left w-full py-3"
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
