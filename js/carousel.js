(function () {
  let slideArray = Array.from(document.querySelectorAll(".slide")); //dynamic list of slide positions

  const leftButton = document.querySelector("#leftButton");
  const rightButton = document.querySelector("#rightButton");

  //carousel slide logic
  const slider = (direction) => {
    //handle
    spliceAndSlide = (from, to) => {
      let clone = [...slideArray];
      let cutSlide = clone.splice(from, 1)[0];
      clone.splice(to, 0, cutSlide);
      return clone;
    };

    //shuffle array right and handle display
    let slideRight = () => {
      slideArray[1].classList.add("hidden"); //hide old slide

      slideArray[2].classList.remove("hidden"); //display new slide

      slideArray = spliceAndSlide(0, 2); //shuffle array
    };

    //shuffle array left and handle display
    let slideLeft = () => {
      slideArray[1].classList.add("hidden"); //hide old slide

      slideArray[0].classList.remove("hidden"); //display new slide

      slideArray = spliceAndSlide(2, 0); //shuffle array
    };

    //call left or right depending on which button was clicked
    direction === "left" ? slideLeft() : slideRight();
  };

  //event handler for carousel slides
  const handleSlide = (direction, e) => {
    //prevent default events
    e = e || window.event;
    e.preventDefault();

    //pass direction
    slider(direction);
  };

  //left slider button
  leftButton.addEventListener("click", function (e) {
    handleSlide("left", e);
  });

  //right slider button
  rightButton.addEventListener("click", function (e) {
    handleSlide("right", e);
  });
})();
