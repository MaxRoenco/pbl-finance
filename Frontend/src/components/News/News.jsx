import React, { useState } from 'react';
import axios from 'axios';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('bitcoin'); // default search query

    // Function to fetch news based on topic
    const fetchNews = async (topic) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://newsdata.io/api/1/news?apikey=pub_54496b7528b102615c68cade88363c0b2f714&q=${topic}`
            );
            setNews(response.data.results);
        } catch (error) {
            setError('Error fetching news');
        }
        setLoading(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchNews(query); // fetch news based on query input
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Crypto News</h1>

            {/* Form to select topic */}
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter a topic (e.g., bitcoin, ethereum)"
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" style={{ marginLeft: '10px', padding: '10px' }}>
                    Search
                </button>
            </form>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {news.map((item, index) => (
                        <li key={index} style={{ margin: '20px 0', textAlign: 'left' }}>
                            <h3>{item.title}</h3>
                            {item.image_url ? (
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
                                />
                            ) : (
                                <p>[No image available]</p>
                            )}
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
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