const inputElement = document.getElementById("video-file");
const openOption = document.getElementById("open-opt");

const fileAttached = () => {
    inputElement.click();
}

openOption.addEventListener("click",fileAttached);
