// data/courses.ts
import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    title: 'UI UX Web Design',
    slug: 'ui-ux-web-design',
    description: 'Master the art of creating intuitive and visually appealing web interfaces...',
    duration: '8 Weeks',
    syllabus: [
      'Introduction to UI/UX Principles',
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'Tools: Figma, Adobe XD',
      'Design Systems & Responsive Design'
    ],
    prerequisites: ['Basic computer skills', 'Interest in design'],
    benefits: ['Portfolio development', 'Industry-recognized certification'],
    image: 'https://media.istockphoto.com/id/1487454991/photo/neon-user-experience-ux-sign-on-black.jpg?s=2048x2048&w=is&k=20&c=OswRva7SR_ibGfFNNzfvAsu3O0cb4_X-dmtQ36vpd_0='
  },
  // Add other courses following the same structure
];