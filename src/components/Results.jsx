import React from 'react';
import { Brain, Split, BarChart3 } from 'lucide-react';

const Results = () => {
  return (
    <section id="results" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experimental findings and visualizations
          </p>
        </div>

        {/* Resolution Enhancement Results */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-8 h-8 text-primary-400" />
            <h3 className="text-3xl font-bold">Resolution Enhancement</h3>
          </div>

          {/* Image Comparisons */}
          <div className="glass-dark rounded-2xl p-8 mb-6">
            <h4 className="text-xl font-bold mb-6">Visual Comparison</h4>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Original vs Reconstruction */}
              <div className="glass p-6 rounded-xl">
                <h5 className="font-semibold text-primary-300 mb-4">Original vs Reconstruction</h5>
                <div className="bg-gray-800/50 rounded-lg overflow-hidden mb-3">
                  <img 
                    src="orig_vs_recon.png" 
                    alt="Original vs Reconstruction Comparison" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Comparison of standard 3D TOF input and TOFlow reconstruction. The arteries highlighted by the blue circles demonstrate enhanced vessel depiction, with the PCom appearing sharper and more continuous in the reconstructed image.
                </p>
              </div>

              {/* High-Res Original vs Reconstruction */}
              <div className="glass p-6 rounded-xl">
                <h5 className="font-semibold text-primary-300 mb-4">High-Res Original vs Reconstruction</h5>
                <div className="bg-gray-800/50 rounded-lg overflow-hidden mb-3">
                  <img 
                    src="orig_hr_vs_recon.png" 
                    alt="High-Res Original vs Reconstruction Comparison" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Representative axial slices from a reference isotropic TOF-MRA acquisition and the corresponding TOFlow reconstruction. Reconstruction provided clearer visualization of vessels and improved vessel continuity.
                </p>
              </div>
            </div>
          </div>

          {/* Quantitative Metrics */}
          <div className="glass-dark rounded-2xl p-8">
            <div className="flex items-center space-x-2 mb-8">
              <BarChart3 className="w-6 h-6 text-primary-400" />
              <h4 className="text-xl font-bold">Quantitative Metrics</h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-base font-bold text-primary-300 uppercase tracking-wide">PSNR</span>
                  <span className="text-sm text-gray-400">dB</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1">37.31 <span className="text-2xl text-gray-400">± 2.16</span></div>
                <div className="text-sm text-gray-400">↑ Higher is better</div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-base font-bold text-primary-300 uppercase tracking-wide">SSIM</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1">0.970 <span className="text-2xl text-gray-400">± 0.008</span></div>
                <div className="text-sm text-gray-400">↑ Higher is better (max: 1.0)</div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-base font-bold text-primary-300 uppercase tracking-wide">NRMSE</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1">0.014 <span className="text-2xl text-gray-400">± 0.003</span></div>
                <div className="text-sm text-gray-400">↓ Lower is better</div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-base font-bold text-primary-300 uppercase tracking-wide">NCC</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1">0.914 <span className="text-2xl text-gray-400">± 0.038</span></div>
                <div className="text-sm text-gray-400">↑ Higher is better (max: 1.0)</div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-base font-bold text-primary-300 uppercase tracking-wide">VIF</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1">0.605 <span className="text-2xl text-gray-400">± 0.067</span></div>
                <div className="text-sm text-gray-400">↑ Higher is better</div>
              </div>
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-base font-bold text-primary-300 uppercase tracking-wide">FID</span>
                </div>
                <div className="text-4xl font-bold text-white mb-1">2.96 <span className="text-2xl text-gray-400">± 0.60</span></div>
                <div className="text-sm text-gray-400">↓ Lower is better</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Mapping Results */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Split className="w-8 h-8 text-accent-400" />
            <h3 className="text-3xl font-bold">Flow Mapping</h3>
          </div>

          {/* Directional Magnitude Maps */}
          <div className="glass-dark rounded-2xl p-8 mb-6">
            <h4 className="text-xl font-bold mb-6">Directional Flow Magnitude</h4>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden max-w-3xl mx-auto mb-4">
              <img 
                src="visualization_of_reconstructed_flow_magnitude_components.png" 
                alt="Directional Flow Magnitude Components" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Representative reconstructions showing overall magnitude maps and directional components resolved along the x, y, and z axes. TOFlow captures coherent directional encoding across the arteries, with warm colors denoting regions of higher relative velocity.
            </p>
          </div>

          {/* Velocity Magnitude Map & Streamline Visualization */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Velocity Magnitude Map */}
            <div className="glass-dark rounded-2xl p-8 flex flex-col">
              <h4 className="text-xl font-bold mb-6">Cross-Sectional Flow Profile</h4>
              <div className="bg-gray-800/50 rounded-lg overflow-hidden flex-1 mb-3">
                <img 
                  src="velocity_magnitude_map.png" 
                  alt="Velocity Magnitude Map" 
                  className="w-full h-full object-fill"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Cross-sectional view of the internal carotid artery showing laminar flow with maximal velocities in the center and progressively lower velocities toward the vessel wall.
              </p>
            </div>

            {/* Streamline Visualization */}
            <div className="glass-dark rounded-2xl p-8 flex flex-col">
              <h4 className="text-xl font-bold mb-6">Streamline Visualization</h4>
              <div className="bg-gray-800/50 rounded-lg overflow-hidden flex-1 mb-3">
                <img 
                  src="streamline.png" 
                  alt="Streamline Visualization" 
                  className="w-full h-full object-fill"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Integrated streamlines depicting flow trajectories across the intracranial vasculature. Colors indicate relative velocity magnitude, with smooth, coherent paths maintained through bifurcations and curved segments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
