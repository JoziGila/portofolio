"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Formspree will send emails to theodoraropi@gmail.com
      // You can sign up with ANY email, then set theodoraropi@gmail.com as recipient in form settings
      const FORMSPREE_ID = "xgvredok"; // Formspree form ID
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      className="relative bg-white text-black h-screen w-full snap-start snap-always pt-[10vh] lg:pt-0"
    >
      <div className="h-[90vh] lg:h-full w-full flex flex-col lg:block">
        {/* Mobile/Tablet: Top-aligned container */}
        <div className="h-full flex items-start justify-center lg:block">
          {/* Desktop: Original layout with spacing */}
          <div className="lg:h-[15%] hidden lg:block"></div>
          <div className="w-full max-h-full overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 lg:h-[85%]">
            <div className="relative w-full max-w-[1920px] mx-auto">
        {/* Main heading - BOLD and striking */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter text-black mb-8 lg:mb-12 max-w-5xl leading-[0.9]"
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
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden ring-4 ring-black">
              <Image
                src="/dori.png"
                alt="Theodora Ropi"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 160px"
                loading="lazy"
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
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 pb-4 text-black text-base md:text-lg lg:text-xl xl:text-2xl font-medium placeholder:text-black/40 focus:outline-none focus:border-accent transition-colors"
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
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 pb-4 text-black text-base md:text-lg lg:text-xl xl:text-2xl font-medium placeholder:text-black/40 focus:outline-none focus:border-accent transition-colors"
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
                  className="w-full bg-transparent border-0 border-b-2 border-black/20 pb-4 text-black text-base md:text-lg lg:text-xl xl:text-2xl font-medium placeholder:text-black/40 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit button - striking CTA */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05, x: 10 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`font-inter font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight transition-colors flex items-center gap-3 ${
                  isSubmitting
                    ? "text-black/40 cursor-not-allowed"
                    : "text-black hover:text-accent"
                }`}
              >
                {isSubmitting ? "Sending..." : "Get in touch"}
                <span className="text-accent">→</span>
              </motion.button>

              {/* Success/Error Message */}
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-base md:text-lg font-medium ${
                    submitMessage.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submitMessage}
                </motion.p>
              )}
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
                className="font-inter font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter text-black hover:text-accent transition-colors block leading-tight"
              >
                theodoraropi@gmail.com
              </a>
            </div>

            {/* Tagline - Desktop only */}
            <div className="hidden lg:flex items-center">
              <p className="font-inter font-medium text-sm md:text-base lg:text-lg text-black/70 leading-relaxed">
                Your company gets more than just a website. We design
                experiences that resonate with your customers and drive
                meaningful engagement.
              </p>
            </div>
          </div>
        </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
