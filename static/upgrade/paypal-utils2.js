

function resetPayPalButton(sum, custom_id) {
  if (!custom_id || !sum) {
    return;
  }

  document.getElementById("paypal-button-container").innerHTML = "";
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          custom_id: custom_id, //SKU_ID + uid,
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
