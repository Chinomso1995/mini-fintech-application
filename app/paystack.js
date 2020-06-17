const form = document.querySelector('.form');
form.addEventListener('submit', payWithPaystack);

function payWithPaystack(e){
  const amount = document.getElementById('amount').value;
  const email = document.getElementById('email').value;
  var handler = PaystackPop.setup({
    key: 'pk_live_fc5636a4b41f43a8d06b8ea9429d943a3aeba739',
    email: email,
    amount: amount,
    currency: "NGN",
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    metadata: {
       custom_fields: [
          {
              display_name: "Mobile Number",
              variable_name: "mobile_number",
              value: "+2348012345678"
          }
       ]
    },
    callback: function(response){
        alert('success. transaction ref is ' + response.reference);
    },
    onClose: function(){
        alert('window closed');
    }
  });
  handler.openIframe();

  e.preventDefault();
}