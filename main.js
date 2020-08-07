let div1 = document.querySelector('nav').offsetHeight;
let menu = document.querySelector('nav')
let header = document.querySelector('header');
document.addEventListener('scroll', function (even) {
    console.log(window.scrollY)
    if (window.scrollY >= div1) {
        menu.classList.add('is-active');
        header.style.marginTop = div1 + 'px';
    } else {
        menu.classList.remove('is-active');
        header.style.marginTop = 0 + 'px';
    }
})


const all = document.querySelectorAll("li a");

all.forEach((btn) => {
    ["click"].forEach(function (even) {
        btn.addEventListener(even, function (even) {
            even.preventDefault();
            //secFuntion('.' + btn.className);
            let scrollDiv = document.querySelector('section' + '.' + btn.className)
                .offsetTop;
            let element = document.querySelector('nav').offsetHeight;
            window.scrollTo({
                top: scrollDiv - element,
                behavior: 'smooth'
            });
            console.log(scrollDiv);
            console.log('.' + btn.className);


        });
    })
});

const allSections = document.querySelectorAll('section');

allSections.forEach((sec) => {
    // ['scroll'].forEach(function (even) {
    document.addEventListener('scroll', function (even) {
        let section1 = document.querySelector('section.' + sec.classList[0])
        if (window.scrollY > section1.offsetTop + section1.offsetHeight * 0.25 - window.innerHeight) {
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    })
    // })
})

// $(document).on("scroll", function () {
//     console.log($(this).height() - $(window).height() - $('.normal').height());
//     console.log($(this).scrollTop());
//     if ($(this).scrollTop() > $('section.about').offset().top + $('section.about').height() * 0.5 - $(window)
//         .height()) {
//         $('section.about').addClass('active');
//     } else {
//         $('section.about').removeClass('active');
//     }
// })