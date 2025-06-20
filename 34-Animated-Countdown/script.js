document.addEventListener("DOMContentLoaded", () => {
  const nums = document.querySelectorAll(".nums span");
  const counter = document.querySelector(".counter");
  const final = document.querySelector(".final");
  const replay = document.getElementById("replay");

  // Initialize - hide all numbers except first
  nums.forEach((num, index) => {
    if (index !== 0) {
      num.style.visibility = "hidden";
    }
  });

  function runAnimation() {
    nums.forEach((num, idx) => {
      const nextToLast = nums.length - 1;

      num.addEventListener("animationend", (e) => {
        if (e.animationName === "goIn" && idx !== nextToLast) {
          num.classList.remove("in");
          num.classList.add("out");
        } else if (e.animationName === "goOut" && num.nextElementSibling) {
          num.style.visibility = "hidden";
          num.nextElementSibling.style.visibility = "visible";
          num.nextElementSibling.classList.add("in");
        } else {
          counter.classList.add("hide");
          final.classList.add("show");
        }
      });
    });
  }

  function resetDom() {
    counter.classList.remove("hide");
    final.classList.remove("show");

    nums.forEach((num, index) => {
      num.classList.remove("in", "out");
      num.style.visibility = index === 0 ? "visible" : "hidden";
    });

    nums[0].classList.add("in");
  }

  runAnimation();

  replay.addEventListener("click", () => {
    resetDom();
    runAnimation();
  });
});
