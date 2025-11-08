export interface UserProfile {
  name: string;
  avatarId: string;
  score: number;
}

export interface Option {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  questionText: string;
  options: Option[];
  explanation?: string;
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