import React from 'react';

const CourseDescription: React.FC = () => {
  return (
    <section id="courses" className="py-1 shadow-lg rounded bg-gray-20">
      <div className="container mx-auto px-4">
        {/* UI/UX Design Course */}
        <article className="-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            UI/UX Design Course in Pune
          </h3>
          <p className="mb-4">
            <strong>Join Prime Point Academy - Best UI UX Design Course in Pune</strong>
          </p>
          <p className="mb-4">
            UI/UX Design is an important part of creating visually attractive and user-friendly digital experiences. But what do UI and UX mean? Let&apos;s break it down!
          </p>
          <p className="mb-4">
            <span className="font-semibold">UI (User Interface) Design:</span> It is all about the overall visual appearance and the feel of the application. It includes elements such as colors, typography, buttons, icons, and layout. UI ensures an engaging and attractive design.
          </p>
          <p className="mb-4">
            <span className="font-semibold">UX (User Experience) Design:</span> It focuses on the user&apos;s experience and interactivity with the product. Its primary goal is to improve ease of use &amp; accessibility, which results in great customer satisfaction.
          </p>
          <p className="mb-4">
            Our UI UX design course in Pune provides in-depth training in tools like Figma, Adobe XD, Sketch, and foundational design principles. Whether you&apos;re a beginner or an experienced designer looking to upgrade your skills, our UI/UX classes are designed to help you excel through practical projects and industry exposure.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Learn from experienced UI/UX designers.</li>
            <li>Work on live projects and case studies.</li>
            <li>Placement support with portfolio building.</li>
            <li>Master industry-standard tools like Figma and Adobe XD.</li>
          </ul>
          <a
            href="/brochures/ui-ux-design.pdf"
            download
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition"
          >
            Download Brochure
          </a>
        </article>

        {/* Full Stack Developer Course */}
        <article className="p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Industry-Oriented Full Stack Developer Course in Pune
          </h3>
          <p className="mb-4">
            The IT industry&apos;s requirements for Full Stack Developers are very high. Our Full Stack Developer course in Pune prepares students by teaching essential skills in both front-end and back-end development. Our syllabus includes all trending technologies as per the latest industry requirements.
          </p>
          <p className="mb-4">
            Learn from industry expert trainers with practical training on live projects, and become a professional full stack developer.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Detailed training of front-end and back-end technologies.</li>
            <li>Practical training through real-world live projects.</li>
            <li>Career guidance and soft skills training.</li>
            <li>Access to industry expert mentors and one-on-one sessions.</li>
          </ul>
          <a
            href="/brochures/full-stack-developer.pdf"
            download
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition"
          >
            Download Brochure
          </a>
        </article>

        {/* SAP MM and SAP FICO Course */}
        <article className="p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            SAP MM and SAP FICO Course in Pune
          </h3>
          <p className="mb-4">
            SAP serves as a crucial foundation for many businesses. To meet the needs of the industry without disrupting the market and risking stable jobs, SAP training is essential. Our SAP course in Pune covers both SAP MM for material management and SAP FICO for financial management.
          </p>
          <p className="mb-4">
            Our knowledgeable instructors will equip you with the expertise needed to become SAP-certified and ready for the job market.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Certification-oriented training with practical assignments.</li>
            <li>Expert-led classes with real-time case studies.</li>
            <li>Placement assistance with interview preparation.</li>
            <li>High-paying career opportunities in top MNCs.</li>
          </ul>
          <a
            href="/brochures/sap-mm-fico.pdf"
            download
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition"
          >
            Download Brochure
          </a>
        </article>

        {/* MERN Stack Course */}
        <article className="p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">MERN Stack Course in Pune</h3>
          <p className="mb-4">
            Join one of the best MERN Stack classes in Pune at Prime Point Academy. The MERN stack is fundamental for building high-quality websites. Our course covers MongoDB, Express.js, React, and Node.js, giving you the ability to develop highly-scalable web applications.
          </p>
          <p className="mb-4">
            Gain hands-on experience, work on live projects, and receive industry-relevant training.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>JavaScript fundamentals and ES6 concepts.</li>
            <li>Developing single-page applications (SPAs) using React.js.</li>
            <li>Back-end development using Node.js and Express.js.</li>
            <li>Database management with MongoDB and Mongoose.</li>
          </ul>
          <a
            href="/brochures/mern-stack.pdf"
            download
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition"
          >
            Download Brochure
          </a>
        </article>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">
            Start Your IT Career with Prime Point Academy
          </h3>
          <p className="mb-6">
            Are you serious about building a career in IT? Join our offline/online live courses today and take the first step towards a successful career in UI/UX Design, Full Stack Development, MERN Stack, Java, and SAP (SAP MM &amp; SAP FICO).
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseDescription;
