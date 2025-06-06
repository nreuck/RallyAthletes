
// app/contact/actions.ts
"use server";

import type { ContactFormState } from './schemas';
import { contactFormSchema } from './schemas';

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
  // console.log('Contact form submitted:', { name, email, subject, message }); // Removed for production
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
