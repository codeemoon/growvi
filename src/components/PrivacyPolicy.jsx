function PrivacyPolicy() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-lg">
            <strong>Last Updated:</strong> March 2026
          </p>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Google API Disclosure
            </h2>
            <p>
              Growvi uses the Google Business Profile API to manage and
              respond to customer reviews on behalf of your business. We access
              only the data necessary to provide our review management services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Google's Limited Use Policy
            </h2>
            <p>
              Our use of information received from Google APIs adheres to the
              Google API Services User Data Policy, including the Limited Use
              requirements. We:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Use the data solely to provide and improve our review management
                services
              </li>
              <li>
                Do not transfer Google API data to third parties for advertising
              </li>
              <li>
                Do not use Google API data to target users with personalized
                ads
              </li>
              <li>
                Do not derive advertising identifiers from user data
              </li>
              <li>
                Ensure data is processed securely and in compliance with
                applicable laws
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Data We Collect
            </h2>
            <p>
              We collect and process the following information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Business Information:</strong> Business name, address,
                and contact details
              </li>
              <li>
                <strong>Review Data:</strong> Customer reviews, ratings, and
                responses
              </li>
              <li>
                <strong>Account Data:</strong> Email address and login
                credentials
              </li>
              <li>
                <strong>Usage Data:</strong> How you interact with our platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              How We Use Your Data
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Generate AI-powered responses to customer reviews</li>
              <li>Perform sentiment analysis on incoming reviews</li>
              <li>Provide our dashboard and analytics features</li>
              <li>Communicate with you about your account</li>
              <li>Improve our services based on usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data, including encryption in transit and at rest, secure server
              infrastructure, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is active or as
              needed to provide services. You can request deletion of your data
              at any time by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Export your data in a portable format</li>
              <li>Object to certain processing activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:{" "}
              <strong>upadhyayakhand909@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
