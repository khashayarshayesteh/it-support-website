import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [captchaReady, setCaptchaReady] = useState(false);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    if (!document.getElementById('recaptcha-v3')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-v3';
      script.src = `https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY`;
      script.async = true;
      script.onload = () => setCaptchaReady(true);
      document.body.appendChild(script);
    } else {
      setCaptchaReady(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaReady || !window.grecaptcha) {
      alert('Captcha is not ready. Please try again.');
      return;
    }

    try {
      // Execute invisible reCAPTCHA
      const token = await window.grecaptcha.execute('YOUR_SITE_KEY', { action: 'submit' });

      console.log('Captcha token:', token);
      console.log('Form data:', formData);

      // TODO: send formData + token to your backend for verification
      // Example:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, token }),
      // });

      alert('Request submitted successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Captcha verification failed:', error);
      alert('Captcha verification failed. Please try again.');
    }
  };

  const contactInfo = [
    { icon: Phone, title: 'Call Us', details: ['(949)466-0506'], description: 'Mon–Fri, 8AM–6PM' },
    { icon: Mail, title: 'Email Us', details: ['shayesteh.office@gmail.com'], description: 'Fast response for marine service requests' },
    { icon: MapPin, title: 'Service Area', details: ['Orange County, CA'], description: 'Marinas & dockside service available' },
    { icon: Clock, title: 'Availability', details: ['Scheduled & On-Demand Service'], description: 'Emergency marine support available' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Need marine electronics installation, boat cleaning, docking support, or security systems? Tell us how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Contact our marine service team for professional, reliable solutions tailored to your boat and marina needs.
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
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">{detail}</p>
                      ))}
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Request Marine Service</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Boat / Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
                      placeholder="Boat or company name (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="marine-electronics">Marine Electronics Installation</option>
                    <option value="boat-cleaning">Boat Cleaning & Maintenance</option>
                    <option value="docking">Docking & Mooring Support</option>
                    <option value="marine-security">Marine Security Systems</option>
                    <option value="consultation">General Marine Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white resize-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your boat, marina, or service needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
