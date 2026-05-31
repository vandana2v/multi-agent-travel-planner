import ReactMarkdown from "react-markdown";
import { MapPin, CalendarDays, Sparkles } from "lucide-react";

export default function ResultSection({ tripData }) {
  return (
    <div className="mt-12 animate-fadeIn">
      <div className="backdrop-blur-xl bg-white/10 border border-purple-500/30 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.25)] overflow-hidden">

        {/* Header */}
        <div className="p-8 border-b border-purple-500/20 bg-gradient-to-r from-purple-900/40 to-indigo-900/40">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="text-purple-400" size={30} />
            <h2 className="text-4xl font-bold text-white">
              Your AI Travel Plan
            </h2>
          </div>

          <div className="flex justify-center gap-6 mt-4 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{tripData.destination}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>{tripData.days} Days</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          <div className="prose prose-invert max-w-none
                          prose-headings:text-purple-300
                          prose-headings:font-bold
                          prose-h1:text-4xl
                          prose-h2:text-3xl
                          prose-h3:text-2xl
                          prose-p:text-gray-200
                          prose-strong:text-white
                          prose-li:text-gray-300
                          prose-li:marker:text-purple-400">

            <ReactMarkdown>
              {tripData.trip_plan}
            </ReactMarkdown>

          </div>
        </div>
      </div>
    </div>
  );
}