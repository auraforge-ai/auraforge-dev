
import React from 'react';

const Hero: React.FC = () => {

  const handleDiscoverClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 animate-gradient-bg" style={{ backgroundImage: 'linear-gradient(45deg, #0a0a0f, #1a0a24, #0a0a0f, #2a0a14)' }}></div>
      <div className="absolute inset-0 -z-20 bg-brand-bg"></div>

      <div className="z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4">
          AuraForge: Human Ingenuity,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Supercharged by AI.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-text-muted mb-8">
          We are AI Solutions Engineers, building the future of intelligent applications, tools, and content. Let's build your future, together.
        </p>
        <a
          href="#portfolio"
          onClick={handleDiscoverClick}
          className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg shadow-brand-primary/40 hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 animate-glow"
        >
          Discover Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
