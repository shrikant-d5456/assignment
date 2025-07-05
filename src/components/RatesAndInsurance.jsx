'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RatesAndInsurance = () => {
  return (
    <div className="text-center text-[#1f2937]">
      
      {/* Rates Section */}
      <motion.div
        className="bg-[#94b1b2] py-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-2xl mb-6">Rates and Insurance</h2>
        <div className="font-light text-sm">
          <p className="mb-2">Session Fee - $200</p>
          <p className="mb-6">Psychodiagnostic Evaluation - $225</p>
          <p className="mb-2">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>
          <p className="mb-4">
            For out-of-network plans, I’ve partnered with Mentaya using{' '}
            <a
              href="https://www.mentaya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              this tool
            </a>{' '}
            to help you check your eligibility for reimbursement for my services.
          </p>
        </div>
      </motion.div>

      {/* Not Accepting Clients Section */}
      <motion.div
        className="bg-[#f7f5ee] py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-gray-600">
          Unable to accept new clients at this time.
        </h3>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="py-12 px-4">
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            “I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.”
          </p>
          <p className="mt-4 font-light text-sm">— Audre Lorde</p>
        </div>
      </motion.div>
    </div>
  );
};

export default RatesAndInsurance;