export const API_URL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/e05f3uL0Vn418EkwtSiD/scores";

const sendData = async (data = {}) => {
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
};

export default sendData;
