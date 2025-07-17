import avatar1 from "../img/avatar3.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar1.png";
import avatar4 from "../img/avatar.png";

const avatars = [avatar2, avatar3, avatar4];

const renderList = async (data) => {
  const listItems = document.getElementById("list-items");
  const topScoreItem = document.getElementById("top-score");

  data.forEach((item, i) => {
    const listItem = document.createElement("li");
    if (i === 0) {
      topScoreItem.innerHTML = `
              <p><span class="top">Top</span> Score</p>
              <img src=${avatar1} alt="${item.user}-avatar" />
              <span class="name"> ${item.user}</span>
              <span class="score"> ${item.score}</span>
              `;
      return;
    }
    listItem.innerHTML = `
              <img src=${avatars[Math.round(Math.random() * 2.5)]} alt=""/>
              <span class="name"> ${item.user}</span>
              <span class="score"> ${item.score}</span>
              `;

    listItems.append(listItem);
  });
};

export default renderList;
