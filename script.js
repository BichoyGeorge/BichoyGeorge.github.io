/* =====================================
   BISHOY PORTFOLIO V2
   script.js
===================================== */

// ================= Sticky Navbar =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.transform = "translateY(10px)";
        header.style.transition = ".3s";

    } else {

        header.style.transform = "translateY(0px)";

    }

});

// ================= Animated Stats =================

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".stats");

    if (!section) return;

    if (window.scrollY >= section.offsetTop - 400 && !started) {

        counters.forEach(counter => {

            let target = parseInt(counter.innerText);

            let count = 0;

            let speed = target / 40;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            }

            update();

        });

        started = true;

    }

});

// ================= Fade Animation =================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".about-card,.stat-card").forEach(el => {

    observer.observe(el);

});

// ================= Cursor Effect =================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

});

// ================= Back To Top =================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("active");

    } else {

        topBtn.classList.remove("active");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ================= Hero Animation =================

const hero = document.querySelector(".hero");

window.addEventListener("load",()=>{

    hero.classList.add("loaded");

});

// ================= Dark Mode =================

const darkBtn = document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.className="dark-btn";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

}
