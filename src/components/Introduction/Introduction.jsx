import React from "react";
import styles from "./Introduction.module.css";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { GrServers } from "react-icons/gr";
export const Introduction = () => {
  return (
    <section className={styles.container} id="Introduction">
      <h2 className={styles.title}>Introduction</h2>
      <div className={styles.content}>
        <img
          src="assets\Introduction\Man.png"
          alt="this is the image"
          className={styles.IntroductionImg}
        />
        <ul className={styles.IntroductionItems}>
          <li className={styles.IntroductionItem}>
            <MdOutlineScreenshotMonitor className={styles.icon} />
            <div className={styles.IntroductionItemText}>
              <h3>I'm Sunil Parswal, student at IIT-BHU, Varanasi</h3>
              <p>
              I'm a passionate web developer with a strong foundation in modern web technologies. I have experience working with React.js, Node.js, Express.js, MongoDB, WebSockets, and Tailwind CSS to build dynamic and user-friendly applications.
              </p>

              <p>
                I have worked on impactful projects like <strong>Baat-Cheet</strong>  (real-time chat app) and <strong>News-Now</strong>  (news aggregator).
              </p>
              
              <p>
              I'm continuously exploring new technologies and enhancing my skills to 
              develop efficient and scalable applications.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
