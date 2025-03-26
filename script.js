function add(value) {
  document.getElementById("pantalla").value += value;
}

function calculate() {
  const value = document.getElementById("pantalla").value;
  const result = eval(value);
  document.getElementById("pantalla").value = result;
}

function erase() {
  document.getElementById("pantalla").value = "";
}
