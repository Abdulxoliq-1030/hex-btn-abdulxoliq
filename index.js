function renderHexes(wrap, count) {
  for (let i = 0; i < count; i++) {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    const box = document.createElement("div");
    box.className = "box";
    box.style.height = "200px";
    box.style.width = "200px";
    box.style.margin = "2rem";
    box.style.textAlign = "center";
    box.style.border = "1px solid #000";
    box.style.fontSize = "24px";
    box.innerText = color;
    box.style.backgroundColor = color;
    wrap.style.display = "flex";
    wrap.appendChild(box);
  }

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((item, idx) => {
    item.addEventListener("click", () => {
      document.body.style.backgroundColor = item.style.backgroundColor;
    });
  });
}

module.exports = {
  renderHexes,
};
