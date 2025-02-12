// pages/courses/index.tsx
import Head from 'next/head';
import CourseCard from '../components/CourseCard';
// import Breadcrumbs from '../components/Breadcrumbs';

const coursesData = [
  {
    title: 'UI/UX Masterclass',
    description: 'Complete design system for web & mobile applications with Figma, Adobe XD, and prototyping.',
    slug: 'ui-ux-web-design',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '6 Weeks',
    difficulty: 'Beginner',
    price: 299,
    rating: 4.8,
    studentsEnrolled: 12450,
    bestseller: true,
  },
  {
    title: 'Full Stack Java Development',
    description: 'Build enterprise applications with Spring Boot, Hibernate, React, and AWS deployment.',
    slug: 'full-stack-java',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '8 Weeks',
    difficulty: 'Intermediate',
    price: 399,
    rating: 4.7,
    studentsEnrolled: 8560,
    bestseller: true,
  },
  {
    title: 'MERN Stack Pro',
    description: 'Master MongoDB, Express, React, and Node.js with real-world e-commerce project.',
    slug: 'mern-stack',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '10 Weeks',
    difficulty: 'Advanced',
    price: 449,
    rating: 4.9,
    studentsEnrolled: 13420,
  },
  // Add more courses with similar structure...
];

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Courses - PrimePoint</title>
        <meta name="description" content="Explore our comprehensive catalog of coding and design courses" />
      </Head>

      {/* Enhanced Banner */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8 text-center">
          {/* <Breadcrumbs currentPage="Courses" /> */}
          <h1 className="text-4xl font-extrabold text-white mt-8 mb-4">
            Transform Your Career
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Learn from industry experts with real-world projects and 1:1 mentorship
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}