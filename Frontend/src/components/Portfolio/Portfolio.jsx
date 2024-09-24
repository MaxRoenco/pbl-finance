import { useContext } from 'react';
import styles from './Portfolio.module.css'
import { authContext } from '../../hooks/Context';


const Portfolio = () => {
    const { userData } = useContext(authContext);
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{userData.firstName + ' ' + userData.lastName}'s Portfolio</h1>
            <div className={styles.main}>
                <div className={styles.table + ' ' + styles.grayBox}>
                    <h1>Trading History</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Start Time</th><th>Symbol</th><th>Interval</th><th>Profit/Loss (USDT)</th><th>Date Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sun Sep 01 2024</td><td>BTCUSDT</td><td>1d</td><td>97.99 USDT</td><td>Fri Sep 20 2024</td>
                            </tr>
                            <tr>
                                <td>Sun Sep 01 2024</td><td>BTCUSDT</td><td>1d</td><td>97.99 USDT</td><td>Fri Sep 20 2024</td>
                            </tr>
                            <tr>
                                <td>Sun Sep 01 2024</td><td>BTCUSDT</td><td>1d</td><td>97.99 USDT</td><td>Fri Sep 20 2024</td>
                            </tr>
                            <tr>
                                <td>Sun Sep 01 2024</td><td>BTCUSDT</td><td>1d</td><td>97.99 USDT</td><td>Fri Sep 20 2024</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.options + ' ' + styles.grayBox}>
                    <h1>Chart Overview</h1>
                    <div className={styles.intervals}>
                        <h1>Interval:</h1>
                        <button>1 Day</button>
                        <button>1 Month</button>
                        <button>1 Year</button>
                        <button>All</button>
                    </div>
                </div>
                <div className={styles.stats + ' ' + styles.grayBox}>
                    <img src='/dummyChart.png' className={styles.chart}/>
                    <div className={styles.company}>
                        <h1>Company Name</h1>
                        <h2>Mine</h2>
                        <h1>$1578.5</h1>
                        <p>Total Invested Deposit</p>
                        <h1>$200.5</h1>
                        <p>Profit</p>
                    </div>
                    <div className={styles.summary}>
                        <p>Market Summary</p>
                        <h1>22.33 USD</h1>
                        <h2>+0.44 (2.01%) today</h2>
                    </div>
                </div>
            </div>
            <div className={styles.side}>
                <button className={styles.invest + ' ' + styles.colorBox}>Invest Now</button>
                <div className={styles.deposit + ' ' + styles.colorBox}>
                    <h1>Deposit Analysis</h1>
                    <h2>$12456.654</h2>
                    <h3>Total Initial Deposit</h3>
                    <h2>$2364.5</h2>
                    <h3>Total Invested Deposit</h3>
                    <p>18.98% of deposit invested</p>
                    <h2>$2364.5</h2>
                    <h3>Total Invested Deposit</h3>
                </div>
                <div className={styles.preferences + ' ' + styles.colorBox}>
                    <h1>My Preferences</h1>
                    <div className={styles.industries}>
                        <h2>Industries</h2>
                        <div className={styles.checkBox}>
                            <input type="checkbox" name='tech' />
                            <label htmlFor="tech">Tech</label>
                        </div>
                        <div className={styles.checkBox}>
                            <input type="checkbox" name='finance' />
                            <label htmlFor="finance">Finance</label>
                        </div>
                        <div className={styles.checkBox}>
                            <input type="checkbox" name='energy' />
                            <label htmlFor="energy">Energy</label>
                        </div>
                    </div>
                    <div className={styles.trending}>
                        <h2>Trending Now <img src="/trending_svg.svg"/></h2>
                        <p>Today</p>
                        <h1><img src="/rectangle.svg"/>Lorem Ipsum Company </h1>
                        <h1><img src="/rectangle.svg"/>Lorem Ipsum Company </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;