import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const courses = [
  { name: 'UI UX Web Design', slug: 'ui-ux-web-design' },
  { name: 'Full Stack Java', slug: 'full-stack-java' },
  { name: 'MERN Stack', slug: 'mern-stack' },
  { name: 'Full Stack Python', slug: 'full-stack-python' },
  { name: 'Data Science', slug: 'data-science' },
  { name: 'Data Analyst', slug: 'data-analyst' },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
];

const Footer = () => {
  return (
    <footer className="bg-[#042c74] text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media & Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
          <div>
            <p>
              Contact: <a href="tel:8390671523" className="hover:underline">8390671523</a>
            </p>
            <p>
              Address:{" "}
              <a
                href="https://g.page/YOUR-GMB-PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                123 Main Street, City, Country
              </a>
            </p>
          </div>
        </div>
        {/* Courses */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Courses</h3>
          <ul>
            {courses.map((course) => (
              <li key={course.slug} className="mb-2">
                <Link href={`/courses/${course.slug}`}>
                  <span className="hover:underline cursor-pointer">{course.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="/">
                <span className="hover:underline cursor-pointer">Home</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/courses">
                <span className="hover:underline cursor-pointer">Courses</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/gallery">
                <span className="hover:underline cursor-pointer">Gallery</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blog">
                <span className="hover:underline cursor-pointer">Blog</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">
                <span className="hover:underline cursor-pointer">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} PrimePoint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
