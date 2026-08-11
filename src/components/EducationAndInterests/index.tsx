import { BookOpen, Award, Coffee, Badge, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../../utils";
import { Card } from "../Card";
import { SectionWrapper } from "../SectionWrapper";

export const EducationAndInterests = () => {
  return (
    <SectionWrapper id="education" className="grid md:grid-cols-2 gap-12">
      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" /> Education
        </h2>
        <Card className="p-6 border-l-4 border-l-blue-600">
          <h3 className="font-bold text-lg">
            {PORTFOLIO_DATA.education.degree}
          </h3>
          <p className="text-slate-600">{PORTFOLIO_DATA.education.school}</p>
          <div className="flex justify-between items-center mt-4 text-sm">
            <span className="text-slate-500">
              {PORTFOLIO_DATA.education.year}
            </span>
            <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
              {PORTFOLIO_DATA.education.grade}
            </span>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-500" /> Certifications
        </h2>
        <div className="space-y-3">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="font-medium text-slate-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Coffee className="w-6 h-6 text-slate-600" /> Hobbies & Interests
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <Card className="p-6 bg-linear-to-br from-slate-50 to-white">
            <p className="text-slate-600 italic mb-6">
              "My background in mathematics drives my passion for algorithm
              efficiency and logical problem-solving in backend systems."
            </p>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.hobbies.map((hobby) => (
                <Badge
                  key={hobby}
                  className="bg-white border-slate-200 text-slate-600 py-2 px-4"
                >
                  {hobby}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-bold text-blue-800">
              Expressive side
            </div>
            <Code2 className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-sm text-blue-700/80">
            Love to read books and play ukelele.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
