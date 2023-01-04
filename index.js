for(var i = 0; i < document.querySelectorAll(".drum").length; i++)

document.querySelector("button").addEventListener("click", handleClick)

function handleClick() {
    var audio = new Audio('audio_file.mp3');
    audio.play();
}
