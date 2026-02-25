import { Link } from '@tanstack/react-router';

export default function Footer() {
    const year = new Date().getFullYear();
    const hostname = typeof window !== 'undefined' ? window.location.hostname : 'quindore-holdings';
    const appId = encodeURIComponent(hostname);

    return (
        <footer
            style={{
                backgroundColor: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
            }}
            aria-label="Site footer"
        >
            {/* Gold top accent */}
            <div style={{ height: '1px', backgroundColor: 'var(--color-gold)', opacity: 0.2 }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* Brand column */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/assets/generated/quindore-monogram.dim_120x120.png"
                                alt="Q monogram"
                                className="h-6 w-6 object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            <span
                                className="font-serif"
                                style={{ color: 'var(--color-text)', fontSize: '0.875rem', letterSpacing: '0.08em' }}
                            >
                                QUINDORE HOLDINGS LLC
                            </span>
                        </div>
                        <p
                            className="font-sans"
                            style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', lineHeight: 1.7 }}
                        >
                            A Wyoming-registered private holding company overseeing independent digital operating subsidiaries.
                        </p>
                    </div>

                    {/* Address column */}
                    <div>
                        <span
                            className="font-sans block mb-3"
                            style={{
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                            }}
                        >
                            Registered Address
                        </span>
                        <address
                            className="font-sans not-italic"
                            style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', lineHeight: 1.9 }}
                        >
                            5830 E 2nd St, Ste 7000 #32674<br />
                            Casper, WY 82609<br />
                            United States
                        </address>
                    </div>

                    {/* Legal links column */}
                    <div>
                        <span
                            className="font-sans block mb-3"
                            style={{
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                            }}
                        >
                            Legal
                        </span>
                        <nav className="flex flex-col gap-2" aria-label="Legal navigation">
                            {[
                                { to: '/privacy', label: 'Privacy Policy' },
                                { to: '/terms', label: 'Terms of Service' },
                                { to: '/legal', label: 'Legal Disclaimer' },
                            ].map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="font-sans"
                                    style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.8125rem',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                        minHeight: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    style={{ borderTop: '1px solid var(--color-border)' }}
                >
                    <p
                        className="font-sans"
                        style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', letterSpacing: '0.02em' }}
                    >
                        © {year} Quindore Holdings LLC. All rights reserved.
                    </p>
                    <p
                        className="font-sans"
                        style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', opacity: 0.6 }}
                    >
                        Built with{' '}
                        <span style={{ color: 'var(--color-gold)' }}>♦</span>{' '}
                        using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-gold)', textDecoration: 'none' }}
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
