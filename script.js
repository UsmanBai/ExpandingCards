var cardList = document.querySelectorAll(".panel");
console.log(cardList);

cardList.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("active");
  });
});
