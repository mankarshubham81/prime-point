export type Course = {
    title: string;
    slug: string;
    description: string;
    duration: string;
    syllabus: string[];
    prerequisites?: string[];
    benefits?: string[];
    image: string;
    difficulty?: string;
    price?:number;
    rating?:number;
    studentsEnrolled?:number;
    bestseller?: boolean;
    
  };


  export interface Courses {
    title: string;
    description: string;
    slug: string;
    image: string; // Ensure this is always a string (not optional)
    duration: string;
    difficulty: string;
    price: number;
    rating: number;
    studentsEnrolled?: number;
    bestseller?: boolean;
    syllabus: string[];
    prerequisites: string[];
    benefits: string[];
    
  }