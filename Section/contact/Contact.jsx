import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";
import { FiSend } from "react-icons/fi";
import mailIcon from "../../assets/mailIcon.svg";
import call from "../../assets/call.svg";
import location from "../../assets/location.svg";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import sideImg from "../../assets/sideimg.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1vgmlz",
        "template_ryqrnv9",
        form.current,
        "mcZO296sUuJvIFzmz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("object")
        },
        (error) => {
          console.log(error.text);
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
                placeholder="name"
                id="name"
                name="user_name"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                placeholder="email"
                id="email"
                name="user_email"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="number">Number</label>
              <input
                required
                type="number"
                placeholder="number"
                id="number"
                name="user_number"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="message">Message</label>
              <textarea
                style={{ height: "150px" }}
                required
                type="text"
                placeholder="message"
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
            <a href="https://github.com/magupta1" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mukesh-gupta-49108624a/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://codesandbox.io/dashboard/recent?workspace=98c6f8dc-ae30-42fb-9f4f-a049334c84ff"
              target="_blank"
            >
              <FaCodepen />
            </a>
          </div>
        </div>
        <img className={styles.contactImg} src={sideImg} />
      </div>
    </div>
  );
};

export default Contact;
