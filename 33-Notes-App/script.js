// Wait for everything to load
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#add");

  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    notes.forEach((note) => {
      addNewNote(note); // Pass the individual note text
    });
  }

  addBtn.addEventListener("click", () => {
    addNewNote();
  });

  function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
          <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
          </div>
          <div class="main ${text ? "" : "hidden"}"></div>
          <textarea class="${text ? "hidden" : ""}"></textarea>
        `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;

    // Process markdown safely
    main.innerHTML = marked(text); // Initialize with existing text

    deleteBtn.addEventListener("click", () => {
      note.remove();
      updateLS();
    });

    editBtn.addEventListener("click", () => {
      main.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("input", (e) => {
      const { value } = e.target;
      try {
        main.innerHTML = marked(value); // Use marked directly
      } catch (error) {
        console.warn("Markdown processing failed:", error);
        main.innerHTML = value; // Fallback to plain text
      }
      updateLS(); // Update local storage on input
    });

    document.body.appendChild(note);
  }

  function updateLS() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];

    notesText.forEach((note) => {
      notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  }
});
