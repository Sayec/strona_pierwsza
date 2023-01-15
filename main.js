import hobby from './hobby.js';

let div1 = document.querySelector('nav').offsetHeight;
let menu = document.querySelector('nav');
let header = document.querySelector('header');
const cover = document.querySelector('header .cover');
document.addEventListener('scroll', function (even) {
  if (window.innerWidth > 768) {
    if (window.scrollY >= div1) {
      menu.classList.add('is-active');
      header.style.marginTop = div1 + 1 + 'px';
    } else {
      menu.classList.remove('is-active');
      header.style.marginTop = 0 + 'px';
    }
  }
});

const t1 = new TimelineMax();

t1.fromTo(
  cover,
  1,
  {
    height: '0%',
  },
  {
    height: '100%',
  }
).fromTo(
  cover,
  1.2,
  {
    width: '100%',
  },
  {
    width: '100%',
  }
);

const all = document.querySelectorAll('li a');

all.forEach((btn) => {
  ['click'].forEach(function (even) {
    btn.addEventListener(even, function (even) {
      even.preventDefault();
      let scrollDiv = document.querySelector(
        'section' + '.' + btn.className
      ).offsetTop;
      let element = document.querySelector('nav').offsetHeight;
      window.scrollTo({
        top: scrollDiv - element,
        behavior: 'smooth',
      });
    });
  });
});

const allSections = document.querySelectorAll('section');

allSections.forEach((sec) => {
  document.addEventListener('scroll', function (even) {
    let section1 = document.querySelector('section.' + sec.classList[0]);
    let flexSection = document.querySelector(
      'section.' + sec.classList[0] + ' .moving'
    );
    if (
      window.scrollY >
      section1.offsetTop + section1.offsetHeight * 0.5 - window.innerHeight
    ) {
      flexSection.classList.add('active');
    } else {
      flexSection.classList.remove('active');
    }
  });
});

const tekst = document.querySelector('header h1');
const burger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
const links = document.querySelectorAll('nav ul li a');
const overlay = document.querySelector('.body-overlay');

burger.addEventListener('click', () => {
  navUl.classList.toggle('active');
  overlay.classList.toggle('active');
});
links.forEach((link) => {
  link.addEventListener('click', (even) => {
    even.preventDefault;
    navUl.classList.toggle('active');
    if (window.innerWidth < 768) overlay.classList.toggle('active');
  });
});

const slideList = hobby();

const image = document.querySelector('section.hobbies div.obraz img');
const obraz = document.querySelector('section.hobbies div.obraz');
const p = document.querySelector('section.hobbies div.tekst p');
const tekst_obraz = document.querySelector('section.hobbies div.tekst');

const time = 10000;
let active = 0;

const changeSlide = () => {
  obraz.classList.toggle('active');
  tekst_obraz.classList.toggle('active');

  setTimeout(() => {
    image.src = slideList[active].img;
    p.textContent = slideList[active].text;
    obraz.classList.toggle('active');
    tekst_obraz.classList.toggle('active');
  }, 1000);
  active = (active + 1) % slideList.length;
  setTimeout(() => {
    changeSlide();
  }, time);
};

setTimeout(changeSlide, time);

const rightButton = document.querySelector('div.right');
const leftButton = document.querySelector('div.left');
const allProjects = document.querySelectorAll('div.projects');
let counter = 0;
leftButton.style.display = 'none';
rightButton.addEventListener('click', () => {
  allProjects[counter].classList.add('prev');
  allProjects[counter + 1].classList.remove('next');
  counter++;
  if (counter === allProjects.length - 1) {
    rightButton.style.display = 'none';
  }

  leftButton.style.display = 'block';
});
leftButton.addEventListener('click', () => {
  allProjects[counter].classList.add('next');
  allProjects[counter - 1].classList.remove('prev');
  counter--;
  if (counter === 0) {
    leftButton.style.display = 'none';
  }
  rightButton.style.display = 'block';
});
