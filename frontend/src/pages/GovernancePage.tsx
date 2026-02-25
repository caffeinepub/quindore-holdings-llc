import { useState, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

const sections = [
    {
        id: 'oversight',
        label: 'Board-Level Oversight',
        title: 'Executive Oversight Framework',
        content: [
            'Quindore Holdings LLC maintains a defined executive oversight structure responsible for the strategic direction and governance of the entire corporate portfolio. Oversight authority is vested at the holding company level and exercised through formal governance mechanisms applicable to all subsidiaries.',
            'The oversight function encompasses the approval of material strategic decisions, the establishment of governance policies, the review of financial performance across the portfolio, and the management of significant risks. All subsidiaries are required to operate within the parameters established by the holding company\'s governance framework.',
            'Executive oversight includes the authority to appoint, supervise, and remove management at the subsidiary level, ensuring alignment between subsidiary operations and the strategic objectives of the holding company. This authority is exercised in accordance with applicable corporate law and the organizational documents of each entity.',
        ],
    },
    {
        id: 'audit',
        label: 'Audit & Compliance',
        title: 'Internal Audit & Compliance Function',
        content: [
            'The internal audit and compliance function of Quindore Holdings LLC is responsible for the ongoing assessment of compliance with applicable laws, regulations, and internal policies across the corporate portfolio. This function operates with independence from operational management to ensure objectivity in its assessments.',
            'Compliance obligations are monitored at both the holding company and subsidiary levels. Each subsidiary is required to maintain compliance with the regulatory requirements applicable to its specific operations, including any industry-specific regulations, data protection obligations, and financial services requirements.',
            'Internal audit activities include periodic reviews of financial controls, operational procedures, and compliance documentation. Findings are reported to the holding company\'s governance function, and remediation of identified deficiencies is tracked to completion. The compliance framework is reviewed and updated on a regular basis to reflect changes in applicable law and regulatory guidance.',
        ],
    },
    {
        id: 'risk',
        label: 'Risk Management',
        title: 'Risk Management Framework',
        content: [
            'Quindore Holdings LLC maintains a formal risk management framework applicable to all entities within the corporate structure. The framework identifies, assesses, and manages risks across financial, operational, regulatory, and reputational dimensions.',
            'Risk identification is conducted at both the portfolio level and the individual subsidiary level. Material risks are escalated to the holding company\'s governance function for review and determination of appropriate mitigation measures. Risk appetite and tolerance thresholds are established at the holding company level and communicated to all subsidiaries.',
            'The risk management framework includes provisions for business continuity, counterparty risk assessment, and the management of risks associated with payment processing and financial services activities conducted by subsidiaries. All subsidiaries are required to maintain risk management practices consistent with the standards established by the holding company.',
        ],
    },
    {
        id: 'reporting',
        label: 'Reporting Obligations',
        title: 'Financial & Regulatory Reporting',
        content: [
            'Quindore Holdings LLC maintains a consolidated financial reporting structure that encompasses all entities within the corporate portfolio. Financial reporting obligations are managed at the holding company level, with each subsidiary required to provide accurate and timely financial information in accordance with established reporting schedules.',
            'Regulatory reporting obligations applicable to the holding company and its subsidiaries are identified, tracked, and fulfilled in accordance with applicable law. This includes any reporting requirements arising from the jurisdictions in which subsidiaries operate, as well as federal reporting obligations applicable to the holding company.',
            'The holding company maintains records of all material corporate transactions, governance decisions, and compliance activities. These records are retained in accordance with applicable record-keeping requirements and are available for review by authorized parties, including regulatory authorities, financial institutions, and auditors, as required by law or contract.',
        ],
    },
];

export default function GovernancePage() {
    const [activeSection, setActiveSection] = useState('oversight');
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
            pageRef.current?.querySelectorAll('.fade-in-section').forEach((el, i) => {
                setTimeout(() => el.classList.add('is-visible'), i * 80);
            });
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 140 && rect.bottom > 140) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div ref={pageRef} style={{ paddingTop: '6rem' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Back link */}
                <div className="fade-in-section py-8">
                    <Link
                        to="/"
                        className="font-sans inline-flex items-center gap-2"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.8125rem',
                            textDecoration: 'none',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    >
                        <ArrowLeft size={14} />
                        Return to Home
                    </Link>
                </div>

                {/* Page header */}
                <div className="fade-in-section mb-16 pb-10" style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <span className="section-label">Corporate Governance</span>
                    <h1
                        className="font-serif mb-4"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 500,
                            color: 'var(--color-text)',
                        }}
                    >
                        Executive Governance
                    </h1>
                    <p
                        className="font-sans"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.9375rem',
                            lineHeight: 1.8,
                            maxWidth: '42rem',
                        }}
                    >
                        The following documentation outlines the governance framework maintained by Quindore Holdings LLC across its corporate structure. This framework governs the conduct of all entities within the portfolio.
                    </p>
                </div>

                {/* Two-column editorial layout */}
                <div className="flex gap-16 pb-24">
                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                        {sections.map((section, idx) => (
                            <div key={section.id}>
                                <article
                                    id={section.id}
                                    className="fade-in-section"
                                    style={{
                                        paddingTop: idx === 0 ? '0' : '5rem',
                                        paddingBottom: '5rem',
                                        borderBottom: idx < sections.length - 1 ? '1px solid var(--color-border)' : 'none',
                                    }}
                                >
                                    <span className="section-label">{section.label}</span>
                                    <h2
                                        className="font-serif mb-8"
                                        style={{
                                            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                                            fontWeight: 500,
                                            color: 'var(--color-text)',
                                        }}
                                    >
                                        {section.title}
                                    </h2>
                                    <div className="space-y-5">
                                        {section.content.map((para, i) => (
                                            <p
                                                key={i}
                                                className="font-sans"
                                                style={{
                                                    color: 'var(--color-text-muted)',
                                                    fontSize: '0.9375rem',
                                                    lineHeight: 1.85,
                                                }}
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>

                    {/* Sticky in-page navigation — desktop only */}
                    <aside
                        className="hidden lg:block flex-shrink-0"
                        style={{ width: '220px' }}
                    >
                        <div
                            className="sticky"
                            style={{ top: '7rem' }}
                        >
                            <span
                                className="font-sans block mb-5"
                                style={{
                                    fontSize: '0.6875rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.16em',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gold)',
                                }}
                            >
                                On This Page
                            </span>
                            <nav className="flex flex-col gap-1" aria-label="In-page navigation">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="font-sans text-left bg-transparent border-0 cursor-pointer py-2 px-3 transition-all duration-200"
                                        style={{
                                            fontSize: '0.8125rem',
                                            color: activeSection === section.id ? 'var(--color-gold)' : 'var(--color-text-muted)',
                                            borderLeft: activeSection === section.id
                                                ? '2px solid var(--color-gold)'
                                                : '2px solid transparent',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {section.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
