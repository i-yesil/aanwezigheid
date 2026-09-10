import React from 'react';
import { ALL_SOURCES, SourceItem } from '../data/sourcesData';
import {
  X,
  BookOpen,
  Scale,
  Award,
  Film,
  Hammer,
  ExternalLink,
  Printer
} from 'lucide-react';

interface SourcesLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SourcesLibraryModal: React.FC<SourcesLibraryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const categories: Array<{
    id: SourceItem['category'];
    label: string;
    icon: React.ReactNode;
    colorClass: string;
  }> = [
    {
      id: 'wetenschap',
      label: 'Wetenschappelijke literatuur & Onderzoek',
      icon: <BookOpen className="w-4 h-4 text-[#d3104c]" />,
      colorClass: 'border-[#d3104c]',
    },
    {
      id: 'wetgeving',
      label: 'Wetgeving (WHW)',
      icon: <Scale className="w-4 h-4 text-[#003340]" />,
      colorClass: 'border-[#003340]',
    },
    {
      id: 'jurisprudentie',
      label: 'Jurisprudentie (CBHO & CBE)',
      icon: <Award className="w-4 h-4 text-[#b41e4b]" />,
      colorClass: 'border-[#b41e4b]',
    },
    {
      id: 'media',
      label: 'Podcasts & Media',
      icon: <Film className="w-4 h-4 text-[#00a0db]" />,
      colorClass: 'border-[#00a0db]',
    },
    {
      id: 'tools',
      label: 'Praktijkinstrumenten & Canvassen (HR)',
      icon: <Hammer className="w-4 h-4 text-[#fcc200]" />,
      colorClass: 'border-[#fcc200]',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#003340]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#f7efe3] text-[#003340] w-full max-w-3xl rounded-xl shadow-2xl border border-[#003340]/20 flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 sm:px-6 bg-[#003340] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#d3104c] text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                Geraadpleegde Literatuur en Bronnen
              </h2>
              <p className="text-xs text-white/70 mt-0.5">
                Overzicht van alle aangehaalde publicaties, wetgeving en jurisprudentie
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              title="Afdrukken"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content: Clean, categorized bibliography list */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm">
          {categories.map((cat) => {
            const items = ALL_SOURCES.filter((s) => s.category === cat.id);
            if (items.length === 0) return null;

            return (
              <section key={cat.id} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-[#003340]/15 pb-1.5">
                  {cat.icon}
                  <h3 className="font-bold text-[#003340] text-sm uppercase tracking-wide">
                    {cat.label}
                  </h3>
                  <span className="text-[11px] text-[#003340]/60 font-mono">
                    ({items.length})
                  </span>
                </div>

                <div className="space-y-2.5">
                  {items.map((s) => (
                    <div
                      key={s.id}
                      className="bg-white border border-[#003340]/10 rounded-lg p-3 sm:p-3.5 shadow-2xs hover:border-[#003340]/30 transition-all text-xs leading-relaxed"
                    >
                      <div className="font-semibold text-[#003340] flex items-start justify-between gap-2">
                        <span>
                          {s.authors ? `${s.authors} ` : ''}
                          {s.year ? `(${s.year}). ` : ''}
                          <span className="italic">{s.title}</span>
                          {s.sourceOrPublisher ? `. ${s.sourceOrPublisher}` : ''}
                          {s.doiOrRef && !s.doiOrRef.startsWith('http') ? ` [${s.doiOrRef}]` : ''}
                        </span>
                        {s.url && (
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-[#00a0db] hover:underline font-normal shrink-0 ml-2 mt-0.5"
                          >
                            <span>Open bron</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {s.summary && (
                        <p className="text-[#003340]/75 mt-1 text-[11px]">
                          {s.summary}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-white border-t border-[#003340]/10 flex items-center justify-between text-xs text-[#003340]/70">
          <div>
            Totaal: <strong>{ALL_SOURCES.length}</strong> referenties
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#003340] text-white hover:bg-[#003340]/90 transition-colors cursor-pointer"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};
