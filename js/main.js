var registerForm = document.querySelector(".registerForm");
console.log(registerForm);
var result;

registerForm.onsubmit = function (e) {
  e.preventDefault();
  var elements = e.target.elements;
  var amount = elements[0].value;
  console.log(amount);

  var e = document.getElementById("exchange");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(text);
  if (text == "dinar") result = amount * 0.19;
  else if (text == "dollar") result = amount * 0.27;
  else result = amount;
  document.querySelector(".result").innerHTML = result.toFixed(2);
};


