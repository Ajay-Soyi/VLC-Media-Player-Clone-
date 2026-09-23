# VLC Media Player Clone

A basic **VLC-style media player** built with **HTML, CSS, and Vanilla JavaScript**.

This project recreates some of the basic functionality of a media player directly in the browser, including playing local video files, controlling playback, changing volume and playback speed, seeking through a video, and fullscreen mode.

## 🚀 Features

* Open and play local video files
* Play and pause videos
* Skip forward and backward
* Seek through the video using a timeline
* Display current playback time and video duration
* Increase and decrease playback speed
* Increase and decrease volume
* Stop and remove the current video
* Fullscreen video mode
* Toast messages for speed and volume changes
* VLC-inspired interface

## 🛠️ Built With

* HTML5
* CSS3
* Vanilla JavaScript
* HTML5 `<video>` API
* DOM APIs
* Font Awesome

## 🔗 Links

[Repository](https://github.com/Ajay-Soyi/VLC-Media-Player-Clone-) • [Live Demo](https://ajay-soyi.github.io/VLC-Media-Player-Clone-/)

## 🧠 What I Practiced

While building this project, I worked with:

* DOM manipulation
* Creating elements dynamically with JavaScript
* Event listeners
* File input handling
* `URL.createObjectURL()`
* HTML5 Video API
* `currentTime` and `duration`
* `playbackRate`
* Video volume control
* Fullscreen API
* Range inputs
* Dynamic UI updates
* Working with browser events

### Local Video Playback

The application uses a file input to let the user select a video from their computer. JavaScript then creates a temporary object URL for the selected file and uses it as the source of a dynamically created `<video>` element.

```js
const selectedVideo = obj.target.files[0];
const link = URL.createObjectURL(selectedVideo);

const videoElem = document.createElement("video");
videoElem.src = link;
```

### Playback Controls

The player uses the HTML5 Video API to control the video:

```js
videoElem.play();
videoElem.pause();
videoElem.currentTime;
videoElem.playbackRate;
videoElem.volume;
```

These properties are used to implement the playback controls and timeline.

## 📂 Project Structure

```text
VLC-Media-Player-Clone-/
├── images/
├── index.html
├── reset.css
├── styles.css
├── script.js
├── notes.md
└── README.md
```

## ▶️ How to Run

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a browser.
4. Click **Open** and select a video file from your computer.
5. Use the player controls to interact with the video.

No installation or build process is required.

## 👨‍💻 Author

**Ajay Soyi**

Built as part of my JavaScript and web development practice.
