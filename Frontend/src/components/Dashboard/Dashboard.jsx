import styles from './Dashboard.module.css'
import LeftBar from '../LeftBar/LeftBar';
import Header from '../Header/Header';


const Dashboard = () => {


    return (
        <div className={styles.main}>
                <h1 className={styles.overview}>Name Surname’s Overview</h1>
                <div className={styles.home}>
                    <div className={styles.container1}>
                        <div className={styles.spendingsContainer}>
                            <p>Total Balance</p>
                            <div className="">$12456.654</div>
                        </div>
                        <div className={styles.spendingsContainer}>
                            <p>TOTAL SPENDINGS</p>
                            <div className="">This week</div>
                        </div>
                        <div className={styles.spendingsContainer}>
                            <p>TOTAL SPENDINGS</p>
                            <div className="">This week</div>
                        </div>
                    </div>
                    <div className={styles.container2}>
                        <img className={styles.graphContainer} src='/chart.png'/>
                        <div className={styles.newsContainer}>
                            <div className={styles.newsTitle}><p>News Tab<img src="/external_link.png" alt="" /></p><div><img src="/week.png" alt="" /> Week</div></div>
                            <h1>Market is <br/> down 0.80%</h1>
                            <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                            <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                            <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                            <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                        </div>
                    </div>
                    <div className={styles.container3}>
                        <p>Trending Now <img src="/portfolio.png" alt="" /></p>
                        <h1>Today</h1>
                        <ul className={styles.todayList}>
                            <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                            <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                        </ul>
                        <h2>Yesterday</h2>
                        <ul className={styles.yesterdayList}>
                            <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                            <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;