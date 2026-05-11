import React from 'react';
import { resolveImagePath } from '@/utils/imageMap';

const testimonials = [
  {
    id: 1,
    source: "Marketplace Review",
    rating: 5,
    quote: "It's awesome plugin for sequence diagrams. And it's AI tool is helpful for me.",
    author: "Shaun Wang, Java developer"
  },
  {
    id: 2,
    source: "Marketplace Review", 
    rating: 5,
    quote: "Helped me better understand and analyze the hierarchy and structure of my applications. Looks awesome, performs great, and provides truly invaluable feedback!",
    author: "Max, Java developer"
  },
  {
    id: 3,
    source: "Marketplace Review",
    rating: 5,
    quote: "Very good tool with Context-awareness.",
    author: "Lutz Leonhardt, Developer"
  }
];

const SocialProof: React.FC = () => {
  const userLogosUrl = resolveImagePath('/assets/img/user-logos.svg');

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">100K+ DEVELOPERS</span>
            <br />
            <span className="text-pink-400">AND GROWING</span>
          </h2>
          
          {/* Company logos */}
          <div className="mb-8 flex justify-center">
            <img 
              src={userLogosUrl} 
              alt="Company logos including IBM, CAT, Autodesk, Sonos, Splunk, Raytheon and others" 
              className="w-full max-w-6xl h-auto opacity-80"
            />
          </div>
          
          <p className="text-lg text-pink-400 mb-16">
            Join the community of developers using AppMap who work at places like these.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-pink-400">{testimonial.source}</span>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-sm text-gray-300 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <footer className="text-xs text-gray-400">
                {testimonial.author}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;