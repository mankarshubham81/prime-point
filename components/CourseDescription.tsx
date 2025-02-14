import React from 'react';

const CourseDescription: React.FC = () => {
  return (
    <section id="courses" className="py-1 bg-white shadow-lg rounded">
      <div className="container mx-auto px-4 lg:px-20">
        {/* UI/UX Design Course */}
        <article className="p-8 mb-1 ">
          <h3 className="text-3xl font-semibold mb-6">UI/UX Design Course in Pune</h3>
          <p className="font-semibold text-lg mb-4">Join Prime Point Academy - Best UI/UX Design Course in Pune</p>
          <p className="mb-4">
            UI/UX Design is an essential part of creating visually appealing and user-friendly digital experiences. Let's break it down!
          </p>
          <p className="mb-4">
            <span className="font-semibold">UI (User Interface) Design:</span> Focuses on the visual aspects like colors, typography, buttons, and layout to create engaging designs.
          </p>
          <p className="mb-4">
            <span className="font-semibold">UX (User Experience) Design:</span> Enhances user interaction and accessibility for better customer satisfaction.
          </p>
          <p className="mb-4">
            This course covers tools like Figma, Adobe XD, and Sketch, helping you build a strong foundation with real-world projects.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Learn from experienced UI/UX designers.</li>
            <li>Work on live projects and case studies.</li>
            <li>Placement support with portfolio building.</li>
            <li>Master industry-standard tools.</li>
          </ul>
          <a href="/brochures/ui-ux-design.pdf" download className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Download Brochure
          </a>
        </article>

        {/* Full Stack Developer Course */}
        <article className="p-8 mb-1">
          <h3 className="text-3xl font-semibold mb-6">Industry-Oriented Full Stack Developer Course in Pune</h3>
          <p className="mb-4">
            Learn front-end and back-end technologies from expert trainers, with practical training on live projects.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Comprehensive front-end and back-end training.</li>
            <li>Hands-on projects with real-world scenarios.</li>
            <li>Soft skills training and career guidance.</li>
          </ul>
          <a href="/brochures/full-stack-developer.pdf" download className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Download Brochure
          </a>
        </article>

        {/* SAP MM and SAP FICO Course */}
        <article className=" p-8 mb-1">
          <h3 className="text-3xl font-semibold mb-6">SAP MM and SAP FICO Course in Pune</h3>
          <p className="mb-4">Gain expertise in SAP MM (Material Management) and SAP FICO (Financial Management) with job-oriented training.</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Certification-oriented training with case studies.</li>
            <li>Expert-led classes with real-world assignments.</li>
            <li>Placement assistance with interview preparation.</li>
          </ul>
          <a href="/brochures/sap-mm-fico.pdf" download className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Download Brochure
          </a>
        </article>

        {/* MERN Stack Course */}
        <article className=" p-8 mb-1 ">
          <h3 className="text-3xl font-semibold mb-6">MERN Stack Course in Pune</h3>
          <p className="mb-4">Master MongoDB, Express.js, React, and Node.js with hands-on experience and live projects.</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>In-depth JavaScript and ES6 training.</li>
            <li>React.js for building modern single-page applications.</li>
            <li>Backend development using Node.js and Express.js.</li>
            <li>Database management with MongoDB.</li>
          </ul>
          <a href="/brochures/mern-stack.pdf" download className="inline-block bg-[#0d4186] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Download Brochure
          </a>
        </article>

        {/* Why Choose Prime Point Academy */}
        <article className=" p-8 mb-1 ">
          <h3 className="text-3xl font-semibold mb-6">Why Choose Prime Point Academy?</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>100% Placement Assistance with top IT companies.</li>
            <li>Expert trainers ensuring quality education.</li>
            <li>Real-world projects for hands-on learning.</li>
            <li>Flexible online and classroom learning options.</li>
            <li>Affordable fees with installment plans.</li>
          </ul>
        </article>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-6">Start Your IT Career with Prime Point Academy</h3>
          <p className="text-lg mb-6">Join our offline/online courses and take the first step towards a successful IT career.</p>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;
