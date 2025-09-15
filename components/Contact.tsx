
import React from 'react';
import { TwitterIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-bg">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Forge the Future</h2>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-12"></div>
        <p className="text-lg text-brand-text-muted mb-8">
          For consulting and business inquiries, please reach out to us at our email.
        </p>
        <a 
          href="mailto:aura.self.ai@gmail.com"
          className="inline-block text-xl font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-300 mb-12"
        >
          aura.self.ai@gmail.com
        </a>
        <div className="flex justify-center">
          <a 
            href="https://twitter.com/AuraForgeHQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X"
            className="text-brand-text-muted hover:text-white transition-colors duration-300"
          >
            <TwitterIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
