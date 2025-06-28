import React from 'react';
import { motion } from 'framer-motion';

const frontendTech = [
  { name: 'Selenium', icon: '/tech/selenium-svgrepo-com.svg' },
  { name: 'Cypress', icon: '/tech/Cypress.svg' },
  { name: 'Playwright', icon: '/tech/Playwrite.svg' },
  { name: 'Appium', icon: '/tech/appium-svgrepo-com.svg' },
<<<<<<< HEAD
  { name: 'TestCafe', icon: '/tech/TestCafe.png' },
  { name: 'Katalon Studio', icon: '/tech/Katalon-com.svg' },
  // { name: 'Ranorex', icon: '/tech/appium-svgrepo-com.svg' },
=======
  { name: 'Postman', icon: '/tech/postman-icon-svgrepo-com.svg'},
  { name: 'Ranorex', icon: '/tech/Cypress.svg'},
>>>>>>> 8432997fab5d85ba0d6f4be7a161f113a4d2f425
];

const backendTech = [
  { name: 'JMeter', icon: '/tech/jmeter.svg' },
  { name: 'Gatling', icon: '/tech/Gatling.svg' },
  { name: 'Jira', icon: '/tech/Jira.svg' },
<<<<<<< HEAD
  { name: 'Locust', icon: '/tech/Jira.svg' },
  { name: 'NeoLoad', icon: '/tech/Jira.svg' },
  { name: 'NeoLoad', icon: '/tech/Jira.svg' },
=======
  { name: 'k6', icon: '/tech/K6_idFWmVoXOM_1.svg'},
  { name: 'Locust', icon: '/tech/Jira.svg'},
  { name: 'BlazeMeter', icon: '/tech/blazemeter-svgrepo-com.svg'},
>>>>>>> 8432997fab5d85ba0d6f4be7a161f113a4d2f425
];

const mobileTech = [
  { name: 'JUnit', icon: '/tech/JUnit.svg' },
  { name: 'Jest', icon: '/tech/Jest.svg' },
  { name: 'pytest', icon: '/tech/pytest.svg' },
<<<<<<< HEAD
  { name: 'Jasmine', icon: '/tech/pytest.svg' },
  { name: 'PHPUnit', icon: '/tech/pytest.svg' },
  { name: 'RSpec', icon: '/tech/pytest.svg' },
=======
  { name: 'Jenkins', icon: '/tech/jenkins-svgrepo-com.svg'},
  { name: 'xUnit', icon: '/tech/'},
  { name: 'Mocha', icon: '/tech/mocha-svgrepo-com.svg'},

>>>>>>> 8432997fab5d85ba0d6f4be7a161f113a4d2f425
];

const databaseTech = [
  { name: 'Oracle', icon: '/tech/oracle-original.svg' },
  { name: 'Firebase', icon: '/tech/firebase-plain.svg' },
  { name: 'MySQL', icon: '/tech/mysql-original.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql-original.svg' },
  { name: 'MongoDB', icon: '/tech/mongodb-original.svg' },
  { name: 'Redis', icon: '/tech/redis-original.svg' },
];

const gradientStyles = [
  { background: 'radial-gradient(circle at top right, #2a2a72, #000000)' },
  { background: 'radial-gradient(circle at top right, #000000, #0a0a2a)' },
  { background: 'radial-gradient(circle at top right, #2a2a72, #000000)' },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.11,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const TechStack = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white py-10 md:py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:text-[5vw] text-[8vw] font-bold text-center uppercase"
        >
          Our Tech Stack
        </motion.h1>
        <div className="w-24 h-1 mx-auto mb-10 md:mb-24 mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 animate-gradientMove rounded-full"></div>

        {/* Frontend Technologies */}
        <div className="mb-6">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold mb-12 relative font-[Host_Grotesk] inline-block"
          >
            Functional Testing Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
            {frontendTech.map((tech, index) => {
              const gradient = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={gradient}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className='mb-24'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold font-[Host_Grotesk] mb-12 relative inline-block"
          >
            Performance Testing Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
            {backendTech.map((tech, index) => {
              const style = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={style}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Technologies */}
        <div className='mb-24'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold font-[Host_Grotesk] mb-12 relative inline-block"
          >
            Unit Testing Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mobileTech.map((tech, index) => {
              const style = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={style}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Database Technologies */}
        {/* <div className='mb-24'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold font-[Host_Grotesk] mb-12 relative inline-block"
          >
            Database Technologies
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {databaseTech.map((tech, index) => {
              const style = gradientStyles[index % gradientStyles.length];
              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  style={style}
                  className="p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center aspect-square transition duration-300"
                >
                  <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-4" />
                  <span className="text-xl font-medium text-white font-[Host_Grotesk]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div> */}
      </div>
      <div
        className="relative mt-20 w-full flex items-center justify-center mx-auto max-w-7xl h-[1px]"
        style={{
          background: `radial-gradient(circle at center, rgba(59,130,246,1) 0%, rgba(168,85,247,1) 30%, rgba(236,72,153,0.4) 70%, transparent 100%)`
        }}
      />
    </div>
  );
};

export default TechStack;