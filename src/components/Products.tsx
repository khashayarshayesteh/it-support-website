import React from 'react';
import WebDesign from '../assets/web-design.jpg';
import Seo from '../assets/seo.jpg';
import Networking from '../assets/networking.png';
import Cloud from '../assets/cloud.png';
import Security from '../assets/security.png';

const Products: React.FC = () => {
  const categories = [
    {
      title: 'Website Design & Development',
      description:
        'Modern, fast, and mobile-friendly websites built to convert visitors into customers.',
      features: [
        'Responsive design',
        'React & modern frameworks',
        'Fast loading & optimized',
        'Business branding'
      ],
      image: WebDesign
    },
    {
      title: 'Google SEO & Online Visibility',
      description:
        'Get your business found on Google with proven SEO and local ranking strategies.',
      features: [
        'On-page SEO',
        'Local Google Maps ranking',
        'Search Console setup',
        'Performance optimization'
      ],
      image: Seo
    }
  ];

  const technologies = [
    { name: 'Networking', logo: Networking },
    { name: 'Cloud Services', logo: Cloud },
    { name: 'Security', logo: Security },
    { name: 'Web Platforms', logo: WebDesign },
    { name: 'SEO Tools', logo: Seo }
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            Our IT Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete IT solutions to build, optimize, and support your business
            technology — from websites and SEO to networking and security.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="relative w-full h-60">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {category.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-sm text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Technologies & Platforms We Support
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-700 flex flex-col items-center"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-24 h-24 object-contain mb-3"
                />
                <span className="text-gray-200 font-semibold">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need IT Help or a New Website?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our experts design your website, improve your Google ranking,
              and set up reliable networking for your business.
            </p>
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Free Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
