// BURGER MENU
document.addEventListener('DOMContentLoaded', () => {
  window.onload = () => {
  let isNavOpen = false;
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.navMenu');
  const main = document.querySelector('main');
  const overlay = document.querySelector('.overlay');
  const navHeight = navMenu.querySelectorAll('a');

  let totalHeight = 0;
  // Kalkulere totale høgden på alle a element inn i .navMenu
  navHeight.forEach((link) => {
    totalHeight += link.offsetHeight;
  });

  // function for å åpne nav
  function openNav() {
    navMenu.style.height = `${totalHeight}px`;
    overlay.style.height = `${main.offsetHeight}px`;
    burger.classList.toggle('change');
    isNavOpen = true;
  }

  //  function for å lukke nav
  function closeNav() {
    navMenu.style.height = '';
    overlay.style.height = '';
    burger.classList.toggle('change');
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
}
});

// SKRIVEMASKIN

document.addEventListener('DOMContentLoaded', function (event) {
  const path = window.location.pathname
  if (path.includes('index.html') || path === '/') {

    let dataText = ['Fersk', 'Deilig', 'Pizza...!'];
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
        startAnimation(0)
      }
    }
    startAnimation(0);
  } else {
    console.warn('Typewriter animation: .heroP element not found on this page.')
  }
});


// menu.html
// pizzaCards
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname

  if (path.includes('menu.html')) {
    const pizzaCardContainer = document.querySelector('#pizzaCardContainer')
  
      for (let i = 1; i <= 9; i++) {
      const pizzaCard = document.createElement('div')
      pizzaCard.classList.add('pizzaCard')

      const pizzaImg = document.createElement('img')
      pizzaImg.classList.add('pizzaImg')
      pizzaImg.src = "pizza.webp"
      pizzaImg.alt = "Bilde av pizza"

      const pizzaName = document.createElement('h3')
      pizzaName.classList.add('pizzaName')
      pizzaName.innerHTML = "Navn"

      const pizzaDiscription = document.createElement('p')
      pizzaDiscription.classList.add('pizzaDiscription')
      pizzaDiscription.innerHTML = "Beskrivelse"

      const pizzaPrice = document.createElement('p')
      pizzaPrice.classList.add('pizzaPrice')
      pizzaPrice.innerHTML = "pris"

      pizzaCard.appendChild(pizzaImg)
      pizzaCard.appendChild(pizzaName)
      pizzaCard.appendChild(pizzaDiscription)
      pizzaCard.appendChild(pizzaPrice)
      pizzaCardContainer.appendChild(pizzaCard)
    }
  } else {
    console.warn('PizzaCard: #pizzaCardContainer element not found on this page.')
  }
})

// CALL-TO-ACTION ??

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname
  // Må vell teknisk sett ha ein boolean for å sjekka om du e logga inn og.
  if (path.includes('index.html') || path === '/' || path.includes('menu.html')) {
    const popUp = document.createElement('div')
    popUp.classList.add('popUp')
    const x = document.createElement('button')
    const p = document.createElement('p')
    p.innerHTML = '<a href="signin.html">Logg inn</a>for å registrere dine kjøp'
    popUp.appendChild(p)
    popUp.appendChild(x)
    x.innerHTML = 'X'
    
    document.body.insertBefore(popUp, document.body.firstChild)
    const pHeight = p.offsetHeight

    setTimeout( () => {
      popUp.style.height = `${pHeight}px`
      x.style.top = `${pHeight / 3}px`
    }, 2000)

    x.addEventListener('click', () => {
      popUp.style.height = ''
    })

  }
})

