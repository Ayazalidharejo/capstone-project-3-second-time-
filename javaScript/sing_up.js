document.getElementById('signupForm').addEventListener('submit', function(eve) {
    eve.preventDefault();
  
    let Email = document.getElementById('userEmail').value;
    let Password = document.getElementById('userPassword').value;
    console.log(Email, Password);
  
    if (Email && Password) {
      localStorage.setItem('Email', Email);
      localStorage.setItem('Password', Password);
  
      window.location.href = "../login/login.html";
      alert('Registered completed');
    }
  });
  