
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Rally Athletes',
  description: 'Get in touch with Rally Athletes. We are here to answer your questions about our brands and services.',
  keywords: ['contact Rally Athletes', 'Rally Athletes support', 'sports tech inquiries', 'customer service', 'message us'],
  openGraph: {
    title: 'Contact Rally Athletes',
    description: 'Reach out to Rally Athletes for any questions or inquiries about our sports technology platforms.',
    // Default image from layout.tsx will be used
  },
  twitter: {
    title: 'Contact Rally Athletes',
    description: 'Reach out to Rally Athletes for any questions or inquiries about our sports technology platforms.',
    // Default image from layout.tsx will be used
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background py-10 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions or inquiries.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-semibold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-semibold mb-6">Our Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-md sm:text-lg">Email</h3>
                  <a href="mailto:info@rallyathletes.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    info@rallyathletes.com
                  </a>
                  <p className="text-xs sm:text-sm text-muted-foreground/80">General Inquiries & Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-md sm:text-lg">Phone</h3>
                  <a href="tel:+1234567890" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                  <p className="text-xs sm:text-sm text-muted-foreground/80">Mon - Fri, 9am - 5pm EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                 <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 shrink-0 hidden md:block" />
                <div>
                  <h3 className="font-semibold text-md sm:text-lg flex items-center">
                     <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 inline-block md:hidden" />
                    Office Address
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">123 Sports Tech Avenue, Innovation City, ST 54321</p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80">Visits by appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
