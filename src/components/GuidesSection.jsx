import React, { useState } from 'react';
import { maintenanceGuides, buyersChecklist } from '../data/guides';
import { BookOpen, CheckCircle, Wrench, Gauge, Droplet, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const iconMap = {
  Wrench: Wrench,
  Gauge: Gauge,
  Droplet: Droplet,
  Zap: Zap
};

export default function GuidesSection({ sectionRef }) {
  const [activeTab, setActiveTab] = useState('maintenance');
  const [expandedGuide, setExpandedGuide] = useState(null);

  return (
    <section ref={sectionRef} id="guides" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-turbo-amber mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white uppercase tracking-wide">
            Automotive Ownership & Maintenance Guides
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Expert protocols for chain hygiene, thermal fluid management, pre-purchase verification, and high-performance track prep.
          </p>

          {/* Guide Sub-tabs */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'maintenance'
                  ? 'bg-racing-red text-white shadow-lg shadow-racing-red/20'
                  : 'bg-carbon-800 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              Routine Maintenance Protocols
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'checklist'
                  ? 'bg-racing-red text-white shadow-lg shadow-racing-red/20'
                  : 'bg-carbon-800 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              Pre-Purchase Checklists
            </button>
          </div>
        </div>

        {/* Tab 1: Maintenance Guides */}
        {activeTab === 'maintenance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenanceGuides.map((guide) => {
              const Icon = iconMap[guide.icon] || Wrench;
              const isExpanded = expandedGuide === guide.id;

              return (
                <div 
                  key={guide.id}
                  className="glass-card rounded-2xl p-6 border border-white/10 text-left transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-racing-red/10 border border-racing-red/30 flex items-center justify-center text-racing-red">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-turbo-amber px-2 py-0.5 bg-turbo-amber/10 rounded-md">
                          {guide.target}
                        </span>
                        <h3 className="text-lg font-display font-bold text-white mt-1">
                          {guide.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0 font-medium">{guide.readTime}</span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {guide.summary}
                  </p>

                  {/* Expandable Step details */}
                  {isExpanded ? (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2.5">
                      <div className="text-xs uppercase font-bold text-gray-400 tracking-wider">Step-by-Step Procedure:</div>
                      {guide.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <span className="w-5 h-5 rounded-full bg-carbon-700 text-racing-red font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{step}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <button
                    onClick={() => setExpandedGuide(isExpanded ? null : guide.id)}
                    className="mt-3 flex items-center gap-1.5 text-xs font-bold text-racing-red hover:text-white transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Steps' : 'Read Action Steps'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Buyers Checklist */}
        {activeTab === 'checklist' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buyersChecklist.map((group, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10 text-left">
                <h3 className="text-xl font-display font-bold text-white mb-4 pb-3 border-b border-white/10 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-volt-cyan" />
                  {group.title}
                </h3>
                <div className="space-y-3.5">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3 p-3 rounded-xl bg-carbon-800/60 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-racing-red mt-1.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
