(function () {
  let slideArray = Array.from(document.querySelectorAll(".slide")); //dynamic list of slide positions

  const card = document.querySelector("#card");

  let carousel = document.querySelector(".carousel");

  const leftButton = document.querySelector("#leftButton");
  const rightButton = document.querySelector("#rightButton");

  /***********/
  const slider = (direction) => {
    //
    spliceAndSlide = (from, to) => {
      let clone = [...slideArray];
      let cutSlide = clone.splice(from, 1)[0];
      clone.splice(to, 0, cutSlide);
      return clone;
    };

    //
    let slideRight = () => {
      slideArray[1].classList.add("hidden"); //

      slideArray[2].classList.remove("hidden"); //

      slideArray = spliceAndSlide(0, 2); //
    };

    //
    let slideLeft = () => {
      slideArray[1].classList.add("hidden"); //

      slideArray[0].classList.remove("hidden"); //

      slideArray = spliceAndSlide(2, 0); //
    };

    //
    direction === "left" ? slideLeft() : slideRight();
  };

  //
  const handleSlide = (direction, e) => {
    //
    e = e || window.event;
    e.preventDefault();

    //
    slider(direction);
  };

  //
  leftButton.addEventListener("click", function (e) {
    handleSlide("left", e);
  });

  //
  rightButton.addEventListener("click", function (e) {
    handleSlide("right", e);
  });
})();
