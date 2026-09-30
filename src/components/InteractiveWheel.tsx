import React, { useState } from 'react';
import { StepNumber } from '../types';

interface InteractiveWheelProps {
  activeStep: StepNumber | null;
  onSelectStep: (stepNumber: StepNumber) => void;
}

export const InteractiveWheel: React.FC<InteractiveWheelProps> = ({
  activeStep: _activeStep,
  onSelectStep,
}) => {
  const [hoveredStep, setHoveredStep] = useState<StepNumber | null>(null);

  return (
    <div className="w-full max-w-[420px] mx-auto mt-2 mb-0 sm:mt-3 sm:mb-1 flex flex-col items-center">
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Wiel met vier stappen"
        className="w-full h-auto select-none"
        style={{ width: '100%', maxWidth: '420px', height: 'auto' }}
      >
        <title>Wiel met vier stappen</title>

        {/* Stap 1: Feitelijke dimensie */}
        <g
          role="button"
          tabIndex={0}
          aria-label="Stap 1: Wat is eigenlijk het probleem? Feitelijke dimensie"
          onClick={() => onSelectStep(1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectStep(1);
            }
          }}
          onMouseEnter={() => setHoveredStep(1)}
          onMouseLeave={() => setHoveredStep(null)}
          className="cursor-pointer transition-opacity duration-150 focus:outline-none"
          opacity={hoveredStep && hoveredStep !== 1 ? 0.85 : 1}
        >
          <path d="M196 196 L196 12 A184 184 0 0 0 12 196 Z" fill="#d3104c" />
          <circle cx="98" cy="80" r="14" fill="#ffffff" />
          <text x="98" y="86" fontSize="16" fontWeight="700" fill="#d3104c" textAnchor="middle" fontFamily="Poppins">1</text>
          <text x="98" y="117" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Wat is eigenlijk</text>
          <text x="98" y="136" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">het probleem?</text>
          <text x="91" y="152" fontSize="11.5" fontWeight="500" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Feitelijke dimensie</text>
        </g>

        {/* Stap 2: Normatieve dimensie */}
        <g
          role="button"
          tabIndex={0}
          aria-label="Stap 2: Welke waarden spelen hier? Normatieve dimensie"
          onClick={() => onSelectStep(2)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectStep(2);
            }
          }}
          onMouseEnter={() => setHoveredStep(2)}
          onMouseLeave={() => setHoveredStep(null)}
          className="cursor-pointer transition-opacity duration-150 focus:outline-none"
          opacity={hoveredStep && hoveredStep !== 2 ? 0.85 : 1}
        >
          <path d="M204 196 L388 196 A184 184 0 0 0 204 12 Z" fill="#003340" />
          <circle cx="300" cy="80" r="14" fill="#ffffff" />
          <text x="300" y="86" fontSize="16" fontWeight="700" fill="#003340" textAnchor="middle" fontFamily="Poppins">2</text>
          <text x="300" y="117" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Welke waarden</text>
          <text x="300" y="136" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">spelen hier?</text>
          <text x="309" y="152" fontSize="11.5" fontWeight="500" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Normatieve dimensie</text>
        </g>

        {/* Stap 3: Handelingsperspectieven */}
        <g
          role="button"
          tabIndex={0}
          aria-label="Stap 3: Hoe werken we aan aanwezigheid? Handelingsperspectieven"
          onClick={() => onSelectStep(3)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectStep(3);
            }
          }}
          onMouseEnter={() => setHoveredStep(3)}
          onMouseLeave={() => setHoveredStep(null)}
          className="cursor-pointer transition-opacity duration-150 focus:outline-none"
          opacity={hoveredStep && hoveredStep !== 3 ? 0.85 : 1}
        >
          <path d="M204 204 L204 388 A184 184 0 0 0 388 204 Z" fill="#00789b" />
          <circle cx="281" cy="239" r="14" fill="#ffffff" />
          <text x="281" y="245" fontSize="16" fontWeight="700" fill="#00789b" textAnchor="middle" fontFamily="Poppins">3</text>
          <text x="281" y="277" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Hoe werken we</text>
          <text x="281" y="296" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">aan aanwezigheid?</text>
          <text x="279" y="313" fontSize="10" fontWeight="600" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Handelingsperspectieven</text>
        </g>

        {/* Stap 4: Toetsing */}
        <g
          role="button"
          tabIndex={0}
          aria-label="Stap 4: Staat het beleid stevig? Toetsing"
          onClick={() => onSelectStep(4)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectStep(4);
            }
          }}
          onMouseEnter={() => setHoveredStep(4)}
          onMouseLeave={() => setHoveredStep(null)}
          className="cursor-pointer transition-opacity duration-150 focus:outline-none"
          opacity={hoveredStep && hoveredStep !== 4 ? 0.85 : 1}
        >
          <path d="M196 204 L12 204 A184 184 0 0 0 196 388 Z" fill="#9a6a00" />
          <circle cx="119" cy="239" r="14" fill="#ffffff" />
          <text x="119" y="245" fontSize="16" fontWeight="700" fill="#9a6a00" textAnchor="middle" fontFamily="Poppins">4</text>
          <text x="119" y="277" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Staat het</text>
          <text x="119" y="296" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">beleid stevig?</text>
          <text x="121" y="313" fontSize="10" fontWeight="600" fill="#ffffff" textAnchor="middle" fontFamily="Poppins">Toetsing</text>
        </g>

        {/* Binnencirkel & Centraal logo */}
        <circle cx="200" cy="200" r="62" fill="#f7efe3" pointerEvents="none" />
        <circle cx="200" cy="200" r="52" fill="#ffffff" pointerEvents="none" />
        <text
          x="200"
          y="196"
          textAnchor="middle"
          fontFamily="Poppins"
          fontSize="13"
          fontWeight="700"
          fill="#003340"
          pointerEvents="none"
        >
          Aanwezigheids
        </text>
        <text
          x="200"
          y="215"
          textAnchor="middle"
          fontFamily="Poppins"
          fontSize="15"
          fontWeight="700"
          fill="#d3104c"
          pointerEvents="none"
        >
          ethos
        </text>
      </svg>
    </div>
  );
};
