const data = [
  {
    name: "button1",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button2",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button3",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button4",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button5",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button6",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button7",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button8",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button9",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
  {
    name: "button10",
    url: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
  },
];
const button = document.getElementById("button");
data.forEach((item) => {
  const elm = document.createElement("button");
  const audio = document.createElement("audio");
  audio.src = item.url;
  elm.innerHTML = item.name;
  elm.addEventListener("click", () => {
    audio.play();
  });
  button.appendChild(elm);
  document.body.appendChild(audio);
});
