// JavaScript for Luxury Escape Hotel Website

// Language Translations
const translations = {
    en: {
        // Page Title
        page_title: "Sea Charm - Where Luxury Meets Nature",
        
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_rooms: "Rooms",
        nav_facilities: "Facilities",
        nav_reviews: "Reviews",
        nav_blog: "Blog",
        nav_contact: "Contact",
        
        // Hero Section
        hero_subtitle: "Where Luxury Meets Nature", 
        hero_book_now: "Book Now",
        
        // About Section
        about_title: "About Us",
        stat_guests: "Happy Guests",
        stat_experience: "Years Experience",
        stat_rooms: "Rooms",
        about_description: "Experience the perfect blend of luxury and nature at our exclusive resort. We provide world-class amenities and exceptional service in a breathtaking natural setting.",
        
        // Rooms Section
        rooms_title: "Our Room",
        room_grand_title: "The Grand Room",
        room_grand_desc: "Spacious and elegantly designed with premium amenities and stunning views of the resort grounds.",
        room_premier_title: "Premier Suite",
        room_premier_desc: "Ultimate luxury with separate living area and exclusive concierge service for discerning guests.",
        room_royal_title: "Royal Comfort",
        room_royal_desc: "Perfect blend of comfort and luxury with modern amenities and personalized service.",
        room_executive_title: "Executive Retreat",
        room_executive_desc: "Business-friendly accommodation with executive lounge access and premium facilities.",
        
        // Event Section
        event_title: "Event",
        event_description: "Transform your special occasions into unforgettable memories. Our elegant venues and professional event planning team ensure every detail is perfect.",
        event_feature_1: "Professional event planning and coordination",
        event_feature_2: "Customized catering and menu options", 
        event_feature_3: "State-of-the-art audiovisual equipment",
        event_feature_4: "Flexible venue configurations",
        
        // Facilities Section
        facilities_title: "Hotel Facilities",
        facility_pool_title: "Pool",
        facility_pool_desc: "Olympic-size swimming pool with poolside service",
        facility_spa_title: "Spa",
        facility_spa_desc: "Full-service spa for ultimate relaxation",
        facility_restaurant_title: "Restaurant",
        facility_restaurant_desc: "Fine dining with international cuisine",
        facility_gym_title: "Gym",
        facility_gym_desc: "State-of-the-art fitness center",
        facility_spa_overlay_title: "Spa",
        facility_spa_overlay_desc: "Rejuvenate your body and mind with our premium spa treatments",
        facility_restaurant_overlay_title: "Restaurant",
        facility_restaurant_overlay_desc: "Experience culinary excellence with our world-class chefs",
        
        // Reviews Section
        reviews_title: "Guest Review",
        review_sarah: '"Absolutely stunning resort! The service was impeccable and the views were breathtaking. Every detail was perfect. Can\'t wait to return!"',
        review_michael: '"Perfect getaway destination. The staff went above and beyond to make our stay memorable. Luxury at its finest!"',
        review_emma: '"An unforgettable experience! The attention to detail and personalized service exceeded all expectations."',
        review_david: '"Outstanding resort with world-class amenities. The perfect blend of luxury and natural beauty."',
        
        // Blog Section
        blog_title: "Blog Insights",
        blog_view_all: "View All",
        blog_post_1_title: "10 Tips for Luxury Travel",
        blog_post_1_excerpt: "Discover the secrets to making your luxury travel experience truly unforgettable with our expert tips.",
        blog_post_2_title: "Wellness & Spa Treatments",
        blog_post_2_excerpt: "Explore our comprehensive range of rejuvenating spa treatments and wellness programs.",
        blog_post_3_title: "Local Attractions Guide",
        blog_post_3_excerpt: "Discover the best attractions and activities in the beautiful surroundings of our resort.",
        blog_read_more: "Read More",
        
        // Booking Section
        booking_title: "Book A Room",
        booking_description: "Experience the ultimate in luxury and comfort. Book your perfect getaway today and create memories that will last a lifetime.",
        booking_checkin: "Check-in",
        booking_checkout: "Check-out",
        booking_adults: "Adults",
        booking_children: "Children",
        booking_select: "Select",
        booking_1_adult: "1 Adult",
        booking_2_adults: "2 Adults", 
        booking_3_adults: "3 Adults",
        booking_4_adults: "4 Adults",
        booking_0_children: "0 Children",
        booking_1_child: "1 Child",
        booking_2_children: "2 Children",
        booking_3_children: "3 Children",
        booking_book_now: "Book Now",
        
        // Contact Section
        contact_title: "Connect With Us",
        contact_get_in_touch: "Get In Touch",
        contact_address: "123 Paradise Island, Tropical Bay, TB 12345",
        contact_phone: "+1 (555) 123-4567",
        contact_email: "info@seacharm.com",
        contact_form_name: "Your Name",
        contact_form_email: "Your Email",
        contact_form_message: "Your Message",
        contact_form_send: "Send Message",
        
        // Gallery Section
        gallery_title: "Explore Our Gallery",
        
        // Footer Section
        footer_description: "Where luxury meets nature. Experience the perfect blend of comfort, elegance, and natural beauty at our exclusive resort.",
        footer_quick_links: "Quick Links",
        footer_services: "Services",
        footer_spa: "Spa & Wellness",
        footer_dining: "Fine Dining",
        footer_events: "Events",
        footer_concierge: "Concierge",
        footer_newsletter: "Newsletter",
        footer_newsletter_desc: "Subscribe to get special offers and updates",
        footer_email_placeholder: "Your email",
        footer_subscribe: "Subscribe",
        footer_copyright: "© 2024 Sea Charm. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service"
    },
    vi: {
        // Page Title
        page_title: "Sea Charm - Nơi Xa Hoa Gặp Gỡ Thiên Nhiên",
        
        // Navigation
        nav_home: "Trang Chủ",
        nav_about: "Giới Thiệu",
        nav_rooms: "Phòng",
        nav_facilities: "Tiện Ích",
        nav_reviews: "Đánh Giá",
        nav_blog: "Blog",
        nav_contact: "Liên Hệ",
        
        // Hero Section
        hero_subtitle: "Nơi Xa Hoa Gặp Gỡ Thiên Nhiên",
        hero_book_now: "Đặt Phòng",
        
        // About Section
        about_title: "Giới Thiệu",
        stat_guests: "Khách Hài Lòng",
        stat_experience: "Năm Kinh Nghiệm",
        stat_rooms: "Phòng",
        about_description: "Trải nghiệm sự kết hợp hoàn hảo giữa sự xa hoa và thiên nhiên tại khu nghỉ dưỡng độc quyền của chúng tôi. Chúng tôi cung cấp các tiện nghi đẳng cấp thế giới và dịch vụ đặc biệt trong khung cảnh thiên nhiên nước hút.",
        
        // Rooms Section
        rooms_title: "Phòng Của Chúng Tôi",
        room_grand_title: "Phòng Grand",
        room_grand_desc: "Rộng rãi và được thiết kế trang nhã với các tiện nghi cao cấp và tầm nhìn tuyệt đẹp ra khu nghỉ dưỡng.",
        room_premier_title: "Phòng Premier Suite",
        room_premier_desc: "Xa hoa tối đa với khu vực sinh hoạt riêng biệt và dịch vụ quản gia độc quyền cho khách khách hàng sành điệu.",
        room_royal_title: "Phòng Royal Comfort",
        room_royal_desc: "Sự kết hợp hoàn hảo giữa sự thoải mái và xa hoa với các tiện nghi hiện đại và dịch vụ cá nhân hóa.",
        room_executive_title: "Phòng Executive Retreat",
        room_executive_desc: "Chỗ ở thân thiện với doanh nhân với quyền truy cập phòng chờ điều hành và các tiện ích cao cấp.",
        
        // Event Section
        event_title: "Sự Kiện",
        event_description: "Biến những dịp đặc biệt của bạn thành những kỷ niệm khó quên. Các địa điểm trang nhã và đội ngũ lập kế hoạch sự kiện chuyên nghiệp của chúng tôi đảm bảo mọi chi tiết đều hoàn hảo.",
        event_feature_1: "Lập kế hoạch và phối hợp sự kiện chuyên nghiệp",
        event_feature_2: "Tùy chọn phục vụ và thực đơn tùy chỉnh",
        event_feature_3: "Thiết bị nghe nhìn tiên tiến",
        event_feature_4: "Cấu hình địa điểm linh hoạt",
        
        // Facilities Section
        facilities_title: "Tiện Ích Khách Sạn",
        facility_pool_title: "Hồ Bơi",
        facility_pool_desc: "Hồ bơi cỡ Olympic với dịch vụ bên hồ bơi",
        facility_spa_title: "Spa",
        facility_spa_desc: "Spa đầy đủ dịch vụ để thư giãn tối đa",
        facility_restaurant_title: "Nhà Hàng",
        facility_restaurant_desc: "Ẩm thực cao cấp với món ăn quốc tế",
        facility_gym_title: "Phòng Gym",
        facility_gym_desc: "Trung tâm thể dục hiện đại",
        facility_spa_overlay_title: "Spa",
        facility_spa_overlay_desc: "Làm trẻ hóa cơ thể và tinh thần với các liệu pháp spa cao cấp của chúng tôi",
        facility_restaurant_overlay_title: "Nhà Hàng",
        facility_restaurant_overlay_desc: "Trải nghiệm sự xuất sắc ẩm thực với các đầu bếp đẳng cấp thế giới của chúng tôi",
        
        // Reviews Section
        reviews_title: "Đánh Giá Khách Hàng",
        review_sarah: '"Khu nghỉ dưỡng tuyệt đẹp! Dịch vụ hoàn hảo và cảnh quan ngoạn mục. Mọi chi tiết đều hoàn hảo. Không thể chờ để quay lại!"',
        review_michael: '"Điểm đến nghỉ dưỡng hoàn hảo. Nhân viên đã vượt xa mong đợi để làm cho kỳ nghỉ của chúng tôi đáng nhớ. Xa hoa ở đẳng cấp cao nhất!"',
        review_emma: '"Một trải nghiệm khó quên! Sự chú ý đến từng chi tiết và dịch vụ cá nhân hóa vượt quá mọi mong đợi."',
        review_david: '"Khu nghỉ dưỡng xuất sắc với các tiện nghi đẳng cấp thế giới. Sự kết hợp hoàn hảo giữa xa hoa và vẻ đẹp tự nhiên."',
        
        // Blog Section
        blog_title: "Thông Tin Blog",
        blog_view_all: "Xem Tất Cả",
        blog_post_1_title: "10 Mẹo Du Lịch Xa Hoa",
        blog_post_1_excerpt: "Khám phá bí mật để làm cho trải nghiệm du lịch xa hoa của bạn thực sự khó quên với các mẹo chuyên gia của chúng tôi.",
        blog_post_2_title: "Chăm Sóc Sức Khỏe & Spa",
        blog_post_2_excerpt: "Khám phá dãy các liệu pháp spa làm trẻ hóa và chương trình chăm sóc sức khỏe toàn diện của chúng tôi.",
        blog_post_3_title: "Hướng Dẫn Điểm Tham Quan",
        blog_post_3_excerpt: "Khám phá những điểm tham quan và hoạt động tuyệt nhất trong khung cảnh đẹp xung quanh khu nghỉ dưỡng của chúng tôi.",
        blog_read_more: "Đọc Thêm",
        
        // Booking Section
        booking_title: "Đặt Phòng",
        booking_description: "Trải nghiệm sự xa hoa và thoải mái tối đa. Đặt kỳ nghỉ hoàn hảo của bạn ngay hôm nay và tạo ra những kỷ niệm sẽ tồn tại suốt đời.",
        booking_checkin: "Nhận Phòng",
        booking_checkout: "Trả Phòng",
        booking_adults: "Người Lớn",
        booking_children: "Trẻ Em",
        booking_select: "Chọn",
        booking_1_adult: "1 Người Lớn",
        booking_2_adults: "2 Người Lớn",
        booking_3_adults: "3 Người Lớn",
        booking_4_adults: "4 Người Lớn",
        booking_0_children: "0 Trẻ Em",
        booking_1_child: "1 Trẻ Em",
        booking_2_children: "2 Trẻ Em",
        booking_3_children: "3 Trẻ Em",
        booking_book_now: "Đặt Ngay",
        
        // Contact Section
        contact_title: "Kết Nối Với Chúng Tôi",
        contact_get_in_touch: "Liên Hệ",
        contact_address: "123 Đảo Thiên Đường, Vịnh Nhiệt Đới, TB 12345",
        contact_phone: "+84 (555) 123-4567",
        contact_email: "info@seacharm.com",
        contact_form_name: "Tên Của Bạn",
        contact_form_email: "Email Của Bạn",
        contact_form_message: "Tin Nhắn Của Bạn",
        contact_form_send: "Gửi Tin Nhắn",
        
        // Gallery Section
        gallery_title: "Khám Phá Thư Viện Ảnh",
        
        // Footer Section
        footer_description: "Nơi xa hoa gặp gỡ thiên nhiên. Trải nghiệm sự kết hợp hoàn hảo giữa sự thoải mái, trang nhã và vẻ đẹp tự nhiên tại khu nghỉ dưỡng độc quyền của chúng tôi.",
        footer_quick_links: "Liên Kết Nhanh",
        footer_services: "Dịch Vụ",
        footer_spa: "Spa & Chăm Sóc Sức Khỏe",
        footer_dining: "Ẩm Thực Cao Cấp",
        footer_events: "Sự Kiện",
        footer_concierge: "Dịch Vụ Tiếp Tân",
        footer_newsletter: "Bản Tin",
        footer_newsletter_desc: "Đăng ký để nhận các ưu đãi đặc biệt và cập nhật",
        footer_email_placeholder: "Email của bạn",
        footer_subscribe: "Đăng Ký",
        footer_copyright: "© 2024 Sea Charm. Tất cả quyền được bảo lưu.",
        footer_privacy: "Chính Sách Bảo Mật",
        footer_terms: "Điều Khoản Dịch Vụ"
    }
};

// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Language switching function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateLanguageDisplay();
    translatePage();
}

// Update language display in dropdown
function updateLanguageDisplay() {
    const currentLangElement = document.getElementById('currentLang');
    if (currentLangElement) {
        currentLangElement.textContent = currentLanguage.toUpperCase();
    }
    
    // Update document language attribute
    document.documentElement.lang = currentLanguage;
}

// Translate page content
function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.type === 'email') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.hasAttribute('data-translate-placeholder')) {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Update page title
    if (translations[currentLanguage]['page_title']) {
        document.title = translations[currentLanguage]['page_title'];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    updateLanguageDisplay();
    translatePage();
    
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initForms();
    initGallery();
    initCounters();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu close on link click
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navToggler = document.querySelector('.navbar-toggler');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navToggler.click();
            }
        });
    });
}

// Scroll effects
function initScrollEffects() {
    // Scroll to top button
    createScrollToTopButton();
    
    // Parallax effect for hero images
    const heroImages = document.querySelectorAll('.hero-images img');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        heroImages.forEach(img => {
            img.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Create scroll to top button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.room-item, .facility-card, .review-card, .blog-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroImages = document.querySelector('.hero-images');

    if (heroTitle) {
        setTimeout(() => heroTitle.style.opacity = '1', 100);
    }
    if (heroSubtitle) {
        setTimeout(() => heroSubtitle.style.opacity = '1', 300);
    }
    if (heroImages) {
        setTimeout(() => heroImages.style.opacity = '1', 500);
    }
}

// Form handling
function initForms() {
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Booking form
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingForm);
    }

    // Newsletter form
    const newsletterForm = document.querySelector('footer .input-group');
    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector('button');
        subscribeBtn.addEventListener('click', handleNewsletterSubscription);
    }
}

// Contact form handler
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value.trim();
    const email = e.target.querySelector('input[type="email"]').value.trim();
    const message = e.target.querySelector('textarea').value.trim();

    // Validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    e.target.reset();
}

// Booking form handler
function handleBookingForm(e) {
    e.preventDefault();
    
    const checkin = e.target.querySelector('input[type="date"]:first-of-type').value;
    const checkout = e.target.querySelector('input[type="date"]:last-of-type').value;
    const adults = e.target.querySelector('select').value;

    // Validation
    if (!checkin || !checkout || !adults) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Date validation
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkinDate < today) {
        showNotification('Check-in date cannot be in the past.', 'error');
        return;
    }

    if (checkoutDate <= checkinDate) {
        showNotification('Check-out date must be after check-in date.', 'error');
        return;
    }

    // Simulate booking
    showNotification('Booking request submitted successfully! We will contact you shortly.', 'success');
    e.target.reset();
}

// Newsletter subscription handler
function handleNewsletterSubscription() {
    const emailInput = document.querySelector('footer input[type="email"]');
    const email = emailInput.value.trim();

    if (!email) {
        showNotification('Please enter your email address.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    showNotification('Thank you for subscribing to our newsletter!', 'success');
    emailInput.value = '';
}

// Gallery functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
}

// Lightbox functionality
function openLightbox(src, alt) {
    // Remove existing lightbox
    const existingLightbox = document.querySelector('.lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay">
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}" class="lightbox-image">
                <button class="lightbox-close">&times;</button>
            </div>
        </div>
    `;

    // Add styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const img = lightbox.querySelector('.lightbox-image');
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
    `;

    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        background: none;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
        z-index: 10000;
    `;

    document.body.appendChild(lightbox);

    // Animate in
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);

    // Close functionality
    const closeLightbox = () => {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            if (lightbox.parentElement) {
                lightbox.remove();
            }
        }, 300);
    };

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === closeBtn) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function handleEscape(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', handleEscape);
        }
    });
}

// Counter animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const text = element.textContent;
        const target = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/[\d\s]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 40);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
        border-radius: 8px;
        padding: 15px 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        min-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        color: inherit;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Close functionality
    const closeNotification = () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    };

    closeBtn.addEventListener('click', closeNotification);

    // Auto-remove after 5 seconds
    setTimeout(closeNotification, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
    
    .hero-title,
    .hero-subtitle,
    .hero-images {
        opacity: 0;
        transition: opacity 0.6s ease;
    }
    
    .notification {
        font-family: inherit;
    }
    
    .lightbox {
        cursor: pointer;
    }
    
    .lightbox-content {
        position: relative;
        cursor: default;
    }
`;
document.head.appendChild(style);

// Make changeLanguage function globally available
window.changeLanguage = changeLanguage; 