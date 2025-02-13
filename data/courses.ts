// data/courses.ts
import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    title: 'UI UX Web Design',
    slug: 'ui-ux-web-design',
    description:
      'Master the art of creating intuitive and visually appealing web interfaces...',
    duration: '8 Weeks',
    syllabus: [
      'Introduction to UI/UX Principles',
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'Tools: Figma, Adobe XD',
      'Design Systems & Responsive Design',
    ],
    prerequisites: ['Basic computer skills', 'Interest in design'],
    benefits: ['Portfolio development', 'Industry-recognized certification'],
    image:
      'https://media.istockphoto.com/id/1487454991/photo/neon-user-experience-ux-sign-on-black.jpg?s=2048x2048&w=is&k=20&c=OswRva7SR_ibGfFNNzfvAsu3O0cb4_X-dmtQ36vpd_0=',
    difficulty: 'Beginner',
    price: 99,
    rating: 4.8,
    studentsEnrolled: 2500,
  },
  {
    title: 'Full Stack Java',
    slug: 'full-stack-java',
    description:
      'Learn full-stack development using Java, Spring Boot, and modern web technologies...',
    duration: '12 Weeks',
    syllabus: [
      'Java Fundamentals',
      'Spring Boot Framework',
      'RESTful API Development',
      'Frontend Integration with React',
      'Database Management with MySQL',
    ],
    prerequisites: ['Basic programming knowledge', 'Familiarity with OOP concepts'],
    benefits: ['Build enterprise-level applications', 'Hands-on project experience'],
    image:
      'https://www.vectorlogo.zone/logos/java/java-ar21.png',
    difficulty: 'Intermediate',
    price: 149,
    rating: 4.7,
    studentsEnrolled: 2000,
  },
  {
    title: 'MERN Stack',
    slug: 'introduction-to-react',
    description:
      'Master the MERN stack (MongoDB, Express, React, Node.js) to build dynamic web applications...',
    duration: '10 Weeks',
    syllabus: [
      'Introduction to React',
      'Building REST APIs with Express',
      'Database Management with MongoDB',
      'Authentication & Authorization',
      'Deployment to Cloud Platforms',
    ],
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with HTML/CSS'],
    benefits: ['Real-world project deployment', 'Industry-relevant skills'],
    image:
      'https://miro.medium.com/v2/resize:fit:1400/1*6WmTgJU8tEwVlXZDyYhBjA.png',
    difficulty: 'Intermediate',
    price: 129,
    rating: 4.9,
    studentsEnrolled: 3000,
  },
  {
    title: 'Full Stack Python',
    slug: 'full-stack-python',
    description:
      'Learn full-stack development using Python, Django, and modern frontend frameworks...',
    duration: '12 Weeks',
    syllabus: [
      'Python Basics',
      'Django Framework',
      'Building REST APIs',
      'Frontend Integration with React',
      'Database Management with PostgreSQL',
    ],
    prerequisites: ['Basic programming knowledge', 'Familiarity with Python'],
    benefits: ['Build scalable web applications', 'Hands-on project experience'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    difficulty: 'Intermediate',
    price: 139,
    rating: 4.8,
    studentsEnrolled: 2200,
  },
  {
    title: 'Data Science',
    slug: 'data-science',
    description:
      'Explore the world of data science, including machine learning, data analysis, and visualization...',
    duration: '16 Weeks',
    syllabus: [
      'Introduction to Data Science',
      'Data Cleaning & Preprocessing',
      'Machine Learning Algorithms',
      'Data Visualization with Matplotlib/Seaborn',
      'Real-world Case Studies',
    ],
    prerequisites: ['Basic statistics knowledge', 'Familiarity with Python'],
    benefits: ['Work on real datasets', 'Industry-relevant certifications'],
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg',
    difficulty: 'Advanced',
    price: 199,
    rating: 4.9,
    studentsEnrolled: 2800,
  },
  {
    title: 'Data Analyst',
    slug: 'data-analyst',
    description:
      'Become a skilled data analyst by mastering tools like Excel, SQL, and Tableau...',
    duration: '10 Weeks',
    syllabus: [
      'Data Analysis Fundamentals',
      'SQL for Data Analysis',
      'Data Visualization with Tableau',
      'Excel for Business Analytics',
      'Real-world Projects',
    ],
    prerequisites: ['Basic math knowledge', 'Familiarity with spreadsheets'],
    benefits: ['Gain practical experience', 'Certification upon completion'],
    image:
      'https://www.tableau.com/sites/default/files/media/what-is-data-analytics-hero.jpg',
    difficulty: 'Beginner',
    price: 119,
    rating: 4.7,
    studentsEnrolled: 1800,
  },
  {
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description:
      'Dive into the world of AI, including neural networks, deep learning, and NLP...',
    duration: '20 Weeks',
    syllabus: [
      'Introduction to AI',
      'Neural Networks & Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'AI Ethics & Applications',
    ],
    prerequisites: ['Basic programming knowledge', 'Understanding of calculus'],
    benefits: ['Build AI-powered applications', 'Industry-recognized certification'],
    image:
      'https://miro.medium.com/max/1400/1*PbCvL4aK1o2qz8rXs9b0Kw.jpeg',
    difficulty: 'Advanced',
    price: 249,
    rating: 4.9,
    studentsEnrolled: 1500,
  },
];