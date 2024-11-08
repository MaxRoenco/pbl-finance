import styles from './Dashboard.module.css'
import { authContext } from '../../hooks/Context';
import { useContext, useEffect } from 'react';
import News from '../News/News';


const Dashboard = () => {
    const { userData, loadData, lightMode } = useContext(authContext);
    useEffect(()=>{
        loadData()
    }, [])
    useEffect(()=>{

    }, [userData])
    console.log(userData)
    return (
        <div className={styles.main + (lightMode?" text-black":" text-white")}>
            <h1 className={styles.overview}>{userData.firstName + ' ' + userData.lastName}’s Overview</h1>
            <div className={styles.initial}>
                <p className={(lightMode?" text-black":" text-white")}>Total Initial Deposit</p>
                <div>${userData.deposit.initial.toFixed(2)}</div>
            </div>
            <div className={styles.invested}>
                <p className={(lightMode?" text-black":" text-white")}>Total Invested Deposit</p>
                <div>${userData.deposit.invested.toFixed(2)}</div>
            </div>
            <div className={styles.remaining}>
                <p  className={(lightMode?" text-black":" text-white")}>Total Remaining Deposit</p>
                <div>${(userData.deposit.initial - userData.deposit.invested).toFixed(2)}</div>
            </div>
            <div className={styles.deposit + ' ' + styles.grayBox + " " + (lightMode? "bg-light-secondary":"bg-dark-secondary")}>
                <div>{Math.min((userData.deposit.invested / userData.deposit.initial * 100, 100)).toFixed(2) || 0}%</div>
                <p className={(lightMode?" text-black":" text-white")}>of deposit <br /> invested</p>
            </div>
            <div className={styles.graphContainer + ' ' + styles.grayBox + " " + (lightMode? "bg-light-secondary":"bg-dark-secondary")}>
                <img className={(lightMode? "invert":"")} src='/chart.svg' />
                <div className={styles.market}>
                    <h1>Market Summary</h1>
                    <h2>22.33 USD</h2>
                    <h3>+0.44 (2.01%) today</h3>
                </div>
            </div>
            <div className={styles.newsContainer + ' ' + styles.grayBox + " " + (lightMode? "bg-light-secondary":"bg-dark-secondary")}>
                <div className={styles.newsTitle}>
                    <p className={(lightMode? "text-black":"")}>
                        News Tab
                        <img className={(lightMode? "invert":"")} src="/external_link.png" />
                    </p> 
                    <div className={styles.news_week + " " + (lightMode? styles.news_week_light:"")}>
                        <img className={(lightMode? "invert":"")} src="/right_arrow.svg" />
                        Week
                    </div>
                </div>
                <News topic='cryptocurrency'/>
            </div>
            <div className={styles.trending + ' ' + styles.grayBox + " " + (lightMode? "bg-light-secondary":"bg-dark-secondary")}>
                <div className={styles.trendingNow}>
                    <p className={(lightMode? "text-black":"")}>Trending Now <img className={(lightMode? "invert":"")} src="/trending_svg.svg" alt="" /></p>
                    <h1>Today</h1>
                    <ul className={styles.newsList}>
                        <li><img className={(lightMode? "invert":"")} src="/company.png" alt="" />Lorem Ipsum Company</li>
                        <li><img className={(lightMode? "invert":"")} src="/company.png" alt="" />Lorem Ipsum Company</li>
                    </ul>
                    <h2>Yesterday</h2>
                    <ul className={styles.newsList}>
                        <li><img className={(lightMode? "invert":"")} src="/company.png" alt="" />Lorem Ipsum Company</li>
                        <li><img className={(lightMode? "invert":"")} src="/company.png" alt="" />Lorem Ipsum Company</li>
                    </ul>
                </div>
                <div className={styles.trendingNews}>
                    <h2>Trending Industry:</h2>
                    <p className={(lightMode? "text-black":"")}>Lorem Ipsum Industry </p>
                    <h2>New Industry:</h2>
                    <p className={(lightMode? "text-black":"")}>Lorem Ipsum Industry </p>
                    <h1>! News Headline</h1>
                    <p className={(lightMode? "text-black":"")}>Trending Prediction here</p>
                </div>
            </div>
            <div className={styles.events + ' ' + styles.grayBox + " " + (lightMode? "bg-light-secondary":"bg-dark-secondary")}>
                <h1>Upcoming Economic Events <img className={(lightMode? "invert":"")} src="/calendar.svg"/></h1>
                <h2>Earnings Reports</h2>
                <p className={(lightMode? "text-black":"")}>Some description and date of event here</p>
                <h2>Central bank meetings</h2>
                <p className={(lightMode? "text-black":"")}>Some description and date of event here</p>
                <h2>Industry conferences</h2>
                <p className={(lightMode? "text-black":"")}>Some description and date of event here</p>
            </div>
        </div>
    );
}

export default Dashboard;