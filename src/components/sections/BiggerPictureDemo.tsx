import { useRef, useEffect } from 'react';

export function BiggerPictureDemo() {
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
            <span className="text-purple-400">See the bigger picture</span> without reading every line.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 order-2 lg:order-1">
            <p className="text-lg text-gray-300 leading-relaxed">
              AppMap provides visibility into how both human- and AI-authored code is behaving across teams and where it introduces risk. Track issue resolution rates, remediation speed, and adoption trends — all without diving into code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Get executive-level insights into code quality, security posture, and development velocity across your organization.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg shadow-2xl"
              muted
              loop
              playsInline
            >
              <source src="/assets/video/review-dashboard.webm" type="video/webm" />
              <source src="/assets/video/review-dashboard.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}