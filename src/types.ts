export type StepNumber = 1 | 2 | 3 | 4 | 'bronnen';

export interface ScientificInsight {
  text: string;
  citation: string;
  citationUrl?: string;
  sourceType?: 'journal' | 'book' | 'report' | 'law' | 'jurisprudence';
}

export interface PracticalMaterial {
  title: string;
  description: string;
  url?: string;
  type?: 'tool' | 'framework' | 'guide' | 'pilot';
  contactPerson?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  caption: string;
  source: 'youtube' | 'spotify' | 'external-video';
  mediaUrl: string;
  authorOrSpeaker?: string;
}

export interface CourtCase {
  id: string;
  title: string;
  subTitle: string;
  institution: string;
  instance: string;
  subject: string;
  citedArticles: { title: string; text: string }[];
  verdict: string;
  verdictType: 'student' | 'school'; // student wins vs school wins
  keyLessons: string;
  detailedReasons?: string[];
}

export interface LawArticle {
  title: string;
  description: string;
  lawRef: string;
  link?: string;
}

export interface DimensionData {
  id: string;
  step: StepNumber;
  stepName: string;
  stepTag: string;
  name: string;
  subtitle?: string;
  shortDescription: string;
  leadParagraph: string;
  dialogueQuestion: string;
  insights: ScientificInsight[];
  practicalMaterials?: PracticalMaterial[];
  pilots?: PracticalMaterial[];
  media?: MediaItem[];
  lawArticles?: LawArticle[];
  courtCases?: CourtCase[];
  proportionalityQuestions?: string[];
  policyRecommendations?: string[];
  hrFramework?: {
    title: string;
    summary: string;
    practicalExercises: string[];
    sourceMemo: {
      title: string;
      fileName: string;
      fileUrl: string;
    };
  };
  subGroups?: {
    name: string;
    items: string[];
  }[];
}

export interface StepSummary {
  number: StepNumber;
  name: string;
  shortName: string;
  tag: string;
  leadQuestion: string;
  description: string;
  color: string;
  activeBorderColor: string;
  dimensions: string[]; // IDs of dimensions in this step
}

export interface AssessmentState {
  courseName: string;
  targetYear: string;
  selectedIssues: string[]; // e.g. 'didactics', 'scheduling', 'belonging'
  chosenRoute: 'A' | 'B' | 'AB' | 'C' | null;
  isObligationPlanned?: boolean;
  legalChecked: {
    inOER: boolean;
    practicalExercise: boolean;
    hasAlternativeAssignment: boolean;
    transparentCommunication?: boolean;
    proportionalPolicy: boolean;
  };
  fourGScores: {
    gedragen: number; // 1 to 5
    geloofwaardig: number;
    gerechtvaardigd: number;
    gedeeld: number;
  };
  notes: string;
}
