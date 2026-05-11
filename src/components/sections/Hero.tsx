export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Code Editor UI (placeholder for now) */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm ml-4">AppMap Navie</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">Context</div>
                  <div className="text-gray-400 bg-gray-800/50 p-2 rounded">Code Snippets</div>
                  <div className="text-gray-400 bg-gray-800/50 p-2 rounded">Data Requests</div>
                  <div className="text-gray-400 bg-gray-800/50 p-2 rounded">Sequence Diagrams</div>
                  <div className="mt-4 p-3 bg-gray-800/30 rounded text-xs text-gray-300">
                    Generate Update physical flow export to include data type via physical_...
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Hero Content */}
            <div className="order-1 lg:order-2 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                What AI Misses,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                  AppMap Finds
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                Don't let buggy, misunderstood AI code slip through. AppMap goes beyond 
                static analysis by reviewing how code actually runs, catching issues before 
                they leave the editor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/get-appmap"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get AppMap
                </a>
                <a
                  href="https://meetings.hubspot.com/dustin294"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border-2 border-white/20 hover:border-white/40 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}