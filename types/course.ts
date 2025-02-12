export type Course = {
    title: string;
    slug: string;
    description: string;
    duration: string;
    syllabus: string[];
    prerequisites?: string[];
    benefits?: string[];
    image?: string;
  };