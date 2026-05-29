export interface Course {
  id: string;
  title: string;
  subtitle: string;
  materialCount: number;
  examCount: number;
  flashcardDeckCount: number;
  updatedAt: string;
}

export type MaterialType = "document" | "exam" | "flashcard_deck";

export interface CourseMaterial {
  id: string;
  title: string;
  type: MaterialType;
  createdAt: string;
  status: "ready" | "generating";
}

export interface CourseDetail extends Course {
  materials: CourseMaterial[];
}
