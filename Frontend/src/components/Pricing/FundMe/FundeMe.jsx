import React, { useState } from 'react';
import styles from './FundMe.module.css';

const FundMe = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Choose a Payment Method</h1>

            <div className={styles.paymentOptions}>
                <button
                    className={`${styles.paymentButton} ${paymentMethod === 'creditCard' ? styles.active : ''}`}
                    onClick={() => setPaymentMethod('creditCard')}
                >
                    <img src="../../public/cardIcon.png" alt="Credit Card" className={styles.paymentIcon} />
                </button>

                <button
                    className={`${styles.paymentButton} ${paymentMethod === 'paypal' ? styles.active : ''}`}
                    onClick={() => setPaymentMethod('paypal')}
                >
                    <img src="../../public/paypal.png" alt="PayPal" className={styles.paymentIcon} />
                </button>

                <button
                    className={`${styles.paymentButton} ${paymentMethod === 'crypto' ? styles.active : ''}`}
                    onClick={() => setPaymentMethod('crypto')}
                >
                    <img src="../../public/crypto.png" alt="Crypto" className={styles.paymentIcon} />
                </button>
            </div>

            <div className={styles.paymentForm}>
                <div className={styles.leftColumn}>
                    {paymentMethod === 'creditCard' && (
                        <form className={styles.creditCardForm}>
                            <h2 className={styles.subheading}>Credit Card Payment</h2>
                            <label>
                                Card Number:
                                <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" className={styles.input} />
                            </label>
                            <label>
                                Expiration Date:
                                <input type="text" name="expDate" placeholder="MM/YY" className={styles.input} />
                            </label>
                            <label>
                                CVV:
                                <input type="text" name="cvv" placeholder="123" className={styles.input} />
                            </label>
                            <button type="submit" className={styles.submitButton}>Pay Now</button>
                        </form>
                    )}

                    {paymentMethod === 'paypal' && (
                        <div className={styles.paypalPayment}>
                            <h2 className={styles.subheading}>PayPal Payment</h2>
                            <p className={styles.paypalInfo}>You'll be redirected to PayPal to complete your payment.</p>
                            <button type="button" className={styles.submitButton}>Pay with PayPal</button>
                        </div>
                    )}

                    {paymentMethod === 'crypto' && (
                        <div className={styles.cryptoPayment}>
                            <h2 className={styles.subheading}>Crypto Payment</h2>
                            <p className={styles.cryptoInfo}>Send your payment to the following address:</p>
                            <p className={styles.cryptoAddress}>0x1234abcd5678efgh9012ijkl3456mnop7890qrst</p>
                            <p className={styles.cryptoNote}>Ensure to send the exact amount from your crypto wallet.</p>
                        </div>
                    )}
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.logo}>
                        <img src="images/payment-logo.png" alt="Payment Logo" className={styles.logoImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundMe;
