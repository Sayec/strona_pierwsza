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
const projectsSection = document.querySelector('section.projects');
let heightProjectsSection = window.innerHeight;

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
const tekstOffsetLeft = tekst.offsetLeft;
const tekstOffsetTop = tekst.offsetTop;
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

const slideList = [
  {
    img: 'images/droga-mleczna.jpg',
    text: 'My biggest hooby is astronomy. I like to go outside on a cloudless night and view stars, galaxies and nebulae with my telescope. I love the feeling of being alone with the vastness of the universe and looking at objects millions of light years away. ',
  },
  {
    img: 'images/games-2453777_1280.jpg',
    text: 'My other passion is playing computer games. I mainly play online games to compete with other people, but I also really like a good single player game. I play League of Legends, Valorant or Chess.',
  },
  {
    img: 'images/soccer-488700_1280.jpg',
    text: 'Watching sports events is something I like to do in my free time. I mainly interested in what is happening in football and Formula 1. In Formula 1, I am a fan of RedBull Racing team. When it comes to my activity, I like to ride a bike.  ',
  },
];

const image = document.querySelector('section.hobbies div.obraz img');
const obraz = document.querySelector('section.hobbies div.obraz');
const p = document.querySelector('section.hobbies div.tekst p');
const tekst_obraz = document.querySelector('section.hobbies div.tekst');
const flex = document.querySelector('section.hobbies div.flex');

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

let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');
let pressed = false;
let startx;
let x;

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
