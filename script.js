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

  if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
    alert("Please fill out all required fields.");
  } else {
    form.submit();
    alert("Reservation submitted successfully!");
  }
}
);