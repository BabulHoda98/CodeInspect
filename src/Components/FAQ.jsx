import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What services does a web design company offer?",
    answer: "A web design company typically provides services such as website design, website development, UI/UX design, branding, SEO optimization, e-commerce solutions, and website maintenance. At Pigopi, we offer comprehensive digital solutions tailored to your specific needs."
  },
  {
    question: "How much does it cost to hire a web design company?",
    answer: "The cost varies depending on project complexity, features required, and scope. We offer flexible pricing packages starting from basic websites to full-scale enterprise solutions. Contact us for a customized quote based on your requirements."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Website development typically takes 4-12 weeks, depending on complexity and requirements. A simple website might take 4-6 weeks, while complex e-commerce sites can take 8-12 weeks or more. We provide detailed timelines during project planning."
  },
  {
    question: "What should I look for when choosing a web design company?",
    answer: "Look for experience, portfolio quality, technical expertise, communication style, client testimonials, and post-launch support. Pigopi offers all these qualities along with transparent communication and dedicated project management."
  },
  {
    question: "Do web design companies offer ongoing support and maintenance?",
    answer: "Yes, we provide comprehensive maintenance packages including regular updates, security monitoring, performance optimization, and technical support to ensure your website runs smoothly after launch."
  },
  {
    question: "Can a web design company improve my website's SEO?",
    answer: "Absolutely! We implement SEO best practices during development, including optimized code structure, mobile responsiveness, fast loading times, and proper meta tags. We also offer ongoing SEO services for continued improvement."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white py-5 md:py-24 px-10 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column - Title and Contact */}
          <div className="flex space-y-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold bg-white text-transparent bg-clip-text"
            >
              FAQ About <br /> CodeInspect
            </motion.h1>
            
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                    {activeIndex === index ? '×' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-white">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;