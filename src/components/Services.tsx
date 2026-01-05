import React from 'react';
import {
  Radar,
  Wrench,
  Anchor,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Radar,
      title: 'Marine Electronics Installation',
      description:
        'Professional installation and configuration of marine electronics to ensure safety, accuracy, and reliability on the water.',
      features: [
        'GPS, radar & fish finder installation',
        'Navigation & communication systems',
        'Wiring & system integration',
        'Troubleshooting & upgrades',
      ],
      iconStyle: 'bg-blue-500/20 text-blue-400',
    },
    {
      icon: Wrench,
      title: 'Boat Cleaning & Maintenance',
      description:
        'Detailed cleaning and routine maintenance services to keep your vessel looking great and performing at its best.',
      features: [
        'Interior & exterior boat cleaning',
        'Electronics-safe cleaning',
        'Routine inspections',
        'Preventive maintenance',
      ],
      iconStyle: 'bg-green-500/20 text-green-400',
    },
    {
      icon: Anchor,
      title: 'Docking & Mooring Support',
      description:
        'Reliable docking solutions and assistance designed to protect your boat and simplify marina operations.',
      features: [
        'Docking system setup',
        'Mooring inspections',
        'Hardware installation',
        'Safety & stability checks',
      ],
      iconStyle: 'bg-indigo-500/20 text-indigo-400',
    },
    {
      icon: ShieldCheck,
      title: 'Marine Security Systems',
      description:
        'Advanced marine security solutions to protect your boat, electronics, and equipment at all times.',
      features: [
        'Onboard camera systems',
        'Alarm & monitoring solutions',
        'Remote access & alerts',
        'System maintenance & support',
      ],
      iconStyle: 'bg-purple-500/20 text-purple-400',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            Our Marine Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert marine solutions designed to enhance performance, safety,
            and reliability for your boat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-700"
              >
                <div
                  className={`inline-flex p-3 rounded-xl ${service.iconStyle} mb-6`}
                >
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
            Need Professional Marine Service?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            From marine electronics to cleaning and security — we’ve got your boat covered.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Request a Free Quote
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
