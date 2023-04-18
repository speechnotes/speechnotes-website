function resetPayPalButton(sum, uid) {
  if (!uid) {
    return;
  }

  document.getElementById("paypal-button-container").innerHTML = "";
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          custom_id: "__sn_premium_1yr__"+firebase.auth().currentUser.uid,
          amount: {
            value: sum
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        //alert('Transaction completed by ' + details.payer.name.given_name);
        if (addOneYearToLicense) {
          addOneYearToLicense();
        }
      });
    }
  }).render('#paypal-button-container');
}
