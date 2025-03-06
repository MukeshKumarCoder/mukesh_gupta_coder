import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FiSend } from "react-icons/fi";
import mailIcon from "../../assets/mailIcon.svg";
import call from "../../assets/call.svg";
import location from "../../assets/location.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import sideImg from "../../assets/sideimg.svg";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7dktfm4",
        "template_6s7hdhb",
        form.current,
        "TIpp9i66SnQiIjNl0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      style={{ paddingLeft: "5.7rem", marginTop: "5rem", position: "relative" }}
      id="contact"
    >
      <h2>Contact</h2>
      <div className={styles.contactBox}>
        <div className={styles.contact_left}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.inputBox}>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                placeholder="name..."
                id="name"
                name="name"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                placeholder="email..."
                id="email"
                name="email"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="message">Message</label>
              <textarea
                style={{ height: "150px" }}
                required
                type="text"
                placeholder="Write Your Message here..."
                id="message"
                name="message"
              />
            </div>
            <div className={styles.submit_btn}>
              <button type="submit">
                <p>Send</p>
                <div className={styles.submit_icon}>
                  <p>{<FiSend />}</p>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div className={styles.contact_right}>
          <a href="mailto:mg328790@gmail.com">
            <div className={styles.contactIcon}>
              <img src={mailIcon} />
            </div>
            <p>mg328790@gmail.com</p>
          </a>
          <a href="tel:+91 8292196144">
            <div className={styles.contactIcon}>
              <img src={call} />
            </div>
            <p>+91 8292196144</p>
          </a>
          <a>
            <div className={styles.contactIcon}>
              <img src={location} />
            </div>
            <p>
              Siwan, Bihar, India
              <br />
              Pin Code - 841227
            </p>
          </a>
          <div className={styles.socialMedia}>
            <a href="https://github.com/MukeshKumarCoder" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mukesh-gupta-49108624a/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <img className={styles.contactImg} src={sideImg} />
      </div>
    </div>
  );
};

export default Contact;
