///////////////////////////////////////////////
// Accordion //
//////////////////////////////////////////////

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener('click', (event) => {
    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

///////////////////////////////////////////////
// Sticky Navigation //
//////////////////////////////////////////////

const navBarSecondary = document.querySelector('.main-nav');
const headerSecondary = document.querySelector('.header');
const navHeight = navBarSecondary.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navBarSecondary.classList.add('sticky');
  else navBarSecondary.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`
});

headerObserver.observe(headerSecondary);

///////////////////////////////////////////////
// Fade in animations //
//////////////////////////////////////////////
const allSectionsSecondary = document.querySelectorAll('.section');
const revealSectionSecondary = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserverSecondary = new IntersectionObserver(revealSectionSecondary, {
  // root: null,
  threshold: 0
});

allSectionsSecondary.forEach(function (section) {
  sectionObserverSecondary.observe(section);
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
