const emptyMessage = () => {
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";
  
  const emptyItem = document.createElement("li");
  emptyItem.classList.add("empty");
  emptyItem.innerText = "No scores available yet, try to add yours";

  listContainer.appendChild(emptyItem);
};

export default emptyMessage;
