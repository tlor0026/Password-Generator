// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
  function generatePassword() {
    //variables to use within this function
    var specialCharacters = ["!","@","#","%","^","&","*","?",",","~"];
    var numbers = ["1","2","3","4","5","6","7","8","9"]
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var finalPass = []; 

    //start with main prompt
    var characterLgth = parseInt(window.prompt("How many characters you want in your password? (Any number between 8-128"));
    if (characterLgth < 8 || characterLgth > 128 || (isNaN(characterLgth))) {
      window.alert ("your password needs to have at LEAST 8 characters or the maximum of 128 Characters."); 
      return false;
    }
    else {
      window.alert ("your password will be " + characterLgth + " Characters");
    };
    //start with criteria prompts
    var Spchar = window.confirm("Would you like special characters");
    if (Spchar) {
      var speccrt = window.alert("your password will have special characters");
    }
    else {
      window.alert("NONE Added");
    }
    var selectNumber = window.confirm("would you like numbers");
    if (selectNumber) {
      var numbo = window.alert("your password will have numbers");
    }
    else {
      window.alert("NONE Added");
    }
      var selectLowcs = window.confirm("would you like Lower Case letters");
      if (selectLowcs) {
        var lowcs = window.alert("your password will have lower case letters");
      }
      else {
        window.alert("NONE Added");
      }
      var selectUpcs = window.confirm("would you like upper case letters");
      if (selectUpcs) {
        var upcs = window.alert("your password will have uppercase letters");
      }
      else {
        window.alert("NONE Added");
        if (Spchar === false && selectNumber === false && selectLowcs ===false && selectUpcs === false); {
          return ("you must choose at least one character type to be in your password");
        };
    }
    if (Spchar) {
      finalPass = finalPass.concat(specialCharacters);
    }
    if (selectNumber) {
      finalPass = finalPass.concat(numbers);
    }
    if (selectLowcs) {
      finalPass = finalPass.concat(letters);
    }
    if (selectUpcs) {
      finalPass = finalPass.concat(upperCase);
    }
    
    let finialization =""
    for (let i = 0; i < characterLgth; i++) {
      let random = [Math.floor(Math.random() * finalPass.length)];
      finialization = finialization + finalPass[random];
    }
    return finialization;
  };

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
