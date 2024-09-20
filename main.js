document.addEventListener("click", (e) => {
  const snow = document.createElement("span");
  snow.classList.add("snow");

  // mouse

  snow.style.left = e.offsetX + "px";
  snow.style.top = e.offsetY + "px";

  //smowflake size and height - random

  const size = Math.random() * (100 - 20 + 1) + 20;

  snow.style.width = size + "px";
  snow.style.height = size + "px";

  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 2000);
});
