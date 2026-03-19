function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Automate your Google Business
            <br />
            <span className="text-blue-600">Reviews with AI</span>
          </h1>

          {/* Sub-text */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Save hours every week. Let AI handle your customer reviews—respond
            instantly, boost your ratings, and grow your business while you
            focus on what matters most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#dashboard-preview" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
              Get Started Free
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
              See How It Works
            </a>
          </div>

          {/* Trust indicators */}
          <p className="text-sm text-slate-500 mt-8">
            Helping Local Businesses Grow with AI • No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
