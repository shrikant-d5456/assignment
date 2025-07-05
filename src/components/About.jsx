'use client'
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="md:flex md:flex-row-reverse items-center gap-10 px-4 py-8 max-w-6xl mx-auto"
      >
        
        {/* Image Section with Animation */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="md:hidden block text-2xl font-bold mb-4 text-[#8f7552] ml-4">
            About Dr. Jennifer Hahm
          </h1>
          <img
            src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/e841b9a0-6e90-4af7-89ff-cfb7018239e5/AD8A7645-Edit.jpg?format=1000w"
            alt="Dr. Jennifer Hahm"
            className="md:w-full w-[200px] m-auto shadow-lg my-8"
          />
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          className="md:w-1/2 w-full px-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="hidden md:block text-3xl font-bold text-[#b99f7d] mb-4">
            About Dr. Jennifer Hahm
          </h1>
          <p className="leading-relaxed space-y-4 text-[#7e7e6b] font-sans font-light tracking-tight">
            Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world.
            I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice.
            Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being,
            recognizing that these aspects vary from person to person.
          </p>
          <p className="leading-relaxed mt-4 space-y-4 text-[#7e7e6b] font-sans font-light tracking-tight">
            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion,
            and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012)
            and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric
            inpatient units, academic medical centers, universities, and outpatient practice settings.
          </p>
          <p className="leading-relaxed mt-4 space-y-4 text-[#7e7e6b] font-sans font-light tracking-tight">
            My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism,
            family systems theory, acceptance and commitment concepts, and mindfulness practices.
          </p>
        </motion.div>
      </div>
      <hr className="text-amber-900 my-10 w-10/12 m-auto" />
    </>
  );
};

export default About;
