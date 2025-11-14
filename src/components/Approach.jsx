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
              TOFlow employs a <strong className="text-white">deep learning-based implicit neural representation (INR)</strong> framework that leverages <strong className="text-white">multi-view geometric constraints</strong> and <strong className="text-white">differentiable rendering</strong> to reconstruct high-fidelity 3D vascular structures from sparse, anisotropic MRI acquisitions. The pipeline integrates <strong className="text-white">rigid registration</strong>, intensity normalization, and <strong className="text-white">coordinate-based neural networks</strong> to learn continuous volumetric representations.
            </p>
            <p>
              By exploiting <strong className="text-white">orientation-dependent signal characteristics</strong> and applying <strong className="text-white">physics-informed loss functions</strong>, the model performs end-to-end optimization to simultaneously enhance spatial resolution and infer directional flow information—capabilities not achievable through traditional interpolation or single-view reconstruction methods.
            </p>
          </div>
        </div>

        {/* Two Modes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-dark rounded-2xl p-8 border-2 border-primary-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="glass rounded-full p-3">
                <Brain className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-primary-300">Resolution Enhancement</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Combines multiple 3D TOF acquisitions to improve spatial resolution and enhance visualization of small or poorly depicted vessels through multi-view signal integration.
              </p>
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold mb-2 text-primary-300">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Multi-view fusion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Enhanced vessel depiction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Improved spatial resolution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-2xl p-8 border-2 border-accent-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="glass rounded-full p-3">
                <Split className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-accent-300">Flow Mapping</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Integrates multiple TOF acquisitions at different orientations to estimate flow direction and relative velocity patterns within the cerebral vasculature.
              </p>
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold mb-2 text-accent-300">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Directional flow estimation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Relative velocity mapping</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-400 mt-1">•</span>
                    <span>Physiologically plausible trajectories</span>
                  </li>
                </ul>
              </div>
            </div>
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

