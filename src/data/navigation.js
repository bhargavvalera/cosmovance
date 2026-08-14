export const navLinks = [
  { id: 'home', label: 'Home', href: '#home', isMailto: false },
  { id: 'services', label: 'Services', href: '#services', isMailto: false },
  { id: 'process', label: 'Process', href: '#process', isMailto: false },
  { id: 'about', label: 'About', href: '#about', isMailto: false },
  {
    id: 'contact',
    label: 'Contact',
    href: 'mailto:founder@cosmovance.com?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies',
    isMailto: true,
  },
];

export const heroStats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Global Support' },
];

export const companyInfo = {
  name: 'Cosmovance Technologies',
  tagline: 'Building Intelligent Digital Experiences.',
  description:
    'We craft AI-powered applications, enterprise platforms, and digital products that set new standards for performance, design, and intelligence.',
  email: 'founder@cosmovance.com',
  year: new Date().getFullYear(),
};

