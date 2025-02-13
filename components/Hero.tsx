export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
      role="banner"
    >
      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center lg:text-left space-y-6">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Prime Point Academy
            </span>
            <br />
            Your Key to a Successful IT Career
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0 opacity-90">
            At Prime Point Academy, we offer the most in-demand courses like UI/UX Design, Full Stack Development, MERN Stack, Java, and SAP (SAP FICO, SAP MM). Our training prepares you for high-paying jobs in top-tier companies with complete placement support.
          </p>

          {/* Highlighted Features */}
          <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-gray-100 text-lg font-medium">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              100% Placement Assistance
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              In-Demand Courses
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Expert Mentorship
            </li>
          </ul>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-4 border-blue-400 rounded-3xl">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mx-auto" />
        </div>
      </div>
    </section>
  );
}