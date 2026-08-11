import { Mail, Phone, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "../../utils";
import { SectionWrapper } from "../SectionWrapper";

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="mb-20">
      <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-10 md:p-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let's engineer something scalable.
          </h2>
          <p className="text-slate-300 mb-12 max-w-2xl text-lg">
            I’m open to Senior Backend and Full Stack opportunities where I can build scalable, 
            reliable solutions using Java, Spring Boot, Microservices, and React.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 border border-slate-700 group-hover:border-blue-500 shadow-lg group-hover:shadow-blue-900/20">
                <Mail className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors font-medium text-lg">
                {PORTFOLIO_DATA.personal.email}
              </span>
            </a>

            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone}`}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 border border-slate-700 group-hover:border-blue-500 shadow-lg group-hover:shadow-blue-900/20">
                <Phone className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors font-medium text-lg">
                {PORTFOLIO_DATA.personal.phone}
              </span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 border border-slate-700 group-hover:border-blue-500 shadow-lg group-hover:shadow-blue-900/20">
                <Linkedin className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors font-medium text-lg">
                LinkedIn Profile
              </span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
