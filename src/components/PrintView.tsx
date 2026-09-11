import React from 'react';
import { DIMENSIONS, STEPS } from '../data/attendanceData';
import { ALL_SOURCES } from '../data/sourcesData';

export const PrintView: React.FC = () => {
  const wetenschapSources = ALL_SOURCES.filter(s => s.category === 'wetenschap');
  const wetgevingSources = ALL_SOURCES.filter(s => s.category === 'wetgeving');
  const jurisprudentieSources = ALL_SOURCES.filter(s => s.category === 'jurisprudentie');
  const mediaSources = ALL_SOURCES.filter(s => s.category === 'media');
  const toolSources = ALL_SOURCES.filter(s => s.category === 'tools');

  return (
    <div className="hidden print:block text-black p-4 space-y-6">
      <div className="border-b-2 border-black pb-3">
        <h1 className="text-xl font-bold uppercase tracking-wider">
          Werken aan Aanwezigheidsethos
        </h1>
        <p className="text-xs text-neutral-700 font-medium">
          Een gespreksleidraad over aanwezigheid.
        </p>
        <p className="text-[11px] text-neutral-600 mt-1 italic">
          Aanwezigheid van studenten in de les is een wicked problem: veel actoren, veel factoren, en beleidskeuzes die elkaar beïnvloeden. Er is geen één magische oplossing. Wat wel werkt: zorgen dat de keuzes die je maakt op elkaar zijn afgestemd; binnen het team en tussen de feitelijke en normatieve dimensies.
        </p>
      </div>

      <div>
        <h2 className="text-base font-bold mb-3 border-b border-neutral-300 pb-1 text-[#d3104c]">
          Wetenschappelijke inzichten per dimensie
        </h2>

        <div className="space-y-4 text-xs">
          {STEPS.map((step) => (
            <div key={step.number} className="space-y-2">
              <div
                className="font-bold uppercase tracking-wider px-2 py-1 text-white text-[11px] rounded"
                style={{ backgroundColor: step.color }}
              >
                Stap {step.number} · {step.name} ({step.leadQuestion})
              </div>

              {step.dimensions.map((dimId) => {
                const dim = DIMENSIONS[dimId];
                if (!dim) return null;
                return (
                  <div key={dim.id} className="pl-3 border-l-2 border-neutral-300 space-y-1">
                    <h4 className="font-bold text-[#003340] text-xs">{dim.name}</h4>
                    <ul className="list-disc pl-4 space-y-0.5 text-neutral-800 text-[11px]">
                      {dim.insights.map((ins, iIdx) => (
                        <li key={iIdx}>
                          {ins.text} <em className="text-neutral-600">({ins.citation})</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-neutral-400 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#d3104c]">
          Geraadpleegde bronnen, wetgeving en jurisprudentie ({ALL_SOURCES.length} bronnen)
        </h2>

        {/* Wetenschap */}
        <div>
          <h3 className="text-xs font-bold uppercase text-[#003340] mb-1">
            Wetenschappelijke Publicaties ({wetenschapSources.length})
          </h3>
          <ul className="text-[10px] space-y-1 text-neutral-800 pl-4 list-disc">
            {wetenschapSources.map((s) => (
              <li key={s.id}>
                <strong>{s.authors}</strong> ({s.year}). <em>{s.title}</em>. {s.sourceOrPublisher}.
              </li>
            ))}
          </ul>
        </div>

        {/* Wetgeving */}
        <div>
          <h3 className="text-xs font-bold uppercase text-[#003340] mb-1">
            Wetgeving WHW ({wetgevingSources.length})
          </h3>
          <ul className="text-[10px] space-y-1 text-neutral-800 pl-4 list-disc">
            {wetgevingSources.map((s) => (
              <li key={s.id}>
                <strong>{s.title}</strong>{s.sourceOrPublisher ? ` — ${s.sourceOrPublisher}` : ''}
              </li>
            ))}
          </ul>
        </div>

        {/* Jurisprudentie */}
        <div>
          <h3 className="text-xs font-bold uppercase text-[#003340] mb-1">
            Jurisprudentie ({jurisprudentieSources.length})
          </h3>
          <ul className="text-[10px] space-y-1 text-neutral-800 pl-4 list-disc">
            {jurisprudentieSources.map((s) => (
              <li key={s.id}>
                <strong>{s.title}</strong> ({s.year}){s.sourceOrPublisher ? ` — ${s.sourceOrPublisher}` : ''}
              </li>
            ))}
          </ul>
        </div>

        {/* Media & Podcasts */}
        <div>
          <h3 className="text-xs font-bold uppercase text-[#003340] mb-1">
            Media & Podcasts ({mediaSources.length})
          </h3>
          <ul className="text-[10px] space-y-1 text-neutral-800 pl-4 list-disc">
            {mediaSources.map((s) => (
              <li key={s.id}>
                <strong>{s.title}</strong> ({s.authors}, {s.year})
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xs font-bold uppercase text-[#003340] mb-1">
            Praktijkinstrumenten & Canvassen ({toolSources.length})
          </h3>
          <ul className="text-[10px] space-y-1 text-neutral-800 pl-4 list-disc">
            {toolSources.map((s) => (
              <li key={s.id}>
                <strong>{s.title}</strong> — {s.authors} ({s.year})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
