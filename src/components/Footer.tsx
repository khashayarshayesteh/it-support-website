import React from 'react';
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Professional Yacht Services',
    'Marine Electronics Installation',
    'Boat Maintenance & Repairs',
    'Docking & Launch Support',
    'Custom Boat Solutions',
    'Emergency Marine Support'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Request Service', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/DigitechMarine',
      name: 'Facebook'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/digitech-marine',
      name: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Digitech Marine</h3>
                <p className="text-gray-400 text-sm">
                  Yacht & Marine Services
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving Dana Point, Newport Beach, Long Beach, and surrounding areas with professional yacht services, maintenance, and marine support.
            </p>

            {/* Social */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1540+S+Lyon+Santa+Ana+CA+92705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    1540 S Lyon, Santa Ana, CA 92705
                  </a>
                </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+19494660506" className="hover:text-white">
                  (949)466-0506
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:info@digitechmarine.com"
                  className="hover:text-white"
                >
                  info@digitechmarine.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Mon – Fri: 8AM – 5PM</p>
                  <p>Emergency Marine Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-500 rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold mb-2">
            Need Expert Yacht Services?
          </h4>
          <p className="mb-4">
            Our team is ready to help with maintenance, electronics, and full-service yacht support.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Request Service
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <span>© 2026 Digitech Marine. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
