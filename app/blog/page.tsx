import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - PrimePoint</title>
      </Head>
      {/* Banner with Breadcrumbs */}
      <section className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/blog-banner.jpg')" }}
        >
          <Breadcrumbs currentPage="Blog" />
          <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
            <h1 className="text-white text-3xl font-bold">Blog</h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-700">Blog posts coming soon...</p>
        </div>
      </section>
    </>
  );
}
