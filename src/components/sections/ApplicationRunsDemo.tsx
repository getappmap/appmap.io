import { useRef, useEffect } from 'react';

export function ApplicationRunsDemo() {
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
    <section className="py-20 bg-[#010303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your application runs. <span className="text-purple-400">AppMap watches</span>.
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
              <source src="/assets/video/sequence_04.webm" type="video/webm" />
              <source src="/assets/video/sequence_04b.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="text-white space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              AppMap watches your application in action, recording how APIs, functions, and services actually behave. AppMap depicts this information as interactive diagrams that you can search and navigate.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              You can see how functions, web APIs, databases, security, I/O, and other services all work together when your application runs. AppMap is an extension to your code editor, so its information is always available when and where you need it.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you are <a href="/product/automate-openapi-generation" className="text-purple-400 hover:text-purple-300 underline">documenting your internal APIs</a> or <a href="/product/code-investigation-debugging" className="text-purple-400 hover:text-purple-300 underline">reverse engineering</a> an old application, AppMap has the information you need to keep moving forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}