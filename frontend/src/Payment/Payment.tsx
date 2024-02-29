import React from 'react';
import CheckoutSteps from '../Payment/CheckoutSteps';

function PaymentScreen() {
    const submitHandler = () => {
        alert ("Payment processing...")
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 /> {/* Assuming these are boolean props */}
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Payment</h2>
                        </li>

                        <li>
                            <div>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    id="paypal"
                                    value="paypal"
                                />
                                <label htmlFor="paypal">Paypal</label>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    id="bitcoin"
                                    value="bitcoin"
                                />
                                <label htmlFor="bitcoin">Bitcoin</label>
                            </div>
                        </li>
                            
                        <li>
                            <button type="submit" className="button primary">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}
export default PaymentScreen;