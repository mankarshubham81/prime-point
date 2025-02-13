// app/page.tsx
import Hero from '../components/Hero'
import BookDemoForm from '../components/BookDemoForm'
import Courses from '../components/Courses'
import Testimonial from '../components/Testimonial'
import Location from '../components/Location'
import FaqSection from '../components/FaqSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <Courses />
      </div>
      <div className="container mx-auto px-4 py-8">
        <BookDemoForm />
      </div>


      <div className="container mx-auto px-4 py-8">
        <Testimonial />
      </div>

      <FaqSection />
      <Location />

    </div>
  )
}
