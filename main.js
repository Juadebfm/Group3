const toggleBtn = document.getElementsByClassName("toggle_btn")[0];
const navList = document.getElementsByClassName("navList")[0];

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
