import { createItemsList } from "./createItemsList.js";

const changePage = () => {
  const previousButton = document.querySelector("#previous-button");
  const nextButton = document.querySelector("#next-button");
  let itemsInfo;

  previousButton.addEventListener("click", async event => {
    const res = await axios.post("/items-info", { pageChange: -1 });
    itemsInfo = res.data;
    createItemsList(itemsInfo);
  });

  nextButton.addEventListener("click", async event => {
    const res = await axios.post("/items-info", { pageChange: 1 });
    itemsInfo = res.data;
    createItemsList(itemsInfo);
  });
};

export { changePage };
