import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use Google OAuth 2.0 and never store your passwords. Your credentials are securely handled through Google\'s authentication system, and we only access the data necessary to provide our review management services.',
    },
    {
      question: 'How does the AI generate replies?',
      answer:
        'Our AI analyzes the sentiment of the review and crafts a professional response based on your brand voice. It considers the context, tone, and content of each review to generate personalized replies that sound authentic and maintain your business\'s unique voice.',
    },
    {
      question: 'Can I edit the AI replies?',
      answer:
        'Absolutely, you have full control to review and edit any reply before it is posted. Our AI provides a starting point, but you can customize, modify, or completely rewrite any response to ensure it perfectly represents your business.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
