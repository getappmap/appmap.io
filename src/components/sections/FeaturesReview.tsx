interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Correctness",
    description: "Confirms your code does exactly what it's intended to do.",
    icon: "✓"
  },
  {
    title: "Code Quality",
    description: "Ensures your changes follow best practices and are easy to read and maintain.",
    icon: "</>"
  },
  {
    title: "Documentation",
    description: "Verifies that public-facing code is well-documented and understandable.",
    icon: "📄"
  },
  {
    title: "Security",
    description: "Surface vulnerabilities and unsafe behaviors before they reach production.",
    icon: "🛡️"
  },
  {
    title: "Runtime Flaws",
    description: "Detect errors and unexpected behaviors that only manifest during execution.",
    icon: "⚡"
  },
  {
    title: "Testing & Coverage",
    description: "Analyze test depth, edge cases, and highlight where coverage should be expanded.",
    icon: "🧪"
  },
  {
    title: "Compatibility",
    description: "Verifies your change won't break downstream consumers or integrations.",
    icon: "🔗"
  },
  {
    title: "Performance",
    description: "Identify hotspots, resource use, and bottlenecks.",
    icon: "⚡"
  },
  {
    title: "Design & Architecture",
    description: "Confirms your implementation follows established patterns and fits the system's structure.",
    icon: "🏗️"
  }
];

interface ComparisonRow {
  capability: string;
  appMapReview: string;
  staticCodeReview: string;
  appMapPositive?: boolean;
  staticPositive?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    capability: "Runtime-aware analysis",
    appMapReview: "Records real execution data (code + DB + I/O)",
    staticCodeReview: "Static diff only",
    appMapPositive: true,
    staticPositive: false
  },
  {
    capability: "Review domains (single pass)",
    appMapReview: "Comprehensive coverage spanning critical domains and runtime data sources",
    staticCodeReview: "General quality hints; no runtime checks",
    appMapPositive: true,
    staticPositive: false
  },
  {
    capability: "Missing-test detection",
    appMapReview: "Detailed detection by dynamic analysis",
    staticCodeReview: "Detection by LLM",
    appMapPositive: true,
    staticPositive: false
  },
  {
    capability: "Performance hotspots",
    appMapReview: "Observes slow queries, function calls, and hotspots",
    staticCodeReview: "Not included",
    appMapPositive: true,
    staticPositive: false
  },
  {
    capability: "Security insights",
    appMapReview: "Detects auth gaps, insecure tokens, leaked secrets, and other runtime issues",
    staticCodeReview: "Not included",
    appMapPositive: true,
    staticPositive: false
  },
  {
    capability: "Transparency",
    appMapReview: "Shows exactly what was recorded & scanned",
    staticCodeReview: "LLM output, often without context",
    appMapPositive: true,
    staticPositive: false
  }
];

export function FeaturesReview() {
  return (
    <section className="py-16 bg-[#010303] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Review code{" "}
            <span className="text-purple-400">125x faster</span>, with{" "}
            <span className="text-purple-400">3x more</span> review criteria.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Let AppMap perform a full-spectrum, runtime-aware review of your branch. 
            Customize your review criteria or have AppMap compare your work to a technical 
            specification. Then let it deliver clear, actionable feedback on exactly what was 
            analyzed. No black boxes, just runtime-grounded insights.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featureCards.map((feature, index) => (
            <div key={index} className="bg-gray-800 border border-purple-500 rounded-lg p-6 hover:border-purple-400 transition-colors">
              <div className="flex items-start mb-4">
                <span className="text-2xl mr-3">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              {index >= 3 && (
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900 text-purple-300">
                    ⚡ RUNTIME ENHANCED
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mb-8">
          <p className="text-center text-lg text-gray-300 mb-8">
            See how we stack up against leading static code review solutions.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-purple-900">
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white">
                    Capability
                  </th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white">
                    AppMap Review
                  </th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-white">
                    Static Code Review
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-6 py-4 text-gray-300 font-medium">
                      {row.capability}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-200">{row.appMapReview}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start">
                        <span className="text-red-400 mr-2">○</span>
                        <span className="text-gray-400">{row.staticCodeReview}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}