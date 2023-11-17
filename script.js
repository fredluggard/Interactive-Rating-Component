let submit = document.querySelector(".submitted");
let form = document.querySelector(".rating-form");
let thankYou = document.querySelector(".hidden");
let rated = document.querySelector(".rated");
let roundButtons = document.getElementsByClassName("round_num");

let addNumChangeColor = (elementList) => {
  for (let element of roundButtons) {
    element.classList.remove("num");
    element.classList.add("count_hover");
    element.classList.remove("count_clicked");
  }
};

//let addColor = (classList)
for (let element of roundButtons) {
  element.addEventListener("click", () => {
    addNumChangeColor(roundButtons);
    element.classList.add("num");
    element.classList.remove("count_hover");
    element.classList.add("count_clicked");
    rated.innerHTML = element.innerHTML;
  });
}

function submitHandler(e) {
  e.preventDefault();
  if (rated.innerHTML !== "") {
    form.style.display = "none";
    thankYou.style.display = "flex";
  } else {
    alert("Please select a rating");
  }
}
submit.addEventListener("click", submitHandler);
