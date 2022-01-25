import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KLehpAsYSVHHgd2cVwUWWy64JHaZA5fhMybnFQ1RnL22J630Q0u7lBOZyUsMwxTUqJY9O6kvZIYrZRhfdRvyQTg00SaXGubHi";

  const onToken = (token) => {
    console.log(token);

    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://images.pexels.com/photos/10156169/pexels-photo-10156169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
