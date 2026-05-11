import { useRef, useEffect } from 'react';

export function RuntimeContextDemo() {
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
            <span className="text-purple-400">Runtime context</span> in. Intelligence out.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg shadow-2xl"
              muted
              loop
              playsInline
            >
              <source src="/assets/video/analyze-feature-movie-navie.webm" type="video/webm" />
              <source src="/assets/video/analyze-feature-movie-navie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="text-white space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              AppMap powers Navie, your AI assistant designed specifically to understand and improve code based on how it actually behaves. Navie uses static and runtime insights to help you:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Debug complex issues
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Ask deep, contextual questions about unfamiliar code
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Make safer, more informed code changes
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Get precise answers grounded in real application behavior
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                Perform runtime-aware code reviews
              </li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed">
              With flexible backend options (GitHub Copilot, OpenAI, Anthropic, Google or self-hosted), Navie supports secure, enterprise-ready AI development — with zero fine-tuning required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}