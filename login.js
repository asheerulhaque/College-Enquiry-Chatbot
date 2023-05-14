$('#signup').click(function() {
    $('.pinkbox').css('transform', 'translateX(80%)');
    $('.signin').addClass('nodisplay');
    $('.signup').removeClass('nodisplay');
  });
  
  $('#signin').click(function() {
    $('.pinkbox').css('transform', 'translateX(0%)');
    $('.signup').addClass('nodisplay');
    $('.signin').removeClass('nodisplay');
  });
  document.getElementById("Loginform").addEventListener("submit",(event)=>{
    event.preventDefault()
  })
  document.getElementById("Signupform").addEventListener("submit",(event)=>{
    event.preventDefault()
  })
   
  function login()
  {
      
      var uname = document.getElementById("username").value;
      var pwd = document.getElementById("password").value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!filter.test(uname))
		{
			alert("Enter valid email id.");
      return false;
		}
      else if(pwd=='')
      {
          alert("enter the password");
          return false;
      }
      else if(pwd.length < 6)
      {
          alert("Password min length should be greater than 6.");
          return false;
      }
      else
      {
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            window.location.replace("index.html")
          }
         })
      
          const email = document.getElementById("username").value
          const password = document.getElementById("password").value
          firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=>{
              alert(error.message);
          })
        }
      
  }
  
function signup()
{
    
    var email = document.getElementById("email").value;
    var pwd1 = document.getElementById("password1").value;
    var cpwd = document.getElementById("cpassword").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!filter.test(email))
		{
			alert("Enter valid email id.");
      return false;
		}
      else if(pwd1=='')
      {
          alert("enter the password");
          return false;
      }
      else if(pwd1.length < 6)
      {
          alert("Password min length should be greater than 6.");
          return false;
      }
      else if(cpwd != pwd1)
      {
        alert("Please check the password again it does not match");
        return false;

      }
      else
      {
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            window.location.replace("index.html")
          }
         })
        const email = document.getElementById("email").value
        const password = document.getElementById("password1").value
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          alert(error.message);
          });
          alert("Thank you for signing up!")
      }
}

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
const togglePasswordc = document.querySelector('#togglePasswordc');
  const passwordc = document.querySelector('#cpassword');
 
  togglePasswordc.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    cpassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
const togglePassword1 = document.querySelector('#togglePassword1');
  const password1 = document.querySelector('#password1');
 
  togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

