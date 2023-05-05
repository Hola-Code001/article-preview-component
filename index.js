const shareButton = document.getElementById("share-btn");
const shareButtonMobile = document.getElementById("share-btn-mobile");
const shareIcon = document.getElementById("icons");
const cardFooter = document.getElementById("mobile-footer");
const shareMobileButton = document.getElementById("share-btn-mobile");
const closeShareMobile = document.getElementById("close-btn-mobile");
const shareMobile = document.getElementById("share-mobile");

shareButton.addEventListener("click", () => {
  shareIcon.classList.toggle("icon-active");
  shareButton.classList.toggle("active-button");
});

shareButtonMobile.addEventListener("click", () => {
  cardFooter.style.display = "none";
  shareMobile.style.display = "flex";
});

closeShareMobile.addEventListener("click", () => {
  shareMobile.style.display = "none";
  cardFooter.style.display = "flex";
});
