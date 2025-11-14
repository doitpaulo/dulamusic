export interface UserProfile {
  name: string;
  avatarId: string;
  score: number;
}

export interface Option {
  text: string;
  isCorrect: boolean;
}

export interface AudioPayload {
    type: 'sequence' | 'chord' | 'progression';
    notes?: string[]; // for sequence or single chord
    chords?: string[][]; // for progression
    duration?: number; // duration of each note/chord in seconds
    staccato?: boolean; // for articulation examples
}

export interface Question {
  id: number;
  questionText: string;
  options: Option[];
  explanation?: string;
  audio?: AudioPayload;
}

export interface Trail {
  id: string;
  title: string;
  questions: Question[];
}

export interface Module {
  id: string;
  title: string;
  level: string;
  trails: Trail[];
}