(function () {
  let tempSlide = document.querySelector("#tempSlide"); //for transitions when swapping slide positions

  let slideArray = Array.from(document.querySelectorAll(".slide")); //dynamic list of slide positions

  //   const slides = document.querySelectorAll(".slide");
  //   let carouselCount = 0;
  let carousel = document.querySelector(".carousel");

  const leftButton = document.querySelector("#leftButton");
  const rightButton = document.querySelector("#rightButton");

  /**
   keep css variables left{100%}
   slide one direction
   then swap the positions of the off-screen slides
   */

  //
  //   carousel.innerHTML = slideArray[1].outerHTML;

  // abc cab bca

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
      //slide right
      //
      //
      //
      //swap slides
      //   function frame() {
      //     if (finished) {
      //       clearInterval(id);
      //     } else {
      //       //   change element style
      //     }
      //   }
      //   let id = setInterval(frame, 5);
      //   let id = null;
      //   function myMove() {
      //     let oldSlidePos = 0;
      //     let newSlidePos = 0;
      //     clearInterval(id);
      //     id = setInterval(frame, 16.6);
      //     function frame() {
      //       if (newSlidePos > 100) {
      //         clearInterval(id);
      //       } else {
      //         oldSlidePos++;
      //         newSlidePos++;
      //         // firstSlide.style.left = oldSlidePos + "%";
      //         // secondSlide.style.left = newSlidePos + "%";
      //         firstSlide.style.transform = `translateX(${oldSlidePos}%)`;
      //         secondSlide.style.transform = `translateX(${newSlidePos}%)`;
      //       }
      //     }
      //   }
      //   myMove();
      //
      //
      //

      //
      //
      //
      //[1, '2', 3]
      slideArray[1].classList.add("slideRight"); //takes second slide off stage
      slideArray[2].classList.add("slideRight"); //brings third slide on stage

      // [1, 2x, '3'x] now slide2 is off screen, slide3 is on screen

      //wait for transform animation to complete
      setTimeout(function () {
        // then switch positions in array to match DOM slides, moving first slide to the back
        slideArray = spliceAndSlide(0, 2);
        console.log(slideArray);

        // then remove transition animation classes and adjust styles for new array
        slideArray[0].classList.remove("slideRight");
        slideArray[0].style.left = "-100%";

        //
        tempSlide.innerHTML = slideArray[1].innerHTML;
        tempSlide.classList.remove("hidden");

        //
        slideArray[1].classList.remove("slideRight");
        slideArray[1].style.left = "0";

        slideArray[2].style.left = "100%";
      }, 2000);

      //
      setTimeout(function () {
        //
        tempSlide.classList.add("hidden");
      }, 3000);
      //
    };

    //
    let slideLeft = () => {
      /**
         CSS animation
         then clear transform and swap class names, list
         */
      //   carousel.innerHTML = slideArray[2].outerHTML;
      //   firstSlide.style.transform = "translateX(-100%)";

      //   secondSlide.style.transform = `translateX(-25%)`;

      secondSlide.setAttribute("style", "transform:translateX(-" + 50 + "%)");

      //   slideArray[0].style.transform = "translateX(-100%)";
      //   slideArray[1].style.transform = "translateX(-100%)";

      //   spliceAndSlide(2, 0);
    };

    //
    direction === "left" ? slideLeft() : slideRight();

    /**
     Idea

     ""  = current display
     !"" = display: none or hidden


    [ slide0, "slide1", slide2 ]
    current = 1


    only one slide element on start
    in transitions, add a slide element off screen to the left or right
    after transition, remove the previous slide from innerHTML 



        slideLeft()
            slide0.classList.remove(hidden)
            set position off screen
            display transition from 1 to 0
            current = 0
            slide1.classList.add(hidden)
            rearrange array

        [ slide2, "slide0", slide1, ]


    slideRight()
        ...

     */
  };
  //   const slider = () => {
  //     switch (carouselCount) {
  //       case -100:
  //         carouselCount = 200;
  //         break;
  //       case 300:
  //         carouselCount = 0;
  //         break;
  //       default:
  //         break;
  //     }

  //     for (let i = 0; i < slides.length; i += 1) {
  //       //
  //       console.log(i, carouselCount);
  //       //

  //       slides[i].setAttribute(
  //         "style",
  //         "transform:translateX(-" + carouselCount + "%)"
  //       );
  //     }
  //   };

  /***********/
  const handleSlide = (direction, e) => {
    e = e || window.event;
    e.preventDefault();

    // direction === "left" ? (carouselCount -= 100) : (carouselCount += 100);
    // slider();

    slider(direction);
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
