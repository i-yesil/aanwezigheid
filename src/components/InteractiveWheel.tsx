import React, { useState } from 'react';
import { StepNumber } from '../types';

interface InteractiveWheelProps {
  activeStep: StepNumber;
  onSelectStep: (stepNumber: StepNumber) => void;
}

export type ColorTheme = 'balans' | 'ton-sur-ton' | 'redactioneel';

export const InteractiveWheel: React.FC<InteractiveWheelProps> = ({
  activeStep,
  onSelectStep,
}) => {
  const [hoveredStep, setHoveredStep] = useState<StepNumber | null>(null);
  const [theme, setTheme] = useState<ColorTheme>('balans');

  // 3 HR-geïnspireerde kleurensuggesties
  const themeStyles = {
    balans: {
      step1: { fill: '#d3104c', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#d3104c', stroke: '#ffffff' },
      step2: { fill: '#003340', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#003340', stroke: '#ffffff' },
      step3: { fill: '#0096c7', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#0096c7', stroke: '#ffffff' },
      step4: { fill: '#d49400', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#d49400', stroke: '#ffffff' },
    },
    'ton-sur-ton': {
      step1: { fill: '#d3104c', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#d3104c', stroke: '#ffffff' },
      step2: { fill: '#003340', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#003340', stroke: '#ffffff' },
      step3: { fill: '#006680', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#006680', stroke: '#ffffff' },
      step4: { fill: '#2a9d8f', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#2a9d8f', stroke: '#ffffff' },
    },
    redactioneel: {
      step1: { fill: '#ffffff', text: '#003340', tagText: '#d3104c', badgeBg: '#d3104c', badgeText: '#ffffff', stroke: '#d3104c' },
      step2: { fill: '#ffffff', text: '#003340', tagText: '#003340', badgeBg: '#003340', badgeText: '#ffffff', stroke: '#003340' },
      step3: { fill: '#ffffff', text: '#003340', tagText: '#0096c7', badgeBg: '#0096c7', badgeText: '#ffffff', stroke: '#0096c7' },
      step4: { fill: '#ffffff', text: '#003340', tagText: '#d49400', badgeBg: '#d49400', badgeText: '#ffffff', stroke: '#d49400' },
    },
  };

  const currentTheme = themeStyles[theme];

  // Helper voor translation offsets per kwadrant (uit elkaar geschoven segmenten)
  const getOffset = (step: number) => {
    const isSpecial = activeStep === step || hoveredStep === step;
    const distance = isSpecial ? 13 : 7;
    switch (step) {
      case 1: // Linksboven (NW)
        return `translate(-${distance}, -${distance})`;
      case 2: // Rechtsboven (NE)
        return `translate(${distance}, -${distance})`;
      case 3: // Rechtsonder (SE)
        return `translate(${distance}, ${distance})`;
      case 4: // Linksonder (SW)
        return `translate(-${distance}, ${distance})`;
      default:
        return 'translate(0, 0)';
    }
  };

  return (
    <div className="w-full max-w-[540px] mx-auto my-6 sm:my-8 flex flex-col items-center">
      {/* 3 Kleursuggesties Knoppen */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4 p-1 bg-white/80 border border-[#003340]/15 rounded-lg shadow-2xs text-xs">
        <span className="text-[11px] font-semibold text-[#003340]/70 px-2 select-none">
          Kleurensuggesties HR:
        </span>
        <button
          type="button"
          onClick={() => setTheme('balans')}
          className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
            theme === 'balans'
              ? 'bg-[#003340] text-white shadow-xs'
              : 'text-[#003340]/80 hover:bg-[#003340]/10'
          }`}
          title="Officiële HR-balans: Rood, Petrol, Blauw en warm Okergoud"
        >
          1. HR Balans (Aanbevolen)
        </button>
        <button
          type="button"
          onClick={() => setTheme('ton-sur-ton')}
          className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
            theme === 'ton-sur-ton'
              ? 'bg-[#003340] text-white shadow-xs'
              : 'text-[#003340]/80 hover:bg-[#003340]/10'
          }`}
          title="Rood vertrekpunt met harmonieuze petrol- en zeegroentinten"
        >
          2. Ton-sur-Ton Petrol
        </button>
        <button
          type="button"
          onClick={() => setTheme('redactioneel')}
          className={`px-2.5 py-1 rounded font-medium transition-all cursor-pointer ${
            theme === 'redactioneel'
              ? 'bg-[#003340] text-white shadow-xs'
              : 'text-[#003340]/80 hover:bg-[#003340]/10'
          }`}
          title="Witte achtergrond met krachtige HR-kleuraccenten voor maximaal contrast"
        >
          3. Redactioneel Wit
        </button>
      </div>

      <svg
        viewBox="0 0 680 680"
        className="w-full h-auto drop-shadow-sm select-none"
        role="img"
        aria-label="De vier stappen van het Aanwezigheidsethos in één interactief wiel"
      >
        <title>De vier stappen van het Aanwezigheidsethos Wiel</title>

        {/* ========================================================
            STAP 1: Linksboven (Top-Left) · Feitelijke dimensie
            Volgorde: Men leest van links naar rechts, dus start hier!
           ======================================================== */}
        <g
          transform={getOffset(1)}
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(1)}
          onMouseEnter={() => setHoveredStep(1)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          {/* Segment Boog */}
          <path
            d="M 40,340 A 300,300 0 0 1 340,40 L 340,210 A 130,130 0 0 0 210,340 Z"
            fill={currentTheme.step1.fill}
            stroke={currentTheme.step1.stroke}
            strokeWidth={theme === 'redactioneel' ? '3.5' : (activeStep === 1 || hoveredStep === 1 ? '3.5' : '1.5')}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 1 ? 0.8 : 1}
          />

          {/* Cijferbadge 1 (Prominente, ruime cirkel) */}
          <circle
            cx="188"
            cy="140"
            r="19"
            fill={currentTheme.step1.badgeBg}
            stroke={theme === 'redactioneel' ? 'none' : currentTheme.step1.badgeText}
            strokeWidth="1.5"
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="188"
            y="140"
            textAnchor="middle"
            dy="0.36em"
            fill={currentTheme.step1.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            1
          </text>

          {/* Vraag & Dimensie Text (Groot & duidelijk leesbaar) */}
          <g pointerEvents="none">
            <text
              x="188"
              y="180"
              textAnchor="middle"
              fill={currentTheme.step1.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Wat is eigenlijk
            </text>
            <text
              x="188"
              y="202"
              textAnchor="middle"
              fill={currentTheme.step1.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              het probleem?
            </text>
            <text
              x="188"
              y="226"
              textAnchor="middle"
              fill={currentTheme.step1.tagText}
              opacity={theme === 'redactioneel' ? 1 : 0.9}
              className="text-[11px] uppercase tracking-wider font-bold"
            >
              Feitelijke dimensie
            </text>
          </g>
        </g>

        {/* ========================================================
            STAP 2: Rechtsboven (Top-Right) · Normatieve dimensie
           ======================================================== */}
        <g
          transform={getOffset(2)}
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(2)}
          onMouseEnter={() => setHoveredStep(2)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          {/* Segment Boog */}
          <path
            d="M 340,40 A 300,300 0 0 1 640,340 L 470,340 A 130,130 0 0 0 340,210 Z"
            fill={currentTheme.step2.fill}
            stroke={currentTheme.step2.stroke}
            strokeWidth={theme === 'redactioneel' ? '3.5' : (activeStep === 2 || hoveredStep === 2 ? '3.5' : '1.5')}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 2 ? 0.8 : 1}
          />

          {/* Cijferbadge 2 */}
          <circle
            cx="492"
            cy="140"
            r="19"
            fill={currentTheme.step2.badgeBg}
            stroke={theme === 'redactioneel' ? 'none' : currentTheme.step2.badgeText}
            strokeWidth="1.5"
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="492"
            y="140"
            textAnchor="middle"
            dy="0.36em"
            fill={currentTheme.step2.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            2
          </text>

          {/* Vraag & Dimensie Text */}
          <g pointerEvents="none">
            <text
              x="492"
              y="180"
              textAnchor="middle"
              fill={currentTheme.step2.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Welke waarden
            </text>
            <text
              x="492"
              y="202"
              textAnchor="middle"
              fill={currentTheme.step2.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              spelen hier?
            </text>
            <text
              x="492"
              y="226"
              textAnchor="middle"
              fill={currentTheme.step2.tagText}
              opacity={theme === 'redactioneel' ? 1 : 0.9}
              className="text-[11px] uppercase tracking-wider font-bold"
            >
              Normatieve dimensie
            </text>
          </g>
        </g>

        {/* ========================================================
            STAP 3: Rechtsonder (Bottom-Right) · Handelingsperspectieven
           ======================================================== */}
        <g
          transform={getOffset(3)}
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(3)}
          onMouseEnter={() => setHoveredStep(3)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          {/* Segment Boog */}
          <path
            d="M 640,340 A 300,300 0 0 1 340,640 L 340,470 A 130,130 0 0 0 470,340 Z"
            fill={currentTheme.step3.fill}
            stroke={currentTheme.step3.stroke}
            strokeWidth={theme === 'redactioneel' ? '3.5' : (activeStep === 3 || hoveredStep === 3 ? '3.5' : '1.5')}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 3 ? 0.8 : 1}
          />

          {/* Cijferbadge 3 */}
          <circle
            cx="492"
            cy="445"
            r="19"
            fill={currentTheme.step3.badgeBg}
            stroke={theme === 'redactioneel' ? 'none' : currentTheme.step3.badgeText}
            strokeWidth="1.5"
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="492"
            y="445"
            textAnchor="middle"
            dy="0.36em"
            fill={currentTheme.step3.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            3
          </text>

          {/* Vraag & Dimensie Text */}
          <g pointerEvents="none">
            <text
              x="492"
              y="485"
              textAnchor="middle"
              fill={currentTheme.step3.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Hoe werken we
            </text>
            <text
              x="492"
              y="507"
              textAnchor="middle"
              fill={currentTheme.step3.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              aan aanwezigheid?
            </text>
            <text
              x="492"
              y="531"
              textAnchor="middle"
              fill={currentTheme.step3.tagText}
              opacity={theme === 'redactioneel' ? 1 : 0.9}
              className="text-[11px] uppercase tracking-wider font-bold"
            >
              Handelingsperspectieven
            </text>
          </g>
        </g>

        {/* ========================================================
            STAP 4: Linksonder (Bottom-Left) · De vier G's
           ======================================================== */}
        <g
          transform={getOffset(4)}
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(4)}
          onMouseEnter={() => setHoveredStep(4)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          {/* Segment Boog */}
          <path
            d="M 340,640 A 300,300 0 0 1 40,340 L 210,340 A 130,130 0 0 0 340,470 Z"
            fill={currentTheme.step4.fill}
            stroke={currentTheme.step4.stroke}
            strokeWidth={theme === 'redactioneel' ? '3.5' : (activeStep === 4 || hoveredStep === 4 ? '3.5' : '1.5')}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 4 ? 0.8 : 1}
          />

          {/* Cijferbadge 4 */}
          <circle
            cx="188"
            cy="445"
            r="19"
            fill={currentTheme.step4.badgeBg}
            stroke={theme === 'redactioneel' ? 'none' : currentTheme.step4.badgeText}
            strokeWidth="1.5"
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="188"
            y="445"
            textAnchor="middle"
            dy="0.36em"
            fill={currentTheme.step4.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            4
          </text>

          {/* Vraag & Dimensie Text */}
          <g pointerEvents="none">
            <text
              x="188"
              y="485"
              textAnchor="middle"
              fill={currentTheme.step4.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Staat het
            </text>
            <text
              x="188"
              y="507"
              textAnchor="middle"
              fill={currentTheme.step4.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              beleid stevig?
            </text>
            <text
              x="188"
              y="531"
              textAnchor="middle"
              fill={currentTheme.step4.tagText}
              opacity={theme === 'redactioneel' ? 1 : 0.9}
              className="text-[11px] uppercase tracking-wider font-bold"
            >
              De vier G's
            </text>
          </g>
        </g>

        {/* ========================================================
            Centraal Hub (Hart van het wiel)
           ======================================================== */}
        <circle cx="340" cy="340" r="100" fill="#ffffff" stroke="#003340" strokeWidth="1" strokeOpacity="0.12" pointerEvents="none" />
        <circle cx="340" cy="340" r="86" fill="#fbfaf7" pointerEvents="none" />
        <text
          x="340"
          y="327"
          textAnchor="middle"
          fill="#003340"
          className="font-['Poppins',sans-serif] text-[15px] font-bold pointer-events-none"
        >
          Aanwezigheids
        </text>
        <text
          x="340"
          y="350"
          textAnchor="middle"
          fill="#d3104c"
          className="font-['Poppins',sans-serif] text-[16px] font-black pointer-events-none tracking-tight"
        >
          ethos
        </text>
        <text
          x="340"
          y="370"
          textAnchor="middle"
          fill="#003340"
          opacity="0.6"
          className="font-['Poppins',sans-serif] text-[10px] font-semibold uppercase tracking-widest pointer-events-none"
        >
          4 stappen
        </text>
      </svg>
    </div>
  );
};
