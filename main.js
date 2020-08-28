let div_start = document.querySelector('nav').offsetTop;
let div1 = document.querySelector('nav').offsetHeight;
let menu = document.querySelector('nav')
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

})
const offerSection = document.querySelector('section.offer');
let heightOfferSection = window.innerHeight;
if (window.innerWidth < 768) {
    offerSection.style.height = `${heightOfferSection - div1}px`;
}
window.addEventListener('resize', () => {
    const offerSection = document.querySelector('section.offer');
    heightOfferSection = window.innerHeight;
    console.log('test');
    if (window.innerWidth < 768) {
        offerSection.style.height = `${heightOfferSection - div1}px`;
    }
})


const t1 = new TimelineMax();

t1.fromTo(cover, 1, {
    height: "0%"
}, {
    height: "100%"
}).fromTo(cover, 1.2, {
    width: "100%"
}, {
    width: "100%"
})

const all = document.querySelectorAll("li a");

all.forEach((btn) => {
    ["click"].forEach(function (even) {
        btn.addEventListener(even, function (even) {
            even.preventDefault();
            //secFuntion('.' + btn.className);
            let scrollDiv = document.querySelector('section' + '.' + btn.className).offsetTop;
            let element = document.querySelector('nav').offsetHeight;
            window.scrollTo({
                top: scrollDiv - element,
                behavior: 'smooth'
            });
        });
    })
});

const allSections = document.querySelectorAll('section');

allSections.forEach((sec) => {
    // ['scroll'].forEach(function (even) {
    document.addEventListener('scroll', function (even) {

        let section1 = document.querySelector('section.' + sec.classList[0])
        let flexSection = document.querySelector('section.' + sec.classList[0] + ' .moving')
        // console.log(`sctroll ${window.scrollY} opffsettop ${section1.offsetTop} innerheight ${section1.offsetTop + section1.offsetHeight * 1 - window.innerHeight}`)
        // if (window.scrollY > section1.offsetTop + section1.offsetHeight * 0.25 - window.innerHeight) {
        if (window.scrollY > section1.offsetTop + section1.offsetHeight * 0.25 - window.innerHeight) {
            flexSection.classList.add('active');
        } else {
            flexSection.classList.remove('active');
        }
    })
})


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
})
links.forEach((link) => {
    link.addEventListener('click', (even) => {

        even.preventDefault;
        navUl.classList.toggle('active');
        if (window.innerWidth < 768) overlay.classList.toggle('active');

    })
})


const slideList = [{
        img: "images/img1.jpg",
        text: 'Oczywiście, możemy się pocieszać, że tam na Zachodzie to są zmiany na wielką skalę, społeczne przesunięcia tektoniczne, a tu w Polsce to takie malutkie przypadki, właściwie przypadeczki. Może tak, choć po pierwsze nikt tego nie zbadał (a radość z niewidzenia problemu jest, hm, krótkowzroczna) i po drugie – to, co jest w Ameryce, zaraz będzie i w Polsce, bo rozwój i te sprawy. A może nie ma powodu do zmartwień? Zamiast siedzieć na chłodzie i babrać się w błocie mogą w tym czasie robić coś bardziej pożytecznego, np. grać na fortepianie lub oglądać durne filmiki na jutjubie.'
    },
    {
        img: "images/img2.jpg",
        text: 'Starania o zrównoważony rozwój można sprowadzić do postulatu sprawiedliwości międzypokoleniowej. Skoro my możemy korzystać z przyrody taką, jaka jest dziś, to samo prawo powinno przysługiwać naszym dzieciom, wnukom, wnuczkom, ich dzieciom i tak dalej. Ergo nasz rozwój nie może odbywać się kosztem przyrody. Termin ‘zrównoważony’ trudno uznać w tej sytuacji za intuicyjnie zrozumiały, ale ktoś tak wymyślił kilkanaście lat temu i teraz trzeba się go trzymać nie chcąc popaść w lingwistyczno-definicyjne dywagacje. Które oczywiście świetnie nadają się na kolejny tekst. Ale ten jest o czymś innym.'
    },
    {
        img: "images/img3.jpg",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, quisquam facilis, ab minima esse optio voluptatibus fugiat officia modi quidem recusandae placeat tempore beatae nihil laudantium blanditiis neque iure nesciunt.'
    },
    {
        img: "images/telescope-937871_1280.jpg",
        text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci nulla quisquamcupiditate,pariatur est numquam, ratione, ullam consequatur sit debitis? Nihil sed asperiores consequuntur excepturi error harum, inventore illum! lorem ',
    }
];

const image = document.querySelector('section.realizations div.obraz img');
const obraz = document.querySelector('section.realizations div.obraz');
const p = document.querySelector('section.realizations div.tekst p');
const tekst_obraz = document.querySelector('section.realizations div.tekst');
const flex = document.querySelector('section.realizations div.flex');

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
}

setTimeout(changeSlide, time);

const bubble = document.querySelector('.bubble')
const allAnchors = document.querySelectorAll('nav ul li a');
const options = {
    threshold: 0.6,
};
// let observer = new IntersectionObserver(navCheck, options)

// function navCheck(entries) {
//     entries.forEach(entry => {
//         // allAnchors.forEach(function (anchor) {
//         //     anchor.style.color = 'black';
//         // });
//         if (entry.target.localName == 'header') {
//             console.log('header');
//             // const coords = activeAnchor.getBoundingClientRect();
//             // const directions = {
//             //     height: coords.height,
//             //     width: coords.width,
//             //     top: coords.top,
//             //     left: coords.left,
//             // };
//             if (entry.isIntersecting) {
//                 allAnchors.forEach(function (anchor) {
//                     anchor.style.color = 'black';
//                 });
//                 // bubble.style.setProperty('left', `${directions.left}px`);
//                 // bubble.style.setProperty('height', `${directions.height}px`);
//                 // bubble.style.setProperty('top', `${directions.top}px`);
//                 // bubble.style.setProperty('width', `${directions.width}px`)
//                 bubble.style.opacity = 0;
//             }
//             return;
//         } else {
//             const classNameEntry = entry.target.className;
//             console.log(entry)
//             const activeAnchor = document.querySelector(`[data-page=${classNameEntry}]`);
//             // activeAnchor.style.color = "black";
//             // activeAnchor.style.color = "white";
//             const coords = activeAnchor.getBoundingClientRect();
//             const directions = {
//                 height: coords.height,
//                 width: coords.width,
//                 top: coords.top,
//                 left: coords.left,
//             };
//             if (entry.isIntersecting) {
//                 console.log(activeAnchor)
//                 allAnchors.forEach(function (anchor) {
//                     anchor.style.color = 'black';
//                 });
//                 bubble.style.setProperty('left', `${directions.left}px`);
//                 bubble.style.setProperty('height', `${directions.height}px`);
//                 bubble.style.setProperty('top', `17.5px`);
//                 bubble.style.setProperty('width', `${directions.width}px`);
//                 bubble.style.opacity = 1;
//                 activeAnchor.style.color = 'white';

//             }
//         }
//     })
// }
// allSections.forEach(section => {
//     observer.observe(section);
// })
// observer.observe(header);