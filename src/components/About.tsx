import React from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality & Expertise',
      description:
        'We deliver high-quality solutions backed by years of hands-on experience in IT support, web development, and SEO.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description:
        'Our clients count on us for fast response times, dependable service, and solutions that work when it matters most.'
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description:
        'We treat every client as a long-term partner, tailoring solutions to meet unique business goals and challenges.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description:
        'Clear communication, honest pricing, and ethical practices are the foundation of everything we do.'
    }
  ];

  const stats = [
    { number: '8+', label: 'Years of Experience' },
    { number: '500+', label: 'Clients Supported' },
    { number: '24/7', label: 'Technical Support' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            About Our Company
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help businesses stay secure, visible, and competitive through
            reliable IT support, modern web design, and data-driven SEO strategies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Who We Are
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded with a passion for technology and problem-solving, our company
                was built to help businesses navigate today’s fast-changing digital landscape.
                From reliable IT support to high-performing websites and SEO strategies,
                we provide solutions that create real results.
              </p>
              <p>
                Our team brings years of experience working with small and mid-sized businesses,
                delivering secure systems, modern digital experiences, and scalable growth solutions.
                We focus on reducing downtime, improving visibility, and helping your business
                operate more efficiently.
              </p>
              <p>
                As technology evolves, so do we. We continuously adapt our tools and strategies
                to ensure our clients stay ahead—while remaining grounded in the values of trust,
                reliability, and customer-first service.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/web-design.jpg"
              alt="IT support, web design, and digital solutions"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900/50 rounded-2xl p-12 text-center border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let’s Build Something Better
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need dependable IT support, a modern website, or better
            search visibility, our team is ready to help.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Schedule a Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
