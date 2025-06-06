
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, ShieldCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Privacy Policy - Rally Athletes',
  description: 'Read the Rally Athletes Privacy Policy to understand how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> <ShieldCheck className="mr-2 h-4 w-4 text-primary" /> Back to Rally Athletes
            </Link>
          </Button>
        </div>

        <header className="mb-10 md:mb-12 pb-6 border-b">
          <div className="flex items-center justify-start mb-4">
             <FileText className="h-10 w-10 text-primary mr-3" />
             <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground text-sm">Last updated: June 6, 2025</p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary prose-p:text-lg prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:font-semibold">
          <p>
            Rally Athletes (“Rally Athletes,” “we,” “us,” or “our”) operates the Rally Athletes corporate site and the associated brand sites—ScoutMe Sports, My Team Dashboard, and Fuel My Game—collectively referred to as the “Service.” We respect your privacy and are committed to protecting the personal information you provide while using our Service. This Privacy Policy explains how we collect, use, share, and safeguard your information, and describes your rights regarding that information. Please read it carefully.
          </p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">1. Scope & Applicability</h2>
          <p><strong>Brands Covered</strong></p>
          <p>ScoutMe Sports: A platform where aspiring high-school (and multi-sport) athletes create public profiles, upload highlights, and connect with recruiters or coaches.</p>
          <p>Fuel My Game: A nutrition-tracking application tailored to athletes’ unique caloric and macronutrient needs, integrating with food databases and leveraging AI for personalized recommendations.</p>
          <p>My Team Dashboard: A team/club/league management platform for scheduling, communications, roster management, live scores, and facility booking.</p>
          <p><strong>Users:</strong> Athletes, parents or legal guardians of minor athletes, coaches, club administrators, recruiters, and general visitors.</p>
          <p><strong>Geographical Scope:</strong> We serve users in the United States and internationally. By using our Service, you consent to this Privacy Policy and to any applicable local privacy laws (for example, the California Consumer Privacy Act (CCPA) or the EU General Data Protection Regulation (GDPR), as detailed below).</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect information you provide directly and information collected automatically when you interact with our Service.</p>
          
          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">2.1. Information You Provide Voluntarily</h3>
          <p><strong>Account Registration & Profile Data</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Name, email address, password (hashed), phone number</li>
            <li>Mailing address, city, state, ZIP/postal code, and country (if you choose to share it)</li>
            <li>For ScoutMe Sports: Date of birth, school or club affiliations, athletic statistics (position, class year, height/weight, primary sport and multi-sport breakdown, physical metrics, GPA, academic awards, video-highlight links), social media/video platform links, personal bio or statement, photos (avatar/banner), references (max 3), commitment status, and any other data you choose to share in your profile.</li>
            <li>For Fuel My Game: Age, sex, sport(s), height, weight, dietary targets (calories, macros, hydration), food log entries, hydration entries, meal plan selections (if any), saved recipes, and preferences or dietary restrictions.</li>
            <li>For My Team Dashboard: Club/league/team name, your role (coach, administrator, parent, or athlete), roster details, player profiles (if you choose to create or manage them), schedule preferences, facility/venue details, communications settings, payment or billing information for premium services.</li>
          </ul>
          <p><strong>Interactive Features & Communications</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Messages or comments you send to other users (e.g., scouts contacting athletes, parents contacting coaches)</li>
            <li>Support inquiries submitted via contact forms or email</li>
            <li>Survey or feedback responses</li>
            <li>Video, audio, or file uploads (game footage, highlight clips, profile pictures, nutrition receipts, etc.)</li>
          </ul>
          <p><strong>Payment Information (if you purchase a subscription or upgrade)</strong></p>
          <p>Billing address, credit/debit card details, and other billing information, processed by our PCI-compliant payment processors (e.g., Stripe, PayPal). We do not store full payment card data on our servers.</p>

          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">2.2. Information Collected Automatically</h3>
          <p><strong>Usage Data</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Browser type and version, operating system, device model, device type (mobile, tablet, desktop), screen resolution, and system settings</li>
            <li>IP address (may reveal approximate location), time zone, and language settings</li>
            <li>Pages or screens viewed, time spent on each page, click-through data, navigation paths, date and time stamps, referral URLs, and other standard analytics data</li>
          </ul>
          <p><strong>Cookies & Tracking Technologies</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Strictly Necessary Cookies: Essential for core functionality—user authentication, security, and basic site navigation.</li>
            <li>Performance & Analytics Cookies: Collect anonymous data on site usage and performance to help us improve the Service. We use third-party analytics providers (e.g., Google Analytics, Firebase Analytics) that set cookies or similar identifiers.</li>
            <li>Functional Cookies: Enable features such as “remember me,” language preferences, theme toggles (light/dark mode), and user-interface customizations.</li>
            <li>Advertising & Targeting Cookies: Used to deliver relevant ads on our platforms or third-party sites. We may use vendors (e.g., Google AdSense, Facebook Pixel) that collect information about your visits and interactions over time.</li>
          </ul>
          <p>See Section 7 for more details on cookies, opt-out, and tracking settings.</p>

          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">2.3. Information from Third Parties & Publicly Available Sources</h3>
          <p><strong>Third-Party APIs & Integrations</strong></p>
          <h4 className="font-headline text-lg mt-4 mb-2">ScoutMe Sports</h4>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>UI Avatars API (generates default avatars if you don’t upload a photo)</li>
            <li>Unsplash API (provides default banner images)</li>
            <li>NWS (National Weather Service) Weather API and U.S. Census Geocoding API (for location-based weather data in athlete dashboards)</li>
            <li>College Scorecard API (for college details in the College Directory)</li>
            <li>HUDL, YouTube, Trace, Veo (mocked connections) for video hub</li>
            <li>Third-party social networks (YouTube, Instagram, X, TikTok, HUDL) for pulling link previews or feed snippets if you connect your accounts</li>
          </ul>
          <h4 className="font-headline text-lg mt-4 mb-2">Fuel My Game</h4>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>USDA FoodData Central API (for nutritional facts of raw ingredients)</li>
            <li>Open Food Facts, UPCitemdb.com (for barcode lookups of packaged foods)</li>
            <li>TheMealDB API (for recipe search by name, ingredient, category, area)</li>
            <li>Genkit AI (for personalized food recommendations)</li>
          </ul>
          <h4 className="font-headline text-lg mt-4 mb-2">My Team Dashboard</h4>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Firebase (authentication, real-time database, Firestore, hosting, storage)</li>
            <li>Firebase Cloud Messaging (for push notifications)</li>
            <li>Genkit AI (for AI-powered schedule optimization)</li>
            <li>Google Maps API (for venue locations, directions)</li>
            <li>Stripe or PayPal (for payment processing)</li>
          </ul>
          <p><strong>Social Media & Public Profiles</strong></p>
          <p>If you link your social media accounts (Instagram, YouTube, X, TikTok, HUDL), we may retrieve your public username, profile picture, and publicly available profile details to populate your ScoutMe Sports or My Team Dashboard profile.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <p><strong>Provide & Maintain the Service</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Enable core functionality: user registration, authentication, profile management, account recovery, and subscription management</li>
            <li>Facilitate brand-specific features (athlete discovery, nutrition tracking, team scheduling, communications, AI recommendations, video hosting, etc.)</li>
          </ul>
          <p><strong>Personalize Your Experience</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Customize your dashboard (recruitment checklists, AI recommendations, nutritional targets, team schedules, etc.)</li>
            <li>Provide tailored content such as relevant ID camps, recipe suggestions, team announcements, or athlete news</li>
          </ul>
          <p><strong>Customer Care & Support</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Respond to support tickets, inquiries, or feedback you submit via email or contact forms</li>
            <li>Troubleshoot technical issues and answer account-related or billing questions</li>
          </ul>
          <p><strong>Analytics & Performance Monitoring</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Analyze usage patterns, feature adoption, and performance metrics to improve UX/UI, identify trends, prioritize new features, and detect anomalies or errors</li>
            <li>Monitor uptime and server performance via Firebase Analytics, Google Analytics, or other analytics tools</li>
          </ul>
          <p><strong>AI-Driven Features & Recommendations</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Process your profile data, performance stats, food logs, and preferences to generate AI insights (e.g., “AI Quick Pitch” on ScoutMe Sports, nutrition recommendations on Fuel My Game, optimized match schedules on My Team Dashboard)</li>
            <li>Improve AI models over time through aggregated, anonymized usage data</li>
          </ul>
          <p><strong>Communications & Notifications</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Send transactional emails (account confirmations, password resets, billing receipts, subscription renewals)</li>
            <li>Send marketing or promotional communications (with your consent) regarding new features, offers, or brand updates</li>
            <li>Enable in-app and push notifications (e.g., upcoming match reminders, new scout messages, food goal reminders, team chat alerts)</li>
          </ul>
          <p><strong>Legal Compliance & Safety</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Detect and prevent fraud, spam, unauthorized access, or other malicious activity</li>
            <li>Comply with legal obligations (tax reporting, record keeping, and responding to law enforcement requests)</li>
          </ul>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">4. How We Share Your Information</h2>
          <p><strong>Within Rally Athletes</strong></p>
          <p>Your data may be shared internally among Rally Athletes, ScoutMe Sports, My Team Dashboard, and Fuel My Game teams as needed to maintain your account, provide services, and troubleshoot issues.</p>
          <p><strong>Service Providers & Third-Party Partners</strong></p>
          <p>We may share certain information with external vendors and service providers who help us deliver, maintain, or enhance our Service. For example:</p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Hosting & Infrastructure: Firebase (Google Cloud), AWS, or other cloud providers for data storage and compute resources</li>
            <li>Analytics & Monitoring: Google Analytics, Firebase Analytics, Sentry, or similar tools for usage tracking and crash reporting</li>
            <li>Payment Processors: Stripe, PayPal, or similar PCI-compliant services to handle billing, refunds, and subscription management</li>
            <li>Email & Communication: SendGrid, Mailgun, or similar services for sending transactional and marketing emails</li>
            <li>AI & Recommendation Engines: Genkit for processing AI workflows (food recommendations, schedule optimization, profile insights)</li>
            <li>Map & Geolocation: Google Maps API or Census Geocoding API for venue lookups, weather features, and location-based services</li>
            <li>Video Hosting & Transcoding: YouTube, Veo, Trace, or third-party CDNs for hosting or streaming video highlights (mocked or user-uploaded)</li>
            <li>Social Logins & Link Previews: API connections to social networks for pulling public data if you link your account</li>
          </ul>
          <p>These service providers are contractually bound to use your information only for the purposes we specify and to maintain reasonable data security practices.</p>
          <p><strong>Business Transfers</strong></p>
          <p>If Rally Athletes merges with, is acquired by, or transfers substantially all of its assets to another entity, your information may be shared or transferred to the new owner. We will notify you before such a transfer or sale and let you know any choices you may have regarding your data.</p>
          <p><strong>Legal & Safety Obligations</strong></p>
          <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., to meet national security or law enforcement requirements).</p>
          <p>We may disclose information to prevent imminent harm to the rights, property, or safety of Rally Athletes, our users, or the public, or as part of an investigation into suspected illegal activity.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">5. Data Retention</h2>
          <p><strong>Account Information & Profile Data</strong></p>
          <p>We retain your account and profile information as long as your account is active or as needed to provide you with services.</p>
          <p><strong>Transactional Records</strong></p>
          <p>Records related to your billing, payments, and subscription status are retained for at least five years or as required by applicable laws (whichever is longer).</p>
          <p><strong>Usage Data & Cookies</strong></p>
          <p>Usage data is typically retained in anonymized or aggregated form indefinitely for analytics purposes. Individual logs, crash reports, or diagnostic data may be kept for up to two years unless otherwise required. Cookies and local storage data remain on your device until you delete them or they expire.</p>
          <p><strong>Deletion or Anonymization</strong></p>
          <p>If you request account deletion (see Section 10), we will remove or anonymize your personal information from our active systems within 30 days, except for data that we are legally required to keep (e.g., financial records).</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">6. Children’s Privacy</h2>
          <p><strong>Under 13</strong></p>
          <p>ScoutMe Sports may be used by minor athletes under age 13 only with verifiable parental or legal guardian consent, in full compliance with the Children’s Online Privacy Protection Act (COPPA). We do not knowingly collect or maintain information from children under 13 on our Service without parental consent.</p>
          <p><strong>Parental Controls</strong></p>
          <p>A parent or guardian may review, edit, or delete their child’s account at any time by contacting us at privacy@rallyathletes.com.</p>
          <p><strong>Under 18 (General)</strong></p>
          <p>If you are under 18 but over 13, you may register only with a parent’s or guardian’s permission. We recommend parental supervision for any minor using our Service.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">7. Cookies & Tracking Technologies</h2>
          <p>We use cookies, web beacons, and similar tracking technologies to collect information and improve your experience.</p>
          <p><strong>What Are Cookies?</strong></p>
          <p>Cookies are small text files placed on your device by websites to remember your preferences, track usage, or maintain session state.</p>
          <p><strong>How We Use Cookies</strong></p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Authentication & Security: Keep you signed in, prevent fraudulent use of your account, and secure your session.</li>
            <li>Preferences & Functional: Remember language preference, theme (light/dark mode), and form-fill data.</li>
            <li>Analytics & Performance: Measure site performance, feature usage, and user navigation patterns via Google Analytics, Firebase Analytics, or similar tools.</li>
            <li>Personalization & Advertising: Deliver relevant content, marketing communications, or advertisements.</li>
          </ul>
          <p><strong>Third-Party Cookies</strong></p>
          <p>Third-party vendors (e.g., Google Analytics, Google AdSense, Facebook Pixel) may set cookies to provide services on our behalf. We do not have direct control over those cookies.</p>
          <p><strong>Managing Cookies</strong></p>
          <p>You can set your browser to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect essential functionality of the Service (e.g., signing in, saving preferences). To learn more about opting out of interest-based advertising, visit <Link href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">aboutads.info/choices/ <ExternalLink className="ml-1 h-4 w-4" /></Link> and <Link href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">networkadvertising.org/choices/ <ExternalLink className="ml-1 h-4 w-4" /></Link>.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">8. Your Privacy Rights & Choices</h2>
          <p>Depending on where you live, you may have certain rights regarding your personal information.</p>
          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">8.1. Access, Correction, Deletion</h3>
          <p><strong>Access:</strong> You may review the personal data we hold about you by logging in and viewing your profile settings.</p>
          <p><strong>Correction:</strong> You can update or correct your profile, content, or preferences at any time via your account.</p>
          <p><strong>Deletion:</strong> You may request that we delete your account and personal data. To do so, send an email to privacy@rallyathletes.com with the subject line “Account Deletion Request.” We will remove or anonymize your personal data within 30 days, except for any data we must legally retain.</p>
          
          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">8.2. Opt-Out of Marketing Communications</h3>
          <p>If you no longer wish to receive promotional emails or newsletters, you can:</p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Click the “unsubscribe” link at the bottom of any marketing email we send, or</li>
            <li>Email privacy@rallyathletes.com with the subject line “Unsubscribe.”</li>
          </ul>

          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">8.3. Cookie & Analytics Opt-Out</h3>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Browser Settings: Adjust your browser settings to block or delete cookies. Note that some features may not work properly without cookies.</li>
            <li>Google Analytics Opt-Out: You can install the Google Analytics Opt-Out Browser Add-On, available at <Link href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">tools.google.com/dlpage/gaoptout <ExternalLink className="ml-1 h-4 w-4" /></Link>.</li>
          </ul>

          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">8.4. Do Not Sell or Share My Personal Information (for California Residents)</h3>
          <p>Under the California Consumer Privacy Act (CCPA), California residents have the right to:</p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Request that we disclose the categories and specific pieces of personal information we’ve collected about them.</li>
            <li>Request deletion of personal information we hold, subject to certain exceptions.</li>
            <li>Opt out of the sale or sharing of their personal information. We do not sell your personal data for monetary consideration. However, we do share data with service providers to perform essential business functions. To exercise CCPA rights, please contact us at privacy@rallyathletes.com.</li>
          </ul>

          <h3 className="font-headline text-xl md:text-2xl mt-6 mb-3">8.5. European Union & United Kingdom Residents (GDPR)</h3>
          <p>If you are in the EU or the UK, you have the right to:</p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Right of access: Request a copy of the personal data we hold about you.</li>
            <li>Right to rectification: Request that we correct inaccurate or incomplete personal data.</li>
            <li>Right to erasure (“right to be forgotten”): Request deletion of your personal data under certain conditions.</li>
            <li>Right to restriction of processing: Request that we limit how we process your personal data.</li>
            <li>Right to data portability: Request a copy of your personal data in a structured, machine-readable format.</li>
            <li>Right to object: Object to processing of your personal data for direct marketing or profiling.</li>
            <li>Right to withdraw consent: If we rely on your consent to process personal data, you may withdraw consent at any time.</li>
          </ul>
          <p>To exercise these rights, please send an email to privacy@rallyathletes.com. We may require you to verify your identity before fulfilling your request.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">9. Data Security</h2>
          <p>We take reasonable and commercially acceptable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Encryption of data in transit using TLS (HTTPS)</li>
            <li>Encryption of sensitive data at rest (e.g., passwords are hashed with bcrypt)</li>
            <li>Access controls: only authorized employees or contractors may access your personal data, on a need-to-know basis</li>
            <li>Regular security reviews, penetration testing, and vulnerability scanning of our systems</li>
            <li>Use of reputable cloud-hosting providers (e.g., Firebase, Google Cloud, AWS) with built-in security safeguards</li>
            <li>Ongoing monitoring for suspicious activity and prompt incident response</li>
          </ul>
          <p>However, no method of data transmission or storage is 100% secure. If you suspect any unauthorized use of your account, please change your password immediately and notify us at privacy@rallyathletes.com.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">10. Children Under 18</h2>
          <p><strong>Under 13:</strong> We do not knowingly collect Personal Data from children under 13 without verifiable parental consent. If we learn that we have inadvertently collected information from a child under 13 without such consent, we will delete that information as soon as possible.</p>
          <p><strong>Ages 13–17:</strong> Parents or guardians must supervise any minor between the ages of 13 and 17. We encourage parents to review their child’s account information and privacy settings.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">11. International Data Transfers</h2>
          <p>Because our servers, service providers, and operations span multiple countries (including the United States), your personal data may be transferred to and stored on servers located outside your country of residence. Whenever we transfer your information internationally, we implement standard contractual clauses, approved binding corporate rules, or other mechanisms permitted under applicable data protection laws to ensure that your data remains subject to adequate safeguards.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">12. Third-Party Links & Embedded Content</h2>
          <p>Our Service may contain links to third-party websites (e.g., college ID camp directories, NCAA resources, external nutrition sites) or embedded content (e.g., YouTube videos, social media feeds, recipe pages). We do not control those sites, and this Privacy Policy does not apply to their practices. We encourage you to read the privacy policies of any third party before providing personal information.</p>
          <p>Similarly, if you click on ads or promotional links displayed on our sites, the advertiser’s privacy practices will govern the data collected.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">13. Changes to This Privacy Policy</h2>
          <p>We may revise this Privacy Policy as our Service evolves or in response to changes in applicable laws, regulations, or industry standards. When we update this policy, we will revise the “Last updated” date at the top and, if the changes are material, provide a notice (e.g., banner on our homepage or notification email) at least 30 days before they take effect. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and share your information. Your continued use of the Service after the revised Privacy Policy becomes effective signifies your acceptance of the changes.</p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">14. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, your personal information, or our privacy practices, you can contact us by:</p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>By email: privacy@rallyathletes.com</li>
            <li>Mailing Address:<br />
                Rally Athletes<br />
                Attn: Privacy Team<br />
                1234 GameDrive, Suite 200<br />
                Raleigh, NC 27601<br />
                United States
            </li>
          </ul>
          <p>We will respond to your inquiry within 30 days of receipt.</p>
          <p>Thank you for trusting Rally Athletes with your personal information. We are committed to safeguarding your privacy and delivering a secure, transparent, and user-centered experience across all our brands.</p>
        </article>
      </div>
    </div>
  );
}
