const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // スクロール位置に応じてヘッダーの透明度を調整
  const opacity = Math.min(0.8, scrollPosition / 300); // 0.8 が最大の透明度
  header.style.backgroundColor = `rgba(250, 250, 250, ${opacity})`;
});

///////////////////////////
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  menu.style.right = menu.style.right === "0px" ? "-250px" : "0px";
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
});

overlay.addEventListener("click", () => {
  menu.style.right = "-250px";
  overlay.style.display = "none";
});
////////////////////////////
