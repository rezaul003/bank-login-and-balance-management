document.getElementById('btn-submit').addEventListener('click', function(){
   const emailField = document.getElementById('email-field');
   const email = emailField.value;
   const passwordField = document.getElementById('password-field');
   const password = passwordField.value;
//    console.log(email, password);
   if(email == 'karim@yahoo.com' && password == 'karim123'){
    window.location.href="account/account.html";
   }
   else{
    alert('Invalid User');
   }
})