import { useEffect, useState } from 'react';
import styles from './Buy.module.css';

const Buy = () => {
    const [symbol, setSymbol] = useState('');
    const [money, setMoney] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [cur, setCur] = useState([]);
    const [filteredCur, setFilteredCur] = useState([]); // State for filtered currencies
    const [filterText, setFilterText] = useState(''); // State for the filter input

    const loadCurrencies = async () => {
        let prices = await fetch("https://api.binance.com/api/v3/ticker/price");
        prices = await prices.json()
        let currencies = prices.map(price => price.symbol);
        currencies.sort()
        setCur(currencies);
        setFilteredCur(currencies); // Initialize the filtered list with all currencies
    }

    useEffect(() => {
        loadCurrencies()
    }, [])

    // Update filtered currencies when filterText changes
    useEffect(() => {
        const filtered = cur.filter(currency => 
            currency.toLowerCase().includes(filterText.toLowerCase())
        );
        setFilteredCur(filtered);
    }, [filterText, cur]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const id = localStorage.getItem('id');

        const data = {
            id,
            symbol,
            money,
        };

        try {
            const response = await fetch('http://localhost:3000/buy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.text();
            setResponseMessage(result);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setResponseMessage('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <h1>Buy Cryptocurrency</h1>
            {responseMessage ? (
                <div>{responseMessage}</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="filter">Search Symbol:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="filter"
                        name="filter"
                        placeholder="Search..."
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />

                    <label htmlFor="symbol">Symbol (e.g., BTCUSDT):</label>
                    <select
                        className={styles.input}
                        id="symbol"
                        name="symbol"
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                        required
                    >
                        <option value="" disabled hidden>Select a symbol</option>
                        {filteredCur.map((c, i) => (
                            <option key={i} value={c}>{c}</option>
                        ))}
                    </select>

                    <label htmlFor="money">Money (USDT):</label>
                    <input
                        className={styles.input}
                        type="number"
                        id="money"
                        name="money"
                        value={money}
                        onChange={(e) => setMoney(e.target.value)}
                        required
                    />
                    <button type="submit">Buy</button>
                </form>
            )}
        </>
    );
};

export default Buy;
