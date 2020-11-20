let enterSignUp = document.querySelector("#signup-repassword");
enterSignUp.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    $btnSignUp.click();
  }
});
// Sign up
const $btnSignUp = document.querySelector("#btn-signup");

$btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  const $signupForm = document.querySelector("#signup-form");
  //   get user info
  let email = $signupForm["signup-email"].value;
  let password = $signupForm["signup-password"].value;
  let rePassword = $signupForm["signup-repassword"].value;
  let fName = $signupForm["signup-name"].value;
  if (password != rePassword) {
    alert("Xác nhận mật khẩu chưa đúng !");
  } else {
    //sign up the user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection("Users").doc(cred.user.uid).set({
          fullName: fName,
          bio: "Viết gì đó...",
          facebook: "#",
          twitter: "#",
          instagram: "#",
          find: 0,
        });
      })
      .then(() => {
        auth.onAuthStateChanged((user) => {
          db.collection("Addresses").doc(user.uid).set({});
          console.log(user.uid);
        });
      })
      .then(() => {
        window.location.href = "index.html";
      });
  }
});

let enterLogIn = document.querySelector("#login-password");
enterLogIn.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    $btnLogin.click();
  }
});
//Sign In
const $btnLogin = document.querySelector("#btn-login");
$btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const $loginForm = document.querySelector("#login-form");
  //get info
  let email = $loginForm["login-email"].value;
  let password = $loginForm["login-password"].value;
  if (email == "" || password == "") {
    alert("Không được bỏ trống");
  } else {
    //login the user
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "index.html";
      })
      .catch(() => {
        alert("Tài khoản hoặc mật khẩu không đúng ! ");
      });
  }
});
