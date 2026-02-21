import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Sparkles,
  MessageCircle,
  Globe
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'Saagar.parikh.11@gmail.com',
      href: 'mailto:Saagar.parikh.11@gmail.com',
      color: 'text-purple-300',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-400/30'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '214-471-0668',
      href: 'tel:2144710668',
      color: 'text-indigo-300',
      bgColor: 'bg-indigo-600/20',
      borderColor: 'border-indigo-400/30'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
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
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/saagar-parikh1/'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/saagarparikh1'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-indigo-950 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
            <h2 className="text-3xl font-bold text-white">
              Get In Touch
            </h2>
            <Sparkles className="w-5 h-5 text-purple-300 animate-pulse" />
          </div>
          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
            I'm actively seeking product and data analytics opportunities. 
            If you’re hiring or just want to connect, I’d love to talk.
          </p>
        </div>

{/* Main Contact Card */} <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-2xl"> <div className="flex items-center space-x-3 mb-6"> <MessageCircle className="w-5 h-5 text-purple-300" /> <h3 className="text-lg font-bold text-white">Let's Connect</h3> </div> <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 text-white shadow-2xl border border-purple-400/30"> <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30"> <div className="flex items-center space-x-2 mb-2"> <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div> <span className="font-medium text-xs">Available for Opportunities</span> </div> <p className="opacity-90 text-xs leading-relaxed"> I'm actively seeking opportunities to start my career in product/data analytics. Whether you have a full-time position, internship, or just want to chat about technology, I'd love to hear from you. </p> </div> </div><br></br>

          {/* Contact Grid (Smaller + Compact) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} border ${item.borderColor} 
                           rounded-lg px-4 py-3 
                           transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center space-x-3">

                  <div className={`w-8 h-8 flex items-center justify-center 
                                  rounded-full bg-white/10 ${item.color}`}>
                    {item.icon}
                  </div>

                  <div className="leading-tight">
                    <h4 className="text-xs font-semibold text-white">
                      {item.title}
                    </h4>

                    {item.href ? (
                      <a
                        href={item.href}
                        className={`${item.color} text-sm hover:underline break-words`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="border-t border-white/20 pt-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="w-4 h-4 text-indigo-300" />
              <span className="text-sm font-semibold text-white">
                Connect With Me
              </span>
            </div>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 border border-white/20 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;