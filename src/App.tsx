import React, { useState, useEffect } from 'react';
import { Masthead } from './components/Masthead';
import { InteractiveWheel } from './components/InteractiveWheel';
import { StepSection } from './components/StepSection';
import { DrawerDetail } from './components/DrawerDetail';
import { SourcesLibraryModal } from './components/SourcesLibraryModal';
import { PrintView } from './components/PrintView';
import { HrLogo } from './components/HrLogo';
import { StepNumber } from './types';
import { BookOpen, ExternalLink, ArrowUp, Mail } from 'lucide-react';

export default function App() {
  const [activeStep, setActiveStep] = useState<StepNumber | null>(null);
  const [openDrawerId, setOpenDrawerId] = useState<string | null>(null);
  const [drawerInitialTab, setDrawerInitialTab] = useState<string | undefined>(undefined);
  const [isSourcesLibraryOpen, setIsSourcesLibraryOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const handleOpenDimension = (id: string, initialTab?: string) => {
    setOpenDrawerId(id);
    setDrawerInitialTab(initialTab);
  };

  // Scroll-spy to automatically update active step in interactive wheel
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Als de bezoeker nog bovenin bij de introductie en het wiel kijkt, is geen enkele stap ingedrukt
      const step1El = document.getElementById('stap-1');
      if (step1El) {
        const rect1 = step1El.getBoundingClientRect();
        if (rect1.top > window.innerHeight * 0.4) {
          setActiveStep(null);
          return;
        }
      }

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
      <main className="max-w-[1340px] mx-auto px-4 sm:px-8 py-8 sm:py-12 no-print relative">
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
            Een gesprekshandreiking over aanwezigheid.
          </p>
          <p className="text-xs sm:text-sm text-[#003340]/65 italic flex flex-wrap items-center gap-1.5">
            <span>Klik op</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-[#d3104c] text-[#d3104c] bg-[#d3104c]/5 not-italic">
              <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center font-serif italic text-[10px] font-bold">i</span>
              <span>Meer info</span>
            </span>
            <span>voor wetenschappelijke inzichten, praktijkvoorbeelden, media en concrete tools om te werken aan een aanwezigheidsethos.</span>
          </p>
        </div>

        {/* Hero Section: Wicked Problem & Interactive Wheel */}
        <div className="space-y-4 mb-6 sm:mb-8">
          {/* Wicked Problem Callout Box */}
          <div className="bg-white border border-[#003340]/15 rounded-xl p-5 sm:p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d3104c] block mb-2">
              Voer het gesprek
            </span>
            <p className="text-sm sm:text-[15px] text-[#003340] leading-relaxed mb-3 font-medium">
              De aanwezigheidsplicht werd ingevoerd, maar al snel weer teruggedraaid. De registratie lukte technisch niet, was te veel werk en werd niet door iedereen gedragen. Of: studenten komen alleen maar bij de lessen waarbij aanwezigheidsplicht is ingevoerd. Zulke ervaringen wil je natuurlijk voorkomen!
            </p>
            <p className="text-sm text-[#003340]/90 leading-relaxed mb-3">
              ‘De lege klas’ is een verzuchting in veel docentenkamers. De pagina Werken aan aanwezigheidsethos hebben we gemaakt als hulpmiddel om een constructief gesprek te voeren met het team. De leidraad, in de vorm van een wiel, neemt je mee langs vier stappen om tot een onderbouwd advies of een afgestemde aanpak te komen vanuit verkennen van het probleem tot toetsen van het besluit.
            </p>
            <p className="text-sm text-[#003340]/90 leading-relaxed mb-3">
              Aanwezigheid van studenten in de les is een <strong className="text-[#d3104c]">wicked problem</strong>: er zijn veel actoren, veel factoren en beleidskeuzes die elkaar beïnvloeden. Er is geen één magische oplossing. Hoe beter de keuzes die je maakt in elkaar passen, des te meer effect ze zullen hebben. Deze leidraad rafelt de verschillende dimensies uit elkaar en helpt op die manier om zicht te krijgen op het probleem, om aanpakken te kiezen die bij de situatie passen.
            </p>
            <p className="text-sm text-[#003340]/85 leading-relaxed mb-4">
              Er zijn veel verschillende soorten bronnen en tools toegevoegd, om de actuele kennis over de achterliggende factoren van aanwezigheid te delen en ook het evidence informed werken te stimuleren.
            </p>

            {/* Onderdeel 1: Voorbereiding van het teamgesprek */}
            <div className="pt-3 border-t border-[#003340]/10 space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003340]">
                Voorbereiding van het teamgesprek
              </h3>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Door eerst zelf het wiel te doorlopen kun je bepalen op welke elementen je met jouw team wilt focussen. Dit is uiteraard mede afhankelijk van de situatie: een teamdag of korte vergadering, groepsgrootte, wederzijdse afhankelijkheid in een jaarteam of een heel opleidingsteam, al aanwezige kennis, etc.
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Maak vooral gebruik van bestaande analyses, zoals studentevaluaties én (de open vragen van) het onderzoek 100 dagen HR. Je kunt studenten in de voorbereiding raadplegen om de stap ‘ken je studentenpopulatie’ meer inhoud te geven. Maar een gesprek met studenten kan ook een onderdeel vormen van het teamgesprek.
              </p>
              <div className="pt-1.5 border-t border-[#003340]/10 text-xs text-[#003340]/80 leading-relaxed">
                Een teamgesprek zal mogelijk begeleid worden door onderwijsadviseurs, managers of hoofddocenten. Als je hier ondersteuning bij wilt, kan dat bij de makers van deze pagina,{' '}
                <a
                  href="mailto:TG-SO-adviseurs@hr.nl?subject=Aanwezigheid%20in%20het%20Hoger%20Onderwijs%20-%20Ondersteuning%20Teamgesprek"
                  className="text-[#008bb8] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  themagroep studentgerichte omgeving van O&K <Mail className="w-3 h-3" />
                </a>
                . Je kunt dit verzoek ook doen aan de{' '}
                <a
                  href="https://hint.hr.nl/nl/HR/Werken-bij/faciliteiten/hr-academie/activiteiten/teamontwikkeltraject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008bb8] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  begeleidingskundigen van O&K <ExternalLink className="w-3 h-3" />
                </a>
                .
              </div>
            </div>

            {/* Onderdeel 2: Teamgesprek */}
            <div className="pt-3 border-t border-[#003340]/10 space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003340]">
                Teamgesprek
              </h3>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                De waarde van het gebruik van de leidraad zit vooral in het teamgesprek zelf. Door reflectieve vragen te stellen en niet alleen de feitelijkheden te bespreken. En door niet alleen studentgedrag, maar ook de eigen onderliggende waarden te bespreken. Deze leidraad kan tegelijkertijd helpen om focus te houden.
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                We raden aan om niet te snel naar oplossingen te springen, maar tijd te nemen voor de analyse van het probleem bij jullie opleiding in de feitelijke en normatieve dimensies.
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Ga daarna pas naar de handelingsperspectieven en bespreek de balans tussen kunnen en willen: veranderingen in rooster en organisatie of in de les en begeleiding. Daarna volgt moeten: wat verwacht je van elkaar, en in hoeverre is een aanwezigheidsplicht zinvol? De vier G’s dienen als kompas om de uitkomst te toetsen: is onze aanpak gedragen, geloofwaardig, gerechtvaardigd en gedeeld.
              </p>
            </div>

            {/* Onderdeel 3: Consensus loslaten? */}
            <div className="pt-3 border-t border-[#003340]/10 space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003340]">
                Consensus loslaten?
              </h3>
              <p className="text-sm font-medium text-[#003340] leading-relaxed">
                Een gespreksvraag kan zijn: “Hoe formuleren we bij onze opleiding beleid waar docenten achterstaan en allen naleven?”
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Streven naar consensus, vooral als het gaat om waarden, kan een gesprek verlammen. Er zijn altijd wel mensen die het er niet mee eens zijn. Bij de{' '}
                <a
                  href="https://on.nl/nl/hulpmiddelen/snelstartgids/manier-van-organiseren/beslissingen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008bb8] hover:text-[#d3104c] underline font-semibold inline-flex items-center gap-0.5"
                >
                  consent methode
                  <ExternalLink className="w-3 h-3 ml-0.5 inline shrink-0" />
                </a>{' '}
                laat je de consensus los maar stel je de vraag: “Heb je een onoverkomelijk bezwaar?”
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Behulpzaam is ook de{' '}
                <a
                  href="https://deepdemocracy.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#008bb8] hover:text-[#d3104c] underline font-semibold inline-flex items-center gap-0.5"
                >
                  deep democracy
                  <ExternalLink className="w-3 h-3 ml-0.5 inline shrink-0" />
                </a>{' '}
                vraag “Wat heb jij nodig om toch mee te gaan in dit besluit?“. Het gesprek blijft op gang en de uitkomst zal breder worden gedragen.
              </p>
            </div>

            {/* Onderdeel 4: Afspraken maken? */}
            <div className="pt-3 border-t border-[#003340]/10 space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-[#003340]">
                Afspraken maken?
              </h3>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Er is veel materiaal beschikbaar over het bevorderen van een afspraak- en aanspreekcultuur. Teams die goed samenwerken spreken zich uit en laten zich aanspreken. Maar een te snelle stap naar afspraken en aanspreken kan juist averechts werken.
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                De methode cirkel van spreken gaat uit van vier gelijkwaardige puzzelstukjes: <em>uitspreken</em>, <em>bespreken</em>, <em>afspreken</em> en <em>aanspreken</em>. Hierbij is uitspreken de start, waarna bespreken ervoor zorgt dat we afspraken maken en aanspreken makkelijker wordt als we terug kunnen komen op afspraken.
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Een andere methode legt de nadruk op het bespreekbaar maken van ongeschreven regels in een team. Ze worden zichtbaar in gedrag van teamleden waarover nooit afspraken zijn gemaakt. Dat kan variëren van koffie halen voor de hele docentenkamer tot weerkerende discussies over hetzelfde onderwerp. Ongeschreven regels zijn niet van één persoon en verandering ervan is een teamverantwoordelijkheid. Afspraken kunnen pas werken als ze niet botsen met ongeschreven regels.
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Filosoof Lammert Kamphuis gaf in zijn lezing over perspectivistische lenigheid (HR, Four Seasons, sept 2026) de oefening: <em>Zoek de banaan!</em> Hij refereerde aan de bekende metafoor over natgespoten apen:
              </p>

              {/* Metafoor Lammert Kamphuis: contrasterende achtergrondkleur zonder aanhalingstekens */}
              <p className="text-sm text-[#003340]/90 leading-relaxed italic bg-[#fffbeb] border border-[#d97706]/20 rounded-lg p-3.5 my-2">
                In het verhaal hangt een banaan boven een ladder. Wanneer een aap de ladder beklimt om de banaan te pakken, worden alle apen natgespoten. Al snel voorkomen de apen dat iemand nog naar de banaan klimt. Vervolgens worden de apen één voor één vervangen. Nieuwe apen proberen de banaan te pakken, maar worden door de anderen tegengehouden, ook al weten zij niet waarom. Uiteindelijk bestaat de groep volledig uit apen die nooit zijn natgespoten, maar die elkaar nog steeds beletten de banaan te pakken.
              </p>

              <p className="text-sm text-[#003340]/90 leading-relaxed">
                De metafoor illustreert hoe gedrag, normen en ongeschreven regels kunnen voortbestaan, ook wanneer de oorspronkelijke aanleiding allang verdwenen of vergeten is.
              </p>
              <p className="text-sm text-[#003340]/90 leading-relaxed">
                Door gericht samen te zoeken naar 'onze banaan' kun je ongeschreven regels zichtbaar en bespreekbaar maken.
              </p>
            </div>
          </div>

          {/* Interactive Wheel */}
          <div className="bg-transparent pt-1 pb-0">
            <div className="text-center mb-2">
              <h3 className="text-sm sm:text-base font-semibold text-[#003340]">
                Doorloop de vier stappen in het wiel voor het teamgesprek
              </h3>
              <p className="text-xs sm:text-[13px] text-[#003340]/75 mt-0.5">
                Of, klik op een stap om direct naar inzichten en praktische handvatten te gaan
              </p>
            </div>
            <InteractiveWheel activeStep={activeStep} onSelectStep={scrollToStep} />
          </div>
        </div>

        {/* 4 Steps Container */}
        <div className="relative space-y-2">
          <StepSection stepNumber={1} onOpenDimension={handleOpenDimension} />
          <StepSection stepNumber={2} onOpenDimension={handleOpenDimension} />
          <StepSection stepNumber={3} onOpenDimension={handleOpenDimension} />
          <StepSection stepNumber={4} onOpenDimension={handleOpenDimension} />
        </div>

        {/* Conclusion / Afsluiting Box */}
        <div className="bg-white border border-[#003340]/15 rounded-xl p-6 my-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d3104c] block mb-2">
            Tot slot
          </span>
          <p className="text-sm text-[#003340] leading-relaxed mb-4">
            Een aanwezigheidsethos bouw je niet in één gesprek. De vier stappen zijn geen eenmalige checklist, maar een leidraad die steeds opnieuw langsgelopen kan worden wanneer het curriculum verandert, de studentenpopulatie verschuift of het team roteert. De vier G's blijven daarbij het kompas: zodra één G gaat schuren, ligt daar het volgende gesprek.
          </p>

          {/* Gebaseerd op workshop & bronnenlijst in dezelfde opmaak als voorheen bij de inleiding */}
          <div className="pt-3.5 mt-4 border-t border-[#003340]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#003340]/80">
            <p className="leading-relaxed">
              Gebaseerd op de workshop van <strong>Rick Ikkersheim (Inholland)</strong> in maart 2026, het lectoraatonderzoek van{' '}
              <a
                href="https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008bb8] hover:text-[#d3104c] hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Rutger Kappe (2026) <ExternalLink className="w-2.5 h-2.5 inline" />
              </a>{' '}
              en input vanuit verschillende scholen tijdens de bijeenkomsten van Alliantie Aanwezigheid.
            </p>
            <button
              onClick={() => setIsSourcesLibraryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#d3104c] text-[#d3104c] hover:bg-[#d3104c] hover:text-white transition-all font-medium text-xs shrink-0 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Bronnenlijst</span>
            </button>
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

          {/* Contact TGSO */}
          <div className="flex flex-col sm:items-end text-left sm:text-right gap-1.5">
            <p className="text-xs text-[#003340]/80">
              Wil je sparren of heb je advies nodig?
            </p>
            <a
              id="footer-contact-tgso"
              href="mailto:TG-SO-adviseurs@hr.nl?subject=Aanwezigheid%20in%20het%20Hoger%20Onderwijs%20-%20Sparren%20of%20advies%20(TG-SO)"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003340] hover:bg-[#d3104c] text-white text-xs font-medium transition-all group cursor-pointer"
              title="Stuur een e-mail naar TG-SO-adviseurs@hr.nl"
            >
              <Mail className="w-3.5 h-3.5 transition-transform group-hover:scale-110 shrink-0" />
              <span>Neem contact op</span>
            </a>
          </div>
        </footer>
      </main>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="no-print fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#003340] text-white border border-white/20 flex items-center justify-center hover:bg-[#d3104c] transition-all z-40 cursor-pointer"
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
            initialTab={drawerInitialTab}
            onClose={() => {
              setOpenDrawerId(null);
              setDrawerInitialTab(undefined);
            }}
            onNavigate={(id, tab) => {
              setOpenDrawerId(id);
              setDrawerInitialTab(tab);
            }}
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
