
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-brand-surface border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-brand-text-muted">
          &copy; {currentYear} AuraForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
