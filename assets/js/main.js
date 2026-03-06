document.addEventListener("DOMContentLoaded", () => {
    console.log("%c[SISTEM OK] %cAntarmuka Modern LMS Linux Berhasil Diinisialisasi.", "color: #10b981; font-weight: bold;", "color: #f8fafc;");

    // ==========================================
    // 1. Menu Navigasi Hamburger (Mobile)
    // ==========================================
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-link-item");

    if (mobileMenuBtn && navLinks) {
        // Toggle class 'active' saat tombol hamburger diklik
        mobileMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Tutup menu otomatis jika salah satu link di dalamnya diklik
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // ==========================================
    // 2. Efek Mesin Tik (Typewriter) untuk Hero Section
    // ==========================================
    const textElement = document.getElementById("typewriter");
    const textToType = "Bangun Ekosistemmu.";
    let index = 0;
    const speed = 100; // Kecepatan ngetik

    const cursorElement = document.createElement("span");
    cursorElement.classList.add("cursor");
    cursorElement.innerHTML = "&nbsp;";

    if (textElement) {
        function typeWriter() {
            if (index < textToType.length) {
                textElement.innerHTML += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            } else {
                textElement.appendChild(cursorElement);
            }
        }
        setTimeout(() => {
            typeWriter();
        }, 800);
    }

    // ==========================================
    // 3. Pengguliran Halus (Smooth Scrolling)
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 4. Animasi Scroll (Intersection Observer API)
    // ==========================================
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                displayScrollElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    });

    scrollElements.forEach((el) => {
        scrollObserver.observe(el);
    });
});