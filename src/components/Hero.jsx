import React from 'react';
import { ChevronDown, BrainCircuit } from 'lucide-react';

const Hero = () => {
  return (
    <section id="overview" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="glass rounded-full p-4">
              <BrainCircuit className="w-16 h-16 text-primary-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">TOFlow</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
            Multi-Plane TOF-MRA Reconstruction
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed italic">
            Enabling non-invasive cerebrovascular flow assessment through multi-view neural reconstruction
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-10">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 text-center">
                TOFlow is an advanced reconstruction pipeline for <strong className="text-white">Time-of-Flight Magnetic Resonance Angiography (TOF-MRA)</strong> that enhances both spatial resolution and directional flow representation by leveraging multiple TOF acquisitions acquired at varying orientations.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                This work addresses two key challenges in cerebrovascular imaging: <strong className="text-primary-300">improving vessel visualization</strong> through multi-view fusion, and <strong className="text-accent-300">estimating flow direction patterns</strong> for clinical assessment of vascular pathologies.
              </p>
            </div>
          </div>

          {/* Results Preview */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="glass-dark rounded-2xl p-8 border-2 border-accent-500/30">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-text">3D Flow Visualization</span>
              </h3>
              <div className="bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="flow_animation.gif" 
                  alt="3D Flow Visualization" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm text-gray-400 mt-4">
                Visualization of blood flow in cerebral vasculature with relative velocity coloring
              </p>
              <div className="text-center mt-6">
                <a 
                  href="#results" 
                  className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <span className="text-accent-400 font-semibold">View Full Results</span>
                  <ChevronDown className="w-5 h-5 text-accent-400 rotate-[-90deg]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
