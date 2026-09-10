import React, { useState, useEffect } from 'react';
import { DIMENSIONS, STEPS } from '../data/attendanceData';
import { ALL_SOURCES } from '../data/sourcesData';
import {
  X,
  BookOpen,
  Hammer,
  Film,
  Headphones,
  Scale,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Award,
  AlertCircle,
  HelpCircle,
  FileText
} from 'lucide-react';

interface DrawerDetailProps {
  dimensionId: string | null;
  onClose: () => void;
  onNavigate: (dimensionId: string) => void;
}

type TabType = 'inzichten' | 'praktijk' | 'media' | 'whw' | 'zaken';

export const DrawerDetail: React.FC<DrawerDetailProps> = ({
  dimensionId,
  onClose,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('inzichten');
  const [openCases, setOpenCases] = useState<Record<string, boolean>>({});

  const dimension = dimensionId ? DIMENSIONS[dimensionId] : null;

  // Reset tab and expanded cases on dimension change
  useEffect(() => {
    if (dimension) {
      if (dimension.step === 4) {
        setActiveTab('whw');
      } else {
        setActiveTab('inzichten');
      }
      setOpenCases({});
    }
  }, [dimensionId]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!dimension) return null;

  const currentStep = STEPS.find((s) => s.number === dimension.step);
  const stepDimensions = currentStep?.dimensions || [];
  const currentIndex = stepDimensions.indexOf(dimension.id);
  const prevDimensionId = currentIndex > 0 ? stepDimensions[currentIndex - 1] : null;
  const nextDimensionId = currentIndex < stepDimensions.length - 1 ? stepDimensions[currentIndex + 1] : null;

  const hasPractical = (dimension.practicalMaterials && dimension.practicalMaterials.length > 0) || (dimension.pilots && dimension.pilots.length > 0);
  const hasMedia = dimension.media && dimension.media.length > 0;
  const hasWHW = dimension.lawArticles && dimension.lawArticles.length > 0;
  const hasCases = dimension.courtCases && dimension.courtCases.length > 0;

  const toggleCase = (id: string) => {
    setOpenCases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getStepBgColor = () => {
    switch (dimension.step) {
      case 1: return 'bg-[#d3104c] text-white';
      case 2: return 'bg-[#003340] text-white';
      case 3: return 'bg-[#00b0eb] text-[#003340]';
      case 4: return 'bg-[#b41e4b] text-white';
      case 5: return 'bg-[#fcc200] text-[#003340]';
      default: return 'bg-[#003340] text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#003340]/40 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <aside
          className="w-screen max-w-2xl bg-[#f7efe3] text-[#003340] shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          {/* Header */}
          <div className="p-6 pb-4 bg-[#f7efe3] border-b border-[#003340]/15 flex items-start justify-between gap-4 sticky top-0 z-20 shadow-2xs">
            <div className="flex-1 pr-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#d3104c] block mb-1">
                {dimension.step === 'bronnen' ? 'Bronnen' : `Stap ${dimension.step} · ${dimension.stepTag}`}
              </span>
              <h2 id="drawer-title" className="text-xl sm:text-2xl font-bold text-[#003340] leading-snug">
                {dimension.name}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className={`px-3 py-2 rounded-lg text-center shrink-0 shadow-2xs ${getStepBgColor()}`}>
                <span className="block text-lg font-bold leading-none mb-0.5">
                  {dimension.step === 'bronnen' ? 'Ref' : dimension.step}
                </span>
                <span className="text-[9px] uppercase tracking-wider font-semibold block">
                  {dimension.stepTag}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/80 border border-[#003340]/20 hover:bg-white hover:text-[#d3104c] transition-all flex items-center justify-center text-[#003340] cursor-pointer shadow-2xs"
                aria-label="Sluit paneel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body Content */}
          <div className="p-6 space-y-6 flex-1">
            {/* Lead paragraph */}
            <p className="text-sm sm:text-[15px] text-[#003340] leading-relaxed">
              <strong className="font-semibold">{dimension.leadParagraph.split('.')[0]}.</strong>
              {dimension.leadParagraph.substring(dimension.leadParagraph.split('.')[0].length + 1)}
            </p>

            {/* Dialogue Question / Gespreksvraag Card */}
            {dimension.dialogueQuestion && (
              <div className="bg-white border-l-4 border-l-[#d3104c] border border-[#003340]/10 rounded-r-md p-4 shadow-2xs">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#d3104c] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13px] text-[#003340] leading-relaxed">
                    <strong className="font-semibold text-[#d3104c] mr-1.5">Gespreksvraag voor het team:</strong>
                    {dimension.dialogueQuestion}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Bronnen (when viewing p-bronnen) */}
            {dimension.id === 'p-bronnen' ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  {ALL_SOURCES.map((s) => (
                    <div
                      key={s.id}
                      className="bg-white border border-[#003340]/10 rounded-lg p-3 sm:p-3.5 shadow-2xs hover:border-[#003340]/30 transition-all text-xs leading-relaxed"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-[#003340]">
                          <span className="font-semibold">{s.authors ? `${s.authors} ` : ''}</span>
                          {s.year ? `(${s.year}). ` : ''}
                          <span className="italic font-medium">{s.title}</span>
                          {s.sourceOrPublisher ? `. ${s.sourceOrPublisher}` : ''}
                        </div>
                        {s.url && (
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00a0db] hover:underline inline-flex items-center gap-0.5 text-[11px] shrink-0 font-normal"
                          >
                            <span>Bron</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                      {s.summary && (
                        <p className="text-[#003340]/70 mt-1 text-[11px]">{s.summary}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 flex-wrap pt-1 border-b border-[#003340]/10 pb-3">
                  {dimension.step === 4 ? (
                    <>
                      <button
                        onClick={() => setActiveTab('whw')}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === 'whw'
                            ? 'bg-[#b41e4b] text-white shadow-xs'
                            : 'bg-white border border-[#003340]/15 text-[#003340] hover:border-[#b41e4b]'
                        }`}
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span>WHW-Kapstok</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('inzichten')}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === 'inzichten'
                            ? 'bg-[#b41e4b] text-white shadow-xs'
                            : 'bg-white border border-[#003340]/15 text-[#003340] hover:border-[#b41e4b]'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Inzichten</span>
                      </button>

                      {hasCases && (
                        <button
                          onClick={() => setActiveTab('zaken')}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            activeTab === 'zaken'
                              ? 'bg-[#b41e4b] text-white shadow-xs'
                              : 'bg-white border border-[#003340]/15 text-[#003340] hover:border-[#b41e4b]'
                          }`}
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Jurisprudentie ({dimension.courtCases?.length})</span>
                        </button>
                      )}

                      <button
                        onClick={() => setActiveTab('praktijk')}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === 'praktijk'
                            ? 'bg-[#b41e4b] text-white shadow-xs'
                            : 'bg-white border border-[#003340]/15 text-[#003340] hover:border-[#b41e4b]'
                        }`}
                      >
                        <Hammer className="w-3.5 h-3.5" />
                        <span>Aan de slag</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setActiveTab('inzichten')}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === 'inzichten'
                            ? 'bg-[#003340] text-white shadow-xs'
                            : 'bg-white border border-[#003340]/15 text-[#003340] hover:border-[#003340]'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Inzichten</span>
                      </button>

                      {hasPractical && (
                        <button
                          onClick={() => setActiveTab('praktijk')}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            activeTab === 'praktijk'
                              ? 'bg-[#003340] text-white shadow-xs'
                              : 'bg-white border border-[#003340]/15 text-[#003340] hover:border-[#003340]'
                          }`}
                        >
                          <Hammer className="w-3.5 h-3.5" />
                          <span>Aan de slag & Tools</span>
                        </button>
                      )}

                      {hasMedia && (
                        <button
                          onClick={() => setActiveTab('media')}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            activeTab === 'media'
                              ? 'bg-[#003340] text-white shadow-xs'
                              : 'bg-white border border-[#003340]/15 text-[#003340] hover:border-[#003340]'
                          }`}
                        >
                          <Film className="w-3.5 h-3.5" />
                          <span>Media & Podcasts</span>
                        </button>
                      )}
                    </>
                  )}
                </div>
              </>
            )}

            {/* TAB CONTENT: Inzichten */}
            {activeTab === 'inzichten' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#d3104c]">
                  Wetenschappelijke inzichten & onderzoek
                </h3>
                <ul className="space-y-3">
                  {dimension.insights.map((insight, idx) => (
                    <li
                      key={idx}
                      className="bg-white border border-[#003340]/10 rounded-md p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-2xs"
                    >
                      <div className="text-[#003340] mb-1.5">{insight.text}</div>
                      <div className="text-[11px] text-[#003340]/60 italic flex items-center justify-between">
                        <span>— {insight.citation}</span>
                        {insight.citationUrl && (
                          <a
                            href={insight.citationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#00a0db] hover:underline font-normal"
                          >
                            <span>Bron openen</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TAB CONTENT: WHW (Step 4 only) */}
            {activeTab === 'whw' && dimension.lawArticles && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#b41e4b]">
                  Wettelijk kader (Wet op het Hoger Onderwijs en Wetenschappelijk Onderzoek)
                </h3>
                <div className="space-y-3">
                  {dimension.lawArticles.map((art, idx) => (
                    <div key={idx} className="bg-white border border-[#003340]/15 rounded-md p-4 shadow-2xs">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-[#b41e4b] uppercase tracking-wider">
                          {art.lawRef}
                        </span>
                        <span className="text-sm font-semibold text-[#003340]">{art.title}</span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#003340]/85 leading-relaxed">
                        {art.description}
                      </p>
                      {art.link && (
                        <div className="mt-2 text-right">
                          <a
                            href={art.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-[#00a0db] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Wettekst op overheid.nl</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: Jurisprudentie (Step 4) */}
            {activeTab === 'zaken' && dimension.courtCases && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#b41e4b]">
                  Rechtspraak & Uitspraken CBE / CBHO
                </h3>
                <p className="text-xs text-[#003340]/75">
                  Vier representatieve rechtszaken over de geldigheid en grenzen van een aanwezigheidsplicht:
                </p>

                <div className="space-y-3">
                  {dimension.courtCases.map((c) => {
                    const isOpen = !!openCases[c.id];
                    return (
                      <div
                        key={c.id}
                        className="bg-white border border-[#003340]/15 rounded-md overflow-hidden shadow-2xs"
                      >
                        <button
                          onClick={() => toggleCase(c.id)}
                          className="w-full p-3.5 text-left flex items-start justify-between gap-3 hover:bg-[#fbfaf5] transition-colors cursor-pointer"
                        >
                          <div className="flex-1">
                            <div className="text-xs font-bold text-[#003340]">{c.title}</div>
                            <div className="text-[11px] text-[#003340]/60">{c.subTitle}</div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                                c.verdictType === 'student'
                                  ? 'bg-[#fbe8ee] text-[#b41e4b]'
                                  : 'bg-[#003340]/10 text-[#003340]'
                              }`}
                            >
                              {c.verdictType === 'student' ? 'Student wint' : 'School wint'}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4 text-[#003340]/60" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#003340]/60" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="p-4 pt-0 border-t border-[#003340]/10 bg-[#fbfaf5]/50 space-y-3 text-xs sm:text-[13px]">
                            <div className="text-xs text-[#003340]/80">
                              <strong className="text-[#003340] block">Onderwerp van beroep:</strong>
                              {c.subject}
                            </div>

                            <div>
                              <strong className="text-xs uppercase tracking-wider text-[#b41e4b] block mb-1">
                                Geciteerde wetsartikelen
                              </strong>
                              <ul className="space-y-1 pl-3 text-xs text-[#003340]/75">
                                {c.citedArticles.map((art, aIdx) => (
                                  <li key={aIdx}>
                                    <strong className="text-[#003340]">{art.title}:</strong> {art.text}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-[#f7efe3] border-l-2 border-[#b41e4b] p-2.5 rounded-r text-xs">
                              <strong className="text-[#b41e4b] block mb-0.5">Oordeel & Belangrijkste les:</strong>
                              {c.keyLessons}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB CONTENT: Praktijk & Tools */}
            {activeTab === 'praktijk' && (
              <div className="space-y-5">
                {dimension.step === 4 && dimension.proportionalityQuestions && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#b41e4b] mb-2">
                      Proportionaliteitstoets
                    </h4>
                    <ul className="bg-white border border-[#003340]/15 rounded p-3 text-xs space-y-1.5">
                      {dimension.proportionalityQuestions.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-1.5 text-[#003340]">
                          <span className="text-[#b41e4b] font-bold">✓</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {dimension.step === 4 && dimension.policyRecommendations && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#b41e4b] mb-2">
                      Beleidsaanbevelingen
                    </h4>
                    <ul className="bg-white border border-[#003340]/15 rounded p-3 text-xs space-y-1.5">
                      {dimension.policyRecommendations.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5 text-[#003340]">
                          <span className="text-[#b41e4b] font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {dimension.practicalMaterials && dimension.practicalMaterials.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#d3104c] mb-2">
                      Praktijkmateriaal & Handreikingen
                    </h4>
                    <div className="space-y-3">
                      {dimension.practicalMaterials.map((mat, mIdx) => (
                        <div key={mIdx} className="bg-white border border-[#003340]/15 rounded p-3.5 shadow-2xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs sm:text-sm font-semibold text-[#003340]">
                              {mat.title}
                            </span>
                            {mat.url && (
                              <a
                                href={mat.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] text-[#00a0db] hover:underline inline-flex items-center gap-1"
                              >
                                <span>Openen</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                          <p className="text-xs text-[#003340]/75 leading-relaxed">{mat.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {dimension.pilots && dimension.pilots.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#003340] mb-2">
                      Lopende Pilots & Experimenten binnen HR
                    </h4>
                    <div className="space-y-2.5">
                      {dimension.pilots.map((pilot, pIdx) => (
                        <div key={pIdx} className="bg-white border border-[#003340]/15 rounded p-3 text-xs shadow-2xs">
                          <div className="font-semibold text-[#003340] mb-0.5">{pilot.title}</div>
                          <p className="text-[#003340]/75 leading-relaxed mb-1">{pilot.description}</p>
                          {pilot.contactPerson && (
                            <div className="text-[10px] uppercase tracking-wider text-[#d3104c] font-semibold">
                              Contact: {pilot.contactPerson}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: Media */}
            {activeTab === 'media' && dimension.media && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#d3104c]">
                  Video's & Podcasts
                </h3>
                <div className="space-y-3">
                  {dimension.media.map((med) => (
                    <a
                      key={med.id}
                      href={med.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-[#003340]/15 rounded-md p-3.5 flex items-center justify-between gap-3 hover:border-[#d3104c] hover:shadow-xs transition-all block group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-md bg-[#d3104c]/10 text-[#d3104c] flex items-center justify-center shrink-0 group-hover:bg-[#d3104c] group-hover:text-white transition-colors">
                          {med.source === 'spotify' ? (
                            <Headphones className="w-4 h-4" />
                          ) : (
                            <Film className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-[#003340] group-hover:text-[#d3104c] transition-colors">
                            {med.title}
                          </div>
                          <div className="text-xs text-[#003340]/70 line-clamp-1">{med.caption}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#003340]/40 group-hover:text-[#d3104c] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Navigation: Previous / Next within step */}
          <div className="p-4 bg-[#f7efe3] border-t border-[#003340]/15 flex items-center justify-between gap-3 sticky bottom-0 z-20">
            {prevDimensionId ? (
              <button
                onClick={() => onNavigate(prevDimensionId)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#003340]/20 text-[#003340] hover:border-[#003340] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="truncate max-w-[130px]">{DIMENSIONS[prevDimensionId]?.name.split(' ')[0]}</span>
              </button>
            ) : (
              <div />
            )}

            <span className="text-[11px] text-[#003340]/60 uppercase tracking-wider font-medium">
              {currentIndex + 1} van {stepDimensions.length}
            </span>

            {nextDimensionId ? (
              <button
                onClick={() => onNavigate(nextDimensionId)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#003340]/20 text-[#003340] hover:border-[#003340] transition-colors cursor-pointer"
              >
                <span className="truncate max-w-[130px]">{DIMENSIONS[nextDimensionId]?.name.split(' ')[0]}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
