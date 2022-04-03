let p = document.getElementById("text");
console.log(p);

let point = localStorage.getItem("points");

if (point !== null) {
  p.innerHTML = point;
}
