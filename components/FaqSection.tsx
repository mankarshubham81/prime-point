"use client"
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}


const faqs: FAQItem[] = [
  {
    question: "Why is Prime Point Academy one of the best IT training institutes in Pune?",
    answer:
      "Prime Point Academy provides career-focused training programs, experienced trainers, 100% placement assistance, and practical projects to prepare students for the workforce.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide 100% placement assistance and help in connecting students with top IT Companies.",
  },
  {
    question: "What is the course duration?",
    answer:
      "Each of our courses has a different duration, but we can say our average course duration is between 3 to 6 months.",
  },
  {
    question: "Do you provide online classes?",
    answer:
      "Yes, we offer both offline and online batches for all our courses.",
  },
  {
    question: "How to join a course?",
    answer:
      "You can join by physically visiting our institute in Pune, calling us, or applying online through our website.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none focus:ring focus:ring-indigo-500 bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-medium text-left">
                {faq.question}
              </span>
              <span className="ml-2">
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-${index}`}
                className="p-4 bg-gray-50 border-t text-gray-700"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
