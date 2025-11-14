import React from 'react';
import { Brain, Split, Microscope, Activity } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      id: 1,
      icon: Brain,
      iconColor: "text-primary-400",
      subtitleColor: "text-primary-400",
      title: "Spatial Resolution & Vessel Depiction",
      subtitle: "Resolution Enhancement",
      description: "Enhance vascular resolution and visibility of small vessels by combining multiple 3D TOF scans acquired at slightly different orientations.",
      features: [
        "Multi-view fusion",
        "Enhanced vessel visualization",
        "Improved spatial resolution"
      ]
    },
    {
      id: 2,
      icon: Split,
      iconColor: "text-accent-400",
      subtitleColor: "text-accent-400",
      title: "Flow Direction & Relative Velocity Estimation",
      subtitle: "Flow Mapping",
      description: "Estimate flow direction and relative velocity patterns by integrating intensity information across multiple orthogonal TOF acquisitions.",
      features: [
        "Directional flow estimation",
        "Relative velocity mapping",
        "Vascular pathology assessment"
      ]
    }
  ];

  return (
    <section id="objectives" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Research Objectives</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Two complementary approaches for cerebrovascular imaging
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((objective) => (
            <div
              key={objective.id}
              className="glass-dark rounded-2xl p-8 hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-primary-500/30"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="glass rounded-full p-3">
                  <objective.icon className={`w-8 h-8 ${objective.iconColor}`} />
                </div>
                <div>
                  <div className={`text-sm font-semibold mb-1 ${objective.subtitleColor}`}>{objective.subtitle}</div>
                  <h3 className="text-xl font-bold">{objective.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {objective.description}
              </p>

              <div className="space-y-2">
                {objective.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-400"></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
