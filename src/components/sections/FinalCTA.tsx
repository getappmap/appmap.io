export function FinalCTA() {
  return (
    <section className="bg-gray-900">
      {/* CTA Section */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-medium text-gray-200 mb-8">
          Ready to get started?
        </h2>
        <a
          href="/get-appmap"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Get AppMap
        </a>
      </div>

      {/* Partner Logos Section */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-16 flex-wrap gap-8">
            {/* NVIDIA Inception Program */}
            <div className="flex flex-col items-center text-white">
              <div className="text-2xl font-bold mb-2">NVIDIA</div>
              <div className="text-sm">INCEPTION PROGRAM</div>
            </div>
            
            {/* GitHub for Startups */}
            <div className="flex items-center text-white">
              <div className="w-8 h-8 mr-3">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold">for Startups</div>
              </div>
            </div>
            
            {/* TechCrunch Disrupt */}
            <div className="flex flex-col items-center text-white">
              <div className="text-xl font-bold">TC</div>
              <div className="text-sm text-center">
                <div>2022 TechCrunch</div>
                <div>DISRUPT Top 5</div>
              </div>
            </div>
            
            {/* MongoDB Partner */}
            <div className="flex items-center text-white">
              <div className="w-8 h-8 mr-3">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold">mongoDB</div>
                <div className="text-sm">PARTNER</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Docs Column */}
            <div>
              <h5 className="text-gray-300 font-medium text-lg mb-6">Docs</h5>
              <ul className="space-y-3">
                <li><a href="/docs/get-started" className="text-blue-400 hover:text-blue-300 transition-colors">Get Started</a></li>
                <li><a href="/docs/using-navie" className="text-blue-400 hover:text-blue-300 transition-colors">Using Navie</a></li>
                <li><a href="/docs/troubleshooting" className="text-blue-400 hover:text-blue-300 transition-colors">Troubleshooting</a></li>
                <li><a href="/docs/reference" className="text-blue-400 hover:text-blue-300 transition-colors">Reference</a></li>
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h5 className="text-gray-300 font-medium text-lg mb-6">Product</h5>
              <ul className="space-y-3">
                <li><a href="/security" className="text-blue-400 hover:text-blue-300 transition-colors">Security FAQ</a></li>
                <li><a href="/pricing" className="text-blue-400 hover:text-blue-300 transition-colors">Pricing</a></li>
                <li><a href="/community/terms-and-conditions.html" className="text-blue-400 hover:text-blue-300 transition-colors">Terms</a></li>
                <li><a href="/community/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h5 className="text-gray-300 font-medium text-lg mb-6">Company</h5>
              <ul className="space-y-3">
                <li><a href="/company/about-appmap" className="text-blue-400 hover:text-blue-300 transition-colors">About</a></li>
                <li><a href="https://angel.co/company/appmap/jobs" className="text-blue-400 hover:text-blue-300 transition-colors">Careers</a></li>
                <li><a href="/contact/" className="text-blue-400 hover:text-blue-300 transition-colors">Contact</a></li>
                <li><a href="/company/brand-assets" className="text-blue-400 hover:text-blue-300 transition-colors">Brand Assets</a></li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h5 className="text-gray-300 font-medium text-lg mb-6">Community</h5>
              <ul className="space-y-3">
                <li><a href="https://twitter.com/getappmap" className="text-blue-400 hover:text-blue-300 transition-colors">X</a></li>
                <li><a href="https://appmap.io/slack" className="text-blue-400 hover:text-blue-300 transition-colors">Slack</a></li>
                <li><a href="https://github.com/getappmap" className="text-blue-400 hover:text-blue-300 transition-colors">GitHub</a></li>
                <li><a href="/community/code-of-conduct.html" className="text-blue-400 hover:text-blue-300 transition-colors">Code of Conduct</a></li>
                <li><a href="https://www.youtube.com/@appmap" className="text-blue-400 hover:text-blue-300 transition-colors">YouTube</a></li>
                <li><a href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}