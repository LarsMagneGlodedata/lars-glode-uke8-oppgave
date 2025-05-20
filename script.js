// BURGER MENU
document.addEventListener('DOMContentLoaded', () => {
  let isNavOpen = false;
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.navMenu');
  const main = document.querySelector('main');
  const overlay = document.querySelector('.overlay');
  let mainHeight = document.querySelector('main').offsetHeight;

  // function for å åpne nav
  function openNav() {
    navMenu.style.height = '193px';
    overlay.style.height = `${mainHeight + 193}px`;
    burger.classList.toggle('change');
    if (navMenu) navMenu.style.height === '193px';
    isNavOpen = true;
  }

  //  function for å lukke nav
  function closeNav() {
    navMenu.style.height = '0';
    overlay.style.height = '0';
    burger.classList.toggle('change');
    if (navMenu) navMenu.style.height === '0';
    isNavOpen = false;
  }

  // Åpne nav når du trykke på burgermenyen
  burger.addEventListener('click', () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // lukker nav når du trykker på main (utenfor menyen)
  main.addEventListener('click', () => {
    if (isNavOpen) {
      closeNav();
    } else {
      // do nothing
    }
  });

  //  åpner og lukker nav når du trykker på "m" og lukker nav når du trykker på "ESC"
  let keypress = {};
  document.addEventListener('keydown', handler);
  function handler(x) {
    keypress[x.key] = true;
    if ((x.key === 'm' || x.key === 'Escape') && isNavOpen) {
      closeNav();
    } else if (x.key === 'm') {
      openNav();
    } else {
      // do nothing
    }
  }

  // hide/show header on scroll men berre hvis nav menyen ikkje e åpen
  let prevScrollpos = window.scrollY;
  window.onscroll = function hideHeader() {
    let currentScrollPos = window.scrollY;
    if (!isNavOpen) {
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('header').style.top = '0';
      } else {
        document.querySelector('header').style.top = '-78px';
      }
    } else {
      document.querySelector('header').style.top = '0';
    }
    prevScrollpos = currentScrollPos;
  };
});

//

document.addEventListener('DOMContentLoaded', function (event) {
  let dataText = ['Hei, dette er en test!', 'Testen er fullført...!'];
  let hero = document.querySelector('.heroP');

  function typewriter(text, i, callback) {
    if (i < text.length) {
      hero.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(function () {
        typewriter(text, i + 1, callback);
      }, 50);
    } else if (typeof callback == 'function') {
      setTimeout(callback, 2000);
    }
  }

  function deleteText(text, i, callback) {
    if (i >= !text.length) {
      hero.innerHTML =
        text.substring(0, i) + '<span aria-hidden="true"></span>';
      setTimeout(function () {
        deleteText(text, i - 1, callback);
      }, 20);
    } else if (typeof callback == 'function') {
      setTimeout(callback, 500);
    }
  }

  function startAnimation(i) {
    if (i < dataText.length) {
      typewriter(dataText[i], 0, function () {
        deleteText(dataText[i], dataText[i].length, function () {
          startAnimation(i + 1);
        });
      });
    } else {
      setTimeout(function () {
        startAnimation(0);
      }, 3000);
    }
  }

  startAnimation(0);
});
