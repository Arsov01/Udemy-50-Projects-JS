const result = document.querySelector("#result");
const filter = document.querySelector("#filter");

const listItems = [];

filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=20");

  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);
    li.innerHTML = `

 <img src="${user.picture.large}" alt="${user.name.first}"/>    
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p> ${user.location.city}, ${user.location.city}</p>
        </div>
    `;

    result.appendChild(li);
  });
}
getData();

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
