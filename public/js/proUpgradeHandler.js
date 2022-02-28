$("#loading").hide();

function displayPayementScreen(){

}

function startCheckout(priceID){
  console.log(priceID);
  createCheckoutSession(priceID).then(function(data) {
     // Call Stripe.js method to redirect to the new Checkout page
     stripe
       .redirectToCheckout({
         sessionId: data.sessionId
       })
       .then(handleResult);
   });
}

function createCheckoutSession(priceId) {
  return fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      priceId: priceId
    })
  }).then(function(result) {
    return result.json();
  });
};
