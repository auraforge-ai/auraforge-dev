
import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

interface HomePageProps {
  onShowcaseClick: (slug: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onShowcaseClick }) => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio onShowcaseClick={onShowcaseClick} />
      <Contact />
    </>
  );
};

export default HomePage;
