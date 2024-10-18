document.getElementById('signupForm').addEventListener('submit', function(eve) {
    eve.preventDefault();
  
    let Email = document.getElementById('userEmail').value;
    let Password = document.getElementById('userPassword').value;
    console.log(Email, Password);
  
    if (Email && Password) {
      localStorage.setItem('Email', Email);
      localStorage.setItem('Password', Password);
  
// Show Bootstrap alert
let successAlert = document.getElementById('successAlert');
successAlert.style.display = 'block';  // Make the alert visible
successAlert.classList.add('show');    // Add 'show' class for Bootstrap fade effect

// Listen for the close button click
let closeButton = document.getElementById('alertCloseButton');
closeButton.addEventListener('click', function() {
  // Redirect to the login page when the close button is clicked
  window.location.href = "../login/login.html";
});



 

    
    

    }
  });
  
  let alertCloseButt= document.getElementById('alertCloseButt')
  alertCloseButt.addEventListener('click',function(){
    
    successAlert.style.display='none '
  })