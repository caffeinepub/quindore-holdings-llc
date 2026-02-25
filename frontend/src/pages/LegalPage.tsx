import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

const LAST_UPDATED = 'February 25, 2026';

export default function LegalPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '6rem' }}>
            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
                {/* Back link */}
                <div className="mb-10">
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

                {/* Header */}
                <div className="mb-12">
                    <span className="section-label">Legal Documentation</span>
                    <h1
                        className="font-serif mb-4"
                        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, color: 'var(--color-text)' }}
                    >
                        Legal Disclaimer
                    </h1>
                    <p
                        className="font-sans"
                        style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', letterSpacing: '0.04em' }}
                    >
                        Last Updated: {LAST_UPDATED}
                    </p>
                    <div className="gold-divider-full mt-6" />
                </div>

                {/* Content */}
                <div className="legal-content">
                    <p>
                        The following disclaimers apply to all content published on this website (quindore.com) and to all representations made by or on behalf of Quindore Holdings LLC ("the Company"). Please read these disclaimers carefully before relying on any information contained on this Site.
                    </p>

                    <h2>1. Informational Purpose Only</h2>
                    <p>
                        This website is operated exclusively for informational purposes. All content published on this Site is intended to provide general information about the corporate structure, governance, and operations of Quindore Holdings LLC. Nothing on this Site constitutes legal, financial, investment, tax, or professional advice of any kind.
                    </p>
                    <p>
                        The information provided on this Site should not be relied upon as a substitute for consultation with qualified legal, financial, or other professional advisors. Quindore Holdings LLC expressly disclaims any responsibility for actions taken or not taken based on information contained on this Site.
                    </p>

                    <h2>2. Not a Financial Advisor or Investment Firm</h2>
                    <p>
                        Quindore Holdings LLC is not a registered investment advisor, broker-dealer, financial planner, or investment company under applicable U.S. federal or state securities laws. The Company does not provide investment advice, manage client assets, or solicit investments from the public.
                    </p>
                    <p>
                        No content on this Site constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation with respect to any security, investment product, or financial instrument. Any reference to financial matters on this Site is for general informational purposes only.
                    </p>

                    <h2>3. No Consumer Transactions at This Domain</h2>
                    <p>
                        This domain does not process consumer transactions directly. Quindore Holdings LLC does not sell goods or services to consumers through this website. Any commercial activities conducted by subsidiaries or operating platforms within the corporate portfolio are conducted through those entities' own websites, platforms, and trade names, subject to their own terms and conditions.
                    </p>

                    <h2>4. Subsidiary Independence</h2>
                    <p>
                        Each subsidiary of Quindore Holdings LLC is a legally distinct entity with its own legal identity, management structure, and operational responsibilities. The existence of a parent-subsidiary relationship does not create liability of the parent entity for the obligations of any subsidiary, except as expressly provided by applicable law.
                    </p>
                    <p>
                        References to subsidiaries or operating platforms on this Site are for structural and informational purposes only. Consumers and counterparties dealing with subsidiaries or their operating platforms should direct inquiries to those entities directly.
                    </p>

                    <h2>5. Accuracy of Information</h2>
                    <p>
                        While the Company endeavors to ensure that information on this Site is accurate and current, no representation or warranty is made as to the accuracy, completeness, or timeliness of any information. The Company reserves the right to update, modify, or remove information from this Site at any time without notice.
                    </p>

                    <h2>6. No Liability</h2>
                    <p>
                        To the fullest extent permitted by applicable law, Quindore Holdings LLC disclaims all liability for any loss, damage, or expense arising directly or indirectly from access to or use of this Site or reliance on any information contained herein. This disclaimer applies to all forms of loss or damage, including but not limited to direct, indirect, incidental, consequential, and punitive damages.
                    </p>

                    <h2>7. Governing Law</h2>
                    <p>
                        This Legal Disclaimer is governed by the laws of the State of Wyoming, United States. Any disputes arising in connection with this disclaimer shall be subject to the exclusive jurisdiction of the courts of the State of Wyoming.
                    </p>

                    <h2>8. Contact</h2>
                    <p>
                        For legal inquiries, please contact:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:info@quindore.com" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>info@quindore.com</a></li>
                        <li>Mailing Address: 5830 E 2nd St, Ste 7000 #32674, Casper, WY 82609, United States</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
