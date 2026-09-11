import React, { useState, useEffect } from 'react';
import { Masthead } from './components/Masthead';
import { InteractiveWheel } from './components/InteractiveWheel';
import { StepSection } from './components/StepSection';
import { DrawerDetail } from './components/DrawerDetail';
import { SourcesLibraryModal } from './components/SourcesLibraryModal';
import { PrintView } from './components/PrintView';
import { HrLogo } from './components/HrLogo';
import { StepNumber } from './types';
import { Info, BookOpen, ExternalLink, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeStep, setActiveStep] = useState<StepNumber>(1);
  const [openDrawerId, setOpenDrawerId] = useState<string | null>(null);
  const [isSourcesLibraryOpen, setIsSourcesLibraryOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll-spy to automatically update active step in interactive wheel
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const stepIds: StepNumber[] = [1, 2, 3, 4];
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
      {/* Main Page Container */}
      <main className="max-w-[1140px] mx-auto px-4 sm:px-8 py-8 sm:py-12 no-print relative">
        {/* Masthead */}
        <Masthead
          onPrint={handlePrint}
        />

        {/* Title Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#003340] leading-tight mb-3">
            Werken aan<br />
            aanwezigheids<span className="text-[#d3104c]">ethos</span>
          </h1>
          <p className="text-base sm:text-lg text-[#003340]/90 mb-2 leading-relaxed font-normal">
            Een gespreksleidraad over aanwezigheid.
          </p>
          <p className="text-xs sm:text-sm text-[#003340]/65 italic flex flex-wrap items-center gap-1.5">
            <span>Klik op</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 shadow-2xs not-italic">
              <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
              <span>Meer info</span>
            </span>
            <span>voor wetenschappelijke inzichten, praktijkvoorbeelden, media en concrete tools om mee aan de slag te gaan.</span>
          </p>
        </div>

        {/* Hero Section: Wicked Problem & Interactive Wheel */}
        <div className="space-y-6 mb-12">
          {/* Wicked Problem Callout Box */}
          <div className="bg-white border border-[#003340]/15 rounded-xl p-5 sm:p-6">
            <p className="text-sm sm:text-[15px] text-[#003340] leading-relaxed mb-3 font-medium">
              Aanwezigheid van studenten in de les is een <strong>wicked problem</strong>: veel actoren, veel factoren, en beleidskeuzes die elkaar beïnvloeden. Er is geen één magische oplossing. Wat wel werkt: zorgen dat de keuzes die je maakt op elkaar zijn afgestemd; binnen het team en tussen de feitelijke en normatieve dimensies.
            </p>
            <p className="text-sm text-[#003340]/80 leading-relaxed mb-3">
              Deze handreiking neemt je mee langs vier stappen om tot een onderbouwd advies of een afgestemde aanpak te komen.
            </p>
            <div className="pt-3 border-t border-[#003340]/10 text-xs text-[#003340]/70 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span>
                Gebaseerd op de workshop van <strong>Rick Ikkersheim (Inholland)</strong> in maart 2026 en lectoraatonderzoek van{' '}
                <a
                  href="https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00a0db] hover:underline inline-flex items-center gap-0.5 font-medium"
                >
                  Rutger Kappe (2026) <ExternalLink className="w-2.5 h-2.5" />
                </a>.
              </span>
            </div>
          </div>

          {/* Interactive Wheel */}
          <div className="bg-transparent py-2 sm:py-4">
            <div className="text-center mb-3">
              <h3 className="text-sm sm:text-base font-semibold text-[#003340]">
                Doorloop de vier stappen in het wiel voor het teamgesprek
              </h3>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 mt-0.5">
                Klik op een stap of cijfer om direct naar inzichten en praktische handvatten te gaan
              </p>
            </div>
            <InteractiveWheel activeStep={activeStep} onSelectStep={scrollToStep} />
          </div>
        </div>

        {/* 4 Steps Container */}
        <div className="relative space-y-2">
          <StepSection stepNumber={1} onOpenDimension={(id) => setOpenDrawerId(id)} />
          <StepSection stepNumber={2} onOpenDimension={(id) => setOpenDrawerId(id)} />
          <StepSection stepNumber={3} onOpenDimension={(id) => setOpenDrawerId(id)} />
          <StepSection stepNumber={4} onOpenDimension={(id) => setOpenDrawerId(id)} />
        </div>

        {/* Conclusion / Afsluiting Box */}
        <div className="bg-white border border-[#003340]/15 rounded-xl p-6 my-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d3104c] block mb-2">
            Tot slot
          </span>
          <p className="text-sm text-[#003340] leading-relaxed mb-4">
            Een aanwezigheidsethos bouw je niet in één gesprek. De vier stappen zijn geen eenmalige checklist, maar een leidraad die steeds opnieuw langsgelopen kan worden wanneer het curriculum verandert, de studentenpopulatie verschuift of het team roteert. De vier G's blijven daarbij het kompas: zodra één G gaat schuren, ligt daar het volgende gesprek.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#003340]/80 pt-3 border-t border-[#003340]/10 flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setIsSourcesLibraryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all font-medium text-xs shrink-0 cursor-pointer"
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
        <footer className="mt-14 pt-8 border-t border-[#003340]/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <HrLogo size="md" />
            <div className="border-l border-[#003340]/20 pl-4 py-0.5 text-left">
              <div className="font-semibold text-[#003340] text-xs">Themagroep Studentgerichte Omgeving</div>
              <div className="text-[11px] text-[#003340]/65 font-medium">2026</div>
            </div>
          </div>
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
