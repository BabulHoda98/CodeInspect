import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaRobot, FaCode, FaChartLine, FaShieldAlt, FaCogs, FaBug } from 'react-icons/fa';

// Import partner images (using placeholders for example)
const partners = [
  { name: 'Recharge', img: 'https://via.placeholder.com/150/6366f1/ffffff?text=R' },
  { name: 'Inspire', img: 'https://via.placeholder.com/150/8b5cf6/ffffff?text=I' },
  { name: 'Minty', img: 'https://via.placeholder.com/150/ec4899/ffffff?text=M' },
  { name: 'Sitemark', img: 'https://via.placeholder.com/150/10b981/ffffff?text=S' },
  { name: 'Snowflake', img: 'https://via.placeholder.com/150/0ea5e9/ffffff?text=S' },
  { name: 'Border', img: 'https://via.placeholder.com/150/f59e0b/ffffff?text=B' },
];

// Service images (using placeholders for example)
const services = [
  {
    title: 'Test Automation Strategy & Consulting',
    description: `Helping teams choose the right tools, frameworks, and approaches tailored to their product and workflow.`,
    gradient: 'from-purple-600 to-black',
    icon: <FaCogs className="text-4xl mb-4 text-purple-300" />
  },
  {
    title: 'Framework Development',
    description: `Building reusable, scalable test automation frameworks (e.g., keyword-driven, data-driven, hybrid).`,
    gradient: 'from-pink-600 to-black',
    icon: <FaCode className="text-4xl mb-4 text-pink-300" />
  },
  {
    title: 'Software Testing Service',
    description: `Deliver bug-free software with our all-inclusive testing services. From functionality and performance to security and automation, our QA specialists ensure your product is dependable, safe, and provides an exceptional user experience before going live.`,
    gradient: 'from-blue-600 to-black',
    icon: <FaBug className="text-4xl mb-4 text-blue-300" />
  },
];

// About data with images
const aboutData = [
  {
    title: 'Regression Testing',
    description: 'Re-running tests to ensure new code changes haven’t broken existing functionality.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    gradient: 'from-purple-400 to-black',
    icon: <FaRobot className="text-3xl text-purple-300" />
  },
  {
    title: 'Functional Testing',
    description: "To make sure every feature works as expected. Think of it as the 'does it do what it should?' test.",
    img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    gradient: 'from-blue-600 to-black',
    icon: <FaShieldAlt className="text-3xl text-blue-300" />
  },
  {
    title: 'Performance & Load Testing',
    description: 'Measuring how your app behaves under stress or high traffic',
    img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    gradient: 'from-pink-500 to-black',
    icon: <FaChartLine className="text-3xl text-pink-300" />
  },
];

const benefits = [
  {
    title: "🚀 Speed & Efficiency",
    desc: "Automated tests run significantly quicker than manual ones, especially for repetitive tasks.",
    icon: <FaRobot className="text-3xl text-blue-400" />
  },
  {
    title: "🎯 Accuracy & Reliability",
    desc: "Automated tests perform consistently, reducing the risk of oversight. Tools can validate data and UI elements with pinpoint accuracy.",
    icon: <FaChartLine className="text-3xl text-green-400" />
  },
  {
    title: "📊 Better Resource Allocation",
    desc: "Human testers can concentrate on exploratory and edge-case testing while automation handles the routine.",
    icon: <FaCogs className="text-3xl text-purple-400" />
  },
  {
    title: "🔐 Security & Risk Management",
    desc: "Automated security tests can catch flaws before they're exploited.",
    icon: <FaShieldAlt className="text-3xl text-red-400" />
  }
];

const stats = [
  { value: 90, suffix: "%", label: "Test Coverage" },
  { value: 70, suffix: "%", label: "Faster Releases" },
  { value: 500, suffix: "k+", label: "Tests Executed" },
  { value: "24/7", label: "Testing Capacity" }
];

const HomePage = () => {
  const location = useLocation();
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const parallaxRef = useRef(null);
  
  // State for animated stats
  const [animatedStats, setAnimatedStats] = useState([
    { current: 0, ...stats[0] },
    { current: 0, ...stats[1] },
    { current: 0, ...stats[2] },
    stats[3]
  ]);
  
  // Ref for stats section
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * -0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animate stats when they come into view
  useEffect(() => {
    if (statsInView) {
      const duration = 2000; // Animation duration in ms
      const startTimes = [null, null, null];
      let animationFrameId;
      
      const animate = (timestamp) => {
        const updatedStats = [...animatedStats];
        let allComplete = true;
        
        // Animate first three stats (skip the last one)
        for (let i = 0; i < 3; i++) {
          if (!startTimes[i]) startTimes[i] = timestamp;
          
          const elapsed = timestamp - startTimes[i];
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease out function for smoother animation
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          const targetValue = stats[i].value;
          const currentValue = Math.floor(easeProgress * targetValue);
          
          updatedStats[i] = {
            ...updatedStats[i],
            current: currentValue
          };
          
          if (progress < 1) allComplete = false;
        }
        
        setAnimatedStats(updatedStats);
        
        if (!allComplete) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };
      
      animationFrameId = requestAnimationFrame(animate);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [statsInView]);

  return (
    <div id="home" className="text-white font-sans overflow-x-hidden">
      {/* Hero Section with Professional Background */}
      <div className="fixed w-full h-screen overflow-hidden z-0">
        {/* Parallax Background */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"
          style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 0.1s ease-out',
            transform: 'translateY(0)'
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        
        {/* Animated Circuit Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E)",
            backgroundSize: "300px 300px",
            animation: "moveCircuit 20s linear infinite"
          }}
        ></div>
      </div>
      
      <div className="relative top-0 left-0 w-full h-screen" />
      
      {/* Hero Content */}
      <div className="absolute w-full h-screen inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
        <motion.h1 
          className="text-[11vw] font-extrabold tracking-wide text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ 
            fontFamily: "'Rajdhani', sans-serif",
            textShadow: "0 0 20px rgba(99, 102, 241, 0.8)",
            letterSpacing: "-0.03em"
          }}
        >
          CodeInspect
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl tracking-wider mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Automate Everything. Deliver Excellence.
        </motion.p>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="mb-2 text-sm tracking-widest">EXPLORE OUR SOLUTIONS</span>
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-gray-900 pt-20">
        {/* Stats Banner */}
        <div 
          ref={statsRef}
          className="w-full py-12 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {animatedStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-4"
              >
                <div className="text-4xl font-bold" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {index < 3 ? (
                    <span>
                      {stat.current}
                      {stat.suffix}
                    </span>
                  ) : (
                    <span>{stat.value}</span>
                  )}
                </div>
                <div className="text-sm uppercase tracking-wider mt-2 opacity-80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Section with Enhanced 3D Cards */}
        <section id="services" className="w-full py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold uppercase mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
              </motion.h2>
              
              <motion.div 
                className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.p 
                className="mt-8 max-w-2xl mx-auto text-xl text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Comprehensive automation solutions tailored to your development lifecycle
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl relative overflow-hidden group transform-style-3d transition-all duration-700`}
                  style={{
                    transform: "perspective(1000px)",
                    transformStyle: "preserve-3d"
                  }}
                  whileHover={{
                    rotateY: 5,
                    rotateX: 3,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {/* Animated background pattern */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-all duration-700"
                    style={{
                      backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E)",
                      backgroundSize: "200px 200px",
                      animation: "moveCircuit 20s linear infinite"
                    }}
                  ></div>
                  
                  {/* 3D Card Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content with 3D translation */}
                  <div 
                    className="relative z-10 transform-style-3d transition-transform duration-700 group-hover:translate-z-20"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {service.icon}
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-200 mb-6">{service.description}</p>
                  </div>
                  
                  {/* Floating button */}
                  <div className="relative z-10 mt-6 transform-style-3d transition-transform duration-700 group-hover:translate-z-30">
                    <div className="flex items-center text-blue-300 font-medium">
                      <span>Learn more</span>
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Solutions Section */}
        {/* <section id="solutions" className="w-full py-24 bg-gradient-to-br from-gray-900 to-gray-950 px-4"> */}
        <section id="solutions" className="w-full py-24 bg-gradient-to-r from-blue-900/90 to-purple-900/90 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold uppercase mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Testing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Solutions</span>
              </motion.h2>
              
              <motion.div 
                className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.p 
                className="mt-8 max-w-2xl mx-auto text-xl text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Specialized testing approaches for comprehensive quality assurance
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {aboutData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-purple-500/30 transition-all duration-300 relative group"
                >
                  <div className="overflow-hidden rounded-t-2xl">
                    <div 
                      className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url(${item.img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <div className="absolute top-4 right-4 bg-gray-900/80 p-3 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                      Explore solution
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-24 px-4 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Automate?</span>
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-gray-300 mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Automation transforms testing from a bottleneck to a strategic advantage. Discover the measurable benefits:
                </motion.p>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 relative overflow-hidden group">
                    <span className="relative z-10">Schedule a Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </motion.div>
              </div>
              
              <div className="space-y-8">
                {benefits.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="flex items-start p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        {/* <section className="w-full py-20 bg-gradient-to-r from-gray-900 to-gray-950 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Trusted by Industry Leaders
              </motion.h2>
              
              <motion.p 
                className="max-w-2xl mx-auto text-xl text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We partner with innovative companies to deliver exceptional quality
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex justify-center items-center p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
                >
                  <div className="w-24 h-24 rounded-lg bg-white/5 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-300">
                      {partner.name.charAt(0)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full py-24 px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl p-12 backdrop-blur-sm border border-gray-700 relative overflow-hidden">
            {/* Floating particles effect */}
            <div className="absolute inset-0 z-0">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-blue-500/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float 15s infinite ${i * 0.3}s ease-in-out`,
                  }}
                />
              ))}
            </div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Ready to Transform Your Testing?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Let's discuss how our automation solutions can accelerate your development cycle and improve product quality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 relative overflow-hidden group z-10">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, -10px) rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        
        @keyframes moveCircuit {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 300px 300px;
          }
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .group-hover\:translate-z-20 {
          transform: translateZ(20px);
        }
        
        .group-hover\:translate-z-30 {
          transform: translateZ(30px);
        }
      `}</style>
    </div>
  );
};

export default HomePage;