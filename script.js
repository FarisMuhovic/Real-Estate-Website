// hamburger menu
const hamburgerBtn = document.getElementById("hamburger-btn");
const navbar = document.getElementById("navbar");
const houseNavigation = document.getElementById("house-nav");
const userNavigation = document.getElementById("user-nav");
const logo = document.getElementById("logo");
let clickCount = 0;
hamburgerBtn.addEventListener("click", () => {
  if (clickCount == 0) {
    navbar.classList.add("navigation-bar-hamburger");
    houseNavigation.classList.add("user-area-hamburger");
    userNavigation.classList.add("house-business-hamburger");
    logo.classList.add("logo-hamburger");
    clickCount++;
  } else {
    navbar.classList.remove("navigation-bar-hamburger");
    houseNavigation.classList.remove("user-area-hamburger");
    userNavigation.classList.remove("house-business-hamburger");
    logo.classList.remove("logo-hamburger");
    clickCount = 0;
  }
});
// carousel for images
const banner = document.getElementById("banner");
const arrayOfImages = [
  "https://images.alphacoders.com/435/435117.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg",
  "https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/4:3/w_1024,h_768,c_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg",
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1",
  "https://cdn.vox-cdn.com/thumbor/frFQQhOsxl8DctGjkR8OLHpdKMs=/0x0:3686x2073/1200x800/filters:focal(1549x743:2137x1331)/cdn.vox-cdn.com/uploads/chorus_image/image/68976842/House_Tour_Liverman_3D6A3138_tour.0.jpg",
  "https://sarajevotimes.com/wp-content/uploads/2020/08/prefabricated-house.jpg",
  "https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg",
];

let counter = 0;
setInterval(() => {
  if (counter < arrayOfImages.length - 1) {
    counter++;
    banner.style.backgroundImage = "url(" + arrayOfImages[counter] + ")";
  } else {
    counter = 0;
    banner.src = arrayOfImages[counter];
  }
}, 5000);
