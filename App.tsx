
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GeminiFacetsShowcase from './components/GeminiFacetsShowcase';

function App() {
  const [activeShowcase, setActiveShowcase] = useState<string | null>(null);

  // Scroll to top when the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeShowcase]);

  const renderContent = () => {
    switch (activeShowcase) {
      case 'gemini-facets':
        return <GeminiFacetsShowcase onBack={() => setActiveShowcase(null)} />;
      default:
        return <HomePage onShowcaseClick={(slug) => setActiveShowcase(slug)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        isHomePage={activeShowcase === null}
        onNavigateHome={() => setActiveShowcase(null)}
      />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
