import React from 'react';
import './paymentPage.css';

// PaymentPage component receives course and onClose as props
const PaymentPage = ({ course, onClose }) => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const years = ['2025', '2026', '2027', '2028', '2029', '2030'];

  return (
    <div className="app">
      <div className="payment-container">
        <div className="order-overview">
          <h2>ORDER OVERVIEW</h2>
          <p className="order-title">{course?.title || 'Course'}</p>
          <p className="order-instructor">
            <strong>Instructor:</strong> {course?.instructor || '-'}
          </p>
          <p className="order-amount">₹ {course?.price ? course.price.toLocaleString() : '0.00'}</p>
        </div>

        <div className="payment-section">
          <h3>Credit / Debit Card</h3>
          <div className="name-fields">
            <input type="text" placeholder="First name" className="name-input" />
            <input type="text" placeholder="Last name" className="name-input" />
          </div>
          <input type="text" placeholder="Card number" className="card-input" />
          <input type="text" placeholder="CVV" className="card-input cvv-input" />
          <div className="expiry-fields">
            <select className="expiry-select">
              <option value="">Month</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select className="expiry-select">
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="other-payment-methods">
          <h3>Other Payment Methods</h3>
          <ul className="payment-options">
            <li><button className="payment-option-btn">Pay with UPI</button></li>
            <li><button className="payment-option-btn">Pay with PayPal</button></li>
            <li><button className="payment-option-btn">Net Banking</button></li>
            <li><button className="payment-option-btn">Pay with Wallet</button></li>
          </ul>
        </div>

        <div className="action-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;