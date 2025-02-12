import { notFound } from 'next/navigation';
import Breadcrumbs from '../../../components/Breadcrumbs';

interface Course {
  name: string;
  description: string;
  slug: string;
  content: string;
}

const coursesData: Course[] = [
  {
    name: 'UI UX Web Design',
    description: 'Learn the fundamentals of UI/UX and design stunning websites.',
    slug: 'ui-ux-web-design',
    content: '<p>Detailed course content for UI UX Web Design goes here...</p>',
  },
  {
    name: 'Full Stack Java',
    description: 'Master Java for backend and frontend development with modern frameworks.',
    slug: 'full-stack-java',
    content: '<p>Detailed course content for Full Stack Java goes here...</p>',
  },
  {
    name: 'MERN Stack',
    description: 'Become proficient in MongoDB, Express, React, and Node.js development.',
    slug: 'mern-stack',
    content: '<p>Detailed course content for MERN Stack goes here...</p>',
  },
  {
    name: 'Full Stack Python',
    description: 'Learn Python and its frameworks to build robust web applications.',
    slug: 'full-stack-python',
    content: '<p>Detailed course content for Full Stack Python goes here...</p>',
  },
  {
    name: 'Data Science',
    description: 'Dive into data analysis, visualization, and machine learning techniques.',
    slug: 'data-science',
    content: '<p>Detailed course content for Data Science goes here...</p>',
  },
  {
    name: 'Data Analyst',
    description: 'Gain skills in data manipulation, SQL, and analytical tools.',
    slug: 'data-analyst',
    content: '<p>Detailed course content for Data Analyst goes here...</p>',
  },
  {
    name: 'Artificial Intelligence',
    description: 'Explore the world of AI and machine learning with practical projects.',
    slug: 'artificial-intelligence',
    content: '<p>Detailed course content for Artificial Intelligence goes here...</p>',
  },
];

export async function generateStaticParams() {
  return coursesData.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const course = coursesData.find((course) => course.slug === params.slug);
  if (!course) {
    notFound();
  }
  return {
    title: `${course.name} - MyCodingCourses`,
    description: course.description,
  };
}

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = coursesData.find((course) => course.slug === params.slug);
  if (!course) {
    notFound();
  }
  return (
    <main>
      {/* Banner with Breadcrumbs */}
      <section className="relative">
        <div
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/course-detail-banner.jpg')" }}
          aria-label={`${course.name} banner image`}
        >
          {/* Breadcrumbs positioned at top-left */}
          <div className="absolute top-4 left-4">
            <Breadcrumbs currentPage={course.name} />
          </div>
          {/* Overlay and course title */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">{course.name}</h1>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6">{course.description}</p>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: course.content }}
          />
        </div>
      </section>
    </main>
  );
}
