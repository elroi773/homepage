import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.6.0/+esm";
animate(".head1 span", { opacity: [0, 1], y: [50, 0] }, { delay: stagger(0.1), ease: "linear", duration: 1 });


const two_text = document.querySelector(".two_text");

const textmain = () => {
    setTimeout(() => {
        two_text.textContent = "프로그래밍";
    }, 0);
    setTimeout(() => {
        two_text.textContent = "영화블로그";
    }, 3000);
    setTimeout(() => {
        two_text.textContent = "코딩포스팅";
    }, 6000);
};

textmain();
setInterval(textmain, 9000);

const container = document.querySelector('.scroll-container');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // 이동 속도 조절
    container.scrollLeft = scrollLeft - walk;
});