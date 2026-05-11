import { useRef, useEffect } from 'react';

export function MissingContextDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-purple-400">Missing context?</span> Your copilot thinks so.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 order-2 lg:order-1">
            <p className="text-lg text-gray-300 leading-relaxed">
              Now your LLM-backed tools can answer questions like "What just happened?" with real runtime context.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-semibold text-white">What AppMap records:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Function calls, return values, exceptions
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  HTTP requests and responses (status codes, headers, parameters)
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  SQL queries and database behavior
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Security and auth events
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Background jobs and message handling
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Logging, serialization, and more
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg shadow-2xl"
              muted
              loop
              playsInline
            >
              <source src="/assets/video/map-sm.webm" type="video/webm" />
              <source src="/assets/video/map-sm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}