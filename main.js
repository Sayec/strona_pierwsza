let div_start = document.querySelector('nav').offsetTop;
let div1 = document.querySelector('nav').offsetHeight;
let menu = document.querySelector('nav');
let header = document.querySelector('header');
const cover = document.querySelector('header .cover');
document.addEventListener('scroll', function (even) {
  if (window.innerWidth > 768) {
    if (window.scrollY >= div1 + div_start) {
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
if (window.innerWidth < 768) {
  projectsSection.style.height = `${heightProjectsSection - div1}px`;
}
window.addEventListener('resize', () => {
  const projectsSection = document.querySelector('section.projects');
  heightProjectsSection = window.innerHeight;
  console.log('test');
  if (window.innerWidth < 768) {
    projectsSection.style.height = `${heightProjectsSection - div1}px`;
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
      //secFuntion('.' + btn.className);
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
  // ['scroll'].forEach(function (even) {
  document.addEventListener('scroll', function (even) {
    let section1 = document.querySelector('section.' + sec.classList[0]);
    let flexSection = document.querySelector(
      'section.' + sec.classList[0] + ' .moving'
    );
    let testowe = section1.getBoundingClientRect();
    // console.log(
    //   `sctroll ${window.scrollY} opffsettop ${section1.offsetTop} innerheight ${
    //     section1.offsetTop + section1.offsetHeight * 0.5 - window.innerHeight
    //   } ${window.innerHeight}`
    // );
    // if (window.scrollY > section1.offsetTop + section1.offsetHeight * 0.25 - window.innerHeight) {
    if (
      // testowe.top <
      // window.innerHeight * 0.75
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

// const line = document.querySelector('div.line');
// document.body.addEventListener('mousemove', () => {
//     // LINE FOLLOWING MOUSE
//     // line.style.transform = `translate(0%, -50%) rotate(${event.clientY/event.clientX}) `;
//     if (event.clientY <= window.innerHeight * 0.5) line.style.transform = `rotate(-${Math.atan((window.innerHeight * 0.5-event.clientY)/event.clientX)*180/Math.PI}deg)`;
//     else line.style.transform = `rotate(${Math.atan((event.clientY-window.innerHeight * 0.5)/event.clientX)*180/Math.PI}deg)`;
// })

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
    img: 'images/img3.jpg',
    text: 'SPORT',
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
    // flex.classList.toggle('active');
    obraz.classList.toggle('active');
    tekst_obraz.classList.toggle('active');
  }, 1000);
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  setTimeout(() => {
    console.log('dziala');
    changeSlide();
  }, time);
  // setTimeout(changeSlide, time);
};

setTimeout(changeSlide, time);

const bubble = document.querySelector('.bubble');
const allAnchors = document.querySelectorAll('nav ul li a');
const options = {
  threshold: 0.8,
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    if (entry.target.localName == 'header') {
      console.log('header');

      if (entry.isIntersecting) {
        allAnchors.forEach(function (anchor) {
          anchor.style.color = 'black';
        });
        bubble.style.opacity = 0;
      }
      return;
    } else {
      const classNameEntry = entry.target.className;
      console.log(entry);
      const activeAnchor = document.querySelector(
        `[data-page=${classNameEntry}]`
      );
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left,
      };
      if (entry.isIntersecting) {
        console.log(activeAnchor);
        allAnchors.forEach(function (anchor) {
          anchor.style.color = 'black';
        });
        bubble.style.setProperty('left', `${directions.left}px`);
        bubble.style.setProperty('height', `${directions.height}px`);
        bubble.style.setProperty('top', `17.5px`);
        bubble.style.setProperty('width', `${directions.width}px`);
        bubble.style.opacity = 1;
        activeAnchor.style.color = 'white';
      }
    }
  });
}
allSections.forEach((section) => {
  observer.observe(section);
});
observer.observe(header);

let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');
let pressed = false;
let startx;
let x;

// slider.addEventListener('mousedown', (e) => {
//   pressed = true;
//   startx = e.offsetX - innerSlider.offsetLeft;
//   slider.style.cursor = 'grab';
// });
// // slider.addEventListener('mouseenter', (e) => {});

// slider.addEventListener('mouseup', (e) => {
//   slider.style.cursor = 'auto';
// });

// window.addEventListener('mouseup', () => {
//   pressed = false;
// });

// slider.addEventListener('mousemove', (e) => {
//   if (!pressed) return;
//   e.preventDefault();
//   x = e.offsetX;
//   innerSlider.style.left = `${x - startx}px`;
//   checkBoundary();
// });

// function checkBoundary() {
//   let outer = slider.getBoundingClientRect();
//   let inner = innerSlider.getBoundingClientRect();

//   if (parseInt(innerSlider.style.left) > 50) {
//     innerSlider.style.left = `50px`;
//   } else if (inner.right < outer.right - 50) {
//     innerSlider.style.left = `-${inner.width - outer.width + 50}px`;
//     console.log('test');
//     console.log(inner.width);
//     console.log(outer.width);
//     console.log(innerSlider.style.left);
//     console.log('test');
//   }
// }

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
