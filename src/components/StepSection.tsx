import React from 'react';
import { DIMENSIONS } from '../data/attendanceData';
import { StepNumber } from '../types';
import { Info, ArrowRight, BookOpen, Scale, Sparkles, UserCheck } from 'lucide-react';

interface StepSectionProps {
  stepNumber: StepNumber;
  onOpenDimension: (dimensionId: string) => void;
}

export const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  onOpenDimension,
}) => {
  if (stepNumber === 1) {
    return (
      <section id="stap-1" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#d3104c] text-white flex items-center justify-center font-semibold text-lg shadow-xs">
          1
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#d3104c] block">
            Feitelijke dimensie
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Wat is eigenlijk het probleem?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 max-w-[65ch] mb-5 leading-relaxed">
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
            className="w-7 h-7 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-sm shrink-0 cursor-pointer shadow-2xs"
            title="Inzichten & Tools Studentpopulatie"
          >
            <em>i</em>
          </button>
        </div>

        {/* 2 Column Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Column 1: Onderwijsteams */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#d3104c] mb-2.5 pb-1 border-b border-[#003340]/10">
              Onderwijsteams
            </h3>
            <div className="space-y-2.5">
              {/* Onderwijskundig */}
              <div className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#003340]">Onderwijskundig</div>
                    <div className="text-xs text-[#003340]/70">Activerende didactiek, constructive alignment, docentkwaliteit</div>
                  </div>
                  <button
                    onClick={() => onOpenDimension('p-didactiek')}
                    className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
                  >
                    <em>i</em>
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#003340]/5 text-[11px] text-[#003340]/75 space-y-1">
                  <p>• Aanwezigheid stijgt significant bij activerende didactiek <em>(Biggs & Tang, 2011)</em>.</p>
                  <p>• Hoorcolleges als herhaling van online stof = grootste voorspeller verzuim <em>(Cutler, 2016)</em>.</p>
                </div>
              </div>

              {/* Ontwerp */}
              <div className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#003340]">Curriculair Ontwerp</div>
                    <div className="text-xs text-[#003340]/70">Rooster-/deadlineconflicten, online alternatieven, interdependentie</div>
                  </div>
                  <button
                    onClick={() => onOpenDimension('p-ontwerp')}
                    className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
                  >
                    <em>i</em>
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#003340]/5 text-[11px] text-[#003340]/75 space-y-1">
                  <p>• Online colleges direct beschikbaar maakt wegblijven rationeel <em>(Cutler et al., 2016)</em>.</p>
                  <p>• Interdependentie in opdrachten bepaalt of missen consequenties heeft.</p>
                </div>
              </div>

              {/* Pedagogiek */}
              <div className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#003340]">Pedagogiek & Regulatie</div>
                    <div className="text-xs text-[#003340]/70">Gedragsregulatie passend bij de doelgroep (straffen, belonen, kiezen)</div>
                  </div>
                  <button
                    onClick={() => onOpenDimension('p-pedagogiek')}
                    className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
                  >
                    <em>i</em>
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#003340]/5 text-[11px] text-[#003340]/75 space-y-1">
                  <p>• Optioneel-verplicht (student kiest vooraf) behoudt autonomie <em>(Cullen & Oppenheimer, 2024)</em>.</p>
                  <p>• Sense of belonging verlaagt verzuim effectiever dan dwang <em>(Ralph et al., 2025)</em>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Leidinggevenden, beleidsmakers, staf */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#d3104c] mb-2.5 pb-1 border-b border-[#003340]/10">
              Leidinggevenden & Stafdiensten
            </h3>
            <div className="space-y-2.5">
              {/* Beleid */}
              <div className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#003340]">Beleidskwaliteit</div>
                    <div className="text-xs text-[#003340]/70">Eenduidige definitie, zwaarwegend beleid, coulanceregeling</div>
                  </div>
                  <button
                    onClick={() => onOpenDimension('p-beleid')}
                    className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
                  >
                    <em>i</em>
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#003340]/5 text-[11px] text-[#003340]/75 space-y-1">
                  <p>• Duidelijke regels over consequenties verkleinen de kans op verzuim <em>(Jaftha, 2022)</em>.</p>
                  <p>• Beleid moet contextafhankelijk zijn per studiefase <em>(Méndez-Suárez, 2021)</em>.</p>
                </div>
              </div>

              {/* Technisch */}
              <div className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#003340]">Effectieve Registratie</div>
                    <div className="text-xs text-[#003340]/70">Registratiesysteem, betrouwbare data, lage administratielast</div>
                  </div>
                  <button
                    onClick={() => onOpenDimension('p-technisch')}
                    className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
                  >
                    <em>i</em>
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#003340]/5 text-[11px] text-[#003340]/75 space-y-1">
                  <p>• Zichtbaar registreren heeft zelfstandig positief effect op opkomst <em>(Moores, 2019)</em>.</p>
                  <p>• Mogelijk via Brightspace-quiz met IP-restrictie of Mentimeter Gradebook.</p>
                </div>
              </div>

              {/* Team */}
              <div className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#003340]">Teamethos</div>
                    <div className="text-xs text-[#003340]/70">Eenduidige, hoge verwachtingen; geen dubbele signalen</div>
                  </div>
                  <button
                    onClick={() => onOpenDimension('p-team')}
                    className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
                  >
                    <em>i</em>
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#003340]/5 text-[11px] text-[#003340]/75 space-y-1">
                  <p>• Opleidingen met hoog studiesucces hebben sterk collectief teamethos <em>(Trotter, 2006)</em>.</p>
                  <p>• Zonder eenduidige handhaving verliest het beleid zijn geloofwaardigheid.</p>
                </div>
              </div>

              {/* Logistiek */}
              <div className="bg-white border border-[#003340]/15 rounded p-3 hover:bg-[#fbfaf5] transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-[#003340]">Onderwijslogistiek & Rooster</div>
                    <div className="text-xs text-[#003340]/70">Rooster- en organisatiekwaliteit: tussenuren en bloktijden</div>
                  </div>
                  <button
                    onClick={() => onOpenDimension('p-logistiek')}
                    className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
                  >
                    <em>i</em>
                  </button>
                </div>
                <div className="mt-2 pt-2 border-t border-[#003340]/5 text-[11px] text-[#003340]/75 space-y-1">
                  <p>• Grote tussenuren ("gaps") zijn een hoofdreden voor verzuim <em>(Jaftha, 2022)</em>.</p>
                  <p>• Aaneengesloten blokdagen maken aanwezigheid combineerbaar met reistijd en werk.</p>
                </div>
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#003340] block">
            Normatieve dimensie
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Welke waarden spelen hier?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 max-w-[65ch] mb-5 leading-relaxed">
          Feiten alleen wijzen geen aanpak aan. Elke feitelijke dimensie rust op waarden die vaak impliciet blijven. De drie perspectieven hieronder maken die waarden bespreekbaar; wat we normaal vinden, wat we van elkaar verwachten en waarom we aanwezigheid waarderen.
        </p>

        <div className="space-y-3">
          {/* Sociologisch */}
          <div className="bg-white border border-[#003340]/15 rounded p-4 hover:border-[#003340]/40 transition-all">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#003340] block">
                  Sociologisch perspectief
                </span>
                <span className="text-base font-semibold text-[#003340] block">
                  Normvorming & Rimpeleffect
                </span>
                <span className="text-xs sm:text-sm text-[#003340]/70 block mt-0.5">
                  Wat vinden we normaal? Hoe wegen we effecten op de groep studenten die wél aanwezig is?
                </span>
              </div>
              <button
                onClick={() => onOpenDimension('p-soc')}
                className="w-7 h-7 rounded-full border border-[#003340] text-[#003340] hover:bg-[#003340] hover:text-white transition-all flex items-center justify-center font-serif italic text-sm shrink-0 cursor-pointer shadow-2xs"
              >
                <em>i</em>
              </button>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#003340]/10 text-xs text-[#003340]/80 space-y-1">
              <p>• Sterk teamethos functioneert sociologisch: aanwezigheid als absolute vereiste, niet als vrijblijvende verwachting <em>(Trotter & Roberts, 2006)</em>.</p>
              <p>• Normdivergentie tussen docenten ondermijnt de collectieve standaard.</p>
            </div>
          </div>

          {/* Psychologisch */}
          <div className="bg-white border border-[#003340]/15 rounded p-4 hover:border-[#003340]/40 transition-all">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#003340] block">
                  Psychologisch perspectief
                </span>
                <span className="text-base font-semibold text-[#003340] block">
                  Het psychologisch contract & Wederkerigheid
                </span>
                <span className="text-xs sm:text-sm text-[#003340]/70 block mt-0.5">
                  Wat verwachten student en opleiding van elkaar, en wordt die relatie als rechtvaardig ervaren?
                </span>
              </div>
              <button
                onClick={() => onOpenDimension('p-psy')}
                className="w-7 h-7 rounded-full border border-[#003340] text-[#003340] hover:bg-[#003340] hover:text-white transition-all flex items-center justify-center font-serif italic text-sm shrink-0 cursor-pointer shadow-2xs"
              >
                <em>i</em>
              </button>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#003340]/10 text-xs text-[#003340]/80 space-y-1">
              <p>• Het psychologisch contract is wederkerig: als we meer vragen van studenten, moeten we ook meer bieden (kwaliteit, docentnabijheid).</p>
              <p>• Verplichten zonder wederkerigheid ondermijnt autonomie-ontwikkeling <em>(Cullen & Oppenheimer, 2024)</em>.</p>
            </div>
          </div>

          {/* Onderwijskundig */}
          <div className="bg-white border border-[#003340]/15 rounded p-4 hover:border-[#003340]/40 transition-all">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#003340] block">
                  Onderwijskundig perspectief
                </span>
                <span className="text-base font-semibold text-[#003340] block">
                  Leereffect: moralisme of leerrendement?
                </span>
                <span className="text-xs sm:text-sm text-[#003340]/70 block mt-0.5">
                  Doet aanwezigheid er aantoonbaar toe in dit vak, of is de eis gebaseerd op een morele verwachting?
                </span>
              </div>
              <button
                onClick={() => onOpenDimension('p-ok')}
                className="w-7 h-7 rounded-full border border-[#003340] text-[#003340] hover:bg-[#003340] hover:text-white transition-all flex items-center justify-center font-serif italic text-sm shrink-0 cursor-pointer shadow-2xs"
              >
                <em>i</em>
              </button>
            </div>
            <div className="mt-3 pt-2.5 border-t border-[#003340]/10 text-xs text-[#003340]/80 space-y-1">
              <p>• Correlatie aanwezigheid–succes is sterk in jaar 1 & 2; bij ouderejaars neemt effect af door zelfregulatie <em>(Credé, 2010; Méndez-Suárez, 2021)</em>.</p>
              <p>• Als fysieke interactie geen meerwaarde heeft voor het specifieke leerdoel, waarom eisen we haar dan?</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (stepNumber === 3) {
    return (
      <section id="stap-3" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#00b0eb] text-[#003340] flex items-center justify-center font-semibold text-lg shadow-xs">
          3
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00b0eb] block">
            Handelingsrichtingen
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Welke aanpak kiezen we?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 max-w-[65ch] mb-5 leading-relaxed">
          Een aanwezigheidsplicht is zelden de eerste aanpak. Welke route past hier, of welke combinatie?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Route A */}
          <div className="bg-white border-t-3 border-t-[#00b0eb] border border-[#003340]/15 rounded p-4 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Route A · Systeem
              </span>
              <h4 className="text-base font-semibold text-[#003340] mb-2">Structurele herkadering</h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 leading-relaxed mb-4">
                Herontwerp van rooster, didactiek of betekenis van bijeenkomsten. Zonder een goede structuur werken andere interventies niet.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#003340]/10">
              <span className="text-[11px] uppercase tracking-wider font-medium text-[#003340]/60">Systeemfocus</span>
              <button
                onClick={() => onOpenDimension('p-routeA')}
                className="w-6 h-6 rounded-full border border-[#00b0eb] text-[#003340] hover:bg-[#00b0eb] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
              >
                <em>i</em>
              </button>
            </div>
          </div>

          {/* Route B */}
          <div className="bg-white border-t-3 border-t-[#00b0eb] border border-[#003340]/15 rounded p-4 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Route B · Begeleiding
              </span>
              <h4 className="text-base font-semibold text-[#003340] mb-2">Relationele interventie</h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 leading-relaxed mb-4">
                Vroegtijdige signalering, data-gedreven nudges en persoonlijke follow-up vanuit de SLC bij verzuim.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#003340]/10">
              <span className="text-[11px] uppercase tracking-wider font-medium text-[#003340]/60">Relatiefocus</span>
              <button
                onClick={() => onOpenDimension('p-routeB')}
                className="w-6 h-6 rounded-full border border-[#00b0eb] text-[#003340] hover:bg-[#00b0eb] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
              >
                <em>i</em>
              </button>
            </div>
          </div>

          {/* Route C */}
          <div className="bg-white border-t-3 border-t-[#00b0eb] border border-[#003340]/15 rounded p-4 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b0eb] block mb-1">
                Route C · Beleid
              </span>
              <h4 className="text-base font-semibold text-[#003340] mb-2">Normatieve ingreep</h4>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 leading-relaxed mb-4">
                Aanwezigheidseis of keuzearchitectuur ("optioneel-verplicht"). Zie <strong>stap 4</strong> voor verplichte juridische randvoorwaarden.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#003340]/10">
              <span className="text-[11px] uppercase tracking-wider font-medium text-[#003340]/60">Beleidsfocus</span>
              <button
                onClick={() => onOpenDimension('p-routeC')}
                className="w-6 h-6 rounded-full border border-[#00b0eb] text-[#003340] hover:bg-[#00b0eb] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
              >
                <em>i</em>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (stepNumber === 4) {
    return (
      <section id="stap-4" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#b41e4b] text-white flex items-center justify-center font-semibold text-lg shadow-xs">
          4
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#b41e4b] block">
              Juridische voorwaarden
            </span>
            <button
              onClick={() => onOpenDimension('p-juridisch')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#b41e4b] hover:underline cursor-pointer"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Bekijk WHW-artikelen & Jurisprudentie</span>
            </button>
          </div>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Wat mag juridisch?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 max-w-[65ch] mb-5 leading-relaxed">
          Kies je Route C (normatieve ingreep), dan gelden er juridische randvoorwaarden. Studenten zijn in beginsel vrij om wel of niet bij colleges aanwezig te zijn (art. 1.6 WHW); een plicht is een beperking van die vrijheid en moet didactisch en in de OER onderbouwd zijn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white border border-[#003340]/15 rounded p-4 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b41e4b] block mb-1">
                Aandachtspunt 1
              </span>
              <h4 className="text-sm font-semibold text-[#003340] mb-1.5">Juridische basis in OER</h4>
              <p className="text-xs text-[#003340]/75 leading-relaxed mb-3">
                De aanwezigheidsplicht moet expliciet in de OER staan. Verwijzingen in studiehandleidingen of Brightspace volstaan juridisch niet.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#b41e4b] pt-2 border-t border-[#003340]/10">
              Art. 7.13 WHW
            </div>
          </div>

          <div className="bg-white border border-[#003340]/15 rounded p-4 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b41e4b] block mb-1">
                Aandachtspunt 2
              </span>
              <h4 className="text-sm font-semibold text-[#003340] mb-1.5">Koppeling aan praktische oefening</h4>
              <p className="text-xs text-[#003340]/75 leading-relaxed mb-3">
                De plicht kan alleen bij praktische oefeningen (practica, stages, groepswerk-toetsing) waar meerwaarde aantoonbaar is voor het leerdoel.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#b41e4b] pt-2 border-t border-[#003340]/10">
              Art. 7.13 lid 2 sub t
            </div>
          </div>

          <div className="bg-white border border-[#003340]/15 rounded p-4 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b41e4b] block mb-1">
                Aandachtspunt 3
              </span>
              <h4 className="text-sm font-semibold text-[#003340] mb-1.5">Vervangende opdracht & Maatwerk</h4>
              <p className="text-xs text-[#003340]/75 leading-relaxed mb-3">
                Altijd een alternatief bieden bij gegronde afwezigheid (ziekte, mantelzorg, functiebeperking) en proportioneel handelen (100% zelden nodig).
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#b41e4b] pt-2 border-t border-[#003340]/10">
              Zorgplicht & Maatwerk
            </div>
          </div>
        </div>

        {/* Quick jurisprudence teaser banner */}
        <div
          onClick={() => onOpenDimension('p-juridisch')}
          className="bg-white border border-[#b41e4b]/30 rounded p-3 flex items-center justify-between gap-3 cursor-pointer hover:border-[#b41e4b] hover:bg-[#b41e4b]/5 transition-all shadow-2xs"
        >
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-[#b41e4b] shrink-0" />
            <div className="text-xs text-[#003340]">
              <strong>4 Jurisprudentie-zaken beschikbaar:</strong> Maastricht (Calculus 70%), Erasmus (Minor Arbeidsrecht bonus), UvA (Conflict Studies) en UvA (Werkgroepen).
            </div>
          </div>
          <span className="text-xs font-semibold text-[#b41e4b] shrink-0 flex items-center gap-1">
            Bekijk uitspraken <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </section>
    );
  }

  if (stepNumber === 5) {
    return (
      <section id="stap-5" className="step-anchor relative pl-12 sm:pl-16 mb-12">
        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-[#fcc200] text-[#003340] flex items-center justify-center font-bold text-lg shadow-xs">
          5
        </div>
        <div className="border-b border-[#003340]/10 pb-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#b58a00] block">
            De vier G's
          </span>
          <h2 className="text-2xl sm:text-[26px] font-semibold text-[#003340] tracking-tight mt-0.5">
            Staat het beleid stevig?
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-[#003340]/90 max-w-[65ch] mb-5 leading-relaxed">
          Vier evaluatievragen om te toetsen of de voorgenomen of bestaande aanpak van aanwezigheid stevig staat. Alle vier moeten 'ja' zijn, anders weet je waar het werk ligt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* G1 */}
          <div className="bg-white border border-[#003340]/15 rounded p-3.5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-3xl font-bold text-[#d3104c] leading-none mb-1">G</div>
              <h4 className="text-sm font-semibold text-[#003340] mb-2">Gedragen</h4>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border-l-2 border-[#d3104c] p-2 mb-3">
                Worden verwachtingen institutioneel consistent ondersteund?
              </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-[#003340]/10">
              <button
                onClick={() => onOpenDimension('p-g1')}
                className="w-6 h-6 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
              >
                <em>i</em>
              </button>
            </div>
          </div>

          {/* G2 */}
          <div className="bg-white border border-[#003340]/15 rounded p-3.5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-3xl font-bold text-[#003340] leading-none mb-1">G</div>
              <h4 className="text-sm font-semibold text-[#003340] mb-2">Geloofwaardig</h4>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border-l-2 border-[#003340] p-2 mb-3">
                Draagt aanwezigheid aantoonbaar bij aan het leerproces?
              </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-[#003340]/10">
              <button
                onClick={() => onOpenDimension('p-g2')}
                className="w-6 h-6 rounded-full border border-[#003340] text-[#003340] hover:bg-[#003340] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
              >
                <em>i</em>
              </button>
            </div>
          </div>

          {/* G3 */}
          <div className="bg-white border border-[#003340]/15 rounded p-3.5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-3xl font-bold text-[#b41e4b] leading-none mb-1">G</div>
              <h4 className="text-sm font-semibold text-[#003340] mb-2">Gerechtvaardigd</h4>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border-l-2 border-[#b41e4b] p-2 mb-3">
                Zijn verwachtingen proportioneel, gedifferentieerd en rechtvaardig?
              </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-[#003340]/10">
              <button
                onClick={() => onOpenDimension('p-g3')}
                className="w-6 h-6 rounded-full border border-[#b41e4b] text-[#b41e4b] hover:bg-[#b41e4b] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
              >
                <em>i</em>
              </button>
            </div>
          </div>

          {/* G4 */}
          <div className="bg-white border border-[#003340]/15 rounded p-3.5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-3xl font-bold text-[#00b0eb] leading-none mb-1">G</div>
              <h4 className="text-sm font-semibold text-[#003340] mb-2">Gedeeld</h4>
              <div className="text-xs text-[#003340] font-medium bg-[#f7efe3] border-l-2 border-[#00b0eb] p-2 mb-3">
                Wordt verantwoordelijkheid partnerschappelijk en gezamenlijk gedragen?
              </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-[#003340]/10">
              <button
                onClick={() => onOpenDimension('p-g4')}
                className="w-6 h-6 rounded-full border border-[#00b0eb] text-[#003340] hover:bg-[#00b0eb] hover:text-white transition-all flex items-center justify-center font-serif italic text-xs shrink-0 cursor-pointer"
              >
                <em>i</em>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};
