function resetPayPalButton(sum, uid, onApprove) {
  if (!uid) {
    return;
  }

  document.getElementById("paypal-button-container").innerHTML = "";
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          custom_id: uid,
          amount: {
            value: sum
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        //alert('Transaction completed by ' + details.payer.name.given_name);
        // TODO!
        if (onApprove) {
          onApprove();
        }
      });
    }
  }).render('#paypal-button-container');
}
