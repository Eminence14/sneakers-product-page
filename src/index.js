// Carousel starts
const track = document.querySelector(".images");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

nextBtn.addEventListener("click", () => {
    const currentSlide = track.querySelector(".active");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.indexOf(nextSlide);
    const currentThumb = thumbnails.querySelector('.active')
    const nextThumb = currentThumb.nextElementSibling;

    showArrow(nextIndex);
    moveToSlide(currentSlide, nextSlide);
    changeThumbnail(currentThumb, nextThumb)
});

prevBtn.addEventListener("click", () => {
    const currentSlide = track.querySelector(".active");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.indexOf(prevSlide);
    const currentThumb = thumbnails.querySelector('.active')
    const prevThumb = currentThumb.previousElementSibling;

    showArrow(prevIndex);
    moveToSlide(currentSlide, prevSlide);
    changeThumbnail(currentThumb, prevThumb)
});

function moveToSlide(current, target) {
    if (target === null) return;
    track.style.transform = `translateX(-${target.style.left})`;
    current.classList.remove("active");
    target.classList.add("active");
}

function showArrow(targetIndex) {
    if (targetIndex === 0) {
        prevBtn.classList.add("hide");
        nextBtn.classList.remove("hide");
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove("hide");
        nextBtn.classList.add("hide");
    } else {
        prevBtn.classList.remove("hide");
        nextBtn.classList.remove("hide");
    }
}

// Hamburger Section
const openMenuBtn = document.querySelector(".open_menu");
const closeMenuBtn = document.querySelector(".close_menu");
const overlay = document.querySelector("#overlay");
const nav = document.querySelector("nav");

function openMenu() {
    openMenuBtn.classList.toggle("active");
    closeMenuBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    nav.classList.toggle("active");
}
openMenuBtn.addEventListener("click", () => {
    openMenu()
});
closeMenuBtn.addEventListener("click", () => {
    openMenu()
});


// Add to Cart Section
let tracker = 0;
const itemsNum = document.querySelector('.items_number')
const plusItem = document.querySelector('.plus')
const minusItem = document.querySelector('.minus')
const addToCart = document.querySelector('.add_to_cart')
const itemsAdded = document.querySelector('.items_added')
const openCartIcon = document.querySelector('.cart')
const checkoutCard = document.querySelector('.checkout_card')
const checkoutBody = document.querySelector('.checkout_body')
const checkoutBtn = document.querySelector('.checkout_btn')
const header = document.querySelector('header')

plusItem.addEventListener('click', () => {
    tracker++;
    itemsNum.textContent = tracker;
})

minusItem.addEventListener('click', () => {
    tracker--;
    if (tracker < 0) {
        tracker = 0;
        return;
    }
    itemsNum.textContent = tracker;
})

addToCart.addEventListener('click', () => {
    itemsAdded.textContent = tracker;
    checkoutState()
})
addToCart.click()

openCartIcon.addEventListener('click', () => {
    checkoutCard.classList.toggle('active')
    overlay.classList.toggle("active");
    header.classList.toggle('active')
})

checkoutBtn.addEventListener('click', () => {
    openCartIcon.click()
})

function checkoutState() {
    if (tracker === 0) {
        checkoutBody.innerHTML = `<span class='empty_cart'>Your cart is empty</span>`
        checkoutBtn.classList.add('disabled')
    } else {
        checkoutBody.innerHTML = `
<div class="cb_image">
    <img src="./images/image-product-1-thumbnail.jpg" alt="">
</div>
<div class="cb_description">
    <span class="cb_desc_head">Autumn Limited Edition...</span>
    <span class="cb_desc_pricing">$125.00 &times; <span class="cb_desc_items">${tracker}</span></span>
    <span class="cb_desc_amount">$${tracker * 125}.00</span>
</div>
<img src="./images/icon-delete.svg" alt="" class="delete_cart">
        `
        const delCheckout = document.querySelector('.delete_cart')
        delCheckout.addEventListener('click', () => {
            tracker = 0;
            addToCart.click()
            itemsNum.textContent = tracker;
        })
        checkoutBtn.classList.remove('disabled')
    }
}

// Tablet Carousel
const thumbnails = document.querySelector('.thumbnails')
const thumbnailImages = Array.from(thumbnails.children)
thumbnails.addEventListener('click', e => {
    const targetThumb = e.target.closest('img');
    
    if (!targetThumb) return;
    const targetIndex = thumbnailImages.indexOf(e.target)
    const currentSlide = track.querySelector(".active");
    const targetSlide = slides[targetIndex]
    const currentThumb = thumbnails.querySelector('.active')

    changeThumbnail(currentThumb, targetThumb)
    moveToSlide(currentSlide, targetSlide)
    showArrow(targetIndex)
})


function changeThumbnail(current, target) {
    current.classList.remove('active')
    target.classList.add('active')
}
