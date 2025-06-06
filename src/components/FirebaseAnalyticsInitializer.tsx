// src/components/FirebaseAnalyticsInitializer.tsx
"use client";

import { useEffect } from 'react';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from '@/lib/firebase'; // app is already initialized here

export function FirebaseAnalyticsInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      isSupported().then((supported) => {
        if (supported) {
          getAnalytics(app); // Initialize analytics
        }
      });
    }
  }, []);

  return null; // This component doesn't render anything
}
