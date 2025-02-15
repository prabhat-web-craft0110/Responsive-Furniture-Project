//code for menu button
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

//code for smooth scrolling
const links = document.querySelectorAll('nav a');

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(link.hash);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

//code for product filter
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // remove active class from all buttons
        filterBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        
        //apply active class on clicked button
        btn.classList.add('active');
        
        // filter product
        const type = btn.getAttribute('data-filter');
        
        products.forEach(function(product) {
            if(type === 'all') {
                product.style.display = 'block';
            } else {
                if(product.getAttribute('data-category') === type) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            }
        });
    });
});

//hover effect on product card
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
//code to add to cart
const buyBtns = document.querySelectorAll('.buy-btn');

buyBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(productName + ' Has been added to cart!');
    });
});

//code of contact form
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    alert(name + ' Your message has been sent! We will contact you soon.');
    this.reset();
});

//javascript of gallery section
const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');

// Filter buttons click event
galleryFilters.forEach(function(filter) {
    filter.addEventListener('click', function() {
        // Remove active class from all buttons
        galleryFilters.forEach(function(btn) {
            btn.classList.remove('active');
        });
        
       // activate the clicked button
        this.classList.add('active');
        
        // filter items
        const filterValue = this.getAttribute('data-filter');
        
        galleryItems.forEach(function(item) {
            if(filterValue === 'all') {
                item.style.display = 'block';
            } else {
                if(item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

//hover effect on gallery items
galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const productName = this.querySelector('h3').textContent;
        const price = this.querySelector('.discounted').textContent;
        alert(`${productName} price of ${price} `);
    });
});