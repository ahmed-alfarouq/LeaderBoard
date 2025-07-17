const sortScores = (users) => users.sort((a, b) => b.score - a.score);

const isValidData = (username, score) => {
  const nameRegex = /^[A-Za-z ]{2,20}$/;
  const parsedScore = Number(score);

  if (!username.trim()) {
    return { ok: false, message: "Name is required!" };
  }

  if (!nameRegex.test(username)) {
    return {
      ok: false,
      message:
        "Name must be 2–20 characters long and contain only letters or spaces.",
    };
  }

  if (Number.isNaN(parsedScore)) {
    return { ok: false, message: "Score must be a valid number!" };
  }

  if (parsedScore < 10 || parsedScore > 999) {
    return {
      ok: false,
      message: "Score must be a number between 10 and 999.",
    };
  }

  return {
    ok: true,
    message: "Data is valid.",
  };
};

export { sortScores, isValidData };
