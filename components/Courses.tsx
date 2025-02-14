import Head from 'next/head';
import CourseCard from '../components/CourseCard';
import Link from 'next/link';

const coursesData = [
  {
    title: 'UI/UX Masterclass',
    description:
      'Complete design system for web & mobile applications with Figma, Adobe XD, and prototyping.',
    slug: 'ui-ux-web-design',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '6 Weeks',
    difficulty: 'Beginner',
    price: 299,
    rating: 4.8,
    studentsEnrolled: 12450,
    bestseller: true,
  },
  {
    title: 'Java Development',
    description:
      'Build enterprise applications with Spring Boot, Hibernate, React, and AWS deployment.',
    slug: 'full-stack-java',
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '8 Weeks',
    difficulty: 'Intermediate',
    price: 399,
    rating: 4.7,
    studentsEnrolled: 8560,
    bestseller: true,
  },
  {
    title: 'SAP FICO/SAP MM',
    description:
      'Master financial management / material management by learning our SAP FICO /SAP MM Course.',
    slug: 'mern-stack',
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '10 Weeks',
    difficulty: 'Advanced',
    price: 449,
    rating: 4.9,
    studentsEnrolled: 13420,
  },
];

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Best UI/UX, Full Stack & SAP Courses in Pune | PrimePoint Academy</title>
        <meta
          name="description"
          content="Join Pune's top-rated UI/UX Design, Full Stack Development, MERN Stack, SAP MM & FICO courses with live projects, 1:1 mentorship, and 100% placement support. Become industry-ready with expert-led training."
        />
        <meta
          name="keywords"
          content="UI UX Course Pune, Full Stack Developer Course, MERN Stack Classes, SAP MM Training, SAP FICO Course, Best IT Academy Pune"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best UI/UX, Full Stack & SAP Courses in Pune | PrimePoint Academy" />
        <meta
          property="og:description"
          content="Join Pune's top-rated UI/UX Design, Full Stack Development, MERN Stack, SAP MM & FICO courses with live projects, 1:1 mentorship, and 100% placement support."
        />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://example.com/courses" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r rounded-md from-[#0b5fa4] to-[#0d4186] py-1 mt-3 md:mx-28 text-center text-white">
        <h1 className="text-4xl font-bold mb-1">Our Trending IT Courses in Pune</h1>
      </div>

      {/* Trending Courses Section */}
      <section
        id="courses-grid"
        className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
        aria-label="Course Catalog"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
              aria-label={`Course details for ${course.title}`}
            />
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <Link
            href="/courses"
            className="inline-block bg-[#0b7bb8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            aria-label="Explore available courses"
          >
            Explore All Courses
          </Link>
        </div>
      </section>
    </>
  );
}