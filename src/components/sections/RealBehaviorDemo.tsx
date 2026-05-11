import { useRef, useEffect } from 'react';

export function RealBehaviorDemo() {
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
            <span className="text-purple-400">Real behavior</span>, reviewed in real time.
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
              poster="/assets/video/review-poster.jpg"
            >
              <source src="/assets/video/review.webm" type="video/webm" />
              <source src="/assets/video/review.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="text-white space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              AppMap reviews code as you write it — right in your editor — using actual runtime behavior, not just static rules. That means you can catch bugs, misunderstandings, flawed behavior, and edge cases before they leave your machine.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're working with human-written code or AI-generated changes, AppMap provides real-time feedback based on how your code actually behaves when it runs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}