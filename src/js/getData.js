import { API_URL } from "./sendData.js";

import emptyMessage from "../UI/emptyMessage.js";
import renderList from "../UI/list.js";

import { sortScores } from "../utils.js";

const getData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  if (!data.result || !data.result.length) {
    emptyMessage();
    return;
  }

  const sortedUsers = sortScores(data.result);

  renderList(sortedUsers);
};

export default getData;
