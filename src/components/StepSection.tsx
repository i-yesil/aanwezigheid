import React, { useState } from 'react';
import { DIMENSIONS } from '../data/attendanceData';
import { StepNumber } from '../types';
import { Info, ArrowRight, BookOpen, Scale, Sparkles, ExternalLink } from 'lucide-react';

interface StepSectionProps {
  stepNumber: StepNumber;
  onOpenDimension: (dimensionId: string, initialTab?: string) => void;
}

export const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  onOpenDimension,
}) => {
  const [activeLegalPanel, setActiveLegalPanel] = useState<'whw' | 'randvoorwaarden' | 'jurisprudentie' | null>(null);
  const [isDutyOpen, setIsDutyOpen] = useState<boolean>(false);

  const toggleLegalPanel = (panel: 'whw' | 'randvoorwaarden' | 'jurisprudentie', e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsDutyOpen(true);
    setActiveLegalPanel(prev => (prev === panel ? null : panel));
  };
  if (stepNumber === 1) {
    return (
      <section id="stap-1" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#d3104c] text-white flex items-center justify-center font-semibold text-lg">
          1
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#d3104c] mb-1.5">
            Feitelijke dimensie
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Wat is eigenlijk het probleem?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Voordat we over een maatregel spreken: waar zit het probleem eigenlijk? Aanwezigheid heeft zeven feitelijke domeinen. Vaak wijst het werkelijke probleem naar een ander domein dan we denken. Vertrekpunt is wel steeds dezelfde vraag: wie is onze student eigenlijk?
        </p>

        {/* Vertrekpunt: Ken je student */}
        <div className="bg-white border border-[#003340]/15 rounded-md p-4 mb-6 flex items-center justify-between gap-4 hover:border-[#d3104c]/50 transition-all">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#d3104c] block mb-0.5">
              Ken je student · Vertrekpunt
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#003340] block">
              Zicht op de studentpopulatie
            </span>
            <span className="text-xs sm:text-[13px] text-[#003340]/70 block mt-0.5">
              Wie is onze student eigenlijk? Leefwereld, belasting, behoeften en cherry-picking.
            </span>
          </div>
          <button
            onClick={() => onOpenDimension('p-doelgroep')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 hover:bg-[#d3104c] hover:text-white transition-all shrink-0 cursor-pointer"
            title="Inzichten & Tools Studentpopulatie"
          >
            <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center font-serif italic text-[11px] font-bold">i</span>
            <span>Meer info</span>
          </button>
        </div>

        {/* 2 Column Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1: Onderwijsteams */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#d3104c] mb-2 pb-1 border-b border-[#003340]/10">
              Onderwijsteams
            </h3>
            <div className="space-y-2">
              {/* Onderwijskundig */}
              <div
                onClick={() => onOpenDimension('p-didactiek')}
                className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#d3104c]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">Onderwijskundig</div>
                  <div className="text-xs text-[#003340]/70">Activerende didactiek, constructive alignment, docentkwaliteit</div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shrink-0"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>

              {/* Ontwerp */}
              <div
                onClick={() => onOpenDimension('p-ontwerp')}
                className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#d3104c]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">Curriculair Ontwerp</div>
                  <div className="text-xs text-[#003340]/70">Rooster-/deadlineconflicten, online alternatieven, interdependentie</div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shrink-0"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>

              {/* Pedagogiek */}
              <div
                onClick={() => onOpenDimension('p-pedagogiek')}
                className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#d3104c]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">Pedagogiek</div>
                  <div className="text-xs text-[#003340]/70">Gedragsverandering door intrinsiek en extrinsiek te motiveren</div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shrink-0"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Leidinggevenden, beleidsmakers, staf */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#d3104c] mb-2 pb-1 border-b border-[#003340]/10">
              Leidinggevenden & Stafdiensten
            </h3>
            <div className="space-y-2">
              {/* Beleid */}
              <div
                onClick={() => onOpenDimension('p-beleid')}
                className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#d3104c]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">Beleid</div>
                  <div className="text-xs text-[#003340]/70">Eenduidige definitie, zwaarwegend beleid, coulanceregeling</div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shrink-0"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>

              {/* Technisch */}
              <div
                onClick={() => onOpenDimension('p-technisch')}
                className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#d3104c]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">Registratie</div>
                  <div className="text-xs text-[#003340]/70">Registratiesysteem, betrouwbare data, lage administratielast</div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shrink-0"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>

              {/* Team */}
              <div
                onClick={() => onOpenDimension('p-team')}
                className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#d3104c]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">Teamethos</div>
                  <div className="text-xs text-[#003340]/70">Eenduidige, hoge verwachtingen; geen dubbele signalen</div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shrink-0"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>

              {/* Logistiek */}
              <div
                onClick={() => onOpenDimension('p-logistiek')}
                className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#d3104c]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
              >
                <div>
                  <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">Onderwijslogistiek & Rooster</div>
                  <div className="text-xs text-[#003340]/70">Rooster- en organisatiekwaliteit: tussenuren en bloktijden</div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shrink-0"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (stepNumber === 2) {
    return (
      <section id="stap-2" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#003340] text-white flex items-center justify-center font-semibold text-lg">
          2
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#003340] mb-1.5">
            Normatieve dimensie
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Welke waarden spelen hier?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Feiten alleen wijzen geen aanpak aan. Elke feitelijke dimensie rust op waarden die vaak impliciet blijven. De drie perspectieven hieronder maken die waarden bespreekbaar; wat we normaal vinden, wat we van elkaar verwachten en waarom we aanwezigheid waarderen.
        </p>

        {/* 3 Perspectives Individual Cards - Naast elkaar in 3 kolommen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Sociologisch perspectief */}
          <div
            onClick={() => onOpenDimension('p-soc')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 sm:p-4 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="text-sm sm:text-[15px] font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors mb-1.5">
                Sociologisch perspectief
              </div>
              <p className="text-xs text-[#003340]/75 leading-relaxed">
                Normvorming: wat vinden we normaal? Hoe wegen we effecten op de groep die wél komt?
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#003340] text-[#003340] bg-[#003340]/5 group-hover:bg-[#003340] group-hover:text-white transition-all shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* Psychologisch perspectief */}
          <div
            onClick={() => onOpenDimension('p-psy')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 sm:p-4 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="text-sm sm:text-[15px] font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors mb-1.5">
                Psychologisch perspectief
              </div>
              <p className="text-xs text-[#003340]/75 leading-relaxed">
                Psychologisch contract: wat verwachten student en opleiding van elkaar?
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#003340] text-[#003340] bg-[#003340]/5 group-hover:bg-[#003340] group-hover:text-white transition-all shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* Onderwijskundig perspectief */}
          <div
            onClick={() => onOpenDimension('p-ok')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 sm:p-4 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="text-sm sm:text-[15px] font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors mb-1.5">
                Onderwijskundig perspectief
              </div>
              <p className="text-xs text-[#003340]/75 leading-relaxed">
                Leereffect: doet aanwezigheid er aantoonbaar toe, of is het moralisme?
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#003340] text-[#003340] bg-[#003340]/5 group-hover:bg-[#003340] group-hover:text-white transition-all shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (stepNumber === 3) {
    return (
      <section id="stap-3" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#00b0eb] text-white flex items-center justify-center font-semibold text-lg">
          3
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#00b0eb] mb-1.5">
            Handelingsperspectieven
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Hoe werken we aan aanwezigheid?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Aanwezigheid bevorder je niet met één maatregel, maar door drie handelingsperspectieven te verkennen: kunnen, willen en moeten. Kúnnen studenten er zijn, zonder onnodige drempels in rooster en organisatie? Wíllen ze er zijn, omdat de les merkbaar meerwaarde heeft en ze zich verbonden voelen? En wat verwachten we van elkaar, en wanneer is een formele plicht passend (moeten)?
        </p>

        {/* 3 Kaarten in 3 kolommen: Kunnen, Willen, Moeten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 items-stretch">
          {/* Tegel 1 · Kunnen */}
          <div
            onClick={() => onOpenDimension('p-routeA')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex flex-col h-full group"
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b0eb] bg-[#00b0eb]/10 px-2.5 py-0.5 rounded">
                KUNNEN
              </span>
              <span className="text-[11px] text-[#003340]/65 font-medium italic whitespace-nowrap">
                Logistiek · Curriculair ontwerp
              </span>
            </div>
            <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-2">
              Zorg dat studenten kúnnen komen
            </h4>
            <p className="text-xs sm:text-[13px] text-[#003340]/80 leading-relaxed mb-3">
              Haal de praktische drempels weg die aanwezigheid onlogisch of onhaalbaar maken.
            </p>
            <ul className="flex-1 space-y-2 text-xs text-[#003340]/85 bg-[#fbfaf5] p-3 rounded border border-[#003340]/10 mb-3">
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                <span><strong>Roostert slim:</strong> plan geen losse lesuren waarvoor studenten enkel voor één les hoeven te reizen.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                <span><strong>Programmeert aaneengesloten:</strong> voorkom versnippering en loze tussenuren die de dag onnodig lang maken.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                <span><strong>Bewaakt studeerbaarheid:</strong> stem deadlines tussen parallelle vakken af, zodat aanwezigheid niet botst met piekdruk.</span>
              </li>
            </ul>
            <div className="mt-auto pt-2 flex justify-end">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0">
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* Tegel 2 · Willen */}
          <div
            onClick={() => onOpenDimension('p-routeB')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex flex-col h-full group"
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b0eb] bg-[#00b0eb]/10 px-2.5 py-0.5 rounded">
                WILLEN
              </span>
              <span className="text-[11px] text-[#003340]/65 font-medium italic whitespace-nowrap">
                Didactiek · Pedagogiek
              </span>
            </div>
            <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-2">
              Zorg dat studenten wíllen komen
            </h4>
            <p className="text-xs sm:text-[13px] text-[#003340]/80 leading-relaxed mb-3">
              Maak aanwezigheid de moeite waard, zodat komen een logische keuze wordt.
            </p>
            <ul className="flex-1 space-y-2 text-xs text-[#003340]/85 bg-[#fbfaf5] p-3 rounded border border-[#003340]/10 mb-3">
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                <span><strong>Bied merkbare meerwaarde:</strong> zorg dat wat in de les gebeurt iets toevoegt dat opnames of zelfstudie niet kunnen vervangen.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                <span><strong>Kies activerende werkvormen:</strong> maak van de les een actieve, interactieve bijeenkomst, geen passieve overdracht.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                <span><strong>Investeer in binding:</strong> versterk docentnabijheid, onderling contact en een warme follow-up bij verzuim (sense of belonging).</span>
              </li>
            </ul>
            <div className="mt-auto pt-2 flex justify-end">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0">
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* Tegel 3 · Moeten */}
          <div
            onClick={() => onOpenDimension('p-routeC')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex flex-col h-full group"
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00b0eb] bg-[#00b0eb]/10 px-2.5 py-0.5 rounded">
                MOETEN
              </span>
              <span className="text-[11px] text-[#003340]/65 font-medium italic whitespace-nowrap">
                Beleid · Teamethos · Registratie
              </span>
            </div>
            <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-2">
              Zorg dat studenten weten waarom ze móeten komen
            </h4>
            <p className="text-xs sm:text-[13px] text-[#003340]/80 leading-relaxed mb-3">
              Maak samen met studenten helder wat je van elkaar verwacht en wanneer een formele eis past.
            </p>
            <ul className="flex-1 space-y-2.5 text-xs text-[#003340]/85 bg-[#fbfaf5] p-3 rounded border border-[#003340]/10 mb-3">
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Maak verwachtingen eenduidig:</strong> één lijn als team, zonder dubbele signalen.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Doe een beroep op de beroepshouding:</strong> samenwerken en er zijn voor elkaar als reden om te komen.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b0eb] font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Maak deelname noodzakelijk:</strong> oefening, feedback en vaardigheden die alleen in de les te halen zijn en terugkomen in de toets.</span>
              </li>
            </ul>

            {/* Uitgeklapte toelichting formele aanwezigheidsplicht */}
            <div
              id="moeten-duty-content"
              className={`bg-[#e6f7fd] rounded-md text-[#003340] mb-3 p-3 transition-all ${isDutyOpen ? 'block' : 'hidden print:block'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#003340]/10">
                <span className="font-bold text-xs sm:text-[12.5px] text-[#003340]">
                  Formele aanwezigheidsplicht
                </span>
                <button
                  type="button"
                  onClick={() => setIsDutyOpen(false)}
                  className="text-[11px] text-[#008bb8] hover:underline font-semibold cursor-pointer print:hidden"
                >
                  Sluiten
                </button>
              </div>
              <p className="text-[11.5px] sm:text-[12px] text-[#003340]/90 leading-relaxed mb-2">
                Pas als deelname echt noodzakelijk is voor het leren, en alleen bij een praktische oefening in de OER.
              </p>

                    {/* Drie pillen binnen het blauwe vlak */}
                    <div className="flex flex-wrap items-center gap-1.5" role="tablist">
                      <button
                        type="button"
                        id="moeten-pill-whw"
                        role="tab"
                        aria-selected={activeLegalPanel === 'whw'}
                        aria-expanded={activeLegalPanel === 'whw'}
                        aria-controls="moeten-panel-whw"
                        onClick={(e) => toggleLegalPanel('whw', e)}
                        className={`text-[12px] py-[2px] px-[10px] rounded-[6px] border-0 transition-all cursor-pointer select-none text-[#003340] inline-flex items-center gap-1 shrink-0 ${
                          activeLegalPanel === 'whw'
                            ? 'bg-[#00b0eb] font-semibold'
                            : 'bg-white font-medium hover:bg-white/80'
                        }`}
                      >
                        <span>WHW-artikelen</span>
                        <span className="text-[10px] leading-none opacity-80">{activeLegalPanel === 'whw' ? '▴' : '▾'}</span>
                      </button>
                      <button
                        type="button"
                        id="moeten-pill-randvoorwaarden"
                        role="tab"
                        aria-selected={activeLegalPanel === 'randvoorwaarden'}
                        aria-expanded={activeLegalPanel === 'randvoorwaarden'}
                        aria-controls="moeten-panel-randvoorwaarden"
                        onClick={(e) => toggleLegalPanel('randvoorwaarden', e)}
                        className={`text-[12px] py-[2px] px-[10px] rounded-[6px] border-0 transition-all cursor-pointer select-none text-[#003340] inline-flex items-center gap-1 shrink-0 ${
                          activeLegalPanel === 'randvoorwaarden'
                            ? 'bg-[#00b0eb] font-semibold'
                            : 'bg-white font-medium hover:bg-white/80'
                        }`}
                      >
                        <span>HR-kaders</span>
                        <span className="text-[10px] leading-none opacity-80">{activeLegalPanel === 'randvoorwaarden' ? '▴' : '▾'}</span>
                      </button>
                      <button
                        type="button"
                        id="moeten-pill-jurisprudentie"
                        role="tab"
                        aria-selected={activeLegalPanel === 'jurisprudentie'}
                        aria-expanded={activeLegalPanel === 'jurisprudentie'}
                        aria-controls="moeten-panel-jurisprudentie"
                        onClick={(e) => toggleLegalPanel('jurisprudentie', e)}
                        className={`text-[12px] py-[2px] px-[10px] rounded-[6px] border-0 transition-all cursor-pointer select-none text-[#003340] inline-flex items-center gap-1 shrink-0 ${
                          activeLegalPanel === 'jurisprudentie'
                            ? 'bg-[#00b0eb] font-semibold'
                            : 'bg-white font-medium hover:bg-white/80'
                        }`}
                      >
                        <span>Jurisprudentie</span>
                        <span className="text-[10px] leading-none opacity-80">{activeLegalPanel === 'jurisprudentie' ? '▴' : '▾'}</span>
                      </button>
                    </div>

                    {/* Panelen klappen open binnen het blauwe vlak, onder de pillen */}
                    {/* Paneel 1: WHW-artikelen */}
                    <div
                      id="moeten-panel-whw"
                      role="region"
                      aria-labelledby="moeten-pill-whw"
                      className={`bg-white border border-[#e4d9c8] rounded-lg p-3 sm:p-3.5 text-[12.5px] text-[#003340] mt-2.5 shadow-sm space-y-2.5 ${
                        activeLegalPanel === 'whw' ? 'block animate-in fade-in duration-150' : 'hidden print:block'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between border-b border-[#003340]/10 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold">
                            <BookOpen className="w-3 h-3 text-[#00b0eb]" />
                          </span>
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#003340]">
                            Belangrijkste WHW-wetsartikelen rondom aanwezigheid
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => toggleLegalPanel('whw', e)}
                          className="text-[11px] text-[#00b0eb] font-semibold hover:underline cursor-pointer print:hidden"
                        >
                          Sluiten
                        </button>
                      </div>

                      <div className="space-y-2">
                        {DIMENSIONS['p-juridisch']?.lawArticles?.map((art, idx) => (
                          <div key={idx} className="bg-[#fbfaf5]/80 border border-[#003340]/15 rounded p-2.5 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b0eb] block">
                                  {art.lawRef}
                                </span>
                                {art.link && (
                                  <a
                                    href={art.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#00b0eb] hover:underline text-[10px] inline-flex items-center gap-0.5 shrink-0"
                                  >
                                    <span>Wettekst</span>
                                    <ExternalLink className="w-2.5 h-2.5" />
                                  </a>
                                )}
                              </div>
                              <h5 className="text-[12px] font-semibold text-[#003340] mb-1">{art.title}</h5>
                              <p className="text-[11px] text-[#003340]/80 leading-relaxed mb-1">{art.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex justify-end border-t border-[#003340]/10 print:hidden">
                        <button
                          type="button"
                          onClick={() => onOpenDimension('p-juridisch')}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 hover:bg-[#00b0eb] hover:text-white transition-all cursor-pointer"
                        >
                          <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center font-serif italic text-[9px] font-bold">i</span>
                          <span>Meer info in zijpaneel (volledig juridisch dossier)</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Paneel 2: HR-kaders */}
                    <div
                      id="moeten-panel-randvoorwaarden"
                      role="region"
                      aria-labelledby="moeten-pill-randvoorwaarden"
                      className={`bg-white border border-[#e4d9c8] rounded-lg p-3 sm:p-3.5 text-[12.5px] text-[#003340] mt-2.5 shadow-sm space-y-3 ${
                        activeLegalPanel === 'randvoorwaarden' ? 'block animate-in fade-in duration-150' : 'hidden print:block'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between border-b border-[#003340]/10 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold">
                            §
                          </span>
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#003340]">
                            Randvoorwaarden en HR-kaders
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => toggleLegalPanel('randvoorwaarden', e)}
                          className="text-[11px] text-[#00b0eb] font-semibold hover:underline cursor-pointer print:hidden"
                        >
                          Sluiten
                        </button>
                      </div>

                      {/* HR Juridisch Kader Callout */}
                      <div className="bg-[#fbfaf5] border border-[#003340]/15 rounded p-3 space-y-2">
                        <p className="text-[11.5px] text-[#003340] leading-relaxed">
                          Een aanwezigheidsplicht mag alleen op cursusniveau, en uitsluitend wanneer de cursus een praktische oefening (POA) betreft, die als zodanig in het curriculumschema van de hogeschoolgids wordt aangegeven. In de cursushandleiding moet worden onderbouwd welk leereffect wordt beoogd en waarom dat leereffect alleen in een verplichte lessituatie te behalen is.
                        </p>

                        {/* Zes HR-voorbeelden van een praktische oefening */}
                        <div className="bg-white border border-[#003340]/15 rounded p-2.5 mt-1.5">
                          <h5 className="font-bold text-[11.5px] text-[#003340] mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00b0eb]"></span>
                            Wat telt binnen HR als praktische oefening?
                          </h5>
                          <ul className="space-y-1 text-[11px] text-[#003340]/90 list-disc pl-4 leading-relaxed">
                            <li>Contextrijk onderwijs waarin theorie wordt verbonden aan praktijkvraagstukken, en waarin houdingsaspecten en vaardigheden in de les worden geoefend.</li>
                            <li>Projectonderwijs, waar samenwerking en actieve deelname essentieel zijn.</li>
                            <li>Programmatisch toetsen, waar feedbackmomenten verweven zijn met het leerproces.</li>
                            <li>Het leren van agile werken en scrumvaardigheden, die je alleen in de groep opdoet.</li>
                            <li>Presenteren.</li>
                            <li>Het leren van een taal en van (non-verbale) communicatieve vaardigheden, zoals onderhandelen en de dialoog voeren over complexe onderwerpen.</li>
                          </ul>
                        </div>

                        <div className="pt-1.5 border-t border-[#003340]/10 text-[10.5px] text-[#003340]/75">
                          <span><strong>Bron:</strong> Hogeschool Rotterdam, Aanwezigheidsplicht (POA). Intern kaderdocument (Juridische Zaken en O&amp;K, juni 2025).</span>
                        </div>
                      </div>

                      {/* 3 wettelijke randvoorwaarden */}
                      <div className="space-y-2 pt-1">
                        <div className="bg-[#fbfaf5]/80 border border-[#003340]/15 rounded p-2.5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b0eb] block mb-0.5">
                              Randvoorwaarde 1
                            </span>
                            <h5 className="text-[12px] font-semibold text-[#003340] mb-0.5">Basis in OER &amp; Medezeggenschap</h5>
                            <p className="text-[11px] text-[#003340]/75 leading-relaxed mb-1.5">
                              Een aanwezigheidsplicht hoort thuis in de OER (art. 7.13 WHW). De IMR heeft instemmingsrecht op de aanwezigheidsplicht (POA) en de opleidingscommissie heeft instemmingsrecht op de inrichting van praktische oefeningen en adviesrecht op de plicht.
                            </p>
                          </div>
                          <div className="text-[10px] font-semibold text-[#00b0eb] pt-1 border-t border-[#003340]/10">
                            Art. 7.13, 9.18 &amp; 10.3c WHW
                          </div>
                        </div>

                        <div className="bg-[#fbfaf5]/80 border border-[#003340]/15 rounded p-2.5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b0eb] block mb-0.5">
                              Randvoorwaarde 2
                            </span>
                            <h5 className="text-[12px] font-semibold text-[#003340] mb-0.5">Koppeling aan praktische oefening (POA)</h5>
                            <p className="text-[11px] text-[#003340]/75 leading-relaxed mb-1.5">
                              De plicht kan uitsluitend bij praktische oefeningen op cursusniveau waar fysieke participatie en samenwerking essentieel zijn om het leereffect te behalen.
                            </p>
                          </div>
                          <div className="text-[10px] font-semibold text-[#00b0eb] pt-1 border-t border-[#003340]/10">
                            Art. 7.13 lid 2 sub t
                          </div>
                        </div>

                        <div className="bg-[#fbfaf5]/80 border border-[#003340]/15 rounded p-2.5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b0eb] block mb-0.5">
                              Randvoorwaarde 3
                            </span>
                            <h5 className="text-[12px] font-semibold text-[#003340] mb-0.5">Vervangende opdracht &amp; Maatwerk</h5>
                            <p className="text-[11px] text-[#003340]/75 leading-relaxed mb-1.5">
                              Bied bij overmacht altijd een gelijkwaardige vervangende compensatieopdracht die <em>constructive aligned</em> is met de te behalen leerdoelen. Houd rekening met zorgplicht en maatwerk.
                            </p>
                          </div>
                          <div className="text-[10px] font-semibold text-[#00b0eb] pt-1 border-t border-[#003340]/10 uppercase tracking-wider">
                            Zorgplicht
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end border-t border-[#003340]/10 print:hidden">
                        <button
                          type="button"
                          onClick={() => onOpenDimension('p-juridisch')}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 hover:bg-[#00b0eb] hover:text-white transition-all cursor-pointer"
                        >
                          <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center font-serif italic text-[9px] font-bold">i</span>
                          <span>Meer info in zijpaneel (WHW wetteksten &amp; kaders)</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Paneel 3: Jurisprudentie */}
                    <div
                      id="moeten-panel-jurisprudentie"
                      role="region"
                      aria-labelledby="moeten-pill-jurisprudentie"
                      className={`bg-white border border-[#e4d9c8] rounded-lg p-3 sm:p-3.5 text-[12.5px] text-[#003340] mt-2.5 shadow-sm space-y-2.5 ${
                        activeLegalPanel === 'jurisprudentie' ? 'block animate-in fade-in duration-150' : 'hidden print:block'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between border-b border-[#003340]/10 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold">
                            <Scale className="w-3 h-3 text-[#00b0eb]" />
                          </span>
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#003340]">
                            Jurisprudentie: 4 uitspraken over aanwezigheidsplicht
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => toggleLegalPanel('jurisprudentie', e)}
                          className="text-[11px] text-[#00b0eb] font-semibold hover:underline cursor-pointer print:hidden"
                        >
                          Sluiten
                        </button>
                      </div>

                      <p className="text-[11.5px] text-[#003340]/80 leading-relaxed bg-[#fbfaf5] p-2 rounded border border-[#003340]/10">
                        De rechtspraak (o.a. Maastricht) sluit naadloos aan op het juridisch kader van HR: de wet biedt <strong>geen grondslag voor een generieke aanwezigheidsplicht</strong>. Een aanwezigheidseis mag alleen op cursusniveau bij een praktische oefening (POA) met specifieke didactische motivering en formele verankering in de OER.
                      </p>

                      <div className="space-y-2.5">
                        {/* Case 1 */}
                        <details open className="group bg-white border border-[#003340]/15 rounded-md overflow-hidden">
                          <summary className="flex items-center justify-between p-2.5 cursor-pointer hover:bg-[#fbfaf5] select-none list-none [&::-webkit-details-marker]:hidden">
                            <div className="flex-1 pr-2">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h5 className="text-[12px] font-bold text-[#003340]">1. Maastricht Univ. · Calculus 70%-eis</h5>
                                <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-bold text-[#d3104c] bg-[#d3104c]/10">
                                  Student wint
                                </span>
                              </div>
                              <span className="text-[10.5px] text-[#003340]/60 block mt-0.5">
                                CBE Maastricht · Zaak 2020.105 (Calculus)
                              </span>
                            </div>
                            <span className="text-[11px] text-[#003340]/60 transition-transform duration-200 group-open:rotate-90 shrink-0 ml-1">
                              ▶
                            </span>
                          </summary>
                          <div className="p-3 pt-2 border-t border-[#003340]/10 bg-[#fbfaf5]/40 space-y-2 text-[11px]">
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Wat hield de zaak in?
                              </strong>
                              <p className="text-[#003340]/85 leading-relaxed bg-white border border-[#003340]/10 p-2 rounded">
                                Een student tekende tijdens een Calculus-college de presentielijst af voor twee afwezige medestudenten en werd door de examencommissie wegens &apos;fraude&apos; uitgesloten van het tentamen. De OER stelde 70% aanwezigheid als toelatingseis.
                              </p>
                            </div>
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Waarom won de student?
                              </strong>
                              <ul className="space-y-1 bg-white border border-[#003340]/10 p-2 rounded text-[#003340]/85">
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Aanwezigheid is geen tentamen:</strong> Aanwezigheid toetst op zichzelf geen kennis of inzicht; een valse handtekening zetten op een presentielijst kwalificeert daarom volgens de WHW niet als examen- of tentamenfraude.</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Geen wettelijke grondslag voor theorievak:</strong> De WHW biedt geen bevoegdheid om voor een theorievak (zoals Calculus) aanwezigheid te eisen als toelatingsvoorwaarde voor een tentamen (art. 7.13 lid 1 sub s en t WHW). Dat mag uitsluitend bij een praktische oefening.</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-[#f7efe3] border border-[#003340]/15 p-2 rounded">
                              <strong className="text-[#008bb8] block font-bold text-[10px] uppercase tracking-wider">
                                Belangrijkste les:
                              </strong>
                              <p className="text-[#003340]/90 leading-relaxed">
                                Aanwezigheid mag nooit als toelatingseis voor een tentamen dienen bij theoretische vakken, en presentielijsten vallen niet onder het fraudebegrip van de WHW.
                              </p>
                            </div>
                            <div className="text-[10px] text-[#003340]/60 pt-1 border-t border-[#003340]/10 flex justify-between items-center">
                              <span>Grondslag: Art. 7.13 lid 1 sub s/t &amp; Art. 7.34 WHW</span>
                              <span className="italic font-semibold">Beroep gegrond</span>
                            </div>
                          </div>
                        </details>

                        {/* Case 2 */}
                        <details className="group bg-white border border-[#003340]/15 rounded-md overflow-hidden">
                          <summary className="flex items-center justify-between p-2.5 cursor-pointer hover:bg-[#fbfaf5] select-none list-none [&::-webkit-details-marker]:hidden">
                            <div className="flex-1 pr-2">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h5 className="text-[12px] font-bold text-[#003340]">2. Erasmus Univ. · Bonuspunt aanwezigheid</h5>
                                <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-bold text-[#d3104c] bg-[#d3104c]/10">
                                  Student wint
                                </span>
                              </div>
                              <span className="text-[10.5px] text-[#003340]/60 block mt-0.5">
                                CBHO 2016/069 · Minor Arbeidsrecht &amp; Reorganisatie
                              </span>
                            </div>
                            <span className="text-[11px] text-[#003340]/60 transition-transform duration-200 group-open:rotate-90 shrink-0 ml-1">
                              ▶
                            </span>
                          </summary>
                          <div className="p-3 pt-2 border-t border-[#003340]/10 bg-[#fbfaf5]/40 space-y-2 text-[11px]">
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Wat hield de zaak in?
                              </strong>
                              <p className="text-[#003340]/85 leading-relaxed bg-white border border-[#003340]/10 p-2 rounded">
                                Een examinator beloofde 0,5 bonuspunt op het eindcijfer voor studenten die alle bijeenkomsten bijwoonden. Een student die lessen miste liep het bonuspunt mis en vocht het eindcijfer aan bij het College van Beroep voor het Hoger Onderwijs.
                              </p>
                            </div>
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Waarom won de student?
                              </strong>
                              <ul className="space-y-1 bg-white border border-[#003340]/10 p-2 rounded text-[#003340]/85">
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Aanwezigheid toetst geen beheersing:</strong> Louter in het lokaal zitten meet geen kennis, inzicht of vaardigheid. Het kan ook niet gelden als een mondeling tentamen omdat er geen verplichting bestaat iets te zeggen.</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Buiten de OER gehandeld:</strong> Een examinator mag niet op eigen houtje bonuspunten verbinden aan aanwezigheid zonder expliciete wettelijke grondslag in de OER onder &quot;andere wijze van tentaminering&quot;.</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-[#f7efe3] border border-[#003340]/15 p-2 rounded">
                              <strong className="text-[#008bb8] block font-bold text-[10px] uppercase tracking-wider">
                                Belangrijkste les:
                              </strong>
                              <p className="text-[#003340]/90 leading-relaxed">
                                Aanwezigheid mag nooit worden beloond of bestraft met (bonus)punten op een tentamencijfer. Toetsing moet altijd gericht zijn op leeruitkomsten.
                              </p>
                            </div>
                            <div className="text-[10px] text-[#003340]/60 pt-1 border-t border-[#003340]/10 flex justify-between items-center">
                              <span>Grondslag: Art. 7.3 lid 3 &amp; Art. 7.13 lid 2 sub l WHW</span>
                              <span className="italic font-semibold">Beroep gegrond</span>
                            </div>
                          </div>
                        </details>

                        {/* Case 3 */}
                        <details className="group bg-white border border-[#003340]/15 rounded-md overflow-hidden">
                          <summary className="flex items-center justify-between p-2.5 cursor-pointer hover:bg-[#fbfaf5] select-none list-none [&::-webkit-details-marker]:hidden">
                            <div className="flex-1 pr-2">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h5 className="text-[12px] font-bold text-[#003340]">3. UvA · Introduction to Conflict Studies</h5>
                                <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-bold text-[#d3104c] bg-[#d3104c]/10">
                                  Student wint
                                </span>
                              </div>
                              <span className="text-[10.5px] text-[#003340]/60 block mt-0.5">
                                CBE AC 2207 3278 · Afwijzing dispensatie aanwezigheidsplicht
                              </span>
                            </div>
                            <span className="text-[11px] text-[#003340]/60 transition-transform duration-200 group-open:rotate-90 shrink-0 ml-1">
                              ▶
                            </span>
                          </summary>
                          <div className="p-3 pt-2 border-t border-[#003340]/10 bg-[#fbfaf5]/40 space-y-2 text-[11px]">
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Wat hield de zaak in?
                              </strong>
                              <p className="text-[#003340]/85 leading-relaxed bg-white border border-[#003340]/10 p-2 rounded">
                                Een student vroeg dispensatie voor een aanwezigheidsplicht bij een algemeen werkcollege. De opleiding wees het verzoek af met het standaardargument: &quot;het is bij onze opleiding nu eenmaal een vaste regel dat werkgroepen verplicht zijn&quot;.
                              </p>
                            </div>
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Waarom won de student?
                              </strong>
                              <ul className="space-y-1 bg-white border border-[#003340]/10 p-2 rounded text-[#003340]/85">
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Generieke regels zijn ongeldig:</strong> &quot;Omdat het bij ons altijd zo is&quot; of een algemene afdelingsregel is geen geldige juridische rechtvaardiging.</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Didactische noodzaak ontbrak:</strong> De opleiding kon niet motiveren wélk specifiek leerdoel van dít vak uitsluitend via fysieke aanwezigheid gehaald kon worden. Zonder vakspecifieke motivering ontbreekt de rechtsgrond.</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-[#f7efe3] border border-[#003340]/15 p-2 rounded">
                              <strong className="text-[#008bb8] block font-bold text-[10px] uppercase tracking-wider">
                                Belangrijkste les:
                              </strong>
                              <p className="text-[#003340]/90 leading-relaxed">
                                Een opleiding moet per individuele cursus aantonen en vastleggen waarom fysieke aanwezigheid didactisch noodzakelijk is om de leeruitkomsten te behalen.
                              </p>
                            </div>
                            <div className="text-[10px] text-[#003340]/60 pt-1 border-t border-[#003340]/10 flex justify-between items-center">
                              <span>Grondslag: Art. 7.13 WHW (didactische rechtvaardiging)</span>
                              <span className="italic font-semibold">Beroep gegrond</span>
                            </div>
                          </div>
                        </details>

                        {/* Case 4 */}
                        <details className="group bg-white border border-[#003340]/15 rounded-md overflow-hidden">
                          <summary className="flex items-center justify-between p-2.5 cursor-pointer hover:bg-[#fbfaf5] select-none list-none [&::-webkit-details-marker]:hidden">
                            <div className="flex-1 pr-2">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h5 className="text-[12px] font-bold text-[#003340]">4. UvA · Werkgroepen met groepswerk</h5>
                                <span className="inline-block px-1.5 py-0.5 rounded text-[9.5px] font-bold text-[#003340] bg-[#00b0eb]/20">
                                  Opleiding wint
                                </span>
                              </div>
                              <span className="text-[10.5px] text-[#003340]/60 block mt-0.5">
                                CBE UvA · Beroep ongegrond · Aanwezigheidsplicht gehandhaafd
                              </span>
                            </div>
                            <span className="text-[11px] text-[#003340]/60 transition-transform duration-200 group-open:rotate-90 shrink-0 ml-1">
                              ▶
                            </span>
                          </summary>
                          <div className="p-3 pt-2 border-t border-[#003340]/10 bg-[#fbfaf5]/40 space-y-2 text-[11px]">
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Wat hield de zaak in?
                              </strong>
                              <p className="text-[#003340]/85 leading-relaxed bg-white border border-[#003340]/10 p-2 rounded">
                                Een student ging in beroep tegen de aanwezigheidsplicht bij een vak met intensieve werkgroepen waarin groepsopdrachten werden gemaakt en samenwerkingsvaardigheden werden getoetst in een gezamenlijke eindopdracht.
                              </p>
                            </div>
                            <div>
                              <strong className="text-[10.5px] uppercase tracking-wider text-[#003340] font-bold block mb-0.5">
                                Waarom won de opleiding?
                              </strong>
                              <ul className="space-y-1 bg-white border border-[#003340]/10 p-2 rounded text-[#003340]/85">
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Echte praktische oefening:</strong> In de werkgroepen werd actief geoefend met teamvaardigheden, peer feedback en het evalueren van elkaars bronnen, wat niet individueel thuis kan worden gedaan.</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Samenwerkingsopdracht als toets:</strong> Omdat de studenten elkaars groepsprestatie beïnvloedden, was fysieke participatie inherent aan de eindbeoordeling.</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                  <span className="text-[#00b0eb] font-bold shrink-0">•</span>
                                  <span><strong>Juridisch en transparant geborgd:</strong> De plicht was vooraf expliciet vastgelegd in artikel B5.5 van de OER én vooraf glashelder uitgelegd in de studiehandleiding.</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-[#f7efe3] border border-[#003340]/15 p-2 rounded">
                              <strong className="text-[#008bb8] block font-bold text-[10px] uppercase tracking-wider">
                                Belangrijkste les:
                              </strong>
                              <p className="text-[#003340]/90 leading-relaxed">
                                Een aanwezigheidsplicht houdt juridisch wél stand wanneer groepswerk getoetst wordt, vaardigheden actief geoefend worden en de borging in OER en studiehandleiding klopt.
                              </p>
                            </div>
                            <div className="text-[10px] text-[#003340]/60 pt-1 border-t border-[#003340]/10 flex justify-between items-center">
                              <span>Grondslag: Art. 7.13 WHW &amp; Art. B5.5 OER UvA</span>
                              <span className="italic font-semibold text-[#003340]">Beroep ongegrond</span>
                            </div>
                          </div>
                        </details>
                      </div>

                      <div className="pt-2 flex justify-end border-t border-[#003340]/10 print:hidden">
                        <button
                          type="button"
                          onClick={() => onOpenDimension('p-juridisch')}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 hover:bg-[#00b0eb] hover:text-white transition-all cursor-pointer"
                        >
                          <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center font-serif italic text-[9px] font-bold">i</span>
                          <span>Meer info in zijpaneel (zaakdossiers &amp; jurisprudentie)</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

              {/* Footer bar van Moeten: Formele aanwezigheidsplicht knop links, Meer info rechts */}
              <div className="mt-auto pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#003340]/10">
                <button
                  type="button"
                  aria-expanded={isDutyOpen}
                  aria-controls="moeten-duty-content"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDutyOpen(prev => !prev);
                  }}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                    isDutyOpen
                      ? 'bg-[#00b0eb] text-white shadow-xs'
                      : 'bg-[#e6f7fd] text-[#003340] hover:bg-[#d5f0fb]'
                  }`}
                >
                  <span className="text-[10px] leading-none shrink-0 print:hidden">
                    {isDutyOpen ? '▴' : '▾'}
                  </span>
                  <span>Formele aanwezigheidsplicht</span>
                </button>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0">
                  <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                  <span>Meer info</span>
                </span>
              </div>
            </div>
        </div>
      </section>
    );
  }

  if (stepNumber === 4) {
    return (
      <section id="stap-4" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#fcc200] text-[#003340] flex items-center justify-center font-bold text-lg">
          4
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-[#003340] bg-[#fcc200] mb-1.5">
            Toetsing
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Staat het beleid stevig?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Deze vier G&apos;s onderzoeken of de voorgenomen of bestaande aanpak van aanwezigheid stevig staat. Alle vier moeten &apos;ja&apos; zijn, anders weet je waar het werk ligt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* G1 */}
          <div
            onClick={() => onOpenDimension('p-g1')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] transition-all cursor-pointer group"
          >
            <div>
              <div className="mb-2">
                <h4 className="text-base font-bold text-[#003340] group-hover:text-[#b58a00] transition-colors">
                  <span className="text-[#b58a00] font-black text-lg">G</span>edragen
                </h4>
              </div>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border border-[#003340]/10 rounded p-2.5 mb-3 leading-snug">
                Worden verwachtingen consistent ondersteund?
              </div>
            </div>
            <div className="flex justify-end items-center pt-2 border-t border-[#003340]/10">
              <span
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* G2 */}
          <div
            onClick={() => onOpenDimension('p-g2')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] transition-all cursor-pointer group"
          >
            <div>
              <div className="mb-2">
                <h4 className="text-base font-bold text-[#003340] group-hover:text-[#b58a00] transition-colors">
                  <span className="text-[#b58a00] font-black text-lg">G</span>eloofwaardig
                </h4>
              </div>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border border-[#003340]/10 rounded p-2.5 mb-3 leading-snug">
                Draagt aanwezigheid aantoonbaar bij aan het leerproces?
              </div>
            </div>
            <div className="flex justify-end items-center pt-2 border-t border-[#003340]/10">
              <span
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* G3 */}
          <div
            onClick={() => onOpenDimension('p-g3')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] transition-all cursor-pointer group"
          >
            <div>
              <div className="mb-2">
                <h4 className="text-base font-bold text-[#003340] group-hover:text-[#b58a00] transition-colors">
                  <span className="text-[#b58a00] font-black text-lg">G</span>erechtvaardigd
                </h4>
              </div>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border border-[#003340]/10 rounded p-2.5 mb-3 leading-snug">
                Zijn verwachtingen proportioneel, gedifferentieerd en rechtvaardig?
              </div>
            </div>
            <div className="flex justify-end items-center pt-2 border-t border-[#003340]/10">
              <span
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* G4 */}
          <div
            onClick={() => onOpenDimension('p-g4')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] transition-all cursor-pointer group"
          >
            <div>
              <div className="mb-2">
                <h4 className="text-base font-bold text-[#003340] group-hover:text-[#b58a00] transition-colors">
                  <span className="text-[#b58a00] font-black text-lg">G</span>edeeld
                </h4>
              </div>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border border-[#003340]/10 rounded p-2.5 mb-3 leading-snug">
                Wordt verantwoordelijkheid partnerschappelijk en gezamenlijk gedragen?
              </div>
            </div>
            <div className="flex justify-end items-center pt-2 border-t border-[#003340]/10">
              <span
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};
