import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';


const Payments = () => {
  const { state: { buyer, cart }, addNewOrder } = useContext(AppContext)
  const paypalOptions = {
    clientId: 'AVM9oZLiGiv5Fr20CRxaAMEwimh2uWbYJzR8q4ACqBkByVNjpMAZeHempOuqPJK_IqCYCw0lyp1tmWkZ',
    intent: 'capture',
    currency: 'USD'
  }
  const history = useHistory()
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0)
    return sum
  }
  const handlePaymentSuccess = (data) => {
    console.log(data, 'handlePaymentSuccess')
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <p> {buyer.name}</p>
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.title}>
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} />
            <span>$ {' '}{item.price}</span>
          </div>
        ))}

        <div className="Payment-button">
          <button type="button" onClick={() => handlePaymentSuccess({status : "COMPLETED"})}> Submit</button>
          <PayPalButton
            options={paypalOptions}
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              console.log(`Transaction completed by ${details.payer.name.given_name}, ${data}`)
              handlePaymentSuccess(details)
            }} />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payments;