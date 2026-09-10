import React, { useState, useEffect } from 'react';
import { Masthead } from './components/Masthead';
import { StickyStepBar } from './components/StickyStepBar';
import { InteractiveWheel } from './components/InteractiveWheel';
import { StepSection } from './components/StepSection';
import { DrawerDetail } from './components/DrawerDetail';
import { DialogueAssessmentModal } from './components/DialogueAssessmentModal';
import { SourcesLibraryModal } from './components/SourcesLibraryModal';
import { PrintView } from './components/PrintView';
import { StepNumber } from './types';
import { Sparkles, Info, BookOpen, ExternalLink, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeStep, setActiveStep] = useState<StepNumber>(1);
  const [openDrawerId, setOpenDrawerId] = useState<string | null>(null);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [isSourcesLibraryOpen, setIsSourcesLibraryOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll-spy to automatically update active step in sticky bar
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const stepIds: StepNumber[] = [1, 2, 3, 4, 5];
      const scrollThreshold = window.innerHeight * 0.35;

      for (let i = stepIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(`stap-${stepIds[i]}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollThreshold) {
            setActiveStep(stepIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (stepNumber: StepNumber) => {
    setActiveStep(stepNumber);
    if (stepNumber === 'bronnen') {
      setOpenDrawerId('p-bronnen');
      return;
    }
    const el = document.getElementById(`stap-${stepNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f7efe3] text-[#003340] font-['Poppins',system-ui,sans-serif]">
      {/* Sticky Step Navigation Bar */}
      <div className="no-print">
        <StickyStepBar activeStep={activeStep} onSelectStep={scrollToStep} />
      </div>

      {/* Main Page Container */}
      <main className="max-w-[920px] mx-auto px-4 sm:px-8 py-8 sm:py-12 no-print relative">
        {/* Masthead */}
        <Masthead
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onPrint={handlePrint}
          onOpenBronnen={() => setIsSourcesLibraryOpen(true)}
        />

        {/* Title Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#003340] leading-tight mb-3">
            Werken aan<br />
            aanwezigheids<span className="text-[#d3104c]">ethos</span>
          </h1>
          <p className="text-base sm:text-lg text-[#003340]/90 max-w-[62ch] mb-2 leading-relaxed font-normal">
            Een stapsgewijs kader voor het gesprek over aanwezigheid, zonder het probleem tot "wel of geen plicht" te reduceren.
          </p>
          <p className="text-xs sm:text-sm text-[#003340]/65 italic max-w-[62ch]">
            Klik op{' '}
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#d3104c] text-[#d3104c] text-[10px] font-serif font-bold align-middle mx-1">
              i
            </span>{' '}
            voor wetenschappelijke inzichten, praktijkvoorbeelden, media en concrete tools om mee aan de slag te gaan.
          </p>
        </div>

        {/* Hero Section: Wicked Problem & Interactive Wheel */}
        <div className="space-y-6 mb-12">
          {/* Wicked Problem Callout Box */}
          <div className="bg-white border-l-4 border-l-[#d3104c] border border-[#003340]/10 rounded-r-lg p-5 sm:p-6 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d3104c] block mb-2">
              Voer het gesprek
            </span>
            <p className="text-sm sm:text-[15px] text-[#003340] leading-relaxed mb-3 font-medium">
              Aanwezigheid is een <strong>wicked problem</strong>: veel actoren, veel factoren, en beleidskeuzes die elkaar beïnvloeden. Er is geen één magische oplossing. Wat wel werkt: zorgen dat de keuzes die je maakt op elkaar zijn afgestemd; binnen het team en tussen de feitelijke en normatieve dimensies.
            </p>
            <p className="text-sm text-[#003340]/80 leading-relaxed mb-3">
              Deze handreiking neemt je mee langs vijf stappen om tot een onderbouwd advies of een afgestemde aanpak te komen.
            </p>
            <div className="pt-3 border-t border-[#003340]/10 text-xs text-[#003340]/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span>
                Gebaseerd op de workshop van <strong>Rick Ikkersheim</strong> en lectoraatonderzoek van{' '}
                <a
                  href="https://www.inholland.nl/onderzoek/lectoraten/studiesucces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00a0db] hover:underline inline-flex items-center gap-0.5 font-medium"
                >
                  Rutger Kappe <ExternalLink className="w-2.5 h-2.5" />
                </a>.
              </span>
              <button
                onClick={() => setIsAssessmentOpen(true)}
                className="text-xs font-semibold text-[#d3104c] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Team Toetstool</span>
              </button>
            </div>
          </div>

          {/* Interactive Wheel */}
          <div className="bg-white/40 border border-[#003340]/10 rounded-xl p-4 sm:p-6 shadow-2xs">
            <div className="text-center mb-2">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#003340]/60">
                Interactief Overzicht
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-[#003340]">
                Klik op een segment of cijfer om direct naar de stap te gaan
              </h3>
            </div>
            <InteractiveWheel activeStep={activeStep} onSelectStep={scrollToStep} />
          </div>
        </div>

        {/* 5 Steps Container with vertical connecting line */}
        <div className="relative before:content-[''] before:absolute before:left-4.5 sm:before:left-4.5 before:top-4 before:bottom-4 before:w-[1px] before:bg-[#003340]/15">
          <StepSection stepNumber={1} onOpenDimension={(id) => setOpenDrawerId(id)} />
          <StepSection stepNumber={2} onOpenDimension={(id) => setOpenDrawerId(id)} />
          <StepSection stepNumber={3} onOpenDimension={(id) => setOpenDrawerId(id)} />
          <StepSection stepNumber={4} onOpenDimension={(id) => setOpenDrawerId(id)} />
          <StepSection stepNumber={5} onOpenDimension={(id) => setOpenDrawerId(id)} />
        </div>

        {/* Conclusion / Afsluiting Box */}
        <div className="bg-white border-l-4 border-l-[#d3104c] border border-[#003340]/10 rounded-r-lg p-6 my-10 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d3104c] block mb-2">
            Tot slot
          </span>
          <p className="text-sm text-[#003340] leading-relaxed mb-4">
            Een aanwezigheidsethos bouw je niet in één gesprek. De vijf stappen zijn geen eenmalige checklist, maar een leidraad die steeds opnieuw langsgelopen kan worden wanneer het curriculum verandert, de studentenpopulatie verschuift of het team roteert. De vier G's blijven daarbij het kompas: zodra één G gaat schuren, ligt daar het volgende gesprek.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#003340]/80 pt-3 border-t border-[#003340]/10 flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setIsSourcesLibraryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all font-medium text-xs shrink-0 cursor-pointer shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Bronnenlijst</span>
            </button>
            <span className="text-[11px] text-[#003340]/70">
              Bekijk het overzicht van alle geraadpleegde wetenschappelijke publicaties, wetgeving en jurisprudentie.
            </span>
          </div>
        </div>

        {/* Footer / Colofon */}
        <footer className="mt-12 pt-6 border-t border-[#003340]/15 flex flex-col sm:flex-row justify-between items-center text-xs text-[#003340]/60 uppercase tracking-wider font-medium gap-2">
          <span>Themagroep Studentgerichte Omgeving · Hogeschool Rotterdam</span>
          <span>Versie 2.0 · Juni 2026</span>
        </footer>
      </main>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="no-print fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#003340] text-white shadow-lg flex items-center justify-center hover:bg-[#d3104c] transition-all z-40 cursor-pointer"
          title="Naar boven"
          aria-label="Naar boven"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Slide-over Detail Drawer */}
      {openDrawerId && (
        <div className="no-print">
          <DrawerDetail
            dimensionId={openDrawerId}
            onClose={() => setOpenDrawerId(null)}
            onNavigate={(id) => setOpenDrawerId(id)}
          />
        </div>
      )}

      {/* Interactive Team Dialogue & Assessment Tool Modal */}
      {isAssessmentOpen && (
        <div className="no-print">
          <DialogueAssessmentModal
            isOpen={isAssessmentOpen}
            onClose={() => setIsAssessmentOpen(false)}
          />
        </div>
      )}

      {/* Complete Sources & References Library Modal */}
      {isSourcesLibraryOpen && (
        <div className="no-print">
          <SourcesLibraryModal
            isOpen={isSourcesLibraryOpen}
            onClose={() => setIsSourcesLibraryOpen(false)}
          />
        </div>
      )}

      {/* Print-Only Layout */}
      <PrintView />
    </div>
  );
}
