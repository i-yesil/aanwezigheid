import React, { useState } from 'react';
import { StepNumber } from '../types';

interface InteractiveWheelProps {
  activeStep: StepNumber;
  onSelectStep: (stepNumber: StepNumber) => void;
}

export const InteractiveWheel: React.FC<InteractiveWheelProps> = ({
  activeStep,
  onSelectStep,
}) => {
  const [hoveredStep, setHoveredStep] = useState<StepNumber | null>(null);

  return (
    <div className="w-full max-w-[520px] mx-auto my-6 sm:my-8">
      <svg
        viewBox="0 0 680 640"
        className="w-full h-auto drop-shadow-sm select-none"
        role="img"
        aria-label="De vijf stappen van de handreiking in één interactief wiel"
      >
        <title>De vijf stappen van het Aanwezigheidsethos Wiel</title>

        {/* Outer Wheel Segments */}
        {/* Step 1: Feitelijk (Red) */}
        <g
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(1)}
          onMouseEnter={() => setHoveredStep(1)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <path
            d="M 340,30 A 290,290 0 0 1 615.81,230.39 L 444.62,286.01 A 110,110 0 0 0 340,210 Z"
            fill="#d3104c"
            stroke="#ffffff"
            strokeWidth={activeStep === 1 || hoveredStep === 1 ? '4' : '2.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 1 ? 0.75 : 1}
          />
        </g>

        {/* Step 2: Normatief (Dark Blue) */}
        <g
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(2)}
          onMouseEnter={() => setHoveredStep(2)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <path
            d="M 615.81,230.39 A 290,290 0 0 1 510.46,554.61 L 404.66,408.99 A 110,110 0 0 0 444.62,286.01 Z"
            fill="#003340"
            stroke="#ffffff"
            strokeWidth={activeStep === 2 || hoveredStep === 2 ? '4' : '2.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 2 ? 0.75 : 1}
          />
        </g>

        {/* Step 3: Routes (Light Blue) */}
        <g
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(3)}
          onMouseEnter={() => setHoveredStep(3)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <path
            d="M 510.46,554.61 A 290,290 0 0 1 169.54,554.61 L 275.34,408.99 A 110,110 0 0 0 404.66,408.99 Z"
            fill="#00b0eb"
            stroke="#ffffff"
            strokeWidth={activeStep === 3 || hoveredStep === 3 ? '4' : '2.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 3 ? 0.75 : 1}
          />
        </g>

        {/* Step 4: Juridisch (Dark Red) */}
        <g
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(4)}
          onMouseEnter={() => setHoveredStep(4)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <path
            d="M 169.54,554.61 A 290,290 0 0 1 64.19,230.39 L 235.38,286.01 A 110,110 0 0 0 275.34,408.99 Z"
            fill="#b41e4b"
            stroke="#ffffff"
            strokeWidth={activeStep === 4 || hoveredStep === 4 ? '4' : '2.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 4 ? 0.75 : 1}
          />
        </g>

        {/* Step 5: 4 G's (Yellow) */}
        <g
          className="cursor-pointer transition-transform duration-200"
          onClick={() => onSelectStep(5)}
          onMouseEnter={() => setHoveredStep(5)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <path
            d="M 64.19,230.39 A 290,290 0 0 1 340,30 L 340,210 A 110,110 0 0 0 235.38,286.01 Z"
            fill="#fcc200"
            stroke="#ffffff"
            strokeWidth={activeStep === 5 || hoveredStep === 5 ? '4' : '2.5'}
            className="transition-all duration-200"
            opacity={hoveredStep && hoveredStep !== 5 ? 0.75 : 1}
          />
        </g>

        {/* Labels for each segment */}
        {/* Segment 1 Text */}
        <g pointerEvents="none" className="font-['Poppins',sans-serif]">
          <text x="475" y="124" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            Wat is eigenlijk
          </text>
          <text x="475" y="142" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            het probleem?
          </text>
          <text x="475" y="160" textAnchor="middle" fill="#ffffff" opacity="0.85" className="text-[10px] uppercase tracking-wider">
            Feitelijk
          </text>
        </g>

        {/* Segment 2 Text */}
        <g pointerEvents="none" className="font-['Poppins',sans-serif]">
          <text x="559" y="381" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            Welke waarden
          </text>
          <text x="559" y="399" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            spelen hier?
          </text>
          <text x="559" y="417" textAnchor="middle" fill="#ffffff" opacity="0.85" className="text-[10px] uppercase tracking-wider">
            Normatief
          </text>
        </g>

        {/* Segment 3 Text */}
        <g pointerEvents="none" className="font-['Poppins',sans-serif]">
          <text x="340" y="540" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            Welke aanpak
          </text>
          <text x="340" y="558" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            kiezen we?
          </text>
          <text x="340" y="576" textAnchor="middle" fill="#ffffff" opacity="0.95" className="text-[10px] uppercase tracking-wider font-semibold">
            Routes
          </text>
        </g>

        {/* Segment 4 Text */}
        <g pointerEvents="none" className="font-['Poppins',sans-serif]">
          <text x="121" y="381" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            Wat mag
          </text>
          <text x="121" y="399" textAnchor="middle" fill="#ffffff" className="text-[13px] font-semibold">
            juridisch?
          </text>
          <text x="121" y="417" textAnchor="middle" fill="#ffffff" opacity="0.85" className="text-[10px] uppercase tracking-wider">
            Voorwaarden
          </text>
        </g>

        {/* Segment 5 Text */}
        <g pointerEvents="none" className="font-['Poppins',sans-serif]">
          <text x="205" y="124" textAnchor="middle" fill="#003340" className="text-[13px] font-semibold">
            Staat het
          </text>
          <text x="205" y="142" textAnchor="middle" fill="#003340" className="text-[13px] font-semibold">
            beleid stevig?
          </text>
          <text x="205" y="160" textAnchor="middle" fill="#003340" opacity="0.8" className="text-[10px] uppercase tracking-wider font-semibold">
            4 G's
          </text>
        </g>

        {/* Number Badges */}
        {/* Badge 1 */}
        <g
          className="cursor-pointer group"
          onClick={() => onSelectStep(1)}
          onMouseEnter={() => setHoveredStep(1)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <circle
            cx="425"
            cy="203"
            r="28"
            fill="#ffffff"
            stroke="#d3104c"
            strokeWidth={activeStep === 1 || hoveredStep === 1 ? '3' : '1.5'}
            className="transition-transform duration-150 group-hover:scale-105"
          />
          <text
            x="425"
            y="203"
            textAnchor="middle"
            dy="0.35em"
            fill="#d3104c"
            className="font-['Poppins',sans-serif] text-[18px] font-semibold pointer-events-none"
          >
            1
          </text>
        </g>

        {/* Badge 2 */}
        <g
          className="cursor-pointer group"
          onClick={() => onSelectStep(2)}
          onMouseEnter={() => setHoveredStep(2)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <circle
            cx="478"
            cy="365"
            r="28"
            fill="#ffffff"
            stroke="#003340"
            strokeWidth={activeStep === 2 || hoveredStep === 2 ? '3' : '1.5'}
            className="transition-transform duration-150 group-hover:scale-105"
          />
          <text
            x="478"
            y="365"
            textAnchor="middle"
            dy="0.35em"
            fill="#003340"
            className="font-['Poppins',sans-serif] text-[18px] font-semibold pointer-events-none"
          >
            2
          </text>
        </g>

        {/* Badge 3 */}
        <g
          className="cursor-pointer group"
          onClick={() => onSelectStep(3)}
          onMouseEnter={() => setHoveredStep(3)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <circle
            cx="340"
            cy="465"
            r="28"
            fill="#ffffff"
            stroke="#00b0eb"
            strokeWidth={activeStep === 3 || hoveredStep === 3 ? '3' : '1.5'}
            className="transition-transform duration-150 group-hover:scale-105"
          />
          <text
            x="340"
            y="465"
            textAnchor="middle"
            dy="0.35em"
            fill="#00b0eb"
            className="font-['Poppins',sans-serif] text-[18px] font-semibold pointer-events-none"
          >
            3
          </text>
        </g>

        {/* Badge 4 */}
        <g
          className="cursor-pointer group"
          onClick={() => onSelectStep(4)}
          onMouseEnter={() => setHoveredStep(4)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <circle
            cx="202"
            cy="365"
            r="28"
            fill="#ffffff"
            stroke="#b41e4b"
            strokeWidth={activeStep === 4 || hoveredStep === 4 ? '3' : '1.5'}
            className="transition-transform duration-150 group-hover:scale-105"
          />
          <text
            x="202"
            y="365"
            textAnchor="middle"
            dy="0.35em"
            fill="#b41e4b"
            className="font-['Poppins',sans-serif] text-[18px] font-semibold pointer-events-none"
          >
            4
          </text>
        </g>

        {/* Badge 5 */}
        <g
          className="cursor-pointer group"
          onClick={() => onSelectStep(5)}
          onMouseEnter={() => setHoveredStep(5)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <circle
            cx="255"
            cy="203"
            r="28"
            fill="#ffffff"
            stroke="#003340"
            strokeWidth={activeStep === 5 || hoveredStep === 5 ? '3' : '1.5'}
            className="transition-transform duration-150 group-hover:scale-105"
          />
          <text
            x="255"
            y="203"
            textAnchor="middle"
            dy="0.35em"
            fill="#003340"
            className="font-['Poppins',sans-serif] text-[18px] font-semibold pointer-events-none"
          >
            5
          </text>
        </g>

        {/* Center Hub (r=90) */}
        <circle cx="340" cy="320" r="90" fill="#ffffff" pointerEvents="none" />
        <circle cx="340" cy="320" r="90" fill="none" stroke="#003340" strokeWidth="0.75" opacity="0.25" pointerEvents="none" />
        <text
          x="340"
          y="314"
          textAnchor="middle"
          fill="#003340"
          className="font-['Poppins',sans-serif] text-[15px] font-semibold pointer-events-none"
        >
          Aanwezigheids
        </text>
        <text
          x="340"
          y="336"
          textAnchor="middle"
          fill="#d3104c"
          className="font-['Poppins',sans-serif] text-[15px] font-bold pointer-events-none"
        >
          ethos
        </text>
      </svg>
    </div>
  );
};
