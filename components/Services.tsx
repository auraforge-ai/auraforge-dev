
import React from 'react';
import { AppIcon, IntegrationIcon, ContentIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-brand-surface p-8 rounded-lg border border-white/10 transition-all duration-300 hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/20 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-brand-text-muted">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our AI Solutions Engineering Services</h2>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<AppIcon className="h-8 w-8" />}
            title="Custom AI Applications"
            description="From intelligent personal assistants to generative art platforms, we build bespoke AI applications from the ground up."
          />
          <ServiceCard
            icon={<IntegrationIcon className="h-8 w-8" />}
            title="AI Integration & Consulting"
            description="We help businesses and individuals integrate AI into their existing workflows to boost productivity, creativity, and efficiency."
          />
          <ServiceCard
            icon={<ContentIcon className="h-8 w-8" />}
            title="Generative Content & Tools"
            description="We create cutting-edge generative content, from interactive stories to AI-powered educational tools."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
