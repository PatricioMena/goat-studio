///////////////////////////////////////////////
// Swiper //
//////////////////////////////////////////////

const swiper = new Swiper('.swiper', {
  speed: 350,
  slidesPerView: 1,
  effect: 'slide',
  // spaceBetween: 1,
  loop: true,
  // freeMode: true,

  keyboard: {
    enabled: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    // nextEl: '.swiper-button-next',
    nextEl: '.button-next',
    // prevEl: '.swiper-button-prev'
    prevEl: '.button-prev'
  }
});

///////////////////////////////////////////////
// Sticky Navigation //
//////////////////////////////////////////////

const nav = document.getElementById('main-nav');
const hero = document.getElementById('hero');

const stickyNav = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
};

const observer = new IntersectionObserver(stickyNav, {
  threshold: 0.5
});

observer.observe(hero);

///////////////////////////////////////////////
// Fade in animations //
//////////////////////////////////////////////
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  // root: null,
  threshold: 0
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////////////
// Mobile Navigation //
//////////////////////////////////////////////

const toggleButton = document.querySelector('.toggle-button');
const mainNav = document.querySelector('.main-nav');

toggleButton.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

///////////////////////////////////////////////
// Pricing //
//////////////////////////////////////////////

const webPriceBtn = document.querySelector('.btn--pricing-web');
const storePriceBtn = document.querySelector('.btn--pricing-store');

const webCards = document.querySelector('.web-cards');
const storeCards = document.querySelector('.store-cards');

function addWebPrice() {
  webCards.classList.remove('hide');
  storeCards.classList.add('hide');
  webPriceBtn.classList.add('active-btn');
  storePriceBtn.classList.remove('active-btn');
}

function addStorePrice() {
  webCards.classList.add('hide');
  storeCards.classList.remove('hide');
  webPriceBtn.classList.remove('active-btn');
  storePriceBtn.classList.add('active-btn');
}

webPriceBtn.addEventListener('click', addWebPrice);
storePriceBtn.addEventListener('click', addStorePrice);
