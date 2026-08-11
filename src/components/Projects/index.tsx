import { Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../../utils";
import { SectionWrapper } from "../SectionWrapper";

export const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className="bg-slate-900 text-white rounded-3xl"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Key Architectural Contributions
        </h2>
        <p className="text-slate-400">
          High-impact modules and systems delivered within enterprise
          environments.
        </p>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-6">
        {PORTFOLIO_DATA.projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-slate-800 rounded-xl p-8 hover:bg-slate-750 border border-slate-700 transition-colors group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Cpu className="w-8 h-8" />
              </div>
              {/* <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors cursor-pointer" /> */}
            </div>

            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-blue-400 text-sm mb-4 font-mono">{proj.role}</p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {proj.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {proj.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 p-3 rounded border border-slate-700"
                >
                  <div className="text-green-400 font-bold text-sm">
                    {metric.split(" ")[0]}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {metric.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-slate-400 bg-slate-900 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
