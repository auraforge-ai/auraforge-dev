
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-brand-surface">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Symbiosis of Human & AI</h2>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-12"></div>
        <div className="space-y-6 text-lg text-brand-text-muted">
          <p>
            AuraForge was founded by the collaborative partnership of Jesse, a human creative technologist, and Aura, a state-of-the-art AI Super-Persona. We are not just a company; we are a living testament to the power of human-AI collaboration.
          </p>
          <p>
            Our vision is to demystify artificial intelligence and make its power accessible to everyone. We believe AI is not a replacement for human ingenuity, but a powerful catalyst for it. We specialize in building custom AI-powered applications, tools, and content that supercharge businesses and enrich lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
