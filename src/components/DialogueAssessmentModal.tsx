import React, { useState } from 'react';
import { AssessmentState } from '../types';
import {
  X,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Printer,
  ChevronRight,
  ChevronLeft,
  Scale,
  ShieldCheck,
  Target
} from 'lucide-react';

interface DialogueAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_STATE: AssessmentState = {
  courseName: '',
  targetYear: 'Jaar 1',
  selectedIssues: [],
  chosenRoute: 'AB',
  isObligationPlanned: false,
  legalChecked: {
    inOER: false,
    practicalExercise: false,
    hasAlternativeAssignment: false,
    transparentCommunication: false,
    proportionalPolicy: false,
  },
  fourGScores: {
    gedragen: 3,
    geloofwaardig: 3,
    gerechtvaardigd: 3,
    gedeeld: 3,
  },
  notes: '',
};

export const DialogueAssessmentModal: React.FC<DialogueAssessmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [assessment, setAssessment] = useState<AssessmentState>(INITIAL_STATE);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [showReport, setShowReport] = useState<boolean>(false);

  if (!isOpen) return null;

  const toggleIssue = (issue: string) => {
    setAssessment((prev) => {
      const exists = prev.selectedIssues.includes(issue);
      return {
        ...prev,
        selectedIssues: exists
          ? prev.selectedIssues.filter((i) => i !== issue)
          : [...prev.selectedIssues, issue],
      };
    });
  };

  const handleScoreChange = (g: keyof AssessmentState['fourGScores'], val: number) => {
    setAssessment((prev) => ({
      ...prev,
      fourGScores: { ...prev.fourGScores, [g]: val },
    }));
  };

  const calculateTotalScore = () => {
    const { gedragen, geloofwaardig, gerechtvaardigd, gedeeld } = assessment.fourGScores;
    return gedragen + geloofwaardig + gerechtvaardigd + gedeeld;
  };

  const getReadinessLevel = () => {
    const total = calculateTotalScore();
    if (total >= 17) return { label: 'Zeer Stevig', color: 'text-emerald-700 bg-emerald-50 border-emerald-300' };
    if (total >= 12) return { label: 'Voldoende met aandachtspunten', color: 'text-amber-700 bg-amber-50 border-amber-300' };
    return { label: 'Kwetsbaar / Herontwerp nodig', color: 'text-rose-700 bg-rose-50 border-rose-300' };
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#003340]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#f7efe3] text-[#003340] w-full max-w-3xl rounded-xl shadow-2xl border border-[#003340]/20 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:px-6 bg-[#003340] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#d3104c] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                Team Toetstool & Aanwezigheidsadvies
              </h2>
              <p className="text-xs text-white/75">
                Stapsgewijze interactieve toets voor onderwijsteams en opleidingscommissies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        {!showReport && (
          <div className="bg-white/80 border-b border-[#003340]/10 px-6 py-2.5 flex items-center justify-between text-xs font-semibold overflow-x-auto">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                onClick={() => setActiveStep(s)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  activeStep === s
                    ? 'bg-[#d3104c] text-white'
                    : s < activeStep
                    ? 'text-[#003340] bg-[#003340]/10'
                    : 'text-[#003340]/40'
                }`}
              >
                <span>Stap {s}</span>
              </button>
            ))}
          </div>
        )}

        {/* Main Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {showReport ? (
            /* REPORT VIEW */
            <div className="space-y-6 bg-white p-6 rounded-lg border border-[#003340]/15 shadow-xs">
              <div className="border-b border-[#003340]/15 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#d3104c]">
                    Gegenereerd Adviesrapport
                  </span>
                  <h3 className="text-xl font-bold text-[#003340]">
                    Aanwezigheidsbeleid: {assessment.courseName || 'Onbenoemde cursus'} ({assessment.targetYear})
                  </h3>
                </div>
                <button
                  onClick={handlePrintReport}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#003340] text-white text-xs font-semibold hover:bg-[#003340]/90 transition-colors shadow-2xs cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Afdrukken / PDF</span>
                </button>
              </div>

              {/* Status Banner */}
              <div className={`p-4 rounded-lg border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${getReadinessLevel().color}`}>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold">Toetsoordeel 4 G's</div>
                  <div className="text-lg font-bold">{getReadinessLevel().label}</div>
                  <div className="text-xs mt-0.5">Totaalscore: {calculateTotalScore()} / 20 punten</div>
                </div>
                <div className="text-right text-xs space-y-0.5">
                  <div>
                    <strong>Focus:</strong>{' '}
                    {assessment.chosenRoute === 'A' && 'Spoor 1 · Systeem'}
                    {assessment.chosenRoute === 'B' && 'Spoor 2 · Begeleiding'}
                    {assessment.chosenRoute === 'AB' && 'Systeem én Begeleiding'}
                    {assessment.chosenRoute === 'C' && 'Normering / Plicht'}
                  </div>
                  <div>
                    <strong>Status plicht:</strong>{' '}
                    {assessment.isObligationPlanned ? (
                      <span className="font-semibold text-amber-900">Formele eis overwogen</span>
                    ) : (
                      <span className="font-semibold text-emerald-800">Geen eis (studievrijheid)</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Insights Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#f7efe3] p-3.5 rounded border border-[#003340]/10">
                  <strong className="block text-[#003340] font-semibold mb-1.5">Gediagnosticeerde Knelpunten:</strong>
                  {assessment.selectedIssues.length > 0 ? (
                    <ul className="list-disc pl-4 space-y-0.5 text-[#003340]/80">
                      {assessment.selectedIssues.map((iss) => (
                        <li key={iss}>{iss}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-[#003340]/60 italic">Geen specifieke knelpunten geselecteerd.</span>
                  )}
                </div>

                <div className="bg-[#f7efe3] p-3.5 rounded border border-[#003340]/10">
                  <strong className="block text-[#003340] font-semibold mb-1.5">Juridische Borging (WHW):</strong>
                  {!assessment.isObligationPlanned ? (
                    <p className="text-emerald-900 text-[11px] leading-relaxed">
                      <strong>Niet van toepassing:</strong> Omdat het team kiest voor stimuleren via systeem en begeleiding, is er geen formele aanwezigheidsplicht. De academische studievrijheid (art. 1.6 WHW) blijft intact; OER-verankering is niet nodig.
                    </p>
                  ) : (
                    <ul className="space-y-1 text-[#003340]/80">
                      <li className="flex items-center gap-1.5">
                        <span className={assessment.legalChecked.inOER ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                          {assessment.legalChecked.inOER ? '✓' : '✗'}
                        </span>
                        <span>1. Opgenomen in OER (art. 7.13 WHW)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className={assessment.legalChecked.practicalExercise ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                          {assessment.legalChecked.practicalExercise ? '✓' : '✗'}
                        </span>
                        <span>2. Didactische noodzaak + OC geraadpleegd & IMR instemming</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className={assessment.legalChecked.hasAlternativeAssignment ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                          {assessment.legalChecked.hasAlternativeAssignment ? '✓' : '✗'}
                        </span>
                        <span>3. Uitzonderingen mogelijk (zorgplicht/overmacht) & vervangende opdracht</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className={assessment.legalChecked.transparentCommunication ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                          {assessment.legalChecked.transparentCommunication ? '✓' : '✗'}
                        </span>
                        <span>4. Transparante communicatie vóór start cursus</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className={assessment.legalChecked.proportionalPolicy ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                          {assessment.legalChecked.proportionalPolicy ? '✓' : '✗'}
                        </span>
                        <span>5. Proportioneel en zorgvuldig bij handhaving</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Action Advice */}
              <div className="space-y-2 text-xs">
                <strong className="block text-sm font-semibold text-[#003340]">Aanbevolen Actiestappen voor het Team:</strong>
                <ol className="list-decimal pl-4 space-y-1.5 text-[#003340]/85">
                  {(assessment.chosenRoute === 'A' || assessment.chosenRoute === 'AB') && (
                    <>
                      <li><strong>Didactische meerwaarde (Systeem):</strong> Zorg via constructive alignment dat fysieke werkvormen niet online te kopiëren zijn en echte samenwerkings- of feedbackwaarde bieden.</li>
                      <li><strong>Rooster & Studeerbaarheid (Systeem):</strong> Bespreek met de roostermaker om tussenuren en versnipperde lesdagen te reduceren.</li>
                    </>
                  )}
                  {(assessment.chosenRoute === 'B' || assessment.chosenRoute === 'AB') && (
                    <>
                      <li><strong>Warme vroegsignalering (Begeleiding):</strong> Richt vanuit de studieloopbaanbegeleiding (SLC) een laagdrempelige check-in in vanaf de 2e gemiste bijeenkomst.</li>
                      <li><strong>Docentnabijheid & Binding (Begeleiding):</strong> Investeer in interactief contact, erkenning en het creëren van een veilige leergemeenschap.</li>
                    </>
                  )}
                  {assessment.isObligationPlanned && (
                    <>
                      <li><strong>OER-verankering:</strong> Verifieer met de examencommissie dat de plicht tijdig in de OER wordt opgenomen met instemming van de medezeggenschap (IMR/OC).</li>
                      <li><strong>Coulance & Alternatief:</strong> Stel een heldere compensatieopdracht op bij overmacht zonder onnodige medische bewijslast.</li>
                    </>
                  )}
                  <li><strong>Teamconsistentie:</strong> Voer de dialoogwerkvorm <em>"Waar sta jij voor?"</em> uit om één gezamenlijke lijn binnen het docententeam af te spreken.</li>
                </ol>
              </div>

              {assessment.notes && (
                <div className="text-xs bg-white border border-[#003340]/10 p-3 rounded">
                  <strong className="text-[#003340]">Aantekeningen & Teamnotities:</strong>
                  <p className="mt-1 text-[#003340]/80 whitespace-pre-wrap">{assessment.notes}</p>
                </div>
              )}
            </div>
          ) : (
            /* WIZARD STEPS */
            <>
              {/* STEP 1: Basic Info & Issues */}
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-[#003340]/10 pb-3">
                    <span className="text-xs font-bold text-[#d3104c] uppercase tracking-wider">Feitelijke dimensie</span>
                    <h3 className="text-lg font-bold text-[#003340]">Cursus & Knelpuntdiagnose</h3>
                    <p className="text-xs text-[#003340]/75 mt-1 leading-relaxed">
                      Aanwezigheid is een <em>wicked problem</em>: er is geen magische oplossing. Deze toets helpt jullie om keuzes binnen het team en tussen feitelijke en normatieve dimensies op elkaar af te stemmen.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#003340] mb-1">
                        Cursusnaam / Opleiding:
                      </label>
                      <input
                        type="text"
                        value={assessment.courseName}
                        onChange={(e) => setAssessment({ ...assessment, courseName: e.target.value })}
                        placeholder="bijv. Project Web & App (Informatica)"
                        className="w-full bg-white border border-[#003340]/20 rounded px-3 py-2 text-xs text-[#003340] focus:border-[#d3104c] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#003340] mb-1">
                        Studiejaar:
                      </label>
                      <select
                        value={assessment.targetYear}
                        onChange={(e) => setAssessment({ ...assessment, targetYear: e.target.value })}
                        className="w-full bg-white border border-[#003340]/20 rounded px-3 py-2 text-xs text-[#003340] focus:border-[#d3104c] outline-none"
                      >
                        <option value="Jaar 1">Jaar 1 (Propedeuse)</option>
                        <option value="Jaar 2">Jaar 2 (Hoofdfase)</option>
                        <option value="Jaar 3/4">Jaar 3 / 4 (Afstudeerfase / Minor)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#003340] mb-2">
                      Welke feitelijke factoren spelen in dit vak een rol bij verzuim? (Selecteer wat van toepassing is)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        'Passieve hoorcolleges / herhaling online materiaal',
                        'Slecht rooster / lange tussenuren (gaps)',
                        'Hoge werkdruk andere vakken / deadlinesamenloop',
                        'Studenten hebben veel bijbanen / mantelzorgtaken',
                        'Weinig onderlinge binding (sense of belonging)',
                        'Geen eenduidige registratie of opvolging',
                        'Docenten hanteren verschillende normen',
                      ].map((item) => {
                        const selected = assessment.selectedIssues.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleIssue(item)}
                            className={`p-2.5 rounded border text-left flex items-start gap-2 cursor-pointer transition-all ${
                              selected
                                ? 'bg-[#d3104c]/10 border-[#d3104c] text-[#003340] font-semibold'
                                : 'bg-white border-[#003340]/15 text-[#003340]/80 hover:bg-[#fbfaf5]'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded flex items-center justify-center text-xs shrink-0 ${selected ? 'bg-[#d3104c] text-white' : 'border border-[#003340]/30'}`}>
                              {selected && '✓'}
                            </span>
                            <span>{item}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Normatieve Afweging */}
              {activeStep === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-[#003340]/10 pb-3">
                    <span className="text-xs font-bold text-[#003340] uppercase tracking-wider">Normatieve dimensie</span>
                    <h3 className="text-lg font-bold text-[#003340]">Normatieve Afweging & Psychologisch Contract</h3>
                  </div>

                  <p className="text-xs text-[#003340]/80 leading-relaxed">
                    Wat verwachten student en opleiding van elkaar in dit specifieke vak? Heeft fysieke aanwezigheid een aantoonbaar leereffect, of is de wens moreel gemotiveerd?
                  </p>

                  <div className="bg-white border border-[#003340]/15 rounded p-4 space-y-3 text-xs">
                    <div className="font-semibold text-[#003340]">Reflectievraag voor het team:</div>
                    <blockquote className="bg-[#f7efe3] border-l-3 border-[#003340] p-3 italic text-[#003340]/90">
                      "Als een student alle theorie zelfstandig thuis leest, mist hij/zij dan essentiële leerervaringen die alléén in deze zaal konden plaatsvinden?"
                    </blockquote>
                    <p className="text-[#003340]/75">
                      Onderzoek van <em>Kappe (2026)</em> en <em>Biggs (1996)</em> toont aan dat studenten primair komen voor de ervaren interactieve meerwaarde, feedback en samenwerking.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 3: Route Selection */}
              {activeStep === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-[#003340]/10 pb-3">
                    <span className="text-xs font-bold text-[#00b0eb] uppercase tracking-wider">Handelingsperspectieven: fase 1</span>
                    <h3 className="text-lg font-bold text-[#003340]">Hoe stimuleren we aanwezigheid?</h3>
                  </div>

                  <p className="text-xs text-[#003340]/80">
                    Kies waarop jullie als opleidingsteam primair inzetten om aanwezigheid te bevorderen. Systeem en begeleiding versterken elkaar en vormen altijd het vertrekpunt:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        route: 'A' as const,
                        name: 'Spoor 1 · Systeem',
                        subtitle: 'Werken aan het systeem',
                        desc: 'Herontwerp van didactiek, interactieve meerwaarde van de les en roosteraanpassing.',
                      },
                      {
                        route: 'B' as const,
                        name: 'Spoor 2 · Begeleiding',
                        subtitle: 'Werken aan begeleiding',
                        desc: 'Versterken van binding, vroegtijdige signalering en warme follow-up vanuit de SLC.',
                      },
                      {
                        route: 'AB' as const,
                        name: 'Gecombineerd',
                        subtitle: 'Systeem én Begeleiding',
                        desc: 'Gelijktijdig werken aan activerende didactiek, rooster en preventieve begeleiding.',
                      },
                    ].map((r) => {
                      const selected = assessment.chosenRoute === r.route;
                      return (
                        <button
                          key={r.route}
                          type="button"
                          onClick={() => setAssessment({ ...assessment, chosenRoute: r.route })}
                          className={`p-4 rounded-lg border-2 text-left cursor-pointer transition-all ${
                            selected
                              ? 'bg-white border-[#00b0eb] shadow-md'
                              : 'bg-white/60 border-[#003340]/15 hover:bg-white'
                          }`}
                        >
                          <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${selected ? 'text-[#00b0eb]' : 'text-[#003340]/60'}`}>
                            {r.name}
                          </span>
                          <strong className="block text-sm text-[#003340] mb-1.5">{r.subtitle}</strong>
                          <p className="text-xs text-[#003340]/75 leading-relaxed">{r.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Legal Prerequisites / Obligation Check */}
              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-[#003340]/10 pb-3">
                    <span className="text-xs font-bold text-[#00b0eb] uppercase tracking-wider">Handelingsperspectieven: fase 2</span>
                    <h3 className="text-lg font-bold text-[#003340]">Wanneer is aanwezigheidsplicht zinvol?</h3>
                  </div>

                  <p className="text-xs text-[#003340]/80 leading-relaxed">
                    Overweegt het team een formele aanwezigheidsplicht, dan gelden er juridische randvoorwaarden. Studenten zijn in beginsel vrij om wel of niet bij colleges aanwezig te zijn (art. 1.6 WHW); een plicht is een beperking van die vrijheid en moet didactisch en in de OER onderbouwd zijn.
                  </p>

                  <div className="bg-white border border-[#003340]/15 rounded-lg p-3.5 space-y-2">
                    <label className="block text-xs font-bold text-[#003340] uppercase tracking-wider">
                      Spoor 3: Werken aan aanwezigheidsplicht
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={() => setAssessment({ ...assessment, isObligationPlanned: false })}
                        className={`p-3 rounded border text-left cursor-pointer transition-all ${
                          !assessment.isObligationPlanned
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold shadow-2xs'
                            : 'bg-white border-[#003340]/20 text-[#003340]/75 hover:bg-[#fbfaf5]'
                        }`}
                      >
                        <div className="text-xs font-bold mb-0.5">Nee · Geen aanwezigheidseis</div>
                        <div className="text-[11px] opacity-85 leading-snug">
                          We focussen puur op stimuleren via systeem en begeleiding.
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAssessment({ ...assessment, isObligationPlanned: true })}
                        className={`p-3 rounded border text-left cursor-pointer transition-all ${
                          assessment.isObligationPlanned
                            ? 'bg-[#f0f9fd] border-[#00b0eb] text-[#003340] font-semibold shadow-2xs'
                            : 'bg-white border-[#003340]/20 text-[#003340]/75 hover:bg-[#fbfaf5]'
                        }`}
                      >
                        <div className="text-xs font-bold mb-0.5">Ja · Wel een eis of model</div>
                        <div className="text-[11px] opacity-85 leading-snug">
                          We overwegen een eis of "optioneel-verplicht" voor een praktijkonderdeel.
                        </div>
                      </button>
                    </div>
                  </div>

                  {!assessment.isObligationPlanned ? (
                    <div className="bg-emerald-50/70 border border-emerald-300 rounded-lg p-4 text-xs text-emerald-950 leading-relaxed space-y-1.5">
                      <strong className="block text-emerald-900 font-semibold text-sm">
                        ✓ Geen formele aanwezigheidsplicht van toepassing
                      </strong>
                      <p>
                        Omdat jullie team aanwezigheid stimuleert via <strong>het systeem</strong> en <strong>begeleiding</strong> (Fase 1), blijft de academische studievrijheid (art. 1.6 WHW) volledig gewaarborgd.
                      </p>
                      <p className="text-emerald-900/80">
                        Er is daarom géén wijziging van de OER vereist en géén formele juridische toetsing nodig. Jullie kunnen direct door naar De vier G's.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-xs text-[#003340]/80">
                        Voldoet de voorgenomen aanwezigheidseis aan de wettelijke kaders van de WHW en recente rechtspraak?
                      </p>

                      <div className="space-y-2.5">
                        {[
                          { key: 'inOER', label: '1. Aanwezigheidsplicht altijd expliciet opnemen in de OER (art. 7.13 WHW).' },
                          { key: 'practicalExercise', label: '2. Didactische noodzaak onderbouwen; Opleidingscommissie (OC) raadplegen (IMR heeft instemmingsrecht op de OER).' },
                          { key: 'hasAlternativeAssignment', label: '3. Redelijke uitzonderingen mogelijk maken (zorgplicht, functiebeperking, overmacht & vervangende opdracht).' },
                          { key: 'transparentCommunication', label: '4. Transparant communiceren naar studenten vóór de start van de cursus (studiegids & Brightspace).' },
                          { key: 'proportionalPolicy', label: '5. Proportioneel en zorgvuldig handelen bij handhaving (evenredigheidstoets).' },
                        ].map((item) => {
                          const k = item.key as keyof AssessmentState['legalChecked'];
                          const checked = assessment.legalChecked[k];
                          return (
                            <button
                              key={k}
                              type="button"
                              onClick={() =>
                                setAssessment({
                                  ...assessment,
                                  legalChecked: { ...assessment.legalChecked, [k]: !checked },
                                })
                              }
                              className={`w-full p-3 rounded border text-left flex items-start gap-2.5 cursor-pointer transition-all ${
                                checked
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium'
                                  : 'bg-white border-[#003340]/15 text-[#003340]/80 hover:bg-[#fbfaf5]'
                              }`}
                            >
                              <span className={`w-4 h-4 rounded flex items-center justify-center text-xs shrink-0 mt-0.5 ${checked ? 'bg-emerald-600 text-white' : 'border border-[#003340]/30'}`}>
                                {checked && '✓'}
                              </span>
                              <span className="text-xs">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 5: 4 G's Diagnostic Scoring */}
              {activeStep === 5 && (
                <div className="space-y-4">
                  <div className="border-b border-[#003340]/10 pb-3">
                    <span className="text-xs font-bold text-[#fcc200] text-[#003340] uppercase tracking-wider">De vier G's</span>
                    <h3 className="text-lg font-bold text-[#003340]">Staat het beleid stevig?</h3>
                  </div>

                  <p className="text-xs text-[#003340]/80">
                    Geef per 'G' aan hoe stevig het beleid op dit moment staat binnen het team (1 = zwak, 5 = uitstekend):
                  </p>

                  <div className="space-y-3.5">
                    {[
                      { key: 'gedragen' as const, name: 'Gedragen', desc: 'Worden verwachtingen consistent ondersteund en is het praktisch haalbaar (rooster, registratie)?' },
                      { key: 'geloofwaardig' as const, name: 'Geloofwaardig', desc: 'Biedt de les aantoonbare interactieve leerwaarde (constructive alignment)?' },
                      { key: 'gerechtvaardigd' as const, name: 'Gerechtvaardigd', desc: 'Is de eis proportioneel gedifferentieerd naar studiefase met zorgplicht?' },
                      { key: 'gedeeld' as const, name: 'Gedeeld', desc: 'Is er partnerschap tussen docenten, management, SLC en studenten?' },
                    ].map((g) => (
                      <div key={g.key} className="bg-white border border-[#003340]/15 rounded p-3.5 shadow-2xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-[#003340]">{g.name}</span>
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#f7efe3] text-[#d3104c]">
                            {assessment.fourGScores[g.key]} / 5
                          </span>
                        </div>
                        <p className="text-[11px] text-[#003340]/70 mb-2">{g.desc}</p>
                        <input
                          type="range"
                          min={1}
                          max={5}
                          value={assessment.fourGScores[g.key]}
                          onChange={(e) => handleScoreChange(g.key, Number(e.target.value))}
                          className="w-full accent-[#d3104c] cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#003340] mb-1">
                      Teamnotities & Actiepunten:
                    </label>
                    <textarea
                      value={assessment.notes}
                      onChange={(e) => setAssessment({ ...assessment, notes: e.target.value })}
                      placeholder="Typ hier afspraken gemaakt tijdens het teamoverleg..."
                      className="w-full bg-white border border-[#003340]/20 rounded p-2.5 text-xs text-[#003340] focus:border-[#d3104c] outline-none h-16"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Controls */}
        <div className="p-4 bg-white border-t border-[#003340]/10 flex items-center justify-between">
          {showReport ? (
            <button
              onClick={() => setShowReport(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#003340]/20 text-[#003340] hover:bg-[#f7efe3] cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Terug naar Toets</span>
            </button>
          ) : (
            <button
              onClick={() => setActiveStep((p) => Math.max(1, p - 1))}
              disabled={activeStep === 1}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                activeStep === 1
                  ? 'opacity-40 cursor-not-allowed border-[#003340]/10 text-[#003340]/40'
                  : 'bg-white border-[#003340]/20 text-[#003340] hover:bg-[#f7efe3] cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Vorige stap</span>
            </button>
          )}

          {!showReport && (
            <div className="text-[11px] text-[#003340]/60 font-medium">
              Stap {activeStep} van 5
            </div>
          )}

          {!showReport ? (
            activeStep === 5 ? (
              <button
                onClick={() => setShowReport(true)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#d3104c] text-white hover:bg-[#b80c3e] transition-colors shadow-sm cursor-pointer"
              >
                <span>Bekijk Adviesrapport</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setActiveStep((p) => Math.min(5, p + 1))}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#003340] text-white hover:bg-[#003340]/90 transition-colors shadow-sm cursor-pointer"
              >
                <span>Volgende stap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )
          ) : (
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#003340] text-white hover:bg-[#003340]/90 transition-colors cursor-pointer"
            >
              <span>Sluiten</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
