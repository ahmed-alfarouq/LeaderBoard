import "./main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import sendData from "./js/sendData.js";
import getData from "./js/getData.js";
import { isValidData } from "./utils.js";

const createDOM = () => {
  const structure = `
  <div class="loader" id="loader">
    <span class="spinner"></span>
  </div>
  <h1 class="title">Leader Board</h1>
  <main>
    <div class="scores">
      <header>
        <h2>Recent Scores</h2>
      </header>
      <div class="list-container" id="list-container">
        <div class="top-score" id="top-score"></div>
        <ul class="list-items" id="list-items">
        </ul>
      </div>
    </div>
    <form class="add-score">
      <h2>Add your score</h2>
      <div>
          <input type="text" id="name" placeholder="Your Name" />
          <input type="text" id="score" placeholder="Your Score" />
          <span id="form-error"></span>
          <button type="submit" id="submit">ADD</button>
      </div>
    </form>
  </main>
  <footer>
    Create By Ahmed Al-Farouq
    <div class="contact">
      <a href="https://github.com/ahmed-alfarouq" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/ahmed-alfarouq" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
  `;
  document.body.innerHTML = structure;
  getData();

  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const loader = document.getElementById("loader");
    const errorMessage = document.getElementById("form-error");
    const user = document.getElementById("name").value.trim();
    const score = document.getElementById("score").value;
    const isValid = isValidData(user, score);

    if (isValid.ok) {
      loader.classList.remove("hidden");
      errorMessage.innerText = "";
      sendData({ user, score });
      return;
    }

    errorMessage.innerText = isValid.message;
  });
};

createDOM();
