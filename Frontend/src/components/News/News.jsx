import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styles from './News.module.css'

const News = ({ topic }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to fetch news based on topic
    const fetchNews = async (topic) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://newsdata.io/api/1/news?apikey=pub_550116378c72c8ccaf86a38cade59a0f4ec23&q=${topic}`
            );
            setNews(response.data.results);
        } catch (error) {
            setError('Error fetching news');
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchNews(topic);
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul className={styles.ul}>
                    {news.map((item, index) => (
                        <li key={index} className={styles.li}>
                            <h3 className={styles.h3}>{item.title}</h3>
                            {item.image_url ? (
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className={styles.img}
                                />
                            ) : (
                                <p>[No image available]</p>
                            )}
                            <a className={styles.a} href={item.link} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default News;