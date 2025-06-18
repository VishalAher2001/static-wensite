let icon = document.querySelector(".menu-icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// $(document).ready(function () {
//   $(".review-grid").slick({
//     dots: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   });
// });

$(document).ready(function () {
  $(".review-grid").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 4, // <-- Show 4 cards
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// $(document).ready(function () {
//   $(".review-img").slick({
//     dots: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: true,
//     slidesToShow: 2, // <-- Show 4 cards
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

function showTab(tabNumber) {
  // Hide all service-content sections
  const contents = document.querySelectorAll(".service-content");
  contents.forEach((content) => (content.style.display = "none"));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Show the selected tab and set active button
  document.getElementById("tab-" + tabNumber).style.display = "flex"; // or block if you prefer
  buttons[tabNumber - 1].classList.add("active");
}

// Optional: show the first tab on page load
window.onload = () => showTab(1);

const buttons = document.querySelectorAll(".tab-btn");
const images = document.querySelectorAll(".image-with-text");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    images.forEach((img) => {
      if (img.getAttribute("data-category") === category) {
        img.classList.add("show");
      } else {
        img.classList.remove("show");
      }
    });
  });
});

// COUNTER CARD

const counters = document.querySelectorAll(".count");
const speed = 97;

counters.forEach((counter) => {
  function updateCount() {
    const target = parseInt(counter.getAttribute("data-target"));
    const current = parseInt(counter.innerText.replace("+", ""));
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = `${current + increment}+`;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = `${target}+`;
    }
  }

  updateCount();
});
