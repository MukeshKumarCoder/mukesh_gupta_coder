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
        (err) => {
          toast.error("Failed to send message. Please try again later.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-3">
            Connect
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">
              Touch
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm shadow-indigo-100/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Info
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:mg328790@gmail.com"
                  className="flex items-center gap-5 group"
                >
                  <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                      Email Me
                    </p>
                    <p className="text-slate-700 font-semibold group-hover:text-indigo-600 transition-colors">
                      mg328790@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918292196144"
                  className="flex items-center gap-5 group"
                >
                  <div className="p-4 bg-cyan-50 text-cyan-600 rounded-2xl group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                      Call Me
                    </p>
                    <p className="text-slate-700 font-semibold group-hover:text-cyan-600 transition-colors">
                      +91 8292196144
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5 group">
                  <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                      Location
                    </p>
                    <p className="text-slate-700 font-semibold">
                      Siwan, Bihar, India - 841227
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-50">
                <p className="text-slate-900 font-bold mb-6">Follow My Work</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MukeshKumarCoder"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mukesh-gupta-49108624a/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-slate-50 rounded-2xl text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-indigo-100/20 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Mukesh Kumar"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-black rounded-2xl hover:shadow-xl hover:shadow-indigo-200 transition-all flex items-center justify-center gap-3 group"
              >
                Send Message
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
