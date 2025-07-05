'use client'
import React from 'react';
import { motion } from 'framer-motion';

const array = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/25a4d543-1f55-46b7-ba06-c571a0c2b806/pexels-tima-miroshnichenko-6011667.jpg?format=1000w",
    heading: "Therapy for Healthcare Providers and Students",
    subHeading: "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life."
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/11e69e15-d9e7-4182-aeb0-aacd9fc81e02/pexels-raphael-brasileiro-1687007.jpg?format=750w",
    heading: "Therapy for Trauma and Grief",
    subHeading: "Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning."
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/eeca6997-7fd7-4376-b0a4-df60a0f368e5/pexels-polina-tankilevitch-8202906.jpg?format=1000w",
    heading: "Therapy for Second Generation Individuals In Immigrant Families",
    subHeading: "Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity."
  },
];

const AreaOfFocus = () => {
  return (
    <>
      {/* Intro Section */}
      
      <motion.div
        id='services'
        className="w-full h-[60vh] flex justify-center items-center bg-amber-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl text-center space-y-4 px-4">
          <p className="text-3xl md:text-4xl font-extralight text-gray-800">
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-sans font-extralight">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma,
            grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it alone. Therapy offers you the time and
            space to work toward wellness and peace.
          </p>
          <hr />
        </div>
      </motion.div>

      {/* Focus Area Cards */}
      <div className='my-8'>
        <p className='text-3xl font-extralight text-center my-8 text-black'>Area of Focus</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-8 justify-center items-center'>
          {array.map((ele, ind) => (
            <motion.div
              key={ind}
              className='w-full text-black p-4 text-center flex-col justify-center items-center'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: ind * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={ele.img}
                alt=""
                className='m-auto w-[350px] h-[350px] object-cover rounded-[100%]'
              />
              <h1 className='text-2xl font-extralight my-2 text-gray-700'>{ele.heading}</h1>
              <p className='font-light text-gray-700 font-sans text-sm'>
                {ele.subHeading}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AreaOfFocus;
