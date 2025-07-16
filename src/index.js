import "./main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import sendData from "./js/sendData.js";
import getData from "./js/getData.js";

const createDOM = () => {
  const structure = `
  <h1 class="title">Leader Board</h1>
  <main>
    <div class="scores">
      <div class="header">
        <h2>Recent Scores</h2>
        <button class="refresh-btn" id="refresh">
          Refresh
        </button>
      </div>
      <ul class="list-container" id="list-container">
        <li class="message">Please, click on the refresh button above.</li>
      </ul>
    </div>  
    <form class="add-score">
      <h2>Add your score</h2>
      <div>
          <input type="text" id="name" placeholder="Your Name" />
          <input type="text" id="score" placeholder="Your Score" />
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

  const refreshBtn = document.getElementById("refresh");
  refreshBtn.addEventListener("click", getData);

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const user = document.getElementById("name").value;
    const score = document.getElementById("score").value;
    return sendData({ user, score });
  });
};

createDOM();
