import React from 'react';
// import image21 from '../assets/Events/image21.jpg';
// import image23 from '../assets/Events/image23.png';
// import image22 from '../assets/Events/image22.png';
import image1 from '../assets/Events/image1.webp';
import image2 from '../assets/Events/image2.jpg';
import image3 from '../assets/Events/image3.jpg';
import { motion } from "framer-motion";

const events = [
  {
    date: "Feb 4, 2025",
    // image: image22,
    image: image1,
    desc: "Unlock the full potential of your website with expert-led optimization sessions."
  },
  {
    date: "March 19, 2025",
    // image: image21,
    image: image2,
    desc: "Automation testing accelerates release cycles by executing 1,000 tests in minutes—something impossible manually"
  },
  {
    date: "March 22, 2025",
    // image: image23,
    image: image3,
    desc: "Manual testing tells you if the software works. Automation tells you if it keeps working."
  }
];

const getInitialPosition = (index) => {
  if (index === 0) return { opacity: 0, x: -80 }; 
  if (index === 1) return { opacity: 0, y: 80 };
  if (index === 2) return { opacity: 0, x: 80 };
};

const Events = () => {
  return (
    <section id="events" className="w-full py-10 md:py-32 bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white relative select-none">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#311b3f] to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-semibold mb-10"
        >
          Event For CodeInspect<br />
          <span className="text-[#810ec8] font-medium">Connect With Customers</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-15">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={getInitialPosition(index)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0d0d0d] rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-2xl group"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-4">
                <p className="inline-block border font-[Host_Grotesk] border-white text-lg px-3 py-1 rounded-md">
                  {event.date}
                </p>
                <p className="text-lg font-[Host_Grotesk] text-gray-300">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
