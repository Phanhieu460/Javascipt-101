const text = document.querySelector(".animation");
const stringText = text.textContent;
const splitText = stringText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(() => {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}, 50);
function complete() {
  clearInterval(timer);
  timer = null;
}
