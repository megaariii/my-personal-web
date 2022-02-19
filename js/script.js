// Bg Animation Effect
function bgAnimationItems() {
  const rows = 7,
    cols = 10;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const div = document.createElement("div");
      div.className = `col-${j + 1}`;
      document.querySelector(".bg-animation-effect").appendChild(div);
    }
  }
}
bgAnimationItems();

// Filter Portofolio Items
function filterItems(filterBtn) {
  const selectedCategory = filterBtn.getAttribute("data-filter");
  document.querySelectorAll(".portofolio-item").forEach((item) => {
    const category = item.getAttribute("data-category").split(",");
    if (category.indexOf(selectedCategory) !== -1) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}
// Filter Active Categort Portofolio Items
filterItems(document.querySelector(".portofolio-filter-btn.active"));
