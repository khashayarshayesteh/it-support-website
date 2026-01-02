import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: connect to email service or backend
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(949) 372-9853'],
      description: 'Mon–Fri, 8AM–6PM',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['shayesteh.office@gmail.com'],
      description: 'We respond within 2 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Santa Ana, CA'],
      description: 'Serving surrounding areas',
    },
    {
      icon: Clock,
      title: 'Availability',
      details: ['Business Hours: 8AM – 6PM'],
      description: 'Emergency support available 24/7',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Need IT support, a new website, or better visibility on Google?
            Let’s talk about how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Reach out for expert IT assistance, professional web design,
                or SEO strategies that deliver real results.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Request a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
                      placeholder="(949) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="it-support">IT Support & Maintenance</option>
                    <option value="web-design">Web Design & Development</option>
                    <option value="seo">SEO & Digital Marketing</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white resize-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your needs or challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 bg-blue-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate IT Support?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Call now for urgent technical assistance or emergency service.
          </p>
          <a
            href="tel:+19493729853"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Call (949) 372-9853
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
