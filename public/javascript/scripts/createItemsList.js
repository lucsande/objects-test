const createItemsList = itemsInfo => {
  const itemsList = document.querySelector("#items-list");
  itemsList.innerHTML = "";

  itemsList.insertAdjacentHTML("afterbegin", generateHTML(itemsInfo));
};

const generateHTML = itemsInfo => {
  const currentPage = itemsInfo.pages[itemsInfo.currentPageNumber];

  if (!currentPage) {
    return "";
  }

  let html = "";
  currentPage.forEach(item => {
    html += `
      <div class="line line-item">
        Item ${itemsInfo.option}${item}
      </div>
    `;
  });
  return html;
};

export { createItemsList };
