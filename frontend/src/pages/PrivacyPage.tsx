import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

const LAST_UPDATED = 'February 25, 2026';

export default function PrivacyPage() {
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
                        Privacy Policy
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
                        This Privacy Policy describes the information practices of Quindore Holdings LLC ("the Company," "we," "us," or "our") with respect to this website (quindore.com). This website is operated for informational purposes only and does not facilitate consumer transactions, user registrations, or the collection of personal data for commercial purposes.
                    </p>

                    <h2>1. Scope of This Policy</h2>
                    <p>
                        This Privacy Policy applies solely to information collected through this website. It does not apply to information collected by subsidiaries or operating platforms of Quindore Holdings LLC, which maintain their own privacy policies in accordance with their respective operations and applicable law.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>
                        This website does not collect personal information through forms, registrations, or user accounts. The only information that may be collected is:
                    </p>
                    <ul>
                        <li>Standard server log data, including IP addresses, browser type, referring URLs, and pages visited, collected automatically by web hosting infrastructure.</li>
                        <li>Information voluntarily submitted via email correspondence directed to info@quindore.com.</li>
                    </ul>
                    <p>
                        We do not collect payment information, financial data, or sensitive personal information through this website.
                    </p>

                    <h2>3. Use of Cookies</h2>
                    <p>
                        This website may use minimal technical cookies necessary for the proper functioning of the site. We do not use tracking cookies, advertising cookies, or third-party analytics cookies that collect personal information for commercial purposes. Any cookies used are limited to those required for basic site functionality.
                    </p>

                    <h2>4. Third-Party Services</h2>
                    <p>
                        This website may be hosted on or utilize infrastructure provided by third-party service providers. These providers may have access to server log data in the ordinary course of providing hosting and infrastructure services. We do not share personal information with third parties for marketing or advertising purposes.
                    </p>
                    <p>
                        Links to external websites, if any, are provided for informational purposes only. Quindore Holdings LLC is not responsible for the privacy practices of external websites.
                    </p>

                    <h2>5. Data Retention</h2>
                    <p>
                        Server log data is retained for the period necessary for security and operational purposes, after which it is deleted or anonymized. Email correspondence is retained for the period necessary to respond to and document the inquiry.
                    </p>

                    <h2>6. Your Rights</h2>
                    <p>
                        To the extent applicable under law, you may have rights with respect to personal information we hold about you, including the right to access, correct, or request deletion of such information. To exercise any such rights, please contact us at the address below.
                    </p>

                    <h2>7. Contact for Privacy Inquiries</h2>
                    <p>
                        For questions or concerns regarding this Privacy Policy or our information practices, please contact:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:info@quindore.com" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>info@quindore.com</a></li>
                        <li>Mailing Address: 5830 E 2nd St, Ste 7000 #32674, Casper, WY 82609, United States</li>
                    </ul>

                    <h2>8. Governing Law</h2>
                    <p>
                        This Privacy Policy is governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any disputes arising under this policy shall be subject to the exclusive jurisdiction of the courts of the State of Wyoming.
                    </p>

                    <h2>9. Changes to This Policy</h2>
                    <p>
                        We reserve the right to update this Privacy Policy at any time. Changes will be reflected by updating the "Last Updated" date at the top of this page. Continued use of this website following any changes constitutes acceptance of the revised policy.
                    </p>
                </div>
            </div>
        </div>
    );
}
