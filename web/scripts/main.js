// JavaScript cho slider hình ảnh
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    document.querySelector('.slides').style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

// Hiển thị slide đầu tiên ngay từ đầu
showSlides();

// Tùy chọn: Tự động chuyển đổi mỗi 3 giây
setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% của section xuất hiện trong khung nhìn sẽ kích hoạt callback
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // Loại bỏ lớp 'active' khi phần tử không còn trong khung nhìn
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


