  // Add your JavaScript here
  const bookTableBtn = document.querySelector('#book-table-btn');
  const menusBtn = document.querySelector('#menus-btn');
  const aboutBtn = document.querySelector('#about-btn');
  const hoursBtn = document.querySelector('#hours-btn');
  const homePage = document.querySelector('.home-page');
  const reservationPage = document.querySelector('.reservation-page');
  const aboutPage = document.querySelector('.about-page');
  const hoursPage = document.querySelector('.hours-page');

  bookTableBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    reservationPage.style.display = 'block';
    aboutPage.style.display = 'none';
    hoursPage.style.display = 'none';
  });

  menusBtn.addEventListener('click', () => {
    homePage.style.display = 'block';
    reservationPage.style.display = 'none';
    aboutPage.style.display = 'none';
    hoursPage.style.display = 'none';
  });

  aboutBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    reservationPage.style.display = 'none';
    aboutPage.style.display = 'block';
    hoursPage.style.display = 'none';
  });

  hoursBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    reservationPage.style.display = 'none';
    aboutPage.style.display = 'none';
    hoursPage.style.display = 'block';
  });
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      nav.classList.add('visible');
    } else {
      nav.classList.remove('visible');
    }
  });
  