import { PORTFOLIO_DATA } from "../../utils";
import { Card } from "../Card";
import { SectionWrapper } from "../SectionWrapper";

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-slate-50 rounded-3xl my-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Technical Arsenal
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Specialized in high-performance backend technologies and scalable
          infrastructure.
        </p>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-6">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
          <Card key={idx} className="p-6">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <skillGroup.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 text-slate-700 text-sm px-2 py-1 rounded border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
