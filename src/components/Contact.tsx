"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-white text-black min-h-screen h-screen w-full flex items-center overflow-hidden snap-start snap-always"
    >
      <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 lg:py-12">
        {/* Main heading - BOLD and striking */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter text-black mb-8 lg:mb-12 max-w-5xl leading-[0.9]"
        >
          Let's bring your vision to life
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left side - Contact info with profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* Profile image - compact but striking */}
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-4 ring-black">
              <img
                src="/dori.png"
                alt="Theodora Ropi"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name and title */}
            <div>
              <h3 className="font-inter font-bold text-xl lg:text-2xl text-black mb-1">
                Theodora Ropi
              </h3>
              <p className="font-inter font-medium text-base lg:text-lg text-black/60">
                Art Director
              </p>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              {/* Name input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 pb-3 text-black text-lg md:text-xl lg:text-2xl font-medium placeholder:text-black/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail *"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 pb-3 text-black text-lg md:text-xl lg:text-2xl font-medium placeholder:text-black/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Message textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi!"
                  rows={1}
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 pb-3 text-black text-lg md:text-xl lg:text-2xl font-medium placeholder:text-black/40 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit button - striking CTA */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="font-inter font-bold text-xl md:text-2xl lg:text-3xl tracking-tight text-black hover:text-accent transition-colors flex items-center gap-3"
              >
                Get in touch
                <span className="text-accent">→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom section - Email and phone - BOLD but compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 lg:mt-16 pt-8 border-t-2 border-black/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Email */}
            <div className="space-y-2">
              <p className="font-inter font-semibold text-sm md:text-base text-black/50 tracking-tight">
                +355 68 860 9239
              </p>
              <a
                href="mailto:theodoraropi@gmail.com"
                className="font-inter font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter text-black hover:text-accent transition-colors block leading-tight"
              >
                theodoraropi@gmail.com
              </a>
            </div>

            {/* Tagline */}
            <div className="flex items-center">
              <p className="font-inter font-medium text-sm md:text-base lg:text-lg text-black/70 leading-relaxed">
                Your company gets more than just a website. We design
                experiences that resonate with your customers and drive
                meaningful engagement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
