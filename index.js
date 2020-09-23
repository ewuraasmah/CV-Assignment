const form = document.getElementById("addform");

function onSubmit(event) {
    event.preventDefault(); 
    const first= form.elements["fname"].value;
    const middle = form.elements["mname"].value;
    const last = form.elements["lname"].value;
    const number = form.elements["number"].value;
    const email = form.elements["email"].value;
    const address = form.elements["Postal Address"].value;

    function allLetter1(inputtxt){
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.match(letters)){
      return true;
     }
   else{
     alert("First name error, use letters");
     return false;
     }
  }

  function allLetter2(inputtxt){
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.match(letters)){
       return true;
      }
    else{
      alert("Middle name error, use letters");
      return false;
      }
   }

   function allLetter3(inputtxt){
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.match(letters)){
       return true;
      }
    else{
      alert("Last name error, use letters");
      return false;
      }
   }

    allLetter1(first);
    allLetter2(middle);
    allLetter3(last);

    function ValidateEmail(mail) {
     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        return (true)
      }
        alert("You have entered an invalid email address! Retry")
        return (false)
    }

    ValidateEmail(email)

    if (address === ' '){9
        alert("Postal Address is empty. Fill in")
    }
    if (number === ' '){
        alert("Phone number is empty. Fill in")
    }

    window.localStorage.setItem("firstname",first);
    window.localStorage.setItem("middlename",middle);
    window.localStorage.setItem("lastname",last);
    window.localStorage.setItem("number",number);
    window.localStorage.setItem("email",email);
    window.localStorage.setItem("address",address);
 }
 
 form.addEventListener('submit',onSubmit)



