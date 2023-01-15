

// Get the carousel element
const carousel = document.getElementById("bg-carousel");

// Next button
const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", () => {
  carousel.carousel("next");
});

// Prev button
const prevButton = document.getElementById("prev-button");
prevButton.addEventListener("click", () => {
  carousel.carousel("prev");
});

// Pause button
const pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", () => {
  carousel.carousel("pause");
});

// Play button
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
  carousel.carousel("cycle");
});

// form validation
const form = document.getElementById("reservationForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") 
    {
        alert("Please fill out all required fields.");
    } 
    else 
    {
    form.submit();
    alert("Reservation submitted successfully!");
    }
}
);