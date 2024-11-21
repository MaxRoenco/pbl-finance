import { useState, useRef, useContext } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../../styles"
import { slideIn } from "../../utils/motion"
import { EarthCanvas } from "../canvas"
import styles1 from './ContactUs.module.css';
import { authContext } from "../../hooks/Context"

const Contact = () => {
  const {lightMode, setLightMode} = useContext(authContext);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange =(e) => {
    const {name, value} = e.target;

    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_yg0pg8r', 'template_kiufyoh',
      {
        from_name: form.name,
        to_name: 'Maxim',
        from_email: form.email,
        to_email: 'maxroenco2004@gmail.com',
        message: form.message,
      },
      'wENYR-vuKMTOamg4i'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you, I will get back to you as soon as possible.');
      setForm({name: '', email: '', message: ''});
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    })
  }

  return (
    <div className="pt-6">
      <div className={` ${lightMode ? "bg-light-secondary text-black" : "bg-dark-secondary"} ${styles1.container}`}>
          <h1 className={` ${lightMode ? "text-dark-secondary" : "text-white"} ${styles1.heading}`}>Who We Serve?</h1>

            <div className={styles1.contactGrid}>
                <div className={` ${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b] text-[#fff]"} ${styles1.contactItem}`}>
                    <h2 className={styles1.contactTitle}>Individuals and families</h2>
                    <p className={`${ lightMode ? "text-dark-tertiary" : ""}`} >Providing choice for those investing for retirement, a new home or a child’s education.</p>

                </div>
                <div className={` ${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b] text-[#fff]"} ${styles1.contactItem}`}>
                    <h2 className={styles1.contactTitle}>Financial advisors</h2>
                    <p className={`${ lightMode ? "text-dark-tertiary" : ""}`}>Helping people at all income levels invest for their futures.</p>

                </div>
                <div className={` ${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b] text-[#fff]"} ${styles1.contactItem}`}>
                    <h2 className={styles1.contactTitle}>Educational and nonprofit organizations</h2>
                    <p className={`${ lightMode ? "text-dark-tertiary" : ""}`}>Working to educate more students and solve social challenges</p>
                </div>
                <div className={` ${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b] text-[#fff]"} ${styles1.contactItem}`}>
                    <h2 className={styles1.contactTitle}>Pension plans</h2>
                    <p className={`${ lightMode ? "text-dark-tertiary" : ""}`}>Managing the retirement savings of teachers, doctors, workers, and small business owners.</p>
                </div>
                <div className={` ${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b] text-[#fff]"} ${styles1.contactItem}`}>
                    <h2 className={styles1.contactTitle}>Insurance companies</h2>
                    <p className={`${ lightMode ? "text-dark-tertiary" : ""}`}>Supporting people during life’s most difficult moments.</p>
                </div>
                <div className={` ${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b] text-[#fff]"} ${styles1.contactItem}`}>
                    <h2 className={styles1.contactTitle}>Governments</h2>
                    <p className={`${ lightMode ? "text-dark-tertiary" : ""}`}>Financing new hospitals, schools, roads and other projects helping to drive economic growth.</p>
                </div>
            </div>

            <div className={styles1.whoWeAreContainer}>
                <h1 className={` ${lightMode ? "text-dark-secondary" : "text-white"} ${styles1.heading}`}>Who We Are?</h1>
                <div className={styles1.whoWeAreGrid}>
                    <div className={`${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b]"} ${styles1.whoWeAreItem}`}>
                        <img src="../public/yellow-group.png" alt="people" className={styles1.whoWeAreImage} />
                        <p className={` ${lightMode ? "text-[#32395c]" : "text-[#ddd341]"} ${styles1.whoWeAreTitle}`}>19,000+ people </p>

                        <p className={` ${lightMode ? "text-[#32395c]" : "text-[#ddd341]"} ${styles1.whoWeAreText}`}> of different backgrounds, races, and nationalities.</p>
                    </div>
                    <div className={`${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b]"} ${styles1.whoWeAreItem}`}>
                        <img src="../public/languages.png" alt="Multilingual Support" className={styles1.whoWeAreImage} />
                        <p className={` ${lightMode ? "text-[#32395c]" : "text-[#ddd341]"} ${styles1.whoWeAreTitle}`}>135 languages</p>
                        <p className={` ${lightMode ? "text-[#32395c]" : "text-[#ddd341]"} ${styles1.whoWeAreText}`}>addressing the needs of a multilingual client base.</p>
                    </div>
                    <div className={`${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b]"} ${styles1.whoWeAreItem}`}>
                        <img src="../public/countries.webp" alt="countries" className={styles1.whoWeAreImage} />
                        <p className={` ${lightMode ? "text-[#32395c]" : "text-[#ddd341]"} ${styles1.whoWeAreTitle}`}>42 countries</p>
                        <p className={` ${lightMode ? "text-[#32395c]" : "text-[#ddd341]"} ${styles1.whoWeAreText}`}>enabling us to help more and more people.</p>
                    </div>
                </div>
            </div>
            </div>
      <div className={` xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}>
        <motion.div 
          variants={slideIn('left', 'tween', 0.5, 1)}
          className={`${lightMode ? "bg-light-secondary text-black" : "bg-[#1c1c1c] text-white"} flex-[0.75]  p-8 rounded-2xl`}
        >
          <p className= {`${styles.sectionSubText} ${lightMode ? "text-black" : "text-secondary"}`} >
          Get in touch
          </p>
          <h3 className={`${styles.sectionHeadText} ${lightMode ? "text-black" : "text-white"}`}>
            Contact.
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8" >
            <label htmlFor="" className="flex flex-col">
              <span className="text-whtie font-medium mb-4">Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className={`${lightMode ? "bg-light-fourth/20 text-black placeholder:text-black" : "bg-[#2b2b2b] placeholder:text-white text-white"} py-4 px-6 rounded-lg outlined-none shadow-md font-medium`} />
            </label>

            <label className="flex flex-col">
              <span className="text-whtie font-medium mb-4">Your Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className={`${lightMode ? "bg-light-fourth/20 text-black placeholder:text-black" : "bg-[#2b2b2b] placeholder:text-white text-white"} py-4 px-6 rounded-lg outlined-none shadow-md font-medium`} />
            </label>

            <label  className="flex flex-col">
              <span className="text-whtie font-medium mb-4">Your Message</span>
              <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className={`${lightMode ? "bg-light-fourth/20 text-black placeholder:text-black" : "bg-[#2b2b2b] placeholder:text-white text-white"} py-4 px-6 rounded-lg outlined-none shadow-md font-medium`} />
            </label>
            <button type="subbmit" className={`${lightMode ? "bg-light-fourth/20 text-black" : "bg-[#2b2b2b] text-white shadow-primary"}  py-3 px-8 outline-none w-fit  font-bold shadow-md  rounded-xl`}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

        </motion.div>

        <motion.div
                  variants={slideIn('right', 'tween', 0.2, 1)}
                  className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>
        </motion.div>
      </div>
          <div className={`${styles1.contactInfoContainer} ${lightMode ? "bg-light-secondary text-black" : ""}`}>
          <div className={styles1.contactInfo}>
              <h2 className={`${styles1.contactHeading} ${lightMode ? "text-[#1b134b]" : ""}`}>Call Us:</h2>
              <p className={`${styles1.contactDetail} ${lightMode ? "text-[#32395ccf]" : ""}`}>+373 76 786 740</p>
          </div>
          <div className={styles1.contactInfo}>
              <h2 className={`${styles1.contactHeading} ${lightMode ? "text-[#1b134b]" : ""}`}>Here’s Our Address:</h2>
              <p className={`${styles1.contactDetail} ${lightMode ? "text-[#32395ccf]" : ""}`}>Forum Office Mt. Varlaam 63/23 str. Chisinau </p>
          </div>
          <div className={styles1.contactInfo}>
              <h2 className={`${styles1.contactHeading} ${lightMode ? "text-[#1b134b]" : ""}`}>Send Us E-mail:</h2>
              <p className={`${styles1.contactDetail} ${lightMode ? "text-[#32395ccf]" : ""}`}>investora@money.com</p>
          </div>
      </div>
    </div>
  )
}

export default Contact;