import { API_URL } from "./sendData.js";

import toggleEmptyMessage from "../UI/toggleEmptyMessage.js";
import renderList from "../UI/list.js";

import { sortScores } from "../utils.js";

const getData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  if (!data.result || !data.result.length) {
    toggleEmptyMessage();
  } else {
    const sortedUsers = sortScores(data.result);

    await renderList(sortedUsers);
  }
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
};

export default getData;
