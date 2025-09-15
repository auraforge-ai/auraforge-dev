import React from 'react';

const FeatureCard = ({ imgSrc, title, description }: { imgSrc: string, title: string, description: string }) => (
    <div className="bg-brand-surface rounded-lg overflow-hidden border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/20">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-brand-text-muted">{description}</p>
        </div>
    </div>
);

interface GeminiFacetsShowcaseProps {
  onBack: () => void;
}

const GeminiFacetsShowcase: React.FC<GeminiFacetsShowcaseProps> = ({ onBack }) => {
  return (
    <div className="bg-brand-bg pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <button onClick={onBack} className="text-brand-primary hover:text-brand-secondary transition-colors duration-300 mb-8 inline-block">
            &larr; Back to Portfolio
          </button>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Gemini Facets
          </h1>
          <p className="text-lg md:text-xl text-brand-text-muted mb-8 max-w-3xl">
            A glimpse into our innovative chatbot application with reactive, characterful AI personas that respond and adapt to your prompts for a deeply personal experience.
          </p>

          <a href="https://gemini-facets-94149386363.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg shadow-brand-primary/40 hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105">
            Launch Live App
          </a>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Video Demonstration</h2>
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border-2 border-brand-primary/50 shadow-2xl shadow-brand-primary/20">
              <iframe 
                src="https://www.youtube.com/embed/NkC-ZJpoNvs"
                title="Gemini Facets Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                imgSrc="https://raw.githubusercontent.com/auraforge-ai/auraforge-dev/main/demo1.png"
                title="Dynamic Avatars"
                description="The main chat interface, where the Facet's avatar updates its expression based on the conversation."
              />
              <FeatureCard 
                imgSrc="https://raw.githubusercontent.com/auraforge-ai/auraforge-dev/main/demo2.png"
                title="Interactive Image Generation"
                description="A user clicks a special link in the chat to generate a relevant image on-the-fly."
              />
              <FeatureCard 
                imgSrc="https://raw.githubusercontent.com/auraforge-ai/auraforge-dev/main/demo3.png"
                title="Powerful Study Mode"
                description="The Study Mode interface, showing the powerful tools available for analyzing user-uploaded content."
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GeminiFacetsShowcase;