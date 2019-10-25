const createItemsList = itemsInfo => {
  if (itemsInfo) {
    btnsClickability(itemsInfo);

    const itemsList = document.querySelector("#items-list");
    itemsList.innerHTML = "";
    itemsList.insertAdjacentHTML("afterbegin", generateHTML(itemsInfo));
  }
};

const btnsClickability = itemsInfo => {
  const previousButton = document.querySelector("#previous-button");
  const nextButton = document.querySelector("#next-button");
  const lastPage = itemsInfo.pages.length - 1;

  if (itemsInfo.currentPageNumber >= lastPage) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  if (itemsInfo.currentPageNumber === 0) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }
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
