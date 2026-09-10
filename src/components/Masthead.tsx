import React from 'react';
import { Printer, Sparkles, BookOpen, Compass, Download } from 'lucide-react';

interface MastheadProps {
  onOpenAssessment: () => void;
  onPrint: () => void;
  onOpenBronnen: () => void;
}

export const Masthead: React.FC<MastheadProps> = ({
  onOpenAssessment,
  onPrint,
  onOpenBronnen,
}) => {
  return (
    <header className="border-b-2 border-[#003340] pb-5 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#d3104c] block mb-1">
            Hogeschool Rotterdam
          </span>
          <div className="text-[11px] uppercase tracking-wider text-[#003340]/70 font-medium">
            Themagroep Studentgerichte Omgeving
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3 w-full sm:w-auto">
          <div className="text-[11px] uppercase tracking-wider text-[#003340]/65 text-left sm:text-right leading-tight">
            Voor docenten, management en adviseurs
            <span className="block text-[10px] text-[#003340]/50 mt-0.5">Versie 2.0 · Juni 2026</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onOpenAssessment}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#d3104c] text-white hover:bg-[#b41e4b] transition-colors shadow-sm cursor-pointer"
              title="Start de interactieve teamdialoog & checklist"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Team Toetstool & Advies</span>
            </button>

            <button
              onClick={onOpenBronnen}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#003340]/20 text-[#003340] hover:border-[#d3104c] hover:text-[#d3104c] transition-colors cursor-pointer"
              title="Bekijk de literatuur en bronnen"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Bronnenlijst</span>
            </button>

            <button
              onClick={onPrint}
              className="w-8 h-8 rounded-full border border-[#003340]/20 flex items-center justify-center text-[#003340] hover:border-[#d3104c] hover:text-[#d3104c] hover:bg-white transition-all cursor-pointer"
              title="Afdrukken of opslaan als PDF"
              aria-label="Afdrukken"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
