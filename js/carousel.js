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
      //
    };

    //
    let slideLeft = () => {
      //
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
