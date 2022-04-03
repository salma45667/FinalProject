let value = 0;

function addPoints() {
  console.log(value);
  value += 20;
  localStorage.setItem("points", value);
}

function AlertMessage() {
  alert("20 points was added to your points");
}
