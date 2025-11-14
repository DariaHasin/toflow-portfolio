import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const Citations = () => {
  const citations = [
    {
      title: "NeSVoR: Implicit Neural Representation for Slice-to-Volume Reconstruction in MRI",
      authors: "Xu, J., Moyer, D., Grant, P.E., Golland, P., Iglesias, J.E., Adalsteinsson, E.",
      journal: "arXiv preprint arXiv:2312.08887",
      year: "2023",
      bibtex: `@article{xu2023nesvor,
  title={NeSVoR: Implicit Neural Representation for Slice-to-Volume Reconstruction in MRI},
  author={Xu, Junshen and Moyer, Daniel and Grant, P. Ellen and Golland, Polina and Iglesias, Juan Eugenio and Adalsteinsson, Elfar},
  journal={arXiv preprint arXiv:2312.08887},
  year={2023}
}`,
      color: "primary"
    },
    {
      title: "SynthStrip: skull-stripping for any brain image",
      authors: "Hoopes, A., Mora, J.S., Dalca, A.V., Fischl, B., Hoffmann, M.",
      journal: "NeuroImage, vol. 260, pp. 119474",
      year: "2022",
      publisher: "Elsevier",
      bibtex: `@article{hoopes2022synthstrip,
  title={SynthStrip: skull-stripping for any brain image},
  author={Hoopes, Andrew and Mora, Jocelyn S and Dalca, Adrian V and Fischl, Bruce and Hoffmann, Malte},
  journal={NeuroImage},
  volume={260},
  pages={119474},
  year={2022},
  publisher={Elsevier}
}`,
      color: "accent"
    }
  ];

  return (
    <section id="citations" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Citations & References</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This work builds upon foundational research in neural reconstruction and medical image processing
          </p>
        </div>

        <div className="space-y-6">
          {citations.map((citation, index) => (
            <div
              key={index}
              className="glass-dark rounded-2xl p-8 animate-slide-up hover:scale-[1.02] transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <BookOpen className={`w-6 h-6 mt-1 flex-shrink-0 ${
                  citation.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                }`} />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{citation.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{citation.authors}</p>
                  <p className="text-gray-400 text-sm">
                    {citation.journal} ({citation.year})
                    {citation.publisher && ` • ${citation.publisher}`}
                  </p>
                </div>
              </div>

              <details className="mt-4">
                <summary className="cursor-pointer text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center space-x-2">
                  <span>Show BibTeX</span>
                  <ExternalLink className="w-4 h-4" />
                </summary>
                <div className="mt-4 bg-black/40 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-xs text-gray-300 font-mono">
                    {citation.bibtex}
                  </pre>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Acknowledgments */}
        <div className="mt-12 glass-dark rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Acknowledgments</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            This research leverages state-of-the-art neural reconstruction techniques and robust preprocessing tools. 
            Special thanks to the developers of NeSVoR and SynthStrip for making their work openly available to the research community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Citations;

