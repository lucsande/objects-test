const toggleOptions = () => {
  const optionsBtn = document.querySelector("#options-button");
  const backdrop = document.querySelector("#backdrop");
  const optionsBar = document.querySelector("#object-2");

  optionsBtn.addEventListener("click", () => {
    optionsBar.classList.remove("w-0");
    optionsBar.classList.add("object-show");
    backdrop.classList.add("backdrop-show");
  });

  backdrop.addEventListener("click", () => {
    optionsBar.classList.add("w-0");
    optionsBar.classList.remove("object-show");
    backdrop.classList.remove("backdrop-show");
  });
};

export { toggleOptions };
