import React from 'react';
import { Brain, Split, Layers, Zap } from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Approach</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Neural reconstruction with multi-view fusion
          </p>
        </div>

        {/* High-Level Overview */}
        <div className="glass-dark rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Methodology Overview</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p>
              TOFlow uses a <strong className="text-white">deep learning framework</strong> based on <strong className="text-white">implicit neural representations</strong> to reconstruct high-quality 3D vascular structures from multiple MRI scans. The approach combines <strong className="text-white">multi-view fusion</strong> with <strong className="text-white">coordinate-based neural networks</strong> to learn continuous volumetric representations.
            </p>
            <p>
              By incorporating <strong className="text-white">physics-informed constraints</strong> during training, the model can simultaneously improve image quality and estimate flow patterns—going beyond what traditional reconstruction methods can achieve.
            </p>
          </div>
        </div>

        {/* Innovation Highlight */}
        <div className="mt-8 glass-dark rounded-2xl p-8 border-2 border-accent-500/30">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-accent-400" />
            <h3 className="text-2xl font-bold">Key Innovation</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            The method incorporates novel loss functions that enforce physiological constraints during reconstruction, ensuring that estimated flow patterns are anatomically coherent and follow realistic vascular trajectories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;

