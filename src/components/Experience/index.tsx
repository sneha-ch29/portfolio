import { Download } from "lucide-react";
import { PORTFOLIO_DATA } from "../../utils";
import { SectionWrapper } from "../SectionWrapper";
import { BriefcaseIcon } from "../BriefcaseIcon";
import { Badge } from "../Badge";

export const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-slate-600 max-w-xl">
            Building enterprise-grade solutions at Infosys for global banking
            clients.
          </p>
        </div>
        <a
          href="/portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
        >
          Download Full Resume <Download className="w-4 h-4 ml-2" />
        </a>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
        {PORTFOLIO_DATA.experience.map((job, idx) => (
          <div
            key={idx}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <BriefcaseIcon />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900 text-lg">{job.role}</h3>
                <span className="text-slate-500 text-sm font-medium bg-slate-50 px-2 py-1 rounded">
                  {job.period}
                </span>
              </div>
              <div className="text-blue-600 font-medium mb-4">
                {job.company}
              </div>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                {job.description}
              </p>

              <div className="space-y-2 mb-4">
                {job.achievements.slice(0, 3).map((ach, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {job.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-slate-50 text-slate-600 border-slate-100"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
