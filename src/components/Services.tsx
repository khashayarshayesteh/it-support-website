import React from 'react';
import { Wrench, Monitor, Search, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'IT Support & Maintenance',
      description:
        'Reliable IT support services to keep your systems secure, fast, and running without interruptions.',
      features: [
        '24/7 technical support',
        'Network & system troubleshooting',
        'Security updates & monitoring',
        'On-site & remote assistance',
      ],
      iconStyle: 'bg-blue-500/20 text-blue-400',
    },
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description:
        'Modern, responsive websites designed to convert visitors into customers.',
      features: [
        'Custom website design',
        'Mobile-first & responsive layouts',
        'Fast performance & optimization',
        'Ongoing updates & support',
      ],
      iconStyle: 'bg-green-500/20 text-green-400',
    },
    {
      icon: Search,
      title: 'SEO & Digital Growth',
      description:
        'Search engine optimization strategies that improve visibility and drive real traffic.',
      features: [
        'On-page & technical SEO',
        'Local SEO optimization',
        'Keyword & competitor analysis',
        'Analytics & performance tracking',
      ],
      iconStyle: 'bg-purple-500/20 text-purple-400',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional IT, web, and SEO solutions designed to help your business
            operate efficiently and grow online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-700"
              >
                <div className={`inline-flex p-3 rounded-xl ${service.iconStyle} mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Grow Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get expert IT support, a high-converting website, and SEO that delivers results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Your Free Quote
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
