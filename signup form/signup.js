document.querySelector('.email').addEventListener('blur', validateEmail);
document.querySelector('.password').addEventListener('blur', validatePassword);


function validateEmail(){
  const email = document.querySelector('.email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if(!re.test(email.value)){
    email.style.border = '1px solid red'
  }else{
    email.style.border = '1px solid green'
  }
}

function validatePassword(){
  const password = document.querySelector('.password');
  const re = /^[A-Za-z]\w{7,14}$/
  if(!re.test(password.value)){
    password.style.border = '1px solid red'
  }else{
    password.style.border = '1px solid green'
  }
}