import React, { useState } from 'react';
import { StepNumber } from '../types';

interface InteractiveWheelProps {
  activeStep: StepNumber | null;
  onSelectStep: (stepNumber: StepNumber) => void;
}

export const InteractiveWheel: React.FC<InteractiveWheelProps> = ({
  activeStep,
  onSelectStep,
}) => {
  const [hoveredStep, setHoveredStep] = useState<StepNumber | null>(null);

  // Kleurenpalet voor de 4 stappen met optimale contrastverhouding
  const stepColors = {
    step1: { fill: '#d3104c', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#d3104c', stroke: '#ffffff' },
    step2: { fill: '#003340', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#003340', stroke: '#ffffff' },
    step3: { fill: '#008bb8', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#008bb8', stroke: '#ffffff' },
    step4: { fill: '#c98a00', text: '#ffffff', tagText: '#ffffff', badgeBg: '#ffffff', badgeText: '#c98a00', stroke: '#ffffff' },
  };

  // Helper voor translation offsets per kwadrant.
  // In rusttoestand hebben alle 4 de kwadranten exact dezelfde afstand (7px),
  // zodat het wiel optisch 100% symmetrisch en gecentreerd blijft.
  const getOffset = (step: number) => {
    const isHovered = hoveredStep === step;
    const distance = isHovered ? 11 : 7;
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
    <div className="w-full max-w-[420px] mx-auto mt-2 mb-0 sm:mt-3 sm:mb-1 flex flex-col items-center">
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
            d="M 34,340 A 306,306 0 0 1 340,34 L 340,224 A 116,116 0 0 0 224,340 Z"
            fill={stepColors.step1.fill}
            stroke={stepColors.step1.stroke}
            strokeWidth={hoveredStep === 1 ? '2.5' : '1.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 1 ? 0.85 : 1}
          />

          {/* Cijferbadge 1 */}
          <circle
            cx="188"
            cy="138"
            r={activeStep === 1 ? "21" : "19"}
            fill={stepColors.step1.badgeBg}
            stroke={stepColors.step1.badgeText}
            strokeWidth={activeStep === 1 ? "2.5" : "1.5"}
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="188"
            y="138"
            textAnchor="middle"
            dy="0.36em"
            fill={stepColors.step1.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            1
          </text>

          {/* Vraag & Dimensie Text */}
          <g pointerEvents="none">
            <text
              x="188"
              y="178"
              textAnchor="middle"
              fill={stepColors.step1.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Wat is eigenlijk
            </text>
            <text
              x="188"
              y="200"
              textAnchor="middle"
              fill={stepColors.step1.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              het probleem?
            </text>
            <text
              x="188"
              y="224"
              textAnchor="middle"
              fill={stepColors.step1.tagText}
              className="text-[12px] font-semibold tracking-wide"
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
            d="M 340,34 A 306,306 0 0 1 646,340 L 456,340 A 116,116 0 0 0 340,224 Z"
            fill={stepColors.step2.fill}
            stroke={stepColors.step2.stroke}
            strokeWidth={hoveredStep === 2 ? '2.5' : '1.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 2 ? 0.85 : 1}
          />

          {/* Cijferbadge 2 */}
          <circle
            cx="492"
            cy="138"
            r={activeStep === 2 ? "21" : "19"}
            fill={stepColors.step2.badgeBg}
            stroke={stepColors.step2.badgeText}
            strokeWidth={activeStep === 2 ? "2.5" : "1.5"}
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="492"
            y="138"
            textAnchor="middle"
            dy="0.36em"
            fill={stepColors.step2.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            2
          </text>

          {/* Vraag & Dimensie Text */}
          <g pointerEvents="none">
            <text
              x="492"
              y="178"
              textAnchor="middle"
              fill={stepColors.step2.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Welke waarden
            </text>
            <text
              x="492"
              y="200"
              textAnchor="middle"
              fill={stepColors.step2.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              spelen hier?
            </text>
            <text
              x="492"
              y="224"
              textAnchor="middle"
              fill={stepColors.step2.tagText}
              className="text-[12px] font-semibold tracking-wide"
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
            d="M 646,340 A 306,306 0 0 1 340,646 L 340,456 A 116,116 0 0 0 456,340 Z"
            fill={stepColors.step3.fill}
            stroke={stepColors.step3.stroke}
            strokeWidth={hoveredStep === 3 ? '2.5' : '1.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 3 ? 0.85 : 1}
          />

          {/* Cijferbadge 3 */}
          <circle
            cx="492"
            cy="442"
            r={activeStep === 3 ? "21" : "19"}
            fill={stepColors.step3.badgeBg}
            stroke={stepColors.step3.badgeText}
            strokeWidth={activeStep === 3 ? "2.5" : "1.5"}
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="492"
            y="442"
            textAnchor="middle"
            dy="0.36em"
            fill={stepColors.step3.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            3
          </text>

          {/* Vraag & Dimensie Text */}
          <g pointerEvents="none">
            <text
              x="492"
              y="478"
              textAnchor="middle"
              fill={stepColors.step3.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Hoe werken we
            </text>
            <text
              x="492"
              y="500"
              textAnchor="middle"
              fill={stepColors.step3.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              aan aanwezigheid?
            </text>
            <text
              x="492"
              y="525"
              textAnchor="middle"
              fill={stepColors.step3.tagText}
              className="text-[13px] font-bold tracking-normal"
            >
              Handelings-
            </text>
            <text
              x="492"
              y="542"
              textAnchor="middle"
              fill={stepColors.step3.tagText}
              className="text-[13px] font-bold tracking-normal"
            >
              perspectieven
            </text>
          </g>
        </g>

        {/* ========================================================
            STAP 4: Linksonder (Bottom-Left) · Evaluatie
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
            d="M 340,646 A 306,306 0 0 1 34,340 L 224,340 A 116,116 0 0 0 340,456 Z"
            fill={stepColors.step4.fill}
            stroke={stepColors.step4.stroke}
            strokeWidth={hoveredStep === 4 ? '2.5' : '1.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 4 ? 0.85 : 1}
          />

          {/* Cijferbadge 4 */}
          <circle
            cx="188"
            cy="442"
            r={activeStep === 4 ? "21" : "19"}
            fill={stepColors.step4.badgeBg}
            stroke={stepColors.step4.badgeText}
            strokeWidth={activeStep === 4 ? "2.5" : "1.5"}
            className="shadow-xs transition-transform duration-150"
          />
          <text
            x="188"
            y="442"
            textAnchor="middle"
            dy="0.36em"
            fill={stepColors.step4.badgeText}
            className="font-bold text-[16px] pointer-events-none"
          >
            4
          </text>

          {/* Vraag & Dimensie Text */}
          <g pointerEvents="none">
            <text
              x="188"
              y="478"
              textAnchor="middle"
              fill={stepColors.step4.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              Staat het
            </text>
            <text
              x="188"
              y="500"
              textAnchor="middle"
              fill={stepColors.step4.text}
              className="text-[16px] sm:text-[17px] font-bold tracking-tight"
            >
              beleid stevig?
            </text>
            <text
              x="188"
              y="528"
              textAnchor="middle"
              fill={stepColors.step4.tagText}
              className="text-[13px] font-bold tracking-wide"
            >
              Evaluatie
            </text>
          </g>
        </g>

        {/* ========================================================
            Centraal Hub (Duidelijker, groter cirkeltje in het midden)
           ======================================================== */}
        <circle cx="340" cy="340" r="105" fill="#ffffff" stroke="#003340" strokeWidth="1.5" strokeOpacity="0.14" pointerEvents="none" />
        <circle cx="340" cy="340" r="92" fill="#fbfaf7" pointerEvents="none" />
        <text
          x="340"
          y="331"
          textAnchor="middle"
          fill="#003340"
          className="font-['Poppins',sans-serif] text-[18.5px] font-bold pointer-events-none tracking-tight"
        >
          Aanwezigheids
        </text>
        <text
          x="340"
          y="358"
          textAnchor="middle"
          fill="#d3104c"
          className="font-['Poppins',sans-serif] text-[21.5px] font-black pointer-events-none tracking-tight"
        >
          ethos
        </text>
      </svg>
    </div>
  );
};
