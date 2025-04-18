document.addEventListener("DOMContentLoaded", () => {
  console.log("Profile page loaded.");
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // 이동 속도 조절
  container.scrollLeft = scrollLeft - walk;
});
