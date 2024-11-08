import React, { useState, useContext } from "react";
import styles from './FAQ.module.css';
import { authContext } from "../../hooks/Context";
import {faqs} from "../../constants/index";

const FAQ = () => {
  let {lightMode, setLightMode} = useContext(authContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.container} ${lightMode ? "bg-light-primary text-light-tertiary" : ""} `}>
      <h1 className={styles.heading}>FAQ</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
        >
          <div className={styles.faqTitle} onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          <div className={styles.faqContent}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
