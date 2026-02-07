
export type SlideType = 
  | 'intro' 
  | 'hermeneutics'
  | 'visual-info' 
  | 'split-visual'
  | 'timeline' 
  | 'scenario' 
  | 'interactive-reveal' 
  | 'stepped-overlay'
  | 'side-tabs-reveal'
  | 'tabs-reveal'
  | 'hotspot-reveal'
  | 'split-slider'
  | 'info-menu-reveal'
  | 'drag-drop'
  | 'quiz' 
  | 'puzzle'
  | 'reflection' 
  | 'completion'
  | 'interactive-video'
  | 'image-list-reveal'
  | 'split-stacked-reveal'
  | 'counseling-simulator'
  | 'mirror-case-simulator'
  | 'keynote-cards'
  | 'pyramid-reveal'
  | 'internal-switch'
  | 'flashcards';

export interface InternalSwitchData {
  situation: string;
  trigger: string;
  options: {
    deficit: {
      text: string;
      feedback: string;
    };
    expression: {
      text: string;
      feedback: string;
    };
  };
}

export interface MirrorCaseOption {
  id: string;
  text: string;
  points: number;
  feedback: string;
  biblicalRefs: string[];
}

export interface MirrorCaseStep {
  id: string;
  context: string;
  question: string;
  options: MirrorCaseOption[];
}

export interface MirrorCaseSummary {
  need: string;
  belief: string;
  goal: string;
  conduct: string;
  alternative: string;
  biblicalSupport: string;
}

export interface MirrorCase {
  id: string;
  title: string;
  icon: string;
  steps: MirrorCaseStep[];
  summary: MirrorCaseSummary;
}

export interface SlideVisual {
  type: 'image' | 'icon' | 'diagram' | 'map';
  source: string; 
  alt?: string;
  position?: 'left' | 'right' | 'top' | 'background';
  effect?: 'vignette' | 'none' | 'blur' | 'overlay-dark';
}

export interface RevealItem {
  title: string;
  text: string;
  longContent?: string;
  icon: string;
  image?: string;
  tags?: string[];
  x?: number; 
  y?: number;
  color?: string;
}

export interface DragItem {
  id: string;
  label: string;
  categoryId: string;
}

export interface DragCategory {
  id: string;
  title: string;
}

export interface SlideOption {
  id: string;
  label: string;
  feedback: string;
  isCorrect?: boolean;
}

export interface Slide {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  visual: SlideVisual;
  content?: string;
  bullets?: string[];
  mirrorCases?: MirrorCase[];
  switchData?: InternalSwitchData;
  interaction?: {
    type: 'click-reveal' | 'multiple-choice' | 'decision' | 'input' | 'matching' | 'side-reveal' | 'grid-cards' | 'stepped-reveal' | 'hotspots' | 'internal-slider' | 'menu-reveal' | 'drag-drop' | 'visual-selector' | 'embed-video' | 'flashcards' | 'pyramid';
    options?: SlideOption[];
    revealItems?: RevealItem[];
    puzzleItems?: any[];
    dragItems?: DragItem[];
    dragCategories?: DragCategory[];
  };
}

export interface Lesson {
  id: string;
  title: string;
  totalSlides: number;
  slides: Slide[];
  subtitle?: string;
  objectives?: string[];
  duration?: string;
}
