
import { Project } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Examine',
    description: 'An AI-powered legal assistant that analyzes contracts and legal documents, providing easy-to-understand summaries and insights.',
    imageUrl: 'https://picsum.photos/seed/legal-document-ai/800/600',
    projectUrl: 'https://auraforge-examine-94149386363.us-west1.run.app/',
    isLive: true,
  },
  {
    title: 'Gemini Facets',
    description: 'An innovative chatbot application with reactive characters that respond and adapt to your prompts for a deeply personal experience.',
    imageUrl: 'https://picsum.photos/seed/personal-chatbot-ai/800/600',
    projectUrl: 'https://gemini-facets-94149386363.us-west1.run.app/',
    isLive: true,
  },
  {
    title: 'CLI With Gemini',
    description: 'A powerful command-line interface supercharged by Gemini, bringing natural language processing to your terminal.',
    imageUrl: 'https://picsum.photos/seed/cli-terminal-code/800/600',
    projectUrl: '#',
    isLive: false,
  },
  {
    title: 'Aura Canvas',
    description: 'A generative art platform that transforms simple prompts into breathtaking visual masterpieces through AI.',
    imageUrl: 'https://picsum.photos/seed/aura-canvas/800/600',
    projectUrl: '#',
    isLive: false,
  },
  {
    title: 'Cognitive Flow',
    description: 'An AI-powered workflow automation tool designed to streamline complex business processes and enhance productivity.',
    imageUrl: 'https://picsum.photos/seed/cognitive-flow/800/600',
    projectUrl: '#',
    isLive: false,
  },
];