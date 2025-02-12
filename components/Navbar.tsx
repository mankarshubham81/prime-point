"use client"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image';

const coursesList = [
  { title: 'UI UX Web Design', slug: 'ui-ux-web-design' },
  { title: 'Full Stack Java', slug: 'full-stack-java' },
  { title: 'MERN Stack', slug: 'mern-stack' },
  { title: 'Full Stack Python', slug: 'full-stack-python' },
  { title: 'Data Science', slug: 'data-science' },
  { title: 'Data Analyst', slug: 'data-analyst' },
  { title: 'Artificial Intelligence', slug: 'artificial-intelligence' }
]

export default function Navbar() {
  const [courseDropdown, setCourseDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCourseDropdown(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="relative w-40 h-16"> {/* Adjust container size as needed */}
            <Image
              src="/logo.png"
              alt="Prime Point Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
            </li>
            
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCourseDropdown(!courseDropdown)}
                onMouseEnter={() => setCourseDropdown(true)}
                className="hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
                aria-haspopup="true"
                aria-expanded={courseDropdown}
              >
                Courses
              </button>
              
              <AnimatePresence>
                {courseDropdown && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg py-2 min-w-[220px]"
                    role="menu"
                  >
                    {coursesList.map((course) => (
                      <li key={course.slug}>
                        <Link
                          href={`/course/${course.slug}`}
                          className="px-4 py-2 hover:bg-gray-50 block transition-colors text-gray-700 hover:text-blue-600"
                          onClick={() => setCourseDropdown(false)}
                        >
                          {course.title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-blue-600 transition-colors font-medium">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-6 ml-4">
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-blue-600 hover:scale-110 transition-all">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://facebook.com" className="hover:text-blue-600 hover:scale-110 transition-all">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-600 hover:scale-110 transition-all">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-600 hover:scale-110 transition-all">
                <FaTwitter className="text-xl" />
              </a>
            </div>

            <Link
              href="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md font-medium"
            >
              Book Free Demo
            </Link>
            
            <a href="tel:8390671523" className="text-gray-600 hover:text-blue-600 transition-colors">
              8390671523
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-xl p-2 hover:text-blue-600"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="md:hidden fixed inset-0 bg-white z-50 h-screen w-80 max-w-full"
          >
            <div className="px-6 py-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="relative w-32 h-14">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:text-blue-600"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <nav className="space-y-4">
                  <Link href="/" className="block py-2 hover:text-blue-600 text-lg">
                    Home
                  </Link>
                  
                  <div className="relative">
                    <button
                      onClick={() => setCourseDropdown(!courseDropdown)}
                      className="w-full text-left py-2 hover:text-blue-600 text-lg flex justify-between items-center"
                    >
                      Courses
                      <motion.span
                        animate={{ rotate: courseDropdown ? 180 : 0 }}
                        className="ml-2"
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {courseDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4"
                        >
                          {coursesList.map((course) => (
                            <Link
                              key={course.slug}
                              href={`/course/${course.slug}`}
                              className="block py-2 hover:text-blue-600 text-gray-600"
                            >
                              {course.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/gallery" className="block py-2 hover:text-blue-600 text-lg">
                    Gallery
                  </Link>
                  <Link href="/blog" className="block py-2 hover:text-blue-600 text-lg">
                    Blog
                  </Link>
                  <Link href="/contact" className="block py-2 hover:text-blue-600 text-lg">
                    Contact
                  </Link>
                </nav>

                <div className="mt-8 pt-6 border-t">
                  <div className="flex space-x-4 justify-center">
                    <a href="https://instagram.com" className="hover:text-blue-600">
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://facebook.com" className="hover:text-blue-600">
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a href="https://linkedin.com" className="hover:text-blue-600">
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://twitter.com" className="hover:text-blue-600">
                      <FaTwitter className="text-2xl" />
                    </a>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Book Free Demo
                  </Link>

                  <div className="mt-6 text-center">
                    <a href="tel:8390671523" className="text-gray-600 hover:text-blue-600">
                      8390671523
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}