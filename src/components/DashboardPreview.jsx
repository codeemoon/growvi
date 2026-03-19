import { useState } from 'react';

// Sample reviews data
const sampleReviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    date: "2 hours ago",
    text: "Absolutely loved the Margherita pizza! Fresh ingredients, perfect crust, and the basil was so fragrant. Will definitely be coming back!",
    sentiment: "positive",
  },
  {
    id: 2,
    author: "Michael Chen",
    rating: 4,
    date: "Yesterday",
    text: "Great food overall. The garlic knots were amazing! Only giving 4 stars because the wait time was a bit long during lunch.",
    sentiment: "positive",
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    rating: 2,
    date: "3 days ago",
    text: "Disappointed with the delivery. Pizza arrived cold and the toppings were sparse. Not what we expected for the price.",
    sentiment: "negative",
  },
];

// AI responses (simulated)
const aiResponses = {
  positive: "Thank you so much for the wonderful review, Sarah! We're thrilled to hear you enjoyed our Margherita pizza. We take pride in using fresh, locally-sourced ingredients. We look forward to serving you again soon!",
  negative: "We're truly sorry to hear about your experience, Emily. This isn't the standard we strive for, and we'd like to make things right. Please contact us directly so we can address this issue. We value your feedback and our customers.",
  neutral: "Thank you for your feedback, Michael! We're glad you enjoyed our garlic knots. We apologize for the wait time and are working on improving our service speed. We appreciate your business and hope to serve you better next time!",
};

function DashboardPreview() {
  const [isConnected, setIsConnected] = useState(false);
  const [showOAuthPopup, setShowOAuthPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('reviews');
  const [generatingReply, setGeneratingReply] = useState(null);
  const [showReply, setShowReply] = useState({});
  const [replyText, setReplyText] = useState({});

  const handleConnect = () => {
    setShowOAuthPopup(true);
  };

  const handleOAuthComplete = () => {
    setShowOAuthPopup(false);
    setIsConnected(true);
  };

  const handleGenerateReply = (review) => {
    setGeneratingReply(review.id);
    setShowReply((prev) => ({ ...prev, [review.id]: false }));

    // Simulate typing animation
    setTimeout(() => {
      setReplyText((prev) => ({
        ...prev,
        [review.id]: aiResponses[review.sentiment],
      }));
      setGeneratingReply(null);
      setShowReply((prev) => ({ ...prev, [review.id]: true }));
    }, 2000);
  };

  return (
    <section id="dashboard-preview" className="bg-slate-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience how Growvi handles your reviews automatically.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-w-5xl mx-auto">
          {/* Top Bar */}
          <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RP</span>
              </div>
              <span className="text-white font-semibold">Growvi</span>
            </div>

            {/* Connect Button */}
            {!isConnected ? (
              <button
                onClick={handleConnect}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Connect to Google</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2 text-green-400 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Connected</span>
              </div>
            )}
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-48 bg-slate-50 border-r border-slate-200 p-4 hidden md:block">
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('locations')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'locations'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  📍 Locations
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'reviews'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ⭐ Reviews
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ⚙️ Settings
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Business Info */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-slate-900">Gourmet Pizza Kitchen</h3>
                <p className="text-sm text-slate-600">123 Main Street, New York, NY</p>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 ml-2">4.8 (128 reviews)</span>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900">Recent Reviews</h4>
                {sampleReviews.map((review) => (
                  <div
                    key={review.id}
                    className="border border-slate-200 rounded-lg p-4"
                  >
                    {/* Review Header */}
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-900">
                            {review.author}
                          </span>
                          <span className="text-slate-400 text-sm">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-slate-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          review.sentiment === 'positive'
                            ? 'bg-green-100 text-green-700'
                            : review.sentiment === 'negative'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {review.sentiment}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-600 text-sm mb-4">{review.text}</p>

                    {/* AI Reply Section */}
                    {!generatingReply && !showReply[review.id] && (
                      <button
                        onClick={() => handleGenerateReply(review)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                      >
                        <svg
                          className="w-4 h-4"
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
                        <span>Generate AI Reply</span>
                      </button>
                    )}

                    {/* Generating Reply */}
                    {generatingReply === review.id && (
                      <div className="flex items-center space-x-2 text-slate-500">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75" />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
                        </div>
                        <span className="text-sm">AI is generating a response...</span>
                      </div>
                    )}

                    {/* Show Reply */}
                    {showReply[review.id] && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-green-700">
                            AI Generated Response
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm">{replyText[review.id]}</p>
                        <div className="flex space-x-2 mt-3">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Copy
                          </button>
                          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            Approve & Send
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OAuth Popup Modal */}
        {showOAuthPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowOAuthPopup(false)}
            />
            <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <div className="text-center">
                {/* Google Logo */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Sign in with Google
                </h3>
                <p className="text-slate-600 mb-6">
                  Growvi needs access to manage your Business Profile
                  reviews.
                </p>

                <div className="bg-slate-50 rounded-lg p-4 text-left mb-6">
                  <p className="text-sm text-slate-600 mb-2 font-medium">
                    This will allow Growvi to:
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      View your business reviews
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Respond to reviews on your behalf
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Access business location information
                    </li>
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowOAuthPopup(false)}
                    className="flex-1 border border-slate-300 text-slate-700 font-medium py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleOAuthComplete}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default DashboardPreview;
