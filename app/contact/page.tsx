import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - MyCodingCourses</title>
      </Head>
      {/* Banner with Breadcrumbs */}
      <section className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact-banner.jpg')" }}
        >
          <Breadcrumbs currentPage="Contact Us" />
          <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
            <h1 className="text-white text-3xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-700">
            We would love to hear from you. Please fill out the form below.
          </p>
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your Name" className="border p-2 rounded" required />
            <input type="email" placeholder="Your Email" className="border p-2 rounded" required />
            <textarea placeholder="Your Message" className="border p-2 rounded" rows={5} required />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
