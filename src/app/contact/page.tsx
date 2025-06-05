import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Rally Athletes',
  description: 'Get in touch with Rally Athletes. We are here to answer your questions about our brands and services.',
};

export default function ContactPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions or inquiries.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold">Our Contact Information</h2>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href="mailto:info@rallyathletes.com" className="text-muted-foreground hover:text-primary">
                  info@rallyathletes.com
                </a>
                <p className="text-sm text-muted-foreground/80">General Inquiries</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                  +1 (234) 567-890
                </a>
                <p className="text-sm text-muted-foreground/80">Mon - Fri, 9am - 5pm EST</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Office Address</h3>
                <p className="text-muted-foreground">123 Sports Tech Avenue, Innovation City, ST 54321</p>
                <p className="text-sm text-muted-foreground/80">Visits by appointment only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
