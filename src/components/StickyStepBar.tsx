import React from 'react';
import { STEPS } from '../data/attendanceData';
import { StepNumber } from '../types';

interface StickyStepBarProps {
  activeStep: StepNumber | null;
  onSelectStep: (stepNumber: StepNumber) => void;
}

export const StickyStepBar: React.FC<StickyStepBarProps> = ({
  activeStep,
  onSelectStep,
}) => {
  return (
    <div className="sticky top-0 z-30 bg-[#f7efe3]/95 backdrop-blur-md border-b border-[#003340]/15 shadow-xs transition-all">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 py-2.5 flex items-center gap-3">
        <span className="hidden sm:inline-block text-[10px] font-bold tracking-[0.12em] uppercase text-[#003340]/60 shrink-0">
          Stappen
        </span>

        <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5 w-full">
          {STEPS.map((step) => {
            const isActive = activeStep === step.number;
            return (
              <button
                key={step.number}
                onClick={() => onSelectStep(step.number)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold shadow-xs'
                    : 'bg-white border-[#003340]/15 text-[#003340] hover:border-[#003340]/40'
                }`}
                style={{
                  backgroundColor: isActive ? step.color : undefined,
                  borderColor: isActive ? step.color : undefined,
                  color: isActive && (step.number === 3 || step.number === 4) ? '#003340' : undefined,
                }}
                title={`Stap ${step.number} · ${step.name}`}
              >
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                  style={{
                    backgroundColor: isActive
                      ? step.number === 3 || step.number === 4
                        ? 'rgba(0, 51, 64, 0.2)'
                        : 'rgba(255, 255, 255, 0.25)'
                      : step.color,
                    color: !isActive && (step.number === 3 || step.number === 4) ? '#003340' : '#ffffff',
                  }}
                >
                  {step.number}
                </span>
                <span className="truncate max-w-[140px] sm:max-w-none">{step.shortName}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
