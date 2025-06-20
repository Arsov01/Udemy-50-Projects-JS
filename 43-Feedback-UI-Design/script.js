const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".rating-container"); // Fixed class name (was .ratings-container)
let selectedRating = "Satisfied"; // Changed from const to let to allow reassignment

ratingsContainer.addEventListener("click", (e) => {
  // Check if clicked element OR its parent has .rating class
  const ratingElement = e.target.closest(".rating");

  if (ratingElement) {
    removeActive();
    ratingElement.classList.add("active"); // Fixed: add active to rating element itself
    selectedRating = ratingElement.querySelector("small").textContent; // More reliable way to get rating text
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br/>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    <button class="btn" id="rate-again">Rate Again</button>
  `;
  document.getElementById("rate-again").addEventListener("click", () => {
    location.reload(); // Or implement your own reset logic
  });
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
