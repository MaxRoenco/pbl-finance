import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Who We Serve?</h1>
            <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                    <h2 className={styles.contactTitle}>Individuals and families</h2>
                    <p>Providing choice for those investing for retirement, a new home or a child’s education.</p>
                  
                </div>
                <div className={styles.contactItem}>
                    <h2 className={styles.contactTitle}>Financial advisors</h2>
                    <p>Helping people at all income levels invest for their futures.</p>
                  
                </div>
                <div className={styles.contactItem}>
                    <h2 className={styles.contactTitle}>Educational and nonprofit organizations</h2>
                    <p>Working to educate more students and solve social challenges</p>
                </div>
                <div className={styles.contactItem}>
                    <h2 className={styles.contactTitle}>Pension plans</h2>
                    <p>Managing the retirement savings of teachers, doctors, workers, and small business owners.</p>
                </div>
                <div className={styles.contactItem}>
                    <h2 className={styles.contactTitle}>Insurance companies</h2>
                    <p>Supporting people during life’s most difficult moments.</p>
                </div>
                <div className={styles.contactItem}>
                    <h2 className={styles.contactTitle}>Governments</h2>
                    <p>Financing new hospitals, schools, roads and other projects helping to drive economic growth.</p>
                </div>
            </div>

            <div className={styles.whoWeAreContainer}>
                <h1 className={styles.heading}>Who We Are?</h1>
                <div className={styles.whoWeAreGrid}>
                    <div className={styles.whoWeAreItem}>
                        <img src="../public/yellow-group.png" alt="people" className={styles.whoWeAreImage} />
                        <p className={styles.whoWeAreTitle}>19,000+ people </p>
                        
                       <p className={styles.whoWeAreText}> of different backgrounds, races, and nationalities.</p>
                    </div>
                    <div className={styles.whoWeAreItem}>
                        <img src="../public/languages.png" alt="Multilingual Support" className={styles.whoWeAreImage} />
                        <p className={styles.whoWeAreTitle}>135 languages</p>
                        <p className={styles.whoWeAreText}>addressing the needs of a multilingual client base.</p>
                    </div>
                    <div className={styles.whoWeAreItem}>
                        <img src="../public/countries.webp" alt="countries" className={styles.whoWeAreImage} />
                        <p className={styles.whoWeAreTitle}>42 countries</p>
                        <p className={styles.whoWeAreText}>enabling us to help more and more people.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
