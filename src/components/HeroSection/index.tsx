import { Award, ChevronRight, Code2, MapPin, Zap } from "lucide-react";
import { Badge } from "../Badge";
import { PORTFOLIO_DATA } from "../../utils";

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-white"></div>
      <div className="absolute top-20 right-0 -z-10 opacity-10 transform translate-x-1/3">
        <Code2 size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Open to Opportunities
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Building Robust <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Backend Systems
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Hi, I'm {PORTFOLIO_DATA.personal.name}. A{" "}
            {PORTFOLIO_DATA.personal.title} focused on microservices
            architecture, cloud infrastructure, and performance optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              View Work <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {PORTFOLIO_DATA.personal.location}
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" /> 30% Perf Boost
            </div>
          </div>
        </div>

        {/* Code/Terminal Visual */}
        <div className="hidden md:block relative">
          <div className="bg-slate-900 rounded-lg shadow-2xl p-4 font-mono text-sm leading-relaxed text-slate-300 border border-slate-700">
            <div className="flex gap-2 mb-4 border-b border-slate-700 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div>
              <span className="text-purple-400">class</span>{" "}
              <span className="text-yellow-400">SnehaMahato</span>{" "}
              <span className="text-purple-400">extends</span>{" "}
              <span className="text-yellow-400">BackendEngineer</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-slate-400">// Core proficiency</span>
            </div>
            <div className="pl-4 mb-2">
              <span className="text-blue-400">const</span> skills = [
              <span className="text-green-400">"Java"</span>,{" "}
              <span className="text-green-400">"Spring Boot"</span>,{" "}
              <span className="text-green-400">"Microservices"</span>];
            </div>
            <div className="pl-4">
              <span className="text-slate-400">// Impact metrics</span>
            </div>
            <div className="pl-4 mb-2">
              <span className="text-blue-400">public</span>{" "}
              <span className="text-yellow-400">optimizeSystem</span>() {"{"}
            </div>
            <div className="pl-8 text-green-400">
              return "30% Performance Improvement";
            </div>
            <div className="pl-4">{"}"}</div>
            <div>{"}"}</div>
            <div className="mt-4 animate-pulse">
              <span className="text-green-500">➜</span>{" "}
              <span className="text-white">_</span>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase font-semibold">
                Certification
              </div>
              <div className="font-bold text-slate-800">
                AWS Cloud Practitioner
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
