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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Transform Your Tech Career with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hands-On Coding
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0 opacity-90">
            Master in-demand technologies through project-based learning and expert mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/courses"
              className="inline-block px-8 py-3.5 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Explore available courses"
            >
              Explore Courses
            </a>
            <a
              href="/free-lesson"
              className="inline-block px-8 py-3.5 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 border-2 border-transparent hover:border-blue-500"
              aria-label="Try a free lesson"
            >
              Try Free Lesson
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-14 border-4 border-blue-400 rounded-3xl">
          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mx-auto" />
        </div>
      </div>
    </section>
  )
}