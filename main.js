import hobby from './hobby.js';

// --- Helper: Throttle function for scroll events ---
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// --- Navigation Sticky Effect ---
const menu = document.querySelector('nav');
const header = document.querySelector('header');
let div1 = menu ? menu.offsetHeight : 0;

if (menu && header) {
  document.addEventListener('scroll', throttle(function (e) {
    if (window.innerWidth > 768) {
      if (window.scrollY >= div1) {
        menu.classList.add('is-active');
        header.style.marginTop = div1 + 1 + 'px';
      } else {
        menu.classList.remove('is-active');
        header.style.marginTop = 0 + 'px';
      }
    }
  }, 50));
}

// --- Typewriter Effect ---
const typewriterEl = document.querySelector('.typewriter');
if (typewriterEl) {
  const text = 'Hello!';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      typewriterEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    }
  }
  setTimeout(typeWriter, 500);
}

// --- Footer Year ---
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// --- GSAP Hero Animation ---
const cover = document.querySelector('header .cover');
if (cover && typeof gsap !== 'undefined') {
  // Use modern GSAP 3 syntax instead of TimelineMax
  const t1 = gsap.timeline();
  t1.fromTo(cover, { height: '0%' }, { height: '100%', duration: 1 })
    .fromTo(cover, { width: '100%' }, { width: '100%', duration: 1.2 });
}

// --- Smooth Scroll for Nav Links ---
const allLinks = document.querySelectorAll('li a');
allLinks.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const targetClass = btn.className;
    const targetSection = document.querySelector('section.' + targetClass);
    
    if (targetSection && menu) {
      const scrollDiv = targetSection.offsetTop;
      const navHeight = menu.offsetHeight;
      window.scrollTo({
        top: scrollDiv - navHeight,
        behavior: 'smooth',
      });
    }
  });
});

// --- Scroll Animations for Sections ---
const allSections = document.querySelectorAll('section');
if (allSections.length > 0) {
  document.addEventListener('scroll', throttle(function (e) {
    allSections.forEach((sec) => {
      // Get the first class of the section which identifies it
      const secClass = sec.classList[0];
      if (!secClass) return;
      
      const section1 = document.querySelector('section.' + secClass);
      const flexSection = document.querySelector('section.' + secClass + ' .moving');
      
      if (section1 && flexSection) {
        if (
          window.scrollY >
          section1.offsetTop + section1.offsetHeight * 0.5 - window.innerHeight
        ) {
          flexSection.classList.add('active');
        } else {
          flexSection.classList.remove('active');
        }
      }
    });
  }, 50));
}

// --- Mobile Navigation (Hamburger) ---
const burger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');
const overlay = document.querySelector('.body-overlay');

if (burger && navUl && overlay) {
  burger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navUl.classList.contains('active')) {
        navUl.classList.remove('active');
        if (window.innerWidth < 768) overlay.classList.remove('active');
      }
    });
  });
}

// --- Hobbies Slider ---
const slideList = hobby();
const image = document.querySelector('section.hobbies div.obraz img');
const obraz = document.querySelector('section.hobbies div.obraz');
const p = document.querySelector('section.hobbies div.tekst p');
const tekst_obraz = document.querySelector('section.hobbies div.tekst');

if (image && obraz && p && tekst_obraz && slideList.length > 0) {
  const time = 10000;
  let active = 0;

  setInterval(() => {
    // Fade out
    obraz.classList.remove('active');
    tekst_obraz.classList.remove('active');

    // Wait for fade out animation, then swap content and fade in
    setTimeout(() => {
      active = (active + 1) % slideList.length;
      image.src = slideList[active].img;
      image.alt = "Hobby slide image"; // Update alt dynamically if possible, using a placeholder for now
      p.textContent = slideList[active].text;
      
      obraz.classList.add('active');
      tekst_obraz.classList.add('active');
    }, 1000);
  }, time);
}

// --- Projects Slider ---
const rightButton = document.querySelector('button.right');
const leftButton = document.querySelector('button.left');
const allProjects = document.querySelectorAll('div.projects');
const dotsContainer = document.querySelector('.dots-container');

if (rightButton && leftButton && allProjects.length > 0) {
  let counter = 0;
  leftButton.style.display = 'none';

  if (dotsContainer) {
    allProjects.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => jumpToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    if (!dotsContainer) return;
    document.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === counter);
    });
  }

  function jumpToSlide(targetIdx) {
    if (targetIdx === counter) return;
    
    allProjects.forEach((proj, idx) => {
      proj.classList.remove('prev', 'next');
      if (idx < targetIdx) {
        proj.classList.add('prev');
      } else if (idx > targetIdx) {
        proj.classList.add('next');
      }
    });
    
    counter = targetIdx;
    updateDots();
    
    leftButton.style.display = counter === 0 ? 'none' : 'block';
    rightButton.style.display = counter === allProjects.length - 1 ? 'none' : 'block';
  }

  rightButton.addEventListener('click', () => {
    if (counter < allProjects.length - 1) {
      jumpToSlide(counter + 1);
    }
  });

  leftButton.addEventListener('click', () => {
    if (counter > 0) {
      jumpToSlide(counter - 1);
    }
  });
}
