  // Form validation
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const date = form.elements.date.value;
  const time = form.elements.time.value;
  if (!name || !email || !phone || !date || !time) {
    alert('All fields are required');
    return;
  }
  alert(`Reservation made: ${name}, ${email}, ${phone}, ${date}, ${time}`);
  form.reset();
});

// Google Maps API
const map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});