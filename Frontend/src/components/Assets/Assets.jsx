import React, { useEffect, useState } from 'react';
import styles from './Assets.module.css';

const Assets = () => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/users/' + localStorage.getItem("id"));
                if (response.ok) {
                    const data = await response.json();
                    setAssets(data.assets);
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []);

    const handleSell = (symbol) => {
        console.log(`Selling asset: ${symbol}`);
        // Implement your selling logic here
    };

    return (
        <table className={styles.table}>
            <thead className={styles.tableHeader}>
                <tr className={styles.tableRow}>
                    <th className={styles.tableHeaderCell}>Symbol</th>
                    <th className={styles.tableHeaderCell}>Quantity</th>
                    <th className={styles.tableHeaderCell}>Money</th>
                    <th className={styles.tableHeaderCell}>Interval</th>
                    <th className={styles.tableHeaderCell}>Start Price</th>
                    <th className={styles.tableHeaderCell}>Start Time</th>
                    <th className={styles.tableHeaderCell}>Action</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {assets.length > 0 ? (
                    assets.map((asset, index) => (
                        <tr key={index} className={styles.tableRow}>
                            <td className={styles.tableCell}>{asset.symbol}</td>
                            <td className={styles.tableCell}>{asset.quantity}</td>
                            <td className={styles.tableCell}>{asset.money}</td>
                            <td className={styles.tableCell}>{asset.interval}</td>
                            <td className={styles.tableCell}>{asset.closePriceOnStart}</td>
                            <td className={styles.tableCell}>{asset.startTime}</td>
                            <td className={styles.tableCell}>
                                <button 
                                    className={styles.sellButton}
                                    onClick={() => handleSell(asset.symbol)}
                                >
                                    Sell
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className={styles.tableRow}>
                        <td className={styles.noDataCell} colSpan="7">No data available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Assets;
