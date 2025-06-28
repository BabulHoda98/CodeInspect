// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
// } from 'react-icons/fa';
// import logo1 from '../assets/logo1.png';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const Footer = () => {
//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <motion.footer
//       className="bg-black text-white py-5 md:py-12 relative z-10"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={stagger}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#311b3f] to-transparent opacity-30 pointer-events-none"></div>

//       <div className="relative max-w-7xl mx-auto px-6 z-20">
//         <div className="flex flex-col md:flex-row justify-between gap-10">

//           {/* About Section */}
//           <motion.div className="flex-1" variants={fadeInUp}>
//             <img className="w-24 h-22 mb-4" src={logo1} alt="PigoPi Logo" />
//             <p className="text-gray-400 px-2">
//               Elevate your digital presence with cutting-edge web design and development services.
//             </p>

//             {/* Updated Social Icons */}
//             <div className="flex items-center gap-4 px-2 mt-6">
//               <a
//                 // href="https://www.facebook.com/profile.php?id=61576543783204&sk=about"
//                  href=""
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
//               >
//                 <FaFacebookF className="text-white text-xl" />
//               </a>
//               <a
//                 // href="https://www.instagram.com/pigopi_314?igsh=dzMwamsycmpkd204&utm_source=qr"
//                href=""
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition transform shadow-lg"
//               >
//                 <FaInstagram className="text-white text-xl" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#0077B5] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
//               >
//                 <FaLinkedinIn className="text-white text-xl" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#1DA1F2] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
//               >
//                 <FaTwitter className="text-white text-xl" />
//               </a>
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#FF0000] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
//               >
//                 <FaYoutube className="text-white text-xl" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Get in Touch Section */}
//           <motion.div className="flex-1" variants={fadeInUp}>
//             <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 shadow-xl">
//               <h4 className="text-xl font-semibold mb-2">Get in touch with us</h4>
//               <p className="text-sm text-gray-200 mb-4">
//                 Have any questions or need help? We're here to assist you.
//               </p>
//               <div className="flex flex-col space-y-3">
//                 <a
//                   href="mailto:info@pigo-pi.com"
//                   className="text-lg text-gray-50 hover:text-white transition"
//                 >
//                   info@CodeInspect.com
//                 </a>
//                 <p className="text-lg text-gray-50 hover:text-white transition">
//                     Email : arunpe878@gmail.com 
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Legal Links Section */}
//           <motion.div className="order-last px-2 md:order-none" variants={fadeInUp}>
//             <h4 className="text-xl font-semibold mb-4">Legal</h4>
//             <ul className="space-y-2">
//               <li>
//                 <button
//                   onClick={handleScrollToTop}
//                   className="hover:text-pink-300 transition duration-300"
//                 >
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <Link to="/refund-policy" className="hover:text-pink-300 transition duration-300">Refund Policy</Link>
//               </li>
//               <li>
//                 <Link to="/privacy-policy" className="hover:text-pink-300 transition duration-300">Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link to="/terms-conditions" className="hover:text-pink-300 transition duration-300">Terms & Conditions</Link>
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <motion.div
//           className="mt-10 border-t border-gray-700 pt-4 text-center"
//           variants={fadeInUp}
//         >
//           <p className="text-sm max-w-xs mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-400">
//             &copy; {new Date().getFullYear()} CodeInspect. All rights reserved.
//           </p>
//           <p className="text-sm max-w-xs mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-400">
//             &copy; Powered By PigoPi.
//           </p>
//         </motion.div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;
// --------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import logo1 from '../assets/logo1.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-black text-white py-12 relative z-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
    >
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#311b3f] via-[#1e0f2e] to-transparent opacity-25 pointer-events-none"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <div className="flex items-center mb-6">
              <img 
                className="w-16 h-14 mr-3" 
                src={logo1} 
                alt="CodeInspect Logo" 
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                CodeInspect
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We deliver cutting-edge web solutions that elevate your digital presence and drive business growth through innovative design and development.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebookF />, color: '#1877F2', href: '' },
                { icon: <FaInstagram />, color: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', href: '' },
                { icon: <FaLinkedinIn />, color: '#0077B5', href: 'https://linkedin.com' },
                { icon: <FaTwitter />, color: '#1DA1F2', href: 'https://twitter.com' },
                { icon: <FaYoutube />, color: '#FF0000', href: 'https://youtube.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-opacity-0 transition-all duration-300"
                  style={{ 
                    background: social.color.includes('gradient') 
                      ? social.color 
                      : social.color,
                    backgroundSize: social.color.includes('gradient') ? '300%' : 'auto'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 15px ${social.color.includes('gradient') ? '#dc2743' : social.color}`
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`${social.icon.type.name} social media`}
                >
                  <span className="text-white text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Contact Us
            </h4>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Tech Street, Suite 100<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-400 mr-3" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-blue-400 transition">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:info@codeinspect.com" className="text-gray-400 hover:text-blue-400 transition">
                  info@codeinspect.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-800 shadow-xl">
              <p className="text-sm text-gray-300 italic">
                "We deliver exceptional digital experiences that drive measurable business results for our clients worldwide."
              </p>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Quick Links
            </h4>
            
            <ul className="space-y-3">
              {[
                { name: 'Home', action: handleScrollToTop },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  {link.path ? (
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-blue-400 transition flex items-center group w-full text-left"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Legal
            </h4>
            
            <ul className="space-y-3 mb-8">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms & Conditions', path: '/terms-conditions' },
                { name: 'Refund Policy', path: '/refund-policy' },
                { name: 'Cookie Policy', path: '/cookie-policy' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h5 className="font-medium mb-3">Stay Updated</h5>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-r-lg hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={fadeInUp}
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CodeInspect. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            Powered by 
            <span className="ml-1 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-medium">
              PigoPi Technologies
            </span>
          </p>
          
          {/* Back to Top */}
          <motion.button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            whileHover={{ y: -3 }}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-blue-400" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
