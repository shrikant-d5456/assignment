'use client'
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="md:px-20 p-4">
      <section className="relative w-full h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover -z-10"
        >
          <source
            src="https://videos.pexels.com/video-files/1918465/1918465-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Animated Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-wider mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Psychological Care for <br /><br />
            Change, Insight, and Well-Being
          </motion.h1>

          <motion.p
            className="md:text-xl mb-8 max-w-2xl drop-shadow-md tracking-wider font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            Offering individual psychotherapy for adults via telehealth in Michigan and{" "}
            <span className="underline underline-offset-4 decoration-2 text-sky-200">
              most U.S. states
            </span>{" "}
            through PSYPACT participation.
          </motion.p>

          <motion.button
            className="text-sm bg-[#94b0b0] hover:bg-[#94b0b0a9] uppercase tracking-widest font-sans px-32 py-4 rounded-[100%] shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
