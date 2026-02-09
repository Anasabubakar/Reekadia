import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#110505] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-primary mb-8">
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: February 9, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              At Reekadia, we collect information you provide directly to us, such as when you sign up for our newsletter, purchase merchandise, or contact us.
            </p>
            <p className="text-gray-300">
              This may include your name, email address, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Send you updates about Reekado Banks and Reekadia Records</li>
              <li>Process merchandise orders and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Data Protection</h2>
            <p className="text-gray-300">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Services</h2>
            <p className="text-gray-300">
              We may use third-party services for analytics, payment processing, and email marketing. These services have their own privacy policies governing how they use your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">
              Depending on your location, you may have rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to erasure of your personal information</li>
              <li>The right to restrict processing of your personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:management@reekadia.com" className="text-primary hover:underline">management@reekadia.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}