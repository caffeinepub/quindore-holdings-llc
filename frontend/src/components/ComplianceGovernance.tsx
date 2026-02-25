import { useEffect, useRef } from 'react';

const items = [
    {
        label: 'Regulatory Framework',
        title: 'U.S. Federal & Wyoming State Compliance',
        body: 'Quindore Holdings LLC operates in full compliance with applicable U.S. federal regulations and the laws of the State of Wyoming, under which it is registered. The company maintains awareness of and adherence to all relevant statutory and regulatory requirements governing holding company structures, financial reporting, and corporate governance.',
    },
    {
        label: 'Internal Standards',
        title: 'Compliance Policies & Procedures',
        body: 'The company maintains a formal internal compliance framework encompassing policies and procedures applicable to all subsidiaries and operating platforms. These standards address financial controls, record-keeping obligations, counterparty due diligence, and the management of regulatory risk across the portfolio.',
    },
    {
        label: 'Financial Reporting',
        title: 'Reporting Structure & Obligations',
        body: 'Financial reporting within the Quindore Holdings LLC structure follows a consolidated framework. Each subsidiary is required to maintain accurate financial records and report to the holding company in accordance with established schedules and standards. The holding company maintains consolidated oversight of all financial positions within the portfolio.',
    },
    {
        label: 'Payment Processing',
        title: 'Authorized Third-Party Providers',
        body: 'All payment processing activities conducted by subsidiaries and operating platforms are executed exclusively through authorized third-party payment service providers. Quindore Holdings LLC does not directly process, hold, or transmit consumer payment data. Payment infrastructure is managed at the subsidiary level through compliant, licensed providers.',
    },
];

export default function ComplianceGovernance() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-section').forEach((el, i) => {
                            setTimeout(() => el.classList.add('is-visible'), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="compliance" ref={sectionRef} className="section-padding" aria-label="Compliance and Governance">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section header */}
                <div className="fade-in-section mb-16 md:mb-20">
                    <span className="section-label">Regulatory & Internal Standards</span>
                    <div className="flex items-end gap-8">
                        <h2
                            className="font-serif"
                            style={{
                                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                                fontWeight: 500,
                                color: 'var(--color-text)',
                                maxWidth: '32rem',
                            }}
                        >
                            Compliance & Governance
                        </h2>
                        <div
                            className="hidden md:block flex-1 mb-3"
                            style={{ height: '1px', backgroundColor: 'var(--color-border)' }}
                        />
                    </div>
                </div>

                {/* Four-block grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {items.map((item) => (
                        <div
                            key={item.label}
                            className="fade-in-section governance-card"
                        >
                            <span
                                className="font-sans block mb-2"
                                style={{
                                    fontSize: '0.6875rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.16em',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gold)',
                                }}
                            >
                                {item.label}
                            </span>
                            <h3
                                className="font-serif mb-3"
                                style={{
                                    fontSize: '1.0625rem',
                                    fontWeight: 500,
                                    color: 'var(--color-text)',
                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="font-sans"
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Governance page link */}
                <div
                    className="fade-in-section mt-14 flex items-center gap-4"
                    style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}
                >
                    <p
                        className="font-sans"
                        style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', letterSpacing: '0.02em' }}
                    >
                        For expanded governance documentation, see the{' '}
                        <a
                            href="/governance"
                            style={{ color: 'var(--color-gold)', textDecoration: 'none', borderBottom: '1px solid var(--color-gold-dim)' }}
                        >
                            Executive Governance
                        </a>{' '}
                        page.
                    </p>
                </div>
            </div>
        </section>
    );
}
