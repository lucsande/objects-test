import { createItemsList } from "./createItemsList.js";

const setOption = () => {
  const optionItems = document.querySelectorAll(".dropdown-item");

  optionItems.forEach(optionItem => {
    optionItem.addEventListener("click", async event => {
      let option = event.target.text.replace("Option ", "");
      console.log(option);

      const res = await axios.post("/items-info", { option: option });
      const itemsInfo = res.data;

      createItemsList(itemsInfo);
    });
  });
};

export { setOption };
