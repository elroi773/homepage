// 스크롤 시 각 trait 요소들이 부드럽게 등장하는 스크립트
document.addEventListener("DOMContentLoaded", () => {
    const traits = document.querySelectorAll(".trait");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    traits.forEach(trait => {
        observer.observe(trait);
    });
});
