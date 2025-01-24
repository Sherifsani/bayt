"use client";
import { motion } from "framer-motion";

const Contact = () => {
  // Animation for the contact form
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="contact-section md:px-16  mt-32"
    >
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-4xl">📧</div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-8">
          Have a question, collaboration idea, or just want to say hi? I’d love
          to hear from you! Fill out the form below or reach me via email.
        </p>
      </motion.div>

      <motion.form
        className="contact-form mx-auto grid lg:grid-cols-2 gap-6  rounded-lg "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="lg:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-40 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="text-gray-700">
          Prefer email? You can also reach me at{" "}
          <a
            href="mailto:sanisherif@example.com"
            className="text-blue-500 hover:underline"
          >
            sanisherif@example.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;

// import React from 'react'

// const Contact = () => {
//   return (
//     <main className="mt-32 flex flex-col gap-8 md:gap-10">
//       <section className="intro flex flex-col gap-2">
//         <div className="text-4xl">📧</div>
//         <h1 className="font-[600] text-2xl md:text-3xl tracking-tight lg:text-4xl">
//           About me
//         </h1>
//           </section>
//           <section>
//               Reach out to me
//           </section>
//     </main>
//   );
// }

// export default Contact
