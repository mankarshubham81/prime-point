import { notFound } from 'next/navigation';
import Image from 'next/image';
import { courses } from '@/data/courses';
import { Metadata } from 'next';
import BookDemoButton from '@/components/BookDemoButton';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find(c => c.slug === params.slug);
  console.log("cc",course)
  return {
    title: `${course?.title} | Prime Point`,
    description: course?.description,
  };
}

export async function generateStaticParams() {
  return courses.map(course => ({
    slug: course.slug,
  }));
}

export default function CoursePage({ params }: Props) {
  const course = courses.find(c => c.slug === params.slug);

  if (!course) notFound();

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="max-w-4xl mx-auto">
        <div className="mb-8">
          {course.image && (
            <div className="relative h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {course.duration}
            </span>
          </div>
          <p className="text-lg text-gray-600 mb-8">{course.description}</p>
          
          <BookDemoButton />
        </div>

        <div className="space-y-8">
          {course.prerequisites && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
              <ul className="list-disc pl-6 space-y-2">
                {course.prerequisites.map((item, i) => (
                  <li key={i} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold mb-4">Course Syllabus</h2>
            <div className="space-y-2">
              {course.syllabus.map((item, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium">Module {i + 1}: {item}</h3>
                </div>
              ))}
            </div>
          </div>

          {course.benefits && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Course Benefits</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.benefits.map((benefit, i) => (
                  <li key={i} className="p-4 bg-blue-50 rounded-lg">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}