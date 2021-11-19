let selectBox = document.querySelector("#movie");
let container = document.querySelector(".container");
let count = document.querySelector("#count");
let film = document.querySelector("#film");
let total = document.querySelector("#total");
let notOccupiedSeats = document.querySelectorAll(".row .seat:not(.occupied)");
let selectBox1 = document.querySelectorAll("option").firstElementChild;
console.log(selectBox1);

const storelocalStrorage = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  //const selectedMovie = selectBox.options[selectBox.selectedIndex].value;
  const selectedSeatArr = [...selectedSeats].map((seat) =>
    [...notOccupiedSeats].indexOf(seat)
  );
  localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatArr));
  //localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
 // console.log(selectedMovie);
};

selectBox.addEventListener("change", (e) => {
  updateMovieInfo();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateMovieInfo();
});

const updateMovieInfo = () => {
  const selectedSeatsCount = document.querySelectorAll(
    ".row .seat.selected"
  ).length;
  count.textContent = selectedSeatsCount;
  film.textContent =
    selectBox.options[selectBox.selectedIndex].innerText.split("(")[0];
  selectBox.options[selectBox.selectedIndex].value;
  total.textContent =
    selectedSeatsCount *
    parseFloat(selectBox.options[selectBox.selectedIndex].value);
  storelocalStrorage();
};

window.addEventListener("load", () => {
  displaySeatUI();
  updateMovieInfo();
});

const displaySeatUI = () => {
  const selectedSeatsFromLocalStorage = localStorage.getItem("selectedSeats");
  if (
    selectedSeatsFromLocalStorage !== null &&
    selectedSeatsFromLocalStorage.length > 0
  )
    notOccupiedSeats.forEach((seat, index) => {
      if (selectedSeatsFromLocalStorage.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
};

//const displayMovieUI = () => {
  //const selectedMovieFromLocalStorage = localStorage.setItem(
   // "selectedMovie",
    //JSON.parse(selectedMovie)
  //);
//};
