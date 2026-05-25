const inputElement = document.getElementById("video-file");
const openOption = document.getElementById("open-opt");
const videoArea = document.querySelector("main");
const speedUp = document.getElementById("speedUp");
const speedDown = document.getElementById("speedDown");
const volumeUp = document.getElementById("volumeUp");
const volumeDown = document.getElementById("volumeDown");

const fileAttached = () => {
  inputElement.click();
};

const playVideo = (obj) => {
  if (obj === null) {
    return;
  }
  const selectedVideo = obj.target.files[0];
  const link = URL.createObjectURL(selectedVideo);
  const videoElem = document.createElement("video");
  videoElem.setAttribute("class", "video-style");
  videoElem.src = link;
  videoArea.appendChild(videoElem);
  videoElem.play();
  videoElem.controls = true;
};

openOption.addEventListener("click", fileAttached);
inputElement.addEventListener("change", playVideo);

// logic for speed and volume.
const speedInc = () => {
  const videoElem = document.querySelector("video");
  if (videoElem === null) {
    return;
  }
  videoElem.playbackRate = videoElem.playbackRate + 0.5;
};
const speedDec = () => {
  const videoElem = document.querySelector("video");
  if (videoElem === null) {
    rerturn;
  }
  videoElem.playbackRate = videoElem.playbackRate - 0.5;
};
const volumeInc = () => {
  const videoElem = document.querySelector("video");

  if (videoElem === null) {
    return;
  }
  if (videoElem.volume >= 0.99) {
    return;
  }
  videoElem.volume = videoElem.volume + 0.1;
};
const volumeDec = () => {
  const videoElem = document.querySelector("video");
  if (videoElem === null) {
    return;
  }
  if (videoElem.volume <= 0.1) {
    return;
  }
  videoElem.volume = videoElem.volume - 0.1;
};
speedUp.addEventListener("click", speedInc);
speedDown.addEventListener("click", speedDec);

volumeUp.addEventListener("click", volumeInc);
volumeDown.addEventListener("click", volumeDec);
