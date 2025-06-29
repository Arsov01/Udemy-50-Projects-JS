const APIURL = "https://api.github.com/users/";

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("main");

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if ((error.response.status = 404)) {
      createErrorCard("No Profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos");
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = ` <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
          </ul>
          <div id="repos"></div>
        </div>
      </div>`;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `<div class="card">
  <h1>${msg}</h1>
    </div>`;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector("#repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;

    reposEl.appendChild(repoLink);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
