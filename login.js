document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //   console.log(userEmail);
  //get user password
  const passField = document.getElementById("user-password");
  const userPass = passField.value;
  //   console.log(userPass);
  //check for right mail and password
  if (userEmail == "miz1998an@gmail.com" && userPass == "mizan") {
    // console.log("valid user");
    //open new page
    window.location.href = "banking.html";
  } else {
    console.log("invalid user");
  }
});
