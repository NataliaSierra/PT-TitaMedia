// Fetch to get the content of the JSON file found in the Mock folder
async function getDataMock() {
  try {
    const response = await fetch("../Mock/mockData.json");
    const dataResponse = await response.json();

    dataResponse?.forEach((image) => {
      const masonryItem = document.createElement("div");
      masonryItem.className = "masonry-item";

      const imgElement = document.createElement("img");
      imgElement.src = image.URL;
      imgElement.alt = image.alt;

      masonryItem.style.gridRowEnd = `span ${image.rows}`;

      masonryItem.appendChild(imgElement);
      masonryContainer.appendChild(masonryItem);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
getDataMock();

const masonryContainer = document.getElementById("masonryContainer");

// Mobile Menu
const menuBtnMobile = document.querySelector(".menu-btn-mobile");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");

menuBtnMobile.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
