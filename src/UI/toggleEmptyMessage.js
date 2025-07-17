const toggleEmptyMessage = () => {
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = `
  <p class="empty">There're no score yet, add yours!</p>`;
};

export default toggleEmptyMessage;
