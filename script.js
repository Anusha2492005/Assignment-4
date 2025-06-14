const storedPhone = "12345";
const storedPass = "anusha123";

function checkPhone(n) {
  return new Promise((resolve, reject) => {
    if (n === storedPhone) {
      resolve(true);
    } else {
      reject("Invalid phone number!");
    }
  });
}

function checkPass(p) {
  return new Promise((resolve, reject) => {
    if (p === storedPass) {
      resolve(true);
    } else {
      reject("Incorrect password!");
    }
  });
}

function login() {
  const enteredPhone = document.getElementById("num").value;
  const enteredPass = document.getElementById("pass").value;
  const result = document.getElementById("res");

  checkPhone(enteredPhone)
    .then(() => checkPass(enteredPass))
    .then(() => {
      result.innerText = "✅ Login successful!";
      result.style.color = "#00b894";
    })
    .catch((errorMsg) => {
      result.innerText = "❌ " + errorMsg;
      result.style.color = "#d63031";
    });
}
