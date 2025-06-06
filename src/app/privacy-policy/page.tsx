
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Privacy Policy - Rally Athletes',
  description: 'Read the Rally Athletes Privacy Policy to understand how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Rally Athletes
            </Link>
          </Button>
        </div>

        <header className="mb-10 md:mb-12">
          <div className="flex items-center justify-start mb-4">
             <FileText className="h-10 w-10 text-primary mr-3" />
             <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary prose-p:text-lg prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent/80">
          <p>
            Rally Athletes ("us", "we", or "our") operates the Rally Athletes website and associated brand websites (ScoutMeSports, My Team Dashboard, Fuel My Game) (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          {/* Add more specific types of data collected if necessary */}
          <p>
            <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>
          
          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">Use of Data</h2>
          <p>Rally Athletes uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc list-inside space-y-1 my-4 pl-4">
            <li>By email: privacy@rallyathletes.com</li>
            <li>By visiting this page on our website: <Link href="/contact" className="text-accent hover:underline">Contact Us</Link></li>
          </ul>
        </article>
      </div>
    </div>
  );
}
