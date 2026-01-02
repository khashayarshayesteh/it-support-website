import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Star, Users, Wrench, Monitor, Search } from 'lucide-react';

// Replace later with your own image if needed
const HeroBanner = '/images/web-design.jpg'; // or seo.jpg

const Hero: React.FC = () => {
  const [showPhone, setShowPhone] = useState(false);
  const phoneNumber = '+19493729853';
  const supportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (supportRef.current && !supportRef.current.contains(event.target as Node)) {
        setShowPhone(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32 overflow-hidden"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fadeInUp">

            {/* Badge */}
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              Trusted Local IT Experts
            </span>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your All-in-One
              <span className="block text-blue-400">IT Support Partner</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-gray-200 max-w-xl">
              IT Support, Web Design, and SEO services that help your business run faster,
              safer, and smarter.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm">
                <Monitor className="h-4 w-4 text-blue-400" />
                Web Design
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm">
                <Search className="h-4 w-4 text-green-400" />
                SEO
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm">
                <Wrench className="h-4 w-4 text-yellow-400" />
                IT Support
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">8+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>

              {/* 24/7 Support */}
              <div className="relative" ref={supportRef}>
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:bg-blue-600 transition"
                >
                  <Wrench className="h-5 w-5" />
                  24/7 Support
                </button>

                {showPhone && (
                  <div className="absolute mt-2 p-3 bg-white text-black rounded-lg shadow-lg text-sm">
                    Call us:
                    <a
                      href={`tel:${phoneNumber}`}
                      className="block font-semibold text-blue-600 hover:underline"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#services"
                className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition text-center"
              >
                View Services
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
