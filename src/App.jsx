import React from 'react';

import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Objectives from './components/Objectives';
import Approach from './components/Approach';
import Results from './components/Results';
import Citations from './components/Citations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Objectives />
      <Approach />
      <Results />
      <Citations />
      <Footer />
    </div>
  );
}

export default App;

