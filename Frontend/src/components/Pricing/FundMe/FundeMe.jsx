import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPaypal, FaBitcoin, FaCreditCard, FaCheck } from 'react-icons/fa';
import InputMask from 'react-input-mask'; 
import './FundMe.css'
import fund1 from './img/fund1.png';
import fund2 from './img/fund2.png';
import fund3 from './img/fund3.png';

const plans = [
  {
    name: "Beginner",
    price: "$0/month",
    description: "Perfect for individuals starting their trading journey or exploring crypto education.",
    features: [
      { name: "Access to public educational content", available: true },
      { name: "Beginner-friendly tutorials", available: true },
      { name: "Community forum access", available: true },
      { name: "Real-time trading simulations", available: false },
    ],
    image: fund1,
    cryptoPayment: false,
  },
  {
    name: "Amateur",
    price: "$4/month",
    description: "Designed for enthusiasts looking to take their skills to the next level achieving your goals.",
    features: [
      { name: "All Beginner features", available: true },
      { name: "Advanced market analysis tools", available: true },
      { name: "Portfolio management dashboard", available: true },
      { name: "Personalized market alerts", available: false },
    ],
    image: fund2,
    cryptoPayment: true,
  },
  {
    name: "Professional",
    price: "$19/month",
    description: "Ideal for seasoned traders who need comprehensive tools and enterprise-level features.",
    features: [
      { name: "All Amateur features", available: true },
      { name: "Priority customer support", available: true },
      { name: "Access to web-based and mobile platforms", available: true },
      { name: "Forex trading integration", available: true },
    ],
    image: fund3,
    cryptoPayment: true,
  },
];

export default function FundeMe() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeMethod, setActiveMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = (method) => {
    // Set the active payment method
    setActiveMethod(method);
  
    // Start loading state when any payment method is selected
    setIsLoading(true);
  
    // Use a timeout to simulate loading (optional)
    setTimeout(() => {
      if (method === 'paypal') {
        // Redirect to PayPal payment page
        window.location.href = "https://www.paypal.com/fund-transfer-link";
      } else if (method === 'bitcoin') {
        // Redirect to MoonPay for Bitcoin
        window.location.href = "https://www.moonpay.com";
      } else if (method === 'ethereum') {
        // Redirect to Ethereum payment platform (e.g., Coinbase)
        window.location.href = "https://www.coinbase.com";
      } else if (method === 'tron') {
        // Redirect to a Tron payment platform (e.g., TronLink or a compatible site)
        window.location.href = "https://www.tronlink.org";
      } else {
        // Optional: Handle invalid method or fallback
        console.error("Invalid payment method");
      }
    }, 1000); // Simulate loading delay (1000ms = 1 second)
  };
  

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true); // Open modal on Get Started click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedPlan(null); // Reset selected plan
    setActiveMethod(''); // Reset active method
    setCardDetails({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setErrorMessage("");
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateCardForm = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;
    if (!cardNumber || !expiryDate || !cvv) {
      setErrorMessage("All fields are required.");
      return false;
    }
    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
      setErrorMessage("Invalid card number.");
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      setErrorMessage("Invalid expiry date.");
      return false;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setErrorMessage("Invalid CVV.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmitCardPayment = () => {
    if (validateCardForm()) {
      // Redirect to a third-party service like MoonPay
      window.location.href = "https://www.moonpay.com"; // Replace with the actual MoonPay link or other service
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 rounded-xl to-gray-900 text-white py-10 px-5">
      <h1 className="text-4xl text-center font-extrabold mb-4 text-white">Pricing</h1>
      <h3 className="text-lg text-center text-gray-400 font-medium mb-12">
        Review the examples below to see how easily you can use <strong className="text-white">Investora</strong>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 text-center border border-white/20"
          >
            <img
              src={plan.image}
              alt={plan.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-sm my-3">{plan.description}</p>
            <p className="text-xl font-semibold my-5">{plan.price}</p>

            <ul className="text-left mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  {feature.available ? (
                    <FaCheck className="text-green-300 mr-3 text-sm" />
                  ) : (
                    <IoClose className="text-red-300 mr-3 text-lg" />
                  )}
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleGetStarted(plan)}
              className="py-2 px-16 bg-white text-black font-semibold rounded-xl border border-gray-300 hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white px-5 rounded-xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-center mb-4">
                Choose Payment Method for <i>{selectedPlan.name}</i>
              </h2>
              <button onClick={closeModal}>
                <IoClose className="text-2xl text-white-200" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* PayPal */}
              <div
                className={`p-4 rounded-xl border ${
                  activeMethod === 'paypal' ? 'border-purple-500' : 'border-transparent'
                } bg-white bg-opacity-10 backdrop-blur-md text-center cursor-pointer hover:shadow-lg`}
                onClick={() => handlePayment('paypal')}
              >
                {activeMethod === 'paypal' && isLoading ? (
                  <div>
                    <p>Redirecting to PayPal...</p>
                    <div className="spinner mt-2">
                      <div className="double-bounce1"></div>
                      <div className="double-bounce2"></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <FaPaypal className="text-blue-500 text-4xl mx-auto mb-2" />
                    <p>PayPal</p>
                  </>
                )}
              </div>

              {/* Bitcoin */}
              <div
  className={`p-4 rounded-xl border ${
    activeMethod === 'bitcoin' ? 'border-purple-500' : 'border-transparent'
  } bg-white bg-opacity-10 backdrop-blur-md text-center cursor-pointer hover:shadow-lg`}
  onClick={() => handlePayment('bitcoin')}
>
  {activeMethod === 'bitcoin' && isLoading ? (
    <div>
      <p>Redirecting to Bitcoin...</p>
      <div className="spinner mt-2">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  ) : (
    <>
      <FaBitcoin className="text-orange-500 text-4xl mx-auto mb-2" />
      <p>Bitcoin</p>
    </>
  )}
</div>

{/* Conditional Crypto Currency Selector (only shows when Bitcoin is selected) */}
{activeMethod === 'bitcoin' && (
  <div className="mt-4">
    <label className="block mb-2 text-white">Select Cryptocurrency</label>
    <select
      className="w-full p-3 bg-white text-black rounded-xl mb-4 border border-gray-300 focus:ring-2 focus:ring-purple-500"
      onChange={(e) => setCryptoCurrency(e.target.value)} // store selected value
    >
      <option value="BTC">BTC - Bitcoin</option>
      <option value="ETH">ETH - Ethereum</option>
      <option value="USDT">USDT - Tether</option>
      <option value="TRC20">TRC20 - Tron</option>
      <option value="BEP20">BEP20 - Binance Smart Chain</option>
    </select>
  </div>
)}

              {/* Credit Card */}
              <div
                className={`p-4 rounded-xl border ${
                  activeMethod === 'card' ? 'border-purple-500' : 'border-transparent'
                } bg-white bg-opacity-10 backdrop-blur-md text-center cursor-pointer hover:shadow-lg`}
                onClick={() => handlePayment('card')}
              >
                <FaCreditCard className="text-blue-500 text-4xl mx-auto mb-2" />
                <p>Credit Card</p>
              </div>
            </div>

            {activeMethod === 'card' && (
              <div className="mt-4">
                <div>
                  <label className="block mb-2">Card Number</label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    value={cardDetails.cardNumber}
                    onChange={handleCardChange}
                    name="cardNumber"
                    className="w-full p-3 bg-white text-black rounded-xl mb-4"
                    placeholder="Card Number"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Expiry Date (MM/YY)</label>
                    <InputMask
                      mask="99/99"
                      value={cardDetails.expiryDate}
                      onChange={handleCardChange}
                      name="expiryDate"
                      className="w-full p-3 bg-white text-black rounded-xl mb-4"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">CVV</label>
                    {/* CVV Mask */}
                    <InputMask
                      mask="***"
                      value={cardDetails.cvv}
                      onChange={handleCardChange}
                      name="cvv"
                      className="w-full p-3 bg-white text-black rounded-xl mb-4"
                      placeholder="***"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
                )}

                <button
                  onClick={handleSubmitCardPayment}
                  className="w-full mt-4 bg-blue-500 py-3 text-white font-bold rounded-xl"
                >
                  Confirm Payment
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
