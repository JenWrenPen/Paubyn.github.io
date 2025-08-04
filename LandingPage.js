// When the user clicks on "Enter"
function passcodePopUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  return false;
}

//Check passcode
function checkPasscode() {
  var code = document.getElementById("passcodefield").value;
  if (code == "BestDayEver") {
    window.location="secondpage.html";
  }
  else if (code == "BestNightEver") {
    window.location="secondpage.html";
  }
  else if (code == "BestWeekendEver") {
    window.location="secondpage.html";
  }
  else {
    alert("Wrong code. Please try again.");
    window.location.href = 'index.html';
  }
};

