
import { z } from 'zod';

export const contactSubjects = [
  "General Inquiry",
  "ScoutMe Sports Question",
  "My Team Dashboard Question",
  "Fuel My Game Question",
  "Partnership Opportunity",
  "Media Inquiry",
  "Technical Support",
  "Feedback & Suggestions",
  "Other",
] as const;

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.enum(contactSubjects, { 
    errorMap: () => ({ message: "Please select a valid subject." }) 
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};
