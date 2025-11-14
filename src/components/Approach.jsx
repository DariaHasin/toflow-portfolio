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
              TOFlow employs a neural reconstruction approach that combines multiple TOF-MRA acquisitions to produce enhanced outputs. The pipeline processes input scans through registration, preprocessing, and neural field-based reconstruction.
            </p>
            <p>
              By leveraging complementary information from scans acquired at different orientations, the method can enhance vessel visibility and estimate directional flow patterns that are not directly observable in individual acquisitions.
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
                Combines two 3D TOF scans acquired in the axial plane with a slight angular offset to improve spatial resolution and enhance visualization of small or poorly depicted vessels.
              </p>
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold mb-2 text-primary-300">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Multi-view signal integration</span>
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
                Integrates one 3D TOF scan with three orthogonal 2D TOF acquisitions to estimate flow direction and relative velocity at each voxel within the cerebral vasculature.
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

