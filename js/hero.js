const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const heroImgDesktop = document.querySelector("#hero");
const heroImgMobile = document.querySelector("#mobile-hero");

const data = [
  {
    mobileImgSrc: "images/mobile-image-hero-1.jpg",
    desktopImgSrc: "images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    mobileImgSrc: "images/mobile-image-hero-2.jpg",
    desktopImgSrc: "images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    mobileImgSrc: "images/mobile-image-hero-3.jpg",
    desktopImgSrc: "images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three  understand what customers want for their home and office.",
  },
];

let currentIndex = 0;

const updateContent = () => {
  const currentItem = data[currentIndex];

  heroImgDesktop.src = currentItem.desktopImgSrc;
  heroImgMobile.src = currentItem.mobileImgSrc;
  title.textContent = currentItem.title;
  description.textContent = currentItem.description;
};

rightBtn.addEventListener("click", () => {
  if (currentIndex < data.length - 1) {
    currentIndex += 1;
    updateContent();
    console.log("HI");
  }
});

leftBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateContent();
  }
});
