import React from 'react';
import { Printer } from 'lucide-react';

interface MastheadProps {
  onOpenAssessment?: () => void;
  onPrint: () => void;
  onOpenBronnen?: () => void;
}

export const Masthead: React.FC<MastheadProps> = ({
  onPrint,
}) => {
  return (
    <header className="border-b-2 border-[#003340] pb-4 mb-8">
      <div className="flex justify-between items-center gap-4">
        <div>
          <span className="text-xs sm:text-sm text-[#003340]/85 font-medium">
            Voor adviseurs, management en (hoofd)docenten
          </span>
        </div>

        <div className="flex items-center shrink-0">
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#003340]/20 bg-white/70 text-xs text-[#003340] hover:border-[#d3104c] hover:text-[#d3104c] transition-all cursor-pointer font-medium shadow-2xs"
            title="Afdrukken of opslaan als PDF"
            aria-label="Afdrukken"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Afdrukken / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};

