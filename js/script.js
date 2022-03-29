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

// Body Scrolling
function toggleBodyScrolling() {
  document.body.classList.toggle("hide-scrolling");
}

// Filter Portofolio Items
const filterBtnsContainer = document.querySelector(".portofolio-filter");
let portofolioItems;
filterBtnsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("portofolio-filter-btn") &&
    !e.target.classList.contains("active")
  ) {
    filterBtnsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    toggleBodyScrolling();
    document.querySelector(".filter-status").classList.add("active");
    document.querySelector(
      ".filter-status p"
    ).innerHTML = `Filtering <span>${e.target.innerHTML}</span> Works`;
    setTimeout(() => {
      filterItems(e.target);
    }, 400);
    setTimeout(() => {
      document.querySelector(".filter-status").classList.remove("active");
      toggleBodyScrolling();
    }, 800);
  }
});

function filterItems(filterBtn) {
  const selectedCategory = filterBtn.getAttribute("data-filter");
  document.querySelectorAll(".portofolio-item").forEach((item) => {
    const category = item.getAttribute("data-category").split(",");
    if (
      category.indexOf(selectedCategory) !== -1 ||
      selectedCategory === "all"
    ) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
  portofolioItems = document.querySelectorAll(".portofolio-item.show");
  console.log(portofolioItems);
}
// Filter Active Categort Portofolio Items
filterItems(document.querySelector(".portofolio-filter-btn.active"));

// Portofolio Items Details Popup
let portofolioItemIndex;
document.addEventListener("click", (e) => {
  if (e.target.closest(".portofolio-item")) {
    const currentItem = e.target.closest(".portofolio-item");
    portofolioItemIndex = Array.from(portofolioItems).indexOf(currentItem);
    togglePopup();
    portofolioItemsDetails();
    updateNextPrevItem();
  }
});

function togglePopup() {
  document.querySelector(".portofolio-popup").classList.toggle("open");
  toggleBodyScrolling();
}
document.querySelector(".pp-close-btn").addEventListener("click", togglePopup);

function portofolioItemsDetails() {
  document.querySelector(".pp-thumbnail img").src =
    portofolioItems[portofolioItemIndex].querySelector("img").src;

  document.querySelector(".pp-header h3").innerHTML = portofolioItems[
    portofolioItemIndex
  ].querySelector(".portofolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portofolioItems[
    portofolioItemIndex
  ].querySelector(".portofolio-item-details").innerHTML;

  document.querySelector(".pp-counter").innerHTML = `${
    portofolioItemIndex + 1
  } of ${portofolioItems.length} ( <span title="category">${
    document.querySelector(".portofolio-filter-btn.active").innerHTML
  }</span>)`;
}

function updateNextPrevItem() {
  if (portofolioItemIndex !== 0) {
    document.querySelector(".pp-footer-left").classList.remove("hidden");
    document.querySelector(".pp-footer-left h3").innerHTML =
      portofolioItems[portofolioItemIndex - 1].querySelector("h3").innerHTML;

    document.querySelector(".pp-footer-left img").src =
      portofolioItems[portofolioItemIndex - 1].querySelector("img").src;
  } else {
    document.querySelector(".pp-footer-left").classList.add("hidden");
  }

  if (portofolioItemIndex !== portofolioItems.length - 1) {
    document.querySelector(".pp-footer-right").classList.remove("hidden");
    document.querySelector(".pp-footer-right h3").innerHTML =
      portofolioItems[portofolioItemIndex + 1].querySelector("h3").innerHTML;

    document.querySelector(".pp-footer-right img").src =
      portofolioItems[portofolioItemIndex + 1].querySelector("img").src;
  } else {
    document.querySelector(".pp-footer-right").classList.add("hidden");
  }
}

document.querySelector(".pp-prev-btn").addEventListener("click", () => {
  changePortofolioItem("prev");
});
document.querySelector(".pp-next-btn").addEventListener("click", () => {
  changePortofolioItem("next");
});

function changePortofolioItem(direction) {
  if (direction == "prev") {
    portofolioItemIndex--;
  } else {
    portofolioItemIndex++;
  }
  document.querySelector(".pp-overlay").classList.add(direction);
  setTimeout(() => {
    document.querySelector(".pp-inner").scrollTo(0, 0);
    portofolioItemsDetails();
    updateNextPrevItem();
  }, 400);
  setTimeout(() => {
    document.querySelector(".pp-overlay").classList.remove(direction);
  }, 1000);
}

// Toggle Contact Form
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-contact-form-btn")) {
    document.querySelector(".contact-form").classList.toggle("open");
    toggleBodyScrolling;
  }
});
