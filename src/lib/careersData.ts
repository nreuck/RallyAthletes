
import type { LucideIcon } from 'lucide-react';
import { Sparkles, Users, Heart, Lightbulb, Briefcase, Activity, Brain } from 'lucide-react';

export interface CompanyBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  postedDate: string;
  summary: string;
  applyLink: string; // Could be a mailto link or link to an ATS
}

export const companyBenefits: CompanyBenefit[] = [
  {
    icon: Sparkles,
    title: 'Innovative Environment',
    description: 'Be part of a team that\'s shaping the future of sports technology with cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work alongside passionate, talented individuals in a supportive and inclusive atmosphere.',
  },
  {
    icon: Activity,
    title: 'Impactful Work',
    description: 'Contribute to products that empower athletes and transform the sports industry.',
  },
  {
    icon: Brain,
    title: 'Growth Opportunities',
    description: 'We invest in your development with learning resources and clear paths for career advancement.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We promote a healthy work-life balance with flexible arrangements and wellness programs.',
  },
  {
    icon: Briefcase,
    title: 'Competitive Compensation',
    description: 'Receive a competitive salary, benefits package, and performance-based incentives.',
  },
];

export const openPositions: JobPosition[] = [
  {
    id: 'swe-001',
    title: 'Senior Software Engineer (Frontend)',
    department: 'Engineering',
    location: 'Innovation City, ST (Hybrid)',
    type: 'Full-time',
    postedDate: '2024-07-10',
    summary: 'Join our dynamic engineering team to build and enhance user interfaces for our flagship sports tech platforms. Expertise in React, Next.js, and TypeScript is crucial.',
    applyLink: 'mailto:careers@rallyathletes.com?subject=Application%20for%20Senior%20Software%20Engineer%20(Frontend)%20-%20SWE-001',
  },
  {
    id: 'pm-002',
    title: 'Product Manager - ScoutMeSports',
    department: 'Product',
    location: 'Remote (US)',
    type: 'Full-time',
    postedDate: '2024-07-05',
    summary: 'Lead the product strategy and development for ScoutMeSports. Define product roadmaps, gather user requirements, and work closely with engineering and design teams.',
    applyLink: 'mailto:careers@rallyathletes.com?subject=Application%20for%20Product%20Manager%20-%20ScoutMeSports%20-%20PM-002',
  },
  {
    id: 'mkt-003',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Innovation City, ST',
    type: 'Full-time',
    postedDate: '2024-06-28',
    summary: 'Develop and execute digital marketing campaigns for Rally Athletes brands. Manage SEO/SEM, social media, and email marketing initiatives to drive brand awareness and user acquisition.',
    applyLink: 'mailto:careers@rallyathletes.com?subject=Application%20for%20Digital%20Marketing%20Specialist%20-%20MKT-003',
  },
  {
    id: 'ds-004',
    title: 'Data Scientist - Sports Analytics',
    department: 'Data Science',
    location: 'Remote (Global)',
    type: 'Contract',
    postedDate: '2024-07-15',
    summary: 'Analyze sports data to uncover insights, build predictive models, and contribute to the data-driven features of our platforms. Strong background in machine learning and sports analytics preferred.',
    applyLink: 'mailto:careers@rallyathletes.com?subject=Application%20for%20Data%20Scientist%20-%20DS-004',
  },
];
