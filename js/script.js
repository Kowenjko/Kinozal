let slides = document.querySelectorAll('.slaid'),
    left = document.querySelector('#left'),
    right = document.querySelector('#right'),
    dots = document.querySelectorAll('.dot'),
    boxShort = document.querySelectorAll('.box'),
    textDetail = document.querySelectorAll('.text-detail'),
    buttonDetail = document.querySelectorAll('.detail'),
    buttonHide = document.querySelectorAll('.hide'),
    buttonHideClose = document.querySelectorAll('.hide-2'),
    indexActive = 1,
    prev = 0;
// -----------------------------------------------
showSlides(indexActive);
// -----------------------------------------------
left.addEventListener('click', function () {
    plusSlides(-1);
})
// -----------------------------------------------
right.addEventListener('click', function () {
    plusSlides(1);
})
// -----------------------------------------------
for (let i = 0; i < slides.length; i++) {
    dots[i].addEventListener('click', function () {
        currentSlide(i + 1);
    })

    slides[i].addEventListener('click', function () {
        boxShort[i].style.display = 'block';

    })
    buttonHide[i].addEventListener('click', function () {
        boxShort[i].style.display = 'none';

    })
    buttonDetail[i].addEventListener('click', function () {
        textDetail[i].style.display = 'block';
    })
    buttonHideClose[i].addEventListener('click', function () {
        textDetail[i].style.display = 'none';
    })

}

// -----------------------------------------------

function plusSlides(n) {
    showSlides(indexActive += n);
}
// -----------------------------------------------

function currentSlide(n) {
    showSlides(indexActive = n);
}
// -----------------------------------------------
function showSlides(n) {
    let i;
    if (n > slides.length) { indexActive = 1 }
    if (n < 1) { indexActive = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        boxShort[i].style.display = 'none';
        textDetail[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[indexActive - 1].style.display = "block";
    dots[indexActive - 1].classList.add('active');
}
