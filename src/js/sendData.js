import getData from "./getData.js";

export const API_URL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5AUogI2E2n2P7nXdou3i/scores";

const sendData = async (data = {}) => {
  const loader = document.getElementById("loader");
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Reset Values
  const userInput = document.getElementById("name");
  const scoreInput = document.getElementById("score");
  userInput.value = "";
  scoreInput.value = "";
  
  await getData();
  loader.classList.add("hidden");
};

export default sendData;
