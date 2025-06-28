import React from 'react';
import ContactForm from './Contact';





const DataForm = () => {
  return (
    <>
      <div id='contact' className="w-full relative  bg-gradient-to-r from-blue-900/90 to-purple-900/90 py-12 px-8">
        <div className='flex items-center justify-center'>
          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
            
            {/* Left Gradient Panel */}
<<<<<<< HEAD
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 bg-gradient-to-r from-[#942fa8] via-[#9119a1] to-[#942fa8] rounded-t-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-none">
=======
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 bg-blue-300 rounded-t-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-none">
>>>>>>> 8432997fab5d85ba0d6f4be7a161f113a4d2f425
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Testing: The Silent Guardian of Software Quality
              </h1>
              <p className="text-base sm:text-2xl font-bold text-black">
                In the race to innovate, testing is the disciplined pacekeeper—preventing speed from compromising quality.
                If you can't find a direct contact within the app or on the website, try reaching out via email.
              </p>
            </div>

            {/* Right Form Panel */}
<<<<<<< HEAD
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 bg-purple-700 rounded-3xl shadow-2xl z-10 -mt-8 md:mt-0">
=======
            {/* <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 bg-blue-800 rounded-3xl shadow-2xl z-10 -mt-8 md:mt-0">

                 Your content here *
>>>>>>> 8432997fab5d85ba0d6f4be7a161f113a4d2f425
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 sm:mb-8">
                <span className="text-white/80">Tell us </span>
                <span className="text-white">about the task</span>
              </h2>
              <form className="space-y-5 sm:space-y-6 text-black">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="flex-1 bg-gray-200 border border-[#333] placeholder-gray-500 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 transition"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="flex-1 bg-gray-200 border border-[#333] placeholder-gray-500 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 transition"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full bg-gray-200 border border-[#333] placeholder-gray-500 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 transition"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="w-full bg-gray-200 border border-[#333] placeholder-gray-500 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 transition"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  className="w-full bg-gray-200 border border-[#333] placeholder-gray-500 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 transition"
                />
                <button
                  type="submit"
                  className="w-full bg-[#fb09eb] hover:from-[#fb09eb] hover:[#fb09eb] text-white font-bold rounded-full py-3 transition hover:shadow-[0_0_25px_#a855f7]"
                >
                  Send
                </button>
              </form>
            </div> */}

              <ContactForm/>

          </div>
        </div>

        <div
          className="relative mt-20 w-full flex items-center justify-center mx-auto max-w-7xl h-[1px]"
          style={{
            background: `radial-gradient(circle at center, rgba(59,130,246,1) 0%, rgba(168,85,247,1) 30%, rgba(236,72,153,0.4) 70%, transparent 100%)`
          }}
        />
      </div>
    </>
  );
};

export default DataForm;
