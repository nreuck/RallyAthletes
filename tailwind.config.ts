
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    // Removed './src/pages/**/*.{js,ts,jsx,tsx,mdx}' as project uses App Router
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        headline: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-pt-sans)', 'sans-serif'], // Updated to use PT Sans for body
        code: ['monospace', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: ({ theme }: { theme: Function }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-headings': theme('colors.primary.DEFAULT'),
            '--tw-prose-lead': theme('colors.muted.foreground'),
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.muted.foreground'),
            '--tw-prose-bullets': theme('colors.muted.DEFAULT'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.primary.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.border'),
            '--tw-prose-captions': theme('colors.muted.foreground'),
            '--tw-prose-code': theme('colors.foreground'),
            '--tw-prose-pre-code': theme('colors.foreground'),
            '--tw-prose-pre-bg': theme('colors.secondary.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),
            '--tw-prose-invert-body': theme('colors.background'), // Example for dark mode if needed
            '--tw-prose-invert-headings': theme('colors.primary.DEFAULT'),
            // Add more prose customizations here
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.headline').join(', '),
              color: 'hsl(var(--primary))',
            },
            p: {
              fontFamily: theme('fontFamily.body').join(', '),
              fontSize: theme('fontSize.lg'),
              lineHeight: theme('lineHeight.relaxed'),
              color: 'hsl(var(--foreground))',
            },
            a: {
              fontFamily: theme('fontFamily.body').join(', '),
              color: 'hsl(var(--accent))',
              '&:hover': {
                color: 'hsl(var(--accent)) / 0.8',
              },
            },
            strong: {
              fontWeight: theme('fontWeight.semibold'),
              fontFamily: theme('fontFamily.body').join(', '),
              color: 'hsl(var(--foreground))',
            },
             ul: {
              fontFamily: theme('fontFamily.body').join(', '),
              color: 'hsl(var(--foreground))',
            },
            ol: {
              fontFamily: theme('fontFamily.body').join(', '),
              color: 'hsl(var(--foreground))',
            },
            li: {
              fontFamily: theme('fontFamily.body').join(', '),
              color: 'hsl(var(--foreground))',
            },
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
