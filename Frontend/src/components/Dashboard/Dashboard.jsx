import styles from './Dashboard.module.css'
import LeftBar from '../LeftBar/LeftBar';
import Header from '../Header/Header';


const Dashboard = () => {


    return (
        <div className={styles.main}>
            <h1 className={styles.overview}>Name Surname’s Overview</h1>
            <div className={styles.initial}>
                <p>Total Initial Deposit</p>
                <div>$12456.654</div>
            </div>
            <div className={styles.invested}>
                <p>Total Invested Deposit</p>
                <div>$2364.5</div>
            </div>
            <div className={styles.remaining}>
                <p>Total Remaining Deposit</p>
                <div>$10,092.15</div>
            </div>
            <div className={styles.deposit + ' ' + styles.grayBox}>
                <div>18.98%</div>
                <p>of deposit <br /> invested</p>
            </div>
            <div className={styles.graphContainer + ' ' + styles.grayBox}>
                <img src='/chart.svg' />
                <div className={styles.market}>
                    <h1>Market Summary</h1>
                    <h2>22.33 USD</h2>
                    <h3>+0.44 (2.01%) today</h3>
                </div>
            </div>
            <div className={styles.newsContainer + ' ' + styles.grayBox}>
                <div className={styles.newsTitle}>
                    <p>
                        News Tab
                        <img src="/external_link.png" />
                    </p>
                    <div>
                        <img src="/week.png" />
                        Week
                    </div>
                </div>
                <h1>Market is <br /> down 0.80%</h1>
                <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                <p>Lorem Ipsum Lorem Ipsum Lorem </p>
                <p>Lorem Ipsum Lorem Ipsum Lorem </p>
            </div>
            <div className={styles.trending + ' ' + styles.grayBox}>
                <div className={styles.trendingNow}>
                    <p>Trending Now <img src="/portfolio.png" alt="" /></p>
                    <h1>Today</h1>
                    <ul className={styles.newsList}>
                        <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                        <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                    </ul>
                    <h2>Yesterday</h2>
                    <ul className={styles.newsList}>
                        <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                        <li><img src="/company.png" alt="" />Lorem Ipsum Company</li>
                    </ul>
                </div>
                <div className={styles.trendingNews}>
                    <h2>Trending Industry:</h2>
                    <p>Lorem Ipsum Industry </p>
                    <h2>New Industry:</h2>
                    <p>Lorem Ipsum Industry </p>
                    <h1>! News Headline</h1>
                    <p>Trending Prediction here</p>
                </div>
            </div>
            <div className={styles.events + ' ' + styles.grayBox}>
                <h1>Upcoming Economic Events <img src="/calendar.svg"/></h1>
                <h2>Earnings Reports</h2>
                <p>Some description and date of event here</p>
                <h2>Central bank meetings</h2>
                <p>Some description and date of event here</p>
                <h2>Industry conferences</h2>
                <p>Some description and date of event here</p>
            </div>
        </div>
    );
}

export default Dashboard;