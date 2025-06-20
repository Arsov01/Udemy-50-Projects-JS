setTimeout(() => {
  const card = document.querySelector(".card");

  // Check if the card exists
  if (!card) return;

  // Add actual content
  const cardHeader = card.querySelector(".card-header");
  if (cardHeader) {
    cardHeader.innerHTML = `
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop" alt="">
      `;
  }

  const cardTitle = card.querySelector(".card-title");
  if (cardTitle) {
    cardTitle.textContent = "Lorem ipsum dolor sit amet.";
  }

  const cardExcerpt = card.querySelector(".card-excerpt");
  if (cardExcerpt) {
    cardExcerpt.textContent =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, placeat.";
  }

  const profileImg = card.querySelector(".profile-img");
  if (profileImg) {
    profileImg.innerHTML =
      '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
  }

  const authorInfoStrong = card.querySelector(".author-info strong");
  if (authorInfoStrong) {
    authorInfoStrong.textContent = "John Doe";
  }

  const authorInfoSmall = card.querySelector(".author-info small");
  if (authorInfoSmall) {
    authorInfoSmall.textContent = "Oct 08, 2020";
  }

  // Update styles for loaded content
  const elements = [".card-title", ".card-excerpt", "strong", "small"];
  elements.forEach((selector) => {
    const el = card.querySelector(selector);
    if (el) {
      el.style.backgroundColor = "transparent";
      el.style.color = "inherit";
    }
  });
}, 2500); // Simulate 2.5 second loading time
