import { useState } from 'react';
import { resolveImagePath } from '@/utils/imageResolver';

export interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 text-sm">
        <p>
          <strong>To access the latest features </strong>
          <a 
            href="/docs/get-started-with-appmap/add-appmap-to-your-code-editor#keep-your-extension-up-to-date"
            className="underline hover:text-gray-200"
          >
            keep your code editor plug-in up to date.
          </a>
        </p>
      </div>

      {/* Main navigation */}
      <nav className={`bg-[#010306] ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <img 
                  src={resolveImagePath('/images/appmap-logo.svg')} 
                  alt="AppMap" 
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a 
                  href="/docs" 
                  className="text-[#e3e5e8] hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Docs
                </a>
                <a 
                  href="/blog" 
                  className="text-[#e3e5e8] hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Blog
                </a>
                <a 
                  href="/pricing" 
                  className="text-[#e3e5e8] hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Pricing
                </a>
              </div>
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="/get-appmap" 
                className="bg-[#c242b1] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#a63896] transition-colors"
              >
                Get AppMap
              </a>
              <a 
                href="https://meetings.hubspot.com/dustin294" 
                className="border border-[#c242b1] text-[#c242b1] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#c242b1] hover:text-white transition-colors"
              >
                Book a Demo
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#e3e5e8] hover:text-white focus:outline-none focus:text-white"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#010306] border-t border-gray-800">
              <a
                href="/docs"
                className="text-[#e3e5e8] hover:text-white block px-3 py-2 text-base font-medium"
              >
                Docs
              </a>
              <a
                href="/blog"
                className="text-[#e3e5e8] hover:text-white block px-3 py-2 text-base font-medium"
              >
                Blog
              </a>
              <a
                href="/pricing"
                className="text-[#e3e5e8] hover:text-white block px-3 py-2 text-base font-medium"
              >
                Pricing
              </a>
              <div className="border-t border-gray-800 pt-3 mt-3">
                <a
                  href="/get-appmap"
                  className="block w-full bg-[#c242b1] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-[#a63896] transition-colors mb-2"
                >
                  Get AppMap
                </a>
                <a
                  href="https://meetings.hubspot.com/dustin294"
                  className="block w-full border border-[#c242b1] text-[#c242b1] px-3 py-2 rounded-md text-base font-medium text-center hover:bg-[#c242b1] hover:text-white transition-colors"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}