const inputElement = document.getElementById("video-file");
const openOption = document.getElementById("open-opt");
const videoArea = document.querySelector("main");
const speedUp = document.getElementById("speedUp");
const speedDown = document.getElementById("speedDown");
const volumeUp = document.getElementById("volumeUp");
const volumeDown = document.getElementById("volumeDown");
const toast = document.querySelector(".toast");
const timer = document.getElementById("timer");

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
  // videoElem.controls = true;

  // logic for time update
  const currTime = document.getElementById("current-time");
  const endTime = document.getElementById("end-time");

  const updateTime = () => {
    // updating time
    const hour = Math.floor(videoElem.currentTime / 3600)
      .toString()
      .padStart(2, "0");
    const remainingSec = videoElem.currentTime % 3600;
    const min = Math.floor(remainingSec / 60)
      .toString()
      .padStart(2, "0");
    const sec = Math.floor(remainingSec % 60)
      .toString()
      .padStart(2, "0");
    currTime.textContent = `
    ${hour}:${min}:${sec}`;
  };

  const endTimeUpdateAndTimeline = () => {
    // end time udpate
    const duration = videoElem.duration;
    const hour = Math.floor(duration / 3600)
      .toString()
      .padStart(2, "0");
    const remainingSec = duration % 3600;
    const min = Math.floor(remainingSec / 60)
      .toString()
      .padStart(2, "0");
    const sec = Math.floor(remainingSec % 60)
      .toString()
      .padStart(2, "0");
    endTime.textContent = `
      ${hour}:${min}:${sec}
    `;

    // timeline update
    const timelineUpdate = () => {
      timer.value = (videoElem.currentTime / videoElem.duration) * 100;
    };
    videoElem.addEventListener("timeupdate", timelineUpdate);

    // timeline user interaction
    const timelineInteraction = () => {
      videoElem.currentTime = (timer.value / 100) * videoElem.duration;
      timer.value = (videoElem.currentTime / videoElem.duration) * 100;
    };

    timer.addEventListener("input", timelineInteraction);
  };

  videoElem.addEventListener("timeupdate", updateTime);
  videoElem.addEventListener("loadedmetadata", endTimeUpdateAndTimeline);
};

openOption.addEventListener("click", fileAttached);
inputElement.addEventListener("change", playVideo);

// toast logic
const showToast = (message) => {
  toast.style.display = "block";
  toast.textContent = message;
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
};

// logic for speed and volume.
const speedInc = () => {
  const videoElem = document.querySelector("video");
  if (videoElem === null) {
    return;
  }
  videoElem.playbackRate = videoElem.playbackRate + 0.5;
  showToast(`${videoElem.playbackRate}X`);
};
const speedDec = () => {
  const videoElem = document.querySelector("video");
  if (videoElem === null) {
    rerturn;
  }
  videoElem.playbackRate = videoElem.playbackRate - 0.5;
  showToast(`${videoElem.playbackRate}X`);
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
  showToast(`${videoElem.volume * 100}%`);
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
  showToast(`${videoElem.volume * 100}%`);
};
speedUp.addEventListener("click", speedInc);
speedDown.addEventListener("click", speedDec);

volumeUp.addEventListener("click", volumeInc);
volumeDown.addEventListener("click", volumeDec);
