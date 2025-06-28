import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What services does an automation testing company offer?",
    answer: "An automation testing company typically provides,  Test strategy and framework design, Test script development and execution, Integration with CI/CD pipelines, Performance and load testing, Test data generation and management, Maintenance of existing automated test suites "
},
  {
    question: "How much does it cost to hire an automation testing company?",
    answer: "The cost varies based on : Project complexity and duration, Number of platforms supported (e.g., web, mobile, APIs), Tools used (open-source vs. commercial), Level of customization and integration"
  },
  {
    question: "How long does it take to implement automation testing?",
    answer: "In general, for most mid-sized applications, a reliable automation suite can be built in 2–3 months. However, scaling and optimizing takes time and continuous effort."
  },
  {
    question: "What should I look for when choosing an automation testing company?",
    answer: "Look for: Expertise in the tools and technologies relevant to your stack, Proven track record with similar projects, Ability to integrate into your existing DevOps/CI-CD pipelines, Transparency in reporting and communication, Flexibility in adapting to changes and evolving requirements, Post-deployment support and script maintenance"
  },
  {
    question: "Do automation testing companies offer ongoing support and maintenance?",
    answer: "Yes, most reputable companies offer: Regular updates to test scripts when the application changes, Regression test execution after code deployments, Troubleshooting flaky or broken tests, Ongoing optimization of test performance."
  },
  {
    question: "Can an automation testing company help improve product quality and reliability?",
    answer: "Absolutely! Automation: Catches regressions quickly and consistently, Enables faster and safer deployments, Increases test coverage, Reduces human error from manual testing, Identifies performance bottlenecks early"
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