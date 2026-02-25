import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

const LAST_UPDATED = 'February 25, 2026';

export default function TermsPage() {
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
                        Terms of Service
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
                        These Terms of Service ("Terms") govern your access to and use of the website located at quindore.com (the "Site"), operated by Quindore Holdings LLC ("the Company," "we," "us," or "our"), a limited liability company registered in the State of Wyoming, United States. By accessing or using this Site, you agree to be bound by these Terms.
                    </p>

                    <h2>1. Informational Purpose</h2>
                    <p>
                        This Site is operated solely for informational purposes. It provides general information about Quindore Holdings LLC and its corporate structure. The Site does not facilitate commercial transactions, user registrations, subscriptions, or the purchase or sale of any goods or services. Nothing on this Site constitutes an offer to sell or a solicitation of an offer to buy any security, investment product, or financial instrument.
                    </p>

                    <h2>2. No Warranties</h2>
                    <p>
                        The information provided on this Site is offered on an "as is" and "as available" basis without warranties of any kind, either express or implied. The Company makes no representations or warranties regarding the accuracy, completeness, timeliness, or reliability of any information on the Site. The Company expressly disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p>

                    <h2>3. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by applicable law, Quindore Holdings LLC, its members, managers, officers, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your access to or use of, or inability to access or use, this Site or any content thereon. This limitation applies regardless of the legal theory on which the claim is based.
                    </p>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content on this Site, including but not limited to text, graphics, logos, and design elements, is the property of Quindore Holdings LLC or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content on this Site without the prior written consent of the Company.
                    </p>
                    <p>
                        The name "Quindore Holdings LLC," the "Q" monogram, and any associated trade names are proprietary to the Company. Unauthorized use of these marks is prohibited.
                    </p>

                    <h2>5. Third-Party Links</h2>
                    <p>
                        This Site may contain links to third-party websites for informational purposes only. The Company does not endorse, control, or assume responsibility for the content, privacy practices, or terms of any third-party website. Access to third-party websites is at your own risk.
                    </p>

                    <h2>6. Modifications</h2>
                    <p>
                        The Company reserves the right to modify, suspend, or discontinue this Site or these Terms at any time without notice. Continued use of the Site following any modification to these Terms constitutes your acceptance of the revised Terms.
                    </p>

                    <h2>7. Governing Law & Jurisdiction</h2>
                    <p>
                        These Terms are governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or your use of this Site shall be subject to the exclusive jurisdiction of the state and federal courts located in the State of Wyoming.
                    </p>

                    <h2>8. Contact</h2>
                    <p>
                        For legal inquiries regarding these Terms, please contact:
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
