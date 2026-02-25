import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export default function StructurePage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
            pageRef.current?.querySelectorAll('.fade-in-section').forEach((el, i) => {
                setTimeout(() => el.classList.add('is-visible'), i * 100);
            });
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={pageRef} className="section-padding" style={{ paddingTop: '8rem' }}>
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Back link */}
                <div className="fade-in-section mb-12">
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
                <div className="fade-in-section mb-16">
                    <span className="section-label">Corporate Architecture</span>
                    <h1
                        className="font-serif mb-6"
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 500,
                            color: 'var(--color-text)',
                        }}
                    >
                        Corporate Structure
                    </h1>
                    <div className="gold-divider-full mb-8" />
                    <p
                        className="font-sans"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '0.9375rem',
                            lineHeight: 1.8,
                            maxWidth: '42rem',
                        }}
                    >
                        The following diagram illustrates the hierarchical ownership and governance structure of Quindore Holdings LLC and its controlled subsidiaries. Each tier represents a distinct level of legal and operational authority within the corporate framework.
                    </p>
                </div>

                {/* Hierarchy diagram */}
                <div
                    className="fade-in-section overflow-x-auto"
                    style={{ paddingBottom: '2rem' }}
                >
                    <div style={{ minWidth: '480px' }}>
                        {/* Root node */}
                        <div className="flex justify-center mb-0">
                            <div
                                className="tree-node root"
                                style={{
                                    width: '280px',
                                    borderColor: 'var(--color-gold)',
                                    borderWidth: '1px',
                                }}
                            >
                                <span
                                    className="font-sans block mb-1"
                                    style={{
                                        fontSize: '0.6rem',
                                        letterSpacing: '0.16em',
                                        textTransform: 'uppercase',
                                        color: 'var(--color-gold)',
                                    }}
                                >
                                    Parent Holding Entity
                                </span>
                                <span
                                    className="font-serif block"
                                    style={{ fontSize: '0.9375rem', color: 'var(--color-text)', fontWeight: 500 }}
                                >
                                    Quindore Holdings LLC
                                </span>
                                <span
                                    className="font-sans block mt-1"
                                    style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}
                                >
                                    Wyoming, United States
                                </span>
                            </div>
                        </div>

                        {/* Connector down */}
                        <div className="flex justify-center">
                            <div className="tree-connector" style={{ height: '2.5rem' }} />
                        </div>

                        {/* Horizontal connector bar */}
                        <div className="relative flex justify-center">
                            <div
                                className="tree-connector-h"
                                style={{ width: '60%', position: 'absolute', top: 0 }}
                            />
                        </div>

                        {/* Subsidiary row */}
                        <div className="grid grid-cols-2 gap-6 mt-0 relative">
                            {/* Left vertical connector */}
                            <div className="flex justify-center">
                                <div className="tree-connector" style={{ height: '2.5rem' }} />
                            </div>
                            {/* Right vertical connector */}
                            <div className="flex justify-center">
                                <div className="tree-connector" style={{ height: '2.5rem' }} />
                            </div>
                        </div>

                        {/* Subsidiary nodes */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Subsidiary A', desc: 'Digital Operating Entity' },
                                { label: 'Subsidiary B', desc: 'Digital Operating Entity' },
                            ].map((sub) => (
                                <div key={sub.label} className="flex flex-col items-center">
                                    <div
                                        className="tree-node w-full"
                                        style={{ borderColor: 'var(--color-gold)', opacity: 0.85 }}
                                    >
                                        <span
                                            className="font-sans block mb-1"
                                            style={{
                                                fontSize: '0.6rem',
                                                letterSpacing: '0.14em',
                                                textTransform: 'uppercase',
                                                color: 'var(--color-gold)',
                                            }}
                                        >
                                            Controlled Subsidiary
                                        </span>
                                        <span
                                            className="font-serif block"
                                            style={{ fontSize: '0.875rem', color: 'var(--color-text)', fontWeight: 500 }}
                                        >
                                            {sub.label}
                                        </span>
                                        <span
                                            className="font-sans block mt-1"
                                            style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}
                                        >
                                            {sub.desc}
                                        </span>
                                    </div>

                                    {/* Connector to platforms */}
                                    <div className="tree-connector" style={{ height: '2rem' }} />

                                    {/* Platform nodes */}
                                    <div className="grid grid-cols-2 gap-3 w-full">
                                        {['Platform I', 'Platform II'].map((platform) => (
                                            <div
                                                key={platform}
                                                className="tree-node"
                                                style={{
                                                    borderColor: 'var(--color-border)',
                                                    opacity: 0.7,
                                                    padding: '0.625rem 0.75rem',
                                                }}
                                            >
                                                <span
                                                    className="font-sans block mb-0.5"
                                                    style={{
                                                        fontSize: '0.55rem',
                                                        letterSpacing: '0.12em',
                                                        textTransform: 'uppercase',
                                                        color: 'var(--color-gold)',
                                                        opacity: 0.8,
                                                    }}
                                                >
                                                    Operating Platform
                                                </span>
                                                <span
                                                    className="font-sans block"
                                                    style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}
                                                >
                                                    {platform}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trade name note */}
                        <div
                            className="mt-10 p-5"
                            style={{
                                borderLeft: '2px solid var(--color-gold)',
                                backgroundColor: 'var(--color-surface)',
                            }}
                        >
                            <p
                                className="font-sans"
                                style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', lineHeight: 1.7 }}
                            >
                                <span style={{ color: 'var(--color-gold)', fontWeight: 500 }}>Note: </span>
                                Operating platforms and subsidiaries may conduct business under registered trade names. All such entities remain subject to the governance and compliance framework of Quindore Holdings LLC.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Structural notes */}
                <div className="fade-in-section mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            label: 'Ownership',
                            text: 'All subsidiaries are wholly or majority owned by Quindore Holdings LLC.',
                        },
                        {
                            label: 'Governance',
                            text: 'Strategic and compliance oversight flows from the parent entity to all subsidiaries.',
                        },
                        {
                            label: 'Operations',
                            text: 'Day-to-day operations are conducted at the subsidiary and platform level.',
                        },
                    ].map((note) => (
                        <div
                            key={note.label}
                            style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}
                        >
                            <span
                                className="font-sans block mb-2"
                                style={{
                                    fontSize: '0.6875rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gold)',
                                }}
                            >
                                {note.label}
                            </span>
                            <p
                                className="font-sans"
                                style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}
                            >
                                {note.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
