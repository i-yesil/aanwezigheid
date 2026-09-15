import React, { useState } from 'react';
import { DIMENSIONS } from '../data/attendanceData';
import { StepNumber } from '../types';
import { Info, ArrowRight, BookOpen, Scale, Sparkles, ChevronDown, ChevronUp, ExternalLink, FileText } from 'lucide-react';

interface StepSectionProps {
  stepNumber: StepNumber;
  onOpenDimension: (dimensionId: string, initialTab?: string) => void;
}

export const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  onOpenDimension,
}) => {
  const [showRandvoorwaarden, setShowRandvoorwaarden] = useState(false);
  const [showJurisprudentie, setShowJurisprudentie] = useState(false);
  const [showWhwArtikelen, setShowWhwArtikelen] = useState(false);
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

        {/* 3 Perspectives Individual Cards - Naast elkaar in 3 kolommen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Sociologisch perspectief */}
          <div
            onClick={() => onOpenDimension('p-soc')}
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 sm:p-4 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex flex-col justify-between shadow-2xs group"
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
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 sm:p-4 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex flex-col justify-between shadow-2xs group"
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
            className="bg-white border border-[#003340]/15 rounded-lg p-3.5 sm:p-4 hover:bg-[#fbfaf5] hover:border-[#003340]/40 transition-all cursor-pointer flex flex-col justify-between shadow-2xs group"
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
          Om aanwezigheid te bevorderen zet je als opleidingsteam primair in op twee elkaar versterkende sporen: werken aan meerwaarde en studeerbaarheid en werken aan relatie en binding. Dit stevige fundament moet altijd op orde zijn voordat aan normering wordt gedacht.
        </p>

        {/* The Two Fundamental Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-stretch">
          {/* Spoor 1: Meerwaarde & Studeerbaarheid */}
          <div
            onClick={() => onOpenDimension('p-routeA')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex flex-col justify-between group h-full"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Spoor 1 · Meerwaarde & Studeerbaarheid
              </span>
              <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-1.5">
                Werken aan meerwaarde en studeerbaarheid
              </h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 leading-relaxed mb-3">
                Herontwerp van rooster, didactische meerwaarde en studeerbaarheid. Zorg dat bijeenkomsten interactief zijn en iets bieden wat zelfstudie of opnames niet kunnen vervangen.
              </p>
            </div>
            <div className="flex items-center justify-end pt-3 border-t border-[#003340]/10 mt-auto">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0">
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* Spoor 2: Relatie & Binding */}
          <div
            onClick={() => onOpenDimension('p-routeB')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex flex-col justify-between group h-full"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Spoor 2 · Relatie & Binding
              </span>
              <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-1.5">
                Werken aan relatie en binding
              </h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 leading-relaxed mb-3">
                Versterk de binding, docentnabijheid en het gevoel gezien en gemist te worden. Signaleer verzuim tijdig via zichtbare registratie en organiseer een directe, warme follow-up.
              </p>
            </div>
            <div className="flex items-center justify-end pt-3 border-t border-[#003340]/10 mt-auto">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0">
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>
        </div>

        {/* Deel 2: Wanneer is aanwezigheidsplicht zinvol? */}
        <div className="border-t border-[#003340]/15 pt-8">
          <div className="border-b border-[#003340]/10 pb-2 mb-4">
            <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight">
              Wanneer is aanwezigheidsplicht zinvol?
            </h2>
          </div>

          <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
            Een algemene aanwezigheidsplicht voor een hele opleiding of studiejaar is juridisch niet toegestaan. Een aanwezigheidseis mag uitsluitend op cursusniveau wanneer sprake is van een praktische oefening (<strong>POA</strong>).
          </p>

        {/* Spoor 3 uitgelijnd met Spoor 1, met aan de rechterkant WHW-artikelen, Randvoorwaarden en Jurisprudentie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-stretch">
          {/* Spoor 3 (Linker kolom, uitgelijnd met Spoor 1) */}
          <div
            onClick={() => onOpenDimension('p-routeC')}
            className="bg-white border border-[#003340]/15 rounded-lg p-4 hover:border-[#00b0eb] transition-all cursor-pointer flex flex-col justify-between group h-full"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Spoor 3 · Aanwezigheidsplicht (POA)
              </span>
              <h4 className="text-base font-semibold text-[#003340] group-hover:text-[#00b0eb] transition-colors mb-1.5">
                Werken aan aanwezigheidsplicht
              </h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/80 leading-relaxed mb-3">
                Overweegt het team een formele aanwezigheidsplicht, dan gelden de strikte kaders van Hogeschool Rotterdam en de WHW: studeren is een recht, geen plicht. Een plicht mag alleen op cursusniveau bij een praktische oefening (POA), met verplichte verankering in OER en curriculumschema.
              </p>
            </div>
            <div className="flex items-center justify-end pt-3 border-t border-[#003340]/10 mt-auto">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 group-hover:bg-[#00b0eb] group-hover:text-white transition-all shrink-0">
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info</span>
              </span>
            </div>
          </div>

          {/* Rechter kolom: WHW-artikelen, Randvoorwaarden & HR-kader en Jurisprudentie */}
          <div className="flex flex-col gap-3 h-full">
            {/* Card 1: WHW-artikelen */}
            <div
              onClick={() => {
                setShowWhwArtikelen(!showWhwArtikelen);
                if (!showWhwArtikelen) {
                  setShowRandvoorwaarden(false);
                  setShowJurisprudentie(false);
                }
              }}
              className={`flex-1 p-3.5 sm:p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                showWhwArtikelen
                  ? 'bg-white border-[#00b0eb] shadow-xs ring-1 ring-[#00b0eb]/30'
                  : 'bg-white border-[#003340]/15 hover:border-[#00b0eb]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-8 h-8 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold shrink-0">
                  <BookOpen className="w-4 h-4 text-[#00b0eb]" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13.5px] font-semibold text-[#003340] leading-tight truncate group-hover:text-[#00b0eb] transition-colors">
                    WHW-artikelen
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#003340]/70 truncate mt-0.5">
                    rondom aanwezigheid (o.a. art. 7.13, 7.3 & 9.18)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#00b0eb] shrink-0">
                <span className="text-[11px] font-semibold hidden sm:inline">
                  {showWhwArtikelen ? 'Inklappen' : 'Uitklappen'}
                </span>
                {showWhwArtikelen ? (
                  <ChevronUp className="w-4 h-4 text-[#00b0eb]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#003340]/60 group-hover:text-[#00b0eb] transition-colors" />
                )}
              </div>
            </div>

            {/* Card 2: Wettelijke randvoorwaarden & HR-kader */}
            <div
              onClick={() => {
                setShowRandvoorwaarden(!showRandvoorwaarden);
                if (!showRandvoorwaarden) {
                  setShowWhwArtikelen(false);
                  setShowJurisprudentie(false);
                }
              }}
              className={`flex-1 p-3.5 sm:p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                showRandvoorwaarden
                  ? 'bg-white border-[#00b0eb] shadow-xs ring-1 ring-[#00b0eb]/30'
                  : 'bg-white border-[#003340]/15 hover:border-[#00b0eb]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-8 h-8 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold shrink-0">
                  §
                </span>
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13.5px] font-semibold text-[#003340] leading-tight truncate group-hover:text-[#00b0eb] transition-colors">
                    Randvoorwaarden en HR-kaders
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#003340]/70 truncate mt-0.5">
                    OER-basis, POA, medezeggenschap & maatwerk
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#00b0eb] shrink-0">
                <span className="text-[11px] font-semibold hidden sm:inline">
                  {showRandvoorwaarden ? 'Inklappen' : 'Uitklappen'}
                </span>
                {showRandvoorwaarden ? (
                  <ChevronUp className="w-4 h-4 text-[#00b0eb]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#003340]/60 group-hover:text-[#00b0eb] transition-colors" />
                )}
              </div>
            </div>

            {/* Card 3: Jurisprudentie */}
            <div
              onClick={() => {
                setShowJurisprudentie(!showJurisprudentie);
                if (!showJurisprudentie) {
                  setShowRandvoorwaarden(false);
                  setShowWhwArtikelen(false);
                }
              }}
              className={`flex-1 p-3.5 sm:p-4 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                showJurisprudentie
                  ? 'bg-white border-[#00b0eb] shadow-xs ring-1 ring-[#00b0eb]/30'
                  : 'bg-white border-[#003340]/15 hover:border-[#00b0eb]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-8 h-8 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold shrink-0">
                  <Scale className="w-4 h-4 text-[#00b0eb]" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13.5px] font-semibold text-[#003340] leading-tight truncate group-hover:text-[#00b0eb] transition-colors">
                    Jurisprudentie
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#003340]/70 truncate mt-0.5">
                    4 uitspraken: CBE / CBHO rechtspraak
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[#00b0eb] shrink-0">
                <span className="text-[11px] font-semibold hidden sm:inline">
                  {showJurisprudentie ? 'Inklappen' : 'Uitklappen'}
                </span>
                {showJurisprudentie ? (
                  <ChevronUp className="w-4 h-4 text-[#00b0eb]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#003340]/60 group-hover:text-[#00b0eb] transition-colors" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Uitklappaneel 1: WHW-artikelen */}
        {showWhwArtikelen && (
          <div className="bg-white border border-[#00b0eb] rounded-lg overflow-hidden mb-4 p-4 space-y-3 transition-all animate-in fade-in duration-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#003340]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#003340]">
                  Belangrijkste WHW-wetsartikelen rondom aanwezigheid
                </h4>
              </div>
              <button
                onClick={() => setShowWhwArtikelen(false)}
                className="text-xs text-[#00b0eb] font-semibold hover:underline cursor-pointer"
              >
                Inklappen
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {DIMENSIONS['p-juridisch']?.lawArticles?.map((art, idx) => (
                <div key={idx} className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
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
                    <h5 className="text-xs sm:text-sm font-semibold text-[#003340] mb-1.5">{art.title}</h5>
                    <p className="text-[11px] text-[#003340]/80 leading-relaxed mb-2">{art.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end border-t border-[#003340]/10">
              <button
                type="button"
                onClick={() => onOpenDimension('p-juridisch')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 hover:bg-[#00b0eb] hover:text-white transition-all cursor-pointer"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info in zijpaneel (volledig juridisch dossier)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Uitklappaneel 2: Randvoorwaarden & HR-kader */}
        {showRandvoorwaarden && (
          <div className="bg-white border border-[#00b0eb] rounded-lg overflow-hidden mb-4 p-4 sm:p-5 space-y-4 transition-all animate-in fade-in duration-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#003340]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold">
                  §
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#003340]">
                  Randvoorwaarden en HR-kaders
                </h4>
              </div>
              <button
                onClick={() => setShowRandvoorwaarden(false)}
                className="text-xs text-[#00b0eb] font-semibold hover:underline cursor-pointer"
              >
                Inklappen
              </button>
            </div>

            {/* HR Juridisch Kader Callout: Kernconclusie & POA */}
            <div className="bg-[#fbfaf5] border border-[#003340]/15 rounded-lg p-4 sm:p-4.5 space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#003340] text-white tracking-wide">
                    HR-kader 2025
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#003340]">
                    Kernconclusie Juridische Zaken en O&K
                  </span>
                </div>
                <a
                  href="/memo-aanwezigheidsplicht-poa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00b0eb]/10 hover:bg-[#00b0eb]/20 text-[#003340] font-semibold text-[11px] border border-[#00b0eb]/30 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00b0eb]" />
                  <span>Open intern memo (PDF)</span>
                </a>
              </div>

              <p className="text-xs sm:text-[13px] text-[#003340] leading-relaxed">
                Het juridisch kader van Hogeschool Rotterdam (Juridische Zaken en O&K, 2025) is helder: <strong>een algemene, generieke aanwezigheidsplicht voor een hele opleiding of een heel studiejaar is juridisch niet toegestaan</strong>. Studeren is een recht, geen plicht. Een aanwezigheidsplicht mag alleen op cursusniveau, en uitsluitend wanneer de cursus een praktische oefening betreft. Binnen HR heet dit een <strong>POA: een praktische oefening met aanwezigheidsplicht</strong>, die als zodanig in het curriculumschema van de hogeschoolgids wordt aangegeven. In de cursushandleiding moet worden onderbouwd welk leereffect wordt beoogd en waarom dat leereffect alleen in een verplichte lessituatie te behalen is.
              </p>

              {/* Zes HR-voorbeelden van een praktische oefening */}
              <div className="bg-white border border-[#003340]/15 rounded-md p-3.5 mt-2">
                <h5 className="font-bold text-xs sm:text-[13px] text-[#003340] mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00b0eb]"></span>
                  Wat telt binnen HR als praktische oefening?
                </h5>
                <ul className="space-y-1.5 text-xs sm:text-[12.5px] text-[#003340]/90 list-disc pl-5 leading-relaxed">
                  <li>Contextrijk onderwijs waarin theorie wordt verbonden aan praktijkvraagstukken, en waarin houdingsaspecten en vaardigheden in de les worden geoefend.</li>
                  <li>Projectonderwijs, waar samenwerking en actieve deelname essentieel zijn.</li>
                  <li>Programmatisch toetsen, waar feedbackmomenten verweven zijn met het leerproces.</li>
                  <li>Het leren van agile werken en scrumvaardigheden, die je alleen in de groep opdoet.</li>
                  <li>Presenteren.</li>
                  <li>Het leren van een taal en van (non-verbale) communicatieve vaardigheden, zoals onderhandelen en de dialoog voeren over complexe onderwerpen.</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-[#003340]/10 flex items-center justify-between text-[11px] text-[#003340]/75">
                <span><strong>Bron:</strong> Hogeschool Rotterdam, Aanwezigheidsplicht (POA). Intern kaderdocument (Juridische Zaken en O&K, juni 2025).</span>
              </div>
            </div>

            {/* 3 wettelijke randvoorwaarden */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                    Randvoorwaarde 1
                  </span>
                  <h5 className="text-xs sm:text-sm font-semibold text-[#003340] mb-1">Basis in OER & Medezeggenschap</h5>
                  <p className="text-[11px] sm:text-xs text-[#003340]/75 leading-relaxed mb-2">
                    Een aanwezigheidsplicht hoort thuis in de OER (art. 7.13 WHW). De IMR heeft instemmingsrecht op de aanwezigheidsplicht (POA) en de opleidingscommissie heeft instemmingsrecht op de inrichting van praktische oefeningen en adviesrecht op de plicht.
                  </p>
                </div>
                <div className="text-[10px] font-semibold text-[#00b0eb] pt-2 border-t border-[#003340]/10">
                  Art. 7.13, 9.18 & 10.3c WHW
                </div>
              </div>

              <div className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                    Randvoorwaarde 2
                  </span>
                  <h5 className="text-xs sm:text-sm font-semibold text-[#003340] mb-1">Koppeling aan praktische oefening (POA)</h5>
                  <p className="text-[11px] sm:text-xs text-[#003340]/75 leading-relaxed mb-2">
                    De plicht kan uitsluitend bij praktische oefeningen op cursusniveau waar fysieke participatie en samenwerking essentieel zijn om het leereffect te behalen.
                  </p>
                </div>
                <div className="text-[10px] font-semibold text-[#00b0eb] pt-2 border-t border-[#003340]/10">
                  Art. 7.13 lid 2 sub t
                </div>
              </div>

              <div className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                    Randvoorwaarde 3
                  </span>
                  <h5 className="text-xs sm:text-sm font-semibold text-[#003340] mb-1">Vervangende opdracht & Maatwerk</h5>
                  <p className="text-[11px] sm:text-xs text-[#003340]/75 leading-relaxed mb-2">
                    Bied bij overmacht altijd een gelijkwaardige vervangende compensatieopdracht die <em>constructive aligned</em> is met de te behalen leerdoelen. Houd rekening met zorgplicht en maatwerk.
                  </p>
                </div>
                <div className="text-[10px] font-semibold text-[#00b0eb] pt-2 border-t border-[#003340]/10 uppercase tracking-wider">
                  Zorgplicht
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end border-t border-[#003340]/10">
              <button
                type="button"
                onClick={() => onOpenDimension('p-juridisch')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 hover:bg-[#00b0eb] hover:text-white transition-all cursor-pointer"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info in zijpaneel (WHW wetteksten & kaders)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Uitklappaneel 3: Jurisprudentie */}
        {showJurisprudentie && (
          <div className="bg-white border border-[#00b0eb] rounded-lg overflow-hidden mb-4 p-4 space-y-3 transition-all animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-[#003340]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#00b0eb]/15 text-[#00b0eb] flex items-center justify-center text-xs font-bold">
                  <Scale className="w-3.5 h-3.5" />
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#003340]">
                  Jurisprudentie: 4 uitspraken over aanwezigheidsplicht
                </h4>
              </div>
              <button
                onClick={() => setShowJurisprudentie(false)}
                className="text-xs text-[#00b0eb] font-semibold hover:underline cursor-pointer"
              >
                Inklappen
              </button>
            </div>

            <p className="text-xs text-[#003340]/80 leading-relaxed bg-[#fbfaf5] p-2.5 rounded border border-[#003340]/10">
              De rechtspraak (o.a. Maastricht) sluit naadloos aan op het juridisch kader van HR: de wet biedt <strong>geen grondslag voor een generieke aanwezigheidsplicht</strong>. Een aanwezigheidseis mag alleen op cursusniveau bij een praktische oefening (POA) met specifieke didactische motivering en formele verankering in de OER.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Case 1 */}
              <div className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h5 className="text-xs font-bold text-[#003340]">Maastricht Univ. · Calculus 70%-eis</h5>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-[#d3104c] bg-[#d3104c]/10 shrink-0">
                      Student wint
                    </span>
                  </div>
                  <p className="text-[11px] text-[#003340]/75 mb-2 leading-relaxed">
                    Aanwezigheid is geen tentamenonderdeel (geen fraude bij aftekenen). WHW biedt geen grondslag voor aanwezigheidsplicht als toelatingseis voor theorievakken.
                  </p>
                </div>
                <div className="text-[10px] text-[#003340]/60 border-t border-[#003340]/10 pt-1.5 flex justify-between items-center">
                  <span>Art. 7.13 lid 1 sub s/t WHW</span>
                  <span className="italic">CBE 2020.105</span>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
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
              <div className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
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
              <div className="bg-[#fbfaf5]/60 border border-[#003340]/15 rounded-lg p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h5 className="text-xs font-bold text-[#003340]">UvA · Werkgroepen met groepswerk</h5>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-[#003340] bg-[#00b0eb]/20 shrink-0">
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

            <div className="pt-2 flex justify-end border-t border-[#003340]/10">
              <button
                type="button"
                onClick={() => onOpenDimension('p-juridisch')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#00b0eb] text-[#00b0eb] bg-[#00b0eb]/5 hover:bg-[#00b0eb] hover:text-white transition-all cursor-pointer"
              >
                <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
                <span>Meer info in zijpaneel (zaakdossiers & jurisprudentie)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
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
            Evaluatie
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Staat het beleid stevig?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 mb-5 leading-relaxed">
          Deze vier evaluatievragen toetsen of de voorgenomen of bestaande aanpak van aanwezigheid stevig staat. Alle vier moeten 'ja' zijn, anders weet je waar het werk ligt.
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
