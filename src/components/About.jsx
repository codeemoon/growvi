function About() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Empowering Local Businesses with Growvi
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're on a mission to help small businesses thrive in the digital age
            by making review management effortless.
          </p>
        </div>

        {/* Our Mission */}
        <section className="mb-16">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To simplify review management using AI so business owners can
                  focus on their customers. We believe that every business
                  deserves the tools to build a stellar online reputation without
                  spending hours each day responding to reviews manually.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Growvi? */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Why Growvi?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transparency */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Transparency
              </h3>
              <p className="text-slate-600">
                We believe in complete openness about how our AI works and what
                data we access. You'll always know exactly what's happening with
                your reviews.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Security First
              </h3>
              <p className="text-slate-600">
                Your data is protected with enterprise-grade security. We use
                Google OAuth 2.0 for secure authentication and never store your
                passwords.
              </p>
            </div>

            {/* Ease of Use */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Ease of Use
              </h3>
              <p className="text-slate-600">
                No technical expertise required. Our intuitive dashboard makes it
                simple to connect your business and start automating reviews in
                minutes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
