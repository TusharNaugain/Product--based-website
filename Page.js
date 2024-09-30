// Carousel functionality
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
        dots[index].classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Filter and Sort functionality
const filterBtn = document.querySelector('.filter-btn');
const sortSelect = document.getElementById('sort-options');
const productCards = document.querySelectorAll('.product-card');

// Dummy filtering function (expand as per your needs)
filterBtn.addEventListener('click', () => {
    const selectedFilter = document.querySelector('.filter select').value;
    productCards.forEach(card => {
        card.style.display = selectedFilter === 'all' ? 'block' : 'none';
    });
});

// Sorting functionality (you can expand this function to add different sorting options)
sortSelect.addEventListener('change', () => {
    const sortValue = sortSelect.value;
    if (sortValue === 'best-selling') {
        // Implement the sorting logic
        console.log('Sorting by best-selling');
    }
});

// View All button functionality for Best Price Section
const viewAllBtn = document.querySelector('.view-all');
viewAllBtn.addEventListener('click', () => {
    window.location.href = '#shop'; // Scrolls to the shop section
});

// Buy Now buttons functionality
const buyNowButtons = document.querySelectorAll('.buy-now-btn, .buy-now');
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
        updateCartCount();
    });
});

// Update Cart Count functionality
const cartCountElement = document.querySelector('.cart-count');
let cartCount = 0;

function updateCartCount() {
    cartCount++;
    cartCountElement.textContent = cartCount;
}

// Scroll Down Indicator functionality (Optional)
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollIndicator.style.display = 'none'; // Hide scroll indicator after user scrolls
    } else {
        scrollIndicator.style.display = 'block'; // Show scroll indicator at top
    }
});
