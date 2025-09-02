import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, CheckCircle, AlertCircle, Sparkles, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'Saagar.parikh.11@gmail.com',
      href: 'mailto:Saagar.parikh.11@gmail.com',
      color: 'text-purple-300',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '214-471-0668',
      href: 'tel:214-471-0668',
      color: 'text-indigo-300',
      bgColor: 'bg-indigo-600/20',
      borderColor: 'border-indigo-400/30'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Frisco, TX (Open to Relocation)',
      href: null,
      color: 'text-violet-300',
      bgColor: 'bg-violet-600/20',
      borderColor: 'border-violet-400/30'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saagar-parikh1/',
      color: 'text-purple-300 hover:text-purple-200',
      bgColor: 'bg-purple-600/20 hover:bg-purple-600/30',
      borderColor: 'border-purple-400/30 hover:border-purple-400/50'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      href: 'https://github.com/saagarparikh1',
      color: 'text-gray-200 hover:text-white',
      bgColor: 'bg-gray-600/20 hover:bg-gray-600/30',
      borderColor: 'border-gray-400/30 hover:border-gray-400/50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get In Touch
            </h2>
            <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" />
          </div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-6">
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-purple-300" />
                <h3 className="text-xl font-bold text-white">Let's Connect</h3>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                I'm actively seeking opportunities to start my career in web development. 
                Whether you have a full-time position, internship, or just want to chat 
                about technology, I'd love to hear from you.
              </p>

              {/* Enhanced Contact Details */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className={`${item.bgColor} backdrop-blur-sm rounded-lg p-3 border ${item.borderColor} group hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full bg-white/10 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={`${item.color} hover:underline transition-colors duration-300 font-medium text-sm`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 font-medium text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-base font-semibold text-white mb-3 flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-indigo-300" />
                  <span>Connect With Me</span>
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.bgColor} backdrop-blur-sm p-3 rounded-lg border ${link.borderColor} transition-all duration-300 hover:scale-110 ${link.color} group`}
                    >
                      <div className="group-hover:rotate-12 transition-transform duration-300">
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Availability Status */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-5 text-white shadow-2xl border border-purple-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 animate-pulse" />
                <h4 className="text-base font-semibold">Current Status</h4>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium text-sm">Available for Opportunities</span>
                </div>
                <p className="opacity-90 text-xs leading-relaxed">
                  Actively seeking full-time opportunities starting in 2025. 
                  Open to remote work and relocation for the right opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="w-6 h-6 text-indigo-300" />
              <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-600/20 border border-green-400/30 rounded-lg flex items-center space-x-3 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-200 text-sm">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-600/20 border border-red-400/30 rounded-lg flex items-center space-x-3 backdrop-blur-sm">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-200 text-sm">Something went wrong. Please try again.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-200 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-300 backdrop-blur-sm text-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-200 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-300 backdrop-blur-sm text-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-gray-200 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-300 backdrop-blur-sm text-sm"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-200 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-300 backdrop-blur-sm text-sm"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;