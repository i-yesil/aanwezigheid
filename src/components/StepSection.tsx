import React, { useState } from 'react';
import { DIMENSIONS } from '../data/attendanceData';
import { StepNumber } from '../types';
import { Info, ArrowRight, BookOpen, Scale, Sparkles, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface StepSectionProps {
  stepNumber: StepNumber;
  onOpenDimension: (dimensionId: string) => void;
}

export const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  onOpenDimension,
}) => {
  const [showRandvoorwaarden, setShowRandvoorwaarden] = useState(false);
  const [showJurisprudentie, setShowJurisprudentie] = useState(false);
  if (stepNumber === 1) {
    return (
      <section id="stap-1" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#d3104c] text-white flex items-center justify-center font-semibold text-lg shadow-xs">
          1
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#d3104c] shadow-2xs mb-1.5">
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
        <div className="bg-white border border-[#003340]/15 rounded-md p-4 mb-6 flex items-center justify-between gap-4 shadow-xs hover:border-[#d3104c]/50 transition-all">
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 hover:bg-[#d3104c] hover:text-white transition-all shadow-xs shrink-0 cursor-pointer"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shadow-2xs shrink-0"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shadow-2xs shrink-0"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shadow-2xs shrink-0"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shadow-2xs shrink-0"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shadow-2xs shrink-0"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shadow-2xs shrink-0"
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
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 group-hover:bg-[#d3104c] group-hover:text-white transition-all shadow-2xs shrink-0"
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
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#003340] text-white flex items-center justify-center font-semibold text-lg shadow-xs">
          2
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#003340] shadow-2xs mb-1.5">
            Normatieve dimensie
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Welke waarden spelen hier?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Feiten alleen wijzen geen aanpak aan. Elke feitelijke dimensie rust op waarden die vaak impliciet blijven. De drie perspectieven hieronder maken die waarden bespreekbaar; wat we normaal vinden, wat we van elkaar verwachten en waarom we aanwezigheid waarderen.
        </p>

        {/* 3 Perspectives Individual Cards - Same design as Feitelijke dimensie */}
        <div className="space-y-2.5">
          {/* Sociologisch perspectief */}
          <div
            onClick={() => onOpenDimension('p-soc')}
            className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div>
              <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">
                Sociologisch perspectief
              </div>
              <div className="text-xs text-[#003340]/70 mt-0.5">
                Normvorming: wat vinden we normaal? Hoe wegen we effecten op de groep die wél komt?
              </div>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#003340] text-[#003340] bg-[#003340]/5 group-hover:bg-[#003340] group-hover:text-white transition-all shrink-0"
            >
              <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
              <span>Meer info</span>
            </span>
          </div>

          {/* Psychologisch perspectief */}
          <div
            onClick={() => onOpenDimension('p-psy')}
            className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div>
              <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">
                Psychologisch perspectief
              </div>
              <div className="text-xs text-[#003340]/70 mt-0.5">
                Psychologisch contract: wat verwachten student en opleiding van elkaar?
              </div>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#003340] text-[#003340] bg-[#003340]/5 group-hover:bg-[#003340] group-hover:text-white transition-all shrink-0"
            >
              <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
              <span>Meer info</span>
            </span>
          </div>

          {/* Onderwijskundig perspectief */}
          <div
            onClick={() => onOpenDimension('p-ok')}
            className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div>
              <div className="text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">
                Onderwijskundig perspectief
              </div>
              <div className="text-xs text-[#003340]/70 mt-0.5">
                Leereffect: doet aanwezigheid er aantoonbaar toe, of is het moralisme?
              </div>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#003340] text-[#003340] bg-[#003340]/5 group-hover:bg-[#003340] group-hover:text-white transition-all shrink-0"
            >
              <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
              <span>Meer info</span>
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (stepNumber === 3) {
    return (
      <section id="stap-3" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#00b0eb] text-white flex items-center justify-center font-semibold text-lg shadow-xs">
          3
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#00b0eb] shadow-2xs mb-1.5">
            Handelingsperspectieven
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Hoe stimuleren we aanwezigheid?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Om aanwezigheid te bevorderen zet je als opleidingsteam primair in op twee elkaar versterkende sporen: werken aan het systeem en werken aan begeleiding. Dit stevige fundament moet altijd op orde zijn voordat aan normering wordt gedacht.
        </p>

        {/* The Two Fundamental Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Spoor 1: Systeem */}
          <div
            onClick={() => onOpenDimension('p-routeA')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex items-center justify-between gap-4 group"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Spoor 1 · Systeem
              </span>
              <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-1.5">
                Werken aan het systeem
              </h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 leading-relaxed">
                Herontwerp van rooster, didactische meerwaarde en studeerbaarheid. Zorg dat bijeenkomsten interactief zijn en iets bieden wat zelfstudie of opnames niet kunnen vervangen.
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0"
            >
              <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
              <span>Meer info</span>
            </span>
          </div>

          {/* Spoor 2: Begeleiding */}
          <div
            onClick={() => onOpenDimension('p-routeB')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex items-center justify-between gap-4 group"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Spoor 2 · Begeleiding
              </span>
              <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-1.5">
                Werken aan begeleiding
              </h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 leading-relaxed">
                Versterk de binding en docentnabijheid. Signaleer verzuim tijdig via zichtbare registratie en organiseer een directe, warme follow-up vanuit de docent of de studieloopbaanbegeleider (SLC).
              </p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0"
            >
              <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
              <span>Meer info</span>
            </span>
          </div>
        </div>

        {/* Deel 2: Wanneer is aanwezigheidsplicht zinvol? */}
        <div className="border-t border-[#003340]/15 pt-8">
          <div className="border-b border-[#003340]/10 pb-2 mb-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#00b0eb] shadow-2xs">
                Handelingsperspectieven
              </span>
              <button
                onClick={() => onOpenDimension('p-juridisch')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#00b0eb] hover:underline cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Bekijk WHW-artikelen & Jurisprudentie</span>
              </button>
            </div>
            <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
              Wanneer is aanwezigheidsplicht zinvol?
            </h2>
          </div>

          <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
            Een aanwezigheidseis is alleen proportioneel bij specifieke onderwijsvormen (zoals practica, patiëntenzorg of beroepscompetenties) en heeft meer effect bij eerstejaars dan bij ouderejaars. Een alternatief model is <strong>"optioneel-verplicht"</strong>: de student kiest vooraf of aanwezigheid meetelt voor de beoordeling. Dit behoudt autonomie en verhoogt opkomst structureel.
          </p>

        {/* Normative Model card */}
        <div
          onClick={() => onOpenDimension('p-routeC')}
          className="bg-white border border-[#003340]/15 rounded-lg p-4 mb-4 hover:border-[#3ab7b0] transition-all cursor-pointer flex items-center justify-between gap-4 group"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3ab7b0] block mb-1">
              Spoor 3 · Normatieve ingreep
            </span>
            <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#3ab7b0] transition-colors mb-1.5">
              Werken aan aanwezigheids- en of participatieplicht
            </h4>
            <p className="text-xs sm:text-[13px] text-[#003340]/80 leading-relaxed">
              Overweegt het team een formele aanwezigheidsplicht, dan gelden er juridische randvoorwaarden. Studenten zijn in beginsel vrij om wel of niet bij colleges aanwezig te zijn (art. 1.6 WHW); een plicht is een beperking van die vrijheid en moet didactisch en in de OER onderbouwd zijn.
            </p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#3ab7b0] text-[#3ab7b0] bg-[#3ab7b0]/5 group-hover:bg-[#3ab7b0] group-hover:text-white transition-all shrink-0"
          >
            <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
            <span>Meer info</span>
          </span>
        </div>

        {/* Accordion 1: 3 Wettelijke randvoorwaarden */}
        <div className="bg-white border border-[#003340]/15 rounded-lg overflow-hidden mb-3 transition-all">
          <button
            onClick={() => setShowRandvoorwaarden(!showRandvoorwaarden)}
            className="w-full p-3.5 sm:px-4 flex items-center justify-between gap-3 text-left hover:bg-[#fbfaf5] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#3ab7b0]/15 text-[#003340] flex items-center justify-center text-xs font-bold shrink-0">
                §
              </span>
              <div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#003340] block">
                  3 wettelijke randvoorwaarden voor een aanwezigheidsplicht
                </span>
                <span className="text-[11px] text-[#003340]/70 block">
                  Basis in OER, praktische oefening en zorgplicht/maatwerk
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-medium text-[#3ab7b0] hidden sm:inline">
                {showRandvoorwaarden ? 'Inklappen' : 'Bekijk randvoorwaarden'}
              </span>
              {showRandvoorwaarden ? (
                <ChevronUp className="w-4 h-4 text-[#3ab7b0]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#003340]/60" />
              )}
            </div>
          </button>

          {showRandvoorwaarden && (
            <div className="p-4 pt-2 border-t border-[#003340]/10 bg-[#fbfaf5]/40 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3ab7b0] block mb-1">
                      Randvoorwaarde 1
                    </span>
                    <h5 className="text-xs sm:text-sm font-semibold text-[#003340] mb-1">Basis in OER & Medezeggenschap</h5>
                    <p className="text-[11px] sm:text-xs text-[#003340]/75 leading-relaxed mb-2">
                      Een aanwezigheidsplicht hoort thuis in de OER (art. 7.13 WHW). De IMR heeft instemmingsrecht op de OER en de opleidingscommissie heeft advies- of instemmingsrecht (art. 9.18 en 10.3c WHW). Betrek beide tijdig.
                    </p>
                  </div>
                  <div className="text-[10px] font-semibold text-[#3ab7b0] pt-2 border-t border-[#003340]/10">
                    Art. 7.13, 9.18 & 10.3c WHW
                  </div>
                </div>

                <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3ab7b0] block mb-1">
                      Randvoorwaarde 2
                    </span>
                    <h5 className="text-xs sm:text-sm font-semibold text-[#003340] mb-1">Koppeling aan praktische oefening</h5>
                    <p className="text-[11px] sm:text-xs text-[#003340]/75 leading-relaxed mb-2">
                      De plicht kan alleen bij praktische oefeningen (practica, stages, vaardigheidstrainingen) waar fysieke participatie noodzakelijk is voor het behalen van de eindkwalificatie.
                    </p>
                  </div>
                  <div className="text-[10px] font-semibold text-[#3ab7b0] pt-2 border-t border-[#003340]/10">
                    Art. 7.13 lid 2 sub t
                  </div>
                </div>

                <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3ab7b0] block mb-1">
                      Randvoorwaarde 3
                    </span>
                    <h5 className="text-xs sm:text-sm font-semibold text-[#003340] mb-1">Vervangende opdracht & Maatwerk</h5>
                    <p className="text-[11px] sm:text-xs text-[#003340]/75 leading-relaxed mb-2">
                      Bied bij overmacht altijd een vervangende compensatieopdracht die <em>constructive aligned</em> is met de te behalen leerdoelen. Houd rekening met de zorgplicht en maatwerk.
                    </p>
                  </div>
                  <div className="text-[10px] font-semibold text-[#3ab7b0] pt-2 border-t border-[#003340]/10 uppercase tracking-wider">
                    Zorgplicht
                  </div>
                </div>
              </div>

              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => onOpenDimension('p-juridisch')}
                  className="text-xs text-[#3ab7b0] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Volledige WHW wetteksten inzien</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Accordion 2: Jurisprudentie */}
        <div className="bg-white border border-[#003340]/15 rounded-lg overflow-hidden mb-4 transition-all">
          <button
            onClick={() => setShowJurisprudentie(!showJurisprudentie)}
            className="w-full p-3.5 sm:px-4 flex items-center justify-between gap-3 text-left hover:bg-[#fbfaf5] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#3ab7b0]/15 text-[#003340] flex items-center justify-center text-xs font-bold shrink-0">
                <Scale className="w-3.5 h-3.5 text-[#3ab7b0]" />
              </span>
              <div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#003340] block">
                  Jurisprudentie: 4 uitspraken over aanwezigheidsplicht
                </span>
                <span className="text-[11px] text-[#003340]/70 block">
                  Rechterlijke kaders: Maastricht, Erasmus Universiteit en Universiteit van Amsterdam
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-medium text-[#3ab7b0] hidden sm:inline">
                {showJurisprudentie ? 'Inklappen' : 'Bekijk uitspraken'}
              </span>
              {showJurisprudentie ? (
                <ChevronUp className="w-4 h-4 text-[#3ab7b0]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#003340]/60" />
              )}
            </div>
          </button>

          {showJurisprudentie && (
            <div className="p-4 pt-2 border-t border-[#003340]/10 bg-[#fbfaf5]/40 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Case 1 */}
                <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="text-xs font-bold text-[#003340]">Maastricht Univ. · Calculus 70%-eis</h5>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-[#d3104c] bg-[#d3104c]/10 shrink-0">
                        Student wint
                      </span>
                    </div>
                    <p className="text-[11px] text-[#003340]/75 mb-2 leading-relaxed">
                      Een percentage-eis kan niet op een regulier theorie-vak worden gelegd; Calculus kwalificeerde niet als praktische oefening.
                    </p>
                  </div>
                  <div className="text-[10px] text-[#003340]/60 border-t border-[#003340]/10 pt-1.5 flex justify-between items-center">
                    <span>Art. 7.13 lid 1 sub s/t WHW</span>
                    <span className="italic">CBE 2020.105</span>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="text-xs font-bold text-[#003340]">Erasmus Univ. · Bonuspunt aanwezigheid</h5>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-[#d3104c] bg-[#d3104c]/10 shrink-0">
                        Student wint
                      </span>
                    </div>
                    <p className="text-[11px] text-[#003340]/75 mb-2 leading-relaxed">
                      Aanwezigheid toetst op zichzelf geen kennis of inzicht. Bonuspunten toekennen mag niet zonder expliciete OER-grondslag.
                    </p>
                  </div>
                  <div className="text-[10px] text-[#003340]/60 border-t border-[#003340]/10 pt-1.5 flex justify-between items-center">
                    <span>Art. 7.3 & 7.13 WHW</span>
                    <span className="italic">CBHO 2016/069</span>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="text-xs font-bold text-[#003340]">UvA · Conflict Studies (Dispensatie)</h5>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-[#d3104c] bg-[#d3104c]/10 shrink-0">
                        Student wint
                      </span>
                    </div>
                    <p className="text-[11px] text-[#003340]/75 mb-2 leading-relaxed">
                      "Omdat het bij ons altijd zo is" is geen geldige rechtvaardiging; je moet per specifiek vak motiveren welk bijzonder leerdoel gediend wordt.
                    </p>
                  </div>
                  <div className="text-[10px] text-[#003340]/60 border-t border-[#003340]/10 pt-1.5 flex justify-between items-center">
                    <span>Didactische rechtvaardiging</span>
                    <span className="italic">CBE AC 2207 3278</span>
                  </div>
                </div>

                {/* Case 4 */}
                <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="text-xs font-bold text-[#003340]">UvA · Werkgroepen met groepswerk</h5>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-[#003340] bg-[#3ab7b0]/20 shrink-0">
                        Opleiding wint
                      </span>
                    </div>
                    <p className="text-[11px] text-[#003340]/75 mb-2 leading-relaxed">
                      Aanwezigheidsplicht houdt stand wanneer groepswerk getoetst wordt, vaardigheden actief geoefend worden en borging in OER klopt.
                    </p>
                  </div>
                  <div className="text-[10px] text-[#003340]/60 border-t border-[#003340]/10 pt-1.5 flex justify-between items-center">
                    <span>Art. B5.5 OER UvA</span>
                    <span className="italic">CBE Ongegrond</span>
                  </div>
                </div>
              </div>

              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => onOpenDimension('p-juridisch')}
                  className="text-xs text-[#3ab7b0] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Volledige zaakdossiers en juridische toelichting inzien</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

if (stepNumber === 4) {
  return (
    <section id="stap-4" className="step-anchor relative pl-12 sm:pl-16 mb-12">
      <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#fcc200] text-[#003340] flex items-center justify-center font-bold text-lg shadow-xs">
        4
      </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-[#003340] bg-[#fcc200] shadow-2xs mb-1.5">
            De vier G's
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Houdt ons beleid stand?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Vier evaluatievragen om te toetsen of de voorgenomen of bestaande aanpak van aanwezigheid stevig staat. Alle vier moeten 'ja' zijn, anders weet je waar het werk ligt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* G1 */}
          <div
            onClick={() => onOpenDimension('p-g1')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] hover:shadow-xs transition-all cursor-pointer group"
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
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shadow-2xs shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* G2 */}
          <div
            onClick={() => onOpenDimension('p-g2')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] hover:shadow-xs transition-all cursor-pointer group"
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
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shadow-2xs shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* G3 */}
          <div
            onClick={() => onOpenDimension('p-g3')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] hover:shadow-xs transition-all cursor-pointer group"
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
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shadow-2xs shrink-0"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* G4 */}
          <div
            onClick={() => onOpenDimension('p-g4')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between hover:border-[#fcc200] hover:shadow-xs transition-all cursor-pointer group"
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
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold border border-[#fcc200] text-[#003340] bg-[#fcc200]/15 group-hover:bg-[#fcc200] transition-all shadow-2xs shrink-0"
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
