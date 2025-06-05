// app/contact/actions.ts
"use server";

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
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

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check the fields.',
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Simulate sending an email or saving to a database
  console.log('Contact form submitted:', { name, email, subject, message });
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // Example of a random error
  // if (Math.random() > 0.7) {
  //   return {
  //     message: 'An unexpected error occurred. Please try again later.',
  //     status: 'error',
  //   };
  // }

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    status: 'success',
  };
}
