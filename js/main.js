// >> The Navigation's Functions:

// ------ Open and close the nav menu Function: 

let toggle_menu = document.querySelector('.toggle_menu');
let nav = document.querySelector('.nav_items');
// let line1 = document.querySelector('.line1');
// let line2 = document.querySelector('.line2');
// let line3 = document.querySelector('.line3');
let open = false;

toggle_menu.addEventListener("click", function(){
  if (open === true) {
    nav.style.display = "none";
    open = false;
  } else {
    nav.style.display = "flex";
    // line1.style.transform = translateY("8px"), rotate ("45deg");
    // line1.style.opacity = 0;
    // line1.style.transform = translateY("-8px"), rotate ("-45deg");
    open = true;
  }
}); 






// ------- Search field (input) Function: 

// let search_icon = document.querySelector('#search-icon');
// let input = document.querySelector('#search-form');
// let search = false;

// search_icon.addEventListener("click", function(){
//   if (search === true) {
//       input.style.display = "none";
//       open = false;
//   } else {
//       input.style.display = "block";
//       open = true;
//   }
// });






// ------- nav active link function:

// --------- scroll to the top Function:

// let scrollUp = document.querySelector('.scroll-up');

// window.onscroll = function () {
//     if (window.scrollY >= 600 ) {
//       scrollUp.style.display = "block";
//     }else {
//       scrollUp.style.display = "none";
//     }
// };

// scrollUp.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   })
// };


// --------- Slider Functions:

// const slider = document.querySelector(".slider");
// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");
// const slides = document.querySelectorAll("#slide");
// const slideIcons = document.querySelectorAll("#s");
// const numberOfSlides = slides.length;
// var slideNumber = 0;

// //image slider next button
// nextBtn.addEventListener("click", () => {
//   slides.forEach((slide) => {
//   slide.classList.remove("active");
//   });
//   slideIcons.forEach((slideIcon) => {
//   slideIcon.classList.remove("active");
//   });

//   slideNumber++;

//   if(slideNumber > (numberOfSlides - 1)){
//   slideNumber = 0;
//   }

//   slides[slideNumber].classList.add("active");
//   slideIcons[slideNumber].classList.add("active");
// });

// //image slider previous button
// prevBtn.addEventListener("click", () => {
//   slides.forEach((slide) => {
//   slide.classList.remove("active"); 
//   });
//   slideIcons.forEach((slideIcon) => {
//   slideIcon.classList.remove("active");
//   });

//   slideNumber--;

//   if(slideNumber < 0){
//   slideNumber = numberOfSlides - 1;
//   }

//   slides[slideNumber].classList.add("active");
//   slideIcons[slideNumber].classList.add("active");
// });

// //image slider autoplay
// var playSlider;

// var repeater = () => {
//   playSlider = setInterval(function(){
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
//   slideIcons.forEach((slideIcon) => {
//     slideIcon.classList.remove("active");
//   });

//   slideNumber++;

//   if(slideNumber > (numberOfSlides - 1)){
//     slideNumber = 0;
//   }

//   slides[slideNumber].classList.add("active");
//   slideIcons[slideNumber].classList.add("active");
//   }, 4000);
// }
// repeater();

// {/* //stop the image slider autoplay on mouseover */}
// slider.addEventListener("mouseover", () => {
//   clearInterval(playSlider);
// });

// //start the image slider autoplay again on mouseout
// slider.addEventListener("mouseout", () => {
//   repeater();
// });


// Testing the files: 
console.log("Hello from js files");

//# sourceMappingURL=main.js.map
