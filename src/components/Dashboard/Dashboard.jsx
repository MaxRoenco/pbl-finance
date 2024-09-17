import styles from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <>
            <div className={styles.layer1}>
                <div className={styles.layer2}>
                    <div className={`${styles.greenLight} ${styles.topLeft}`}></div>
                    <div className={`${styles.greenLight} ${styles.topRight}`}></div>
                    <div className={`${styles.greenLight} ${styles.bottomLeft}`}></div>
                    <div className={`${styles.greenLight} ${styles.bottomRight}`}></div>
                </div>
            </div>
            <div className={styles.home}>
                <div className={styles.container}>
                    <div className={styles.spendingsContainer}>
                        <p>TOTAL SPENDINGS</p>
                        <div className="">This week</div>
                        <div className={styles.graph}>Graph</div>
                    </div>
                    <div className={styles.spendingsContainer}>
                        <p>TOTAL SPENDINGS</p>
                        <div className="">This week</div>
                        <div className={styles.graph}>Graph</div>
                    </div>
                    <div className={styles.spendingsContainer}>
                        <p>TOTAL SPENDINGS</p>
                        <div className="">This week</div>
                        <div className={styles.graph}>Graph</div>
                    </div>
                </div>
                <div className={styles.tradingViewContainer}>Graph</div>
            </div>
        </>
    );
}

export default Dashboard;