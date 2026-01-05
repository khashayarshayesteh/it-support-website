import React from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';
import marineImg from '../assets/yacht-maintenance.jpg';

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Marine Expertise',
      description:
        'We bring hands-on experience in marine electronics, vessel maintenance, docking solutions, and onboard security systems.',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description:
        'Boat owners trust us for on-time service, attention to detail, and dependable solutions—onshore or dockside.',
    },
    {
      icon: Users,
      title: 'Customer-First Approach',
      description:
        'Every vessel is different. We tailor our services to your boat, your needs, and how you use the water.',
    },
    {
      icon: Shield,
      title: 'Safety & Trust',
      description:
        'From secure installations to transparent pricing, we prioritize safety, reliability, and long-term peace of mind.',
    },
  ];

  const stats = [
    { number: '8+', label: 'Years of Marine Experience' },
    { number: '400+', label: 'Boats Serviced' },
    { number: '24/7', label: 'Support Availability' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">About Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide professional marine services designed to improve safety, performance, and reliability for boat owners.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Who We Are</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded by marine professionals with a passion for precision and craftsmanship, our company was built to support boat owners with reliable, high-quality marine services.
              </p>
              <p>
                From advanced marine electronics installation to routine cleaning, docking support, and onboard security systems, we help keep your vessel safe, efficient, and ready for the water.
              </p>
              <p>
                We understand the importance of reliability on the water. That’s why we focus on trusted equipment, clean installations, and service you can count on—every time you leave the dock.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={marineImg} // ✅ Use imported variable
              alt="Marine electronics installation and yacht maintenance"
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
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900/50 rounded-2xl p-12 text-center border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-4">Your Boat Deserves Expert Care</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            From marine electronics to cleaning, docking, and security—our team is ready to keep your vessel protected and performing at its best.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Request a Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
