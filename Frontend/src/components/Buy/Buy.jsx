import { useState } from 'react';
import styles from './Buy.module.css';

const Buy = () => {
    const [symbol, setSymbol] = useState('');
    const [money, setMoney] = useState('');
    const [responseMessage, setResponseMessage] = useState(''); // State for server response

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const id = localStorage.getItem('id'); // Retrieve the id from local storage

        const data = {
            id,         // Add the id to the data
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

            const result = await response.text(); // Expecting a string response
            setResponseMessage(result); // Set the response message
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setResponseMessage('An error occurred. Please try again.'); // Optional error message
        }
    };

    return (
        <>
            <h1>Buy Cryptocurrency</h1>
            {responseMessage ? ( // Conditional rendering based on responseMessage
                <div>{responseMessage}</div> // Display the server response
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="symbol">Symbol (e.g., BTCUSDT):</label>
                    <input
                        type="text"
                        id="symbol"
                        name="symbol"
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                        required
                    />
                    <label htmlFor="money">Money (USDT):</label>
                    <input
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
