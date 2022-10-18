// Carousel starts
const track = document.querySelector('.images')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const slides = Array.from(track.children)
const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`
})

nextBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.active')
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.indexOf(nextSlide)
    showArrow(nextIndex)
    moveToSlide(currentSlide, nextSlide)
})

prevBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.active')
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.indexOf(prevSlide)
    showArrow(prevIndex)
    moveToSlide(currentSlide, prevSlide)
})

function moveToSlide(current, target) {
    if (target === null) return;
    track.style.transform = `translateX(-${target.style.left})`
    current.classList.remove('active')
    target.classList.add('active')
}

function showArrow(targetIndex) {
    if (targetIndex === 0) {
        prevBtn.classList.add('hide')
        nextBtn.classList.remove('hide')
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('hide')
        nextBtn.classList.add('hide')
    } else {
        prevBtn.classList.remove('hide')
        nextBtn.classList.remove('hide')
    }
}