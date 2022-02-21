(function () {
  const slides = document.querySelectorAll(".slide");
  let carouselCount = 0;

  const leftButton = document.querySelector("#leftButton");
  const rightButton = document.querySelector("#rightButton");

  /***********/
  const slider = () => {
    switch (carouselCount) {
      case -100:
        carouselCount = 200;
        break;
      case 300:
        carouselCount = 0;
        break;
      default:
        break;
    }

    // console.log(carouselCount);

    for (let i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute(
        "style",
        "transform:translateX(-" + carouselCount + "%)"
      );
    }
  };

  /***********/
  const handleSlide = (direction, e) => {
    e = e || window.event;
    e.preventDefault();

    direction === "left" ? (carouselCount -= 100) : (carouselCount += 100);

    slider();
  };

  /***********/
  leftButton.addEventListener("click", function (e) {
    handleSlide("left", e);
  });

  /***********/
  rightButton.addEventListener("click", function (e) {
    handleSlide("right", e);
  });
})();
