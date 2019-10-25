import { createItemsList } from "./createItemsList.js";

const setQuantity = () => {
  const quantityInput = document.querySelector("#quantityInput");

  quantityInput.addEventListener("input", async event => {
    let quantity = event.target.value;
    if (quantity >= 0) {
      let pages = createPagesArray(quantity);

      const res = await axios.post("/items-info", { pages: pages });
      const itemsInfo = res.data;

      createItemsList(itemsInfo);
    }
  });
};

const createPagesArray = quantity => {
  let pages = [];
  let itemNumber = 1;

  while (quantity > 0) {
    let page = [];
    let numberOfItemsInPage = 0;

    while (numberOfItemsInPage < 3 && quantity > 0) {
      page.push(itemNumber);
      quantity--;
      numberOfItemsInPage++;
      itemNumber++;
    }
    pages.push(page);
  }

  return pages;
};

export { setQuantity };
