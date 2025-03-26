import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>Contact Me</p>
        <div className={styles.contactsForm}>
          <form>
            <div className={styles.inputContainer}>
              <label htmlFor="Name" className={styles.label}>
                Name
              </label>
              <input
                placeholder="Sunil Parswal"
                type="text"
                name="Name"
                className={styles.name}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="Email" className={styles.label}>
                Email
              </label>
              <input
                placeholder="sunilparswal795@gmail.com"
                type="email"
                name="Email"
                className={styles.email}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="Message" className={styles.label}>
                Message
              </label>
              <textarea
                placeholder="Type your message...."
                type="text"
                name="Message"
                className={styles.message}
              />
            </div>
            <div className={styles.submitbtncontainer}>
              <button type="submit" className={styles.submitBtn} href="/">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <ul className={styles.links}>
        <p>Connect with me on Socials 🌐</p>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:sunilparswal795@gmail.com" target="_blank">
          sunilparswal795@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="GitHub icon" />
          <a href="https://github.com/SunilParswal" target="_blank">
            GitHub
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/sunil-parswal-704809255/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/instagram.png" alt="Instagram icon" />
          <a
            href="https://www.instagram.com/sunilparswal/"
            target="_blank"
          >
            sunilpasrwal
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/x.png" alt="X icon" />
          <a href="https://x.com/SunilParswal2" target="_blank">
            SunilParswal
          </a>
        </li>
        <div className={styles.iconTop}>
          <a href="#top">
            <img src="assets/footer/up-arrow.png" alt="Up arrow icon" />
          </a>
        </div>
      </ul>
    </footer>
  );
};
