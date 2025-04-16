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

// 모든 fade-in 요소 선택
const fadeEls = document.querySelectorAll('.fade-in');

// Intersection Observer 사용해서 화면에 보이면 show 클래스 추가
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3 // 요소가 30% 이상 보이면 실행
});

fadeEls.forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", function() {
    const applyButton = document.querySelector(".button"); // 기존의 Apply 버튼
    const modal = document.getElementById("applyModal");
    const modalClose = document.getElementById("modalClose");
  
    // Apply 버튼 클릭 시 모달 활성화
    applyButton.addEventListener("click", function() {
      modal.classList.add("show");
    });
  
    // 닫기 버튼 클릭 시 모달 닫기
    modalClose.addEventListener("click", function() {
      modal.classList.remove("show");
    });
  
    // 모달 배경 클릭 시 닫기 (내부 콘텐츠 외부 영역 클릭 시)
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
      