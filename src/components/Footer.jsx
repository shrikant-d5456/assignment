'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-[#f7f5ee] py-10 text-center text-[#1f2937] text-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.h4
        className="text-2xl mb-4 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Jennifer Hahm, Ph.D., Licensed Psychologist
      </motion.h4>

      <motion.p
        className="mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <a href="mailto:jennifer@drjenniferhahm.com" className="underline tracking-wider">
          jennifer@drjenniferhahm.com
        </a>
      </motion.p>

      <motion.p
        className="mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Phone: <a href="tel:2489398150" className="underline">(248) 939-8150</a> &nbsp;
        Fax: (248) 939-8190
      </motion.p>

      <motion.p
        className="mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        28175 Haggerty Rd, Novi, MI 48377
      </motion.p>

      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="#" className="underline">Home</a>
        <a href="https://www.drjenniferhahm.com/privacy-policy" className="underline">Privacy Policy</a>
        <a href="https://www.drjenniferhahm.com/good-faith-estimate" className="underline">Good Faith Estimate</a>
      </motion.div>

      <motion.div
        className="my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className="underline my-4 text-md font-light">Client Portal</p>
        <p>© 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
