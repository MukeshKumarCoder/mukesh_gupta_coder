import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r7g7bts",
        "template_6s7hdhb",
        form.current,
        "TIpp9i66SnQiIjNl0",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again later.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-8 bg-gray-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-indigo-100/50 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-100/50 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-indigo-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Connect
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
              Touch
            </span>
          </h3>
        </div>

        {/* Layout */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
            <div className="bg-white dark:bg-slate-600 border border-slate-100 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-sm shadow-indigo-100/50">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Contact Info
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href="mailto:mg328790@gmail.com"
                  aria-label="Email"
                  className="flex items-start sm:items-center gap-4 group"
                >
                  <div className="p-3 sm:p-4 bg-indigo-50 text-indigo-600 rounded-xl sm:rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-600">
                    <FiMail
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>

                  <div className="break-all">
                    <p className="text-[10px] text-slate-600 dark:text-slate-300 uppercase font-black tracking-widest">
                      Email Me
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-semibold group-hover:text-indigo-600 transition-colors">
                      mg328790@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918292196144"
                  aria-label="Call me"
                  className="flex items-start sm:items-center gap-4 group"
                >
                  <div className="p-3 sm:p-4 bg-cyan-50 text-cyan-600 rounded-xl sm:rounded-2xl group-hover:bg-cyan-600 group-hover:text-white transition-all duration-600">
                    <FiPhone
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-600 dark:text-slate-300 uppercase font-black tracking-widest">
                      Call Me
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-semibold group-hover:text-cyan-600 transition-colors">
                      +91 8292196144
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start sm:items-center gap-4 group">
                  <div className="p-3 sm:p-4 bg-purple-50 text-purple-600 rounded-xl sm:rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-600">
                    <FiMapPin
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-600 dark:text-slate-300 uppercase font-black tracking-widest">
                      Location
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-semibold">
                      Siwan, Bihar, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-slate-900 dark:text-slate-100 font-bold mb-4">
                  Follow My Work
                </p>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/MukeshKumarCoder"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open GitHub"
                    className="group p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-600"
                  >
                    <FaGithub
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-125"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mukesh-gupta-49108624a/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open LinkedIn"
                    className="group p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-600"
                  >
                    <FaLinkedin
                      size={20}
                      className="transition-transform duration-300 group-hover:scale-125"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white dark:bg-slate-600 border border-slate-100 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl shadow-indigo-100/20 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name Input */}
                <div className="rounded-xl p-px bg-transparent focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-cyan-500 transition-all duration-300">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-slate-50 dark:bg-slate-300 rounded-xl px-4 py-3 focus:outline-none"
                  />
                </div>

                {/* Email Input */}
                <div className="rounded-xl p-px bg-transparent focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-cyan-500 transition-all duration-300">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-slate-50 dark:bg-slate-300 rounded-xl px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>

              {/* Textarea */}
              <div className="rounded-xl p-px bg-transparent focus-within:bg-gradient-to-r focus-within:from-indigo-500 focus-within:to-cyan-500 transition-all duration-300">
                <textarea
                  required
                  name="message"
                  rows="8"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-50 dark:bg-slate-300 rounded-xl px-4 py-3 resize-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto px-8 sm:px-10 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-purple-600 hover:-translate-y-1 hover:shadow-lg text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-600"
              >
                Send Message
                <FiSend className="transition-transform duration-700 group-hover:rotate-45 group-hover:scale-125" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
