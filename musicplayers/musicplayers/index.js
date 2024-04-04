let progress = document.getElementById("progress");
let song = document.getElementById("song");
let forwardButton=document.getElementById("forwardButton");
let backwardButton=document.getElementById("backwardButton");
let ctrIcon = document.getElementById("ctrIcon");
let circle = document.querySelector(".circle");
document.addEventListener("DOMContentLoaded", function() {
   

    // Check if the song element exists
    if (song) {
        // Pause the song when the page is loaded
        song.pause();

        // Check if the song was playing before the page is redirected
        window.onbeforeunload = function() {
            if (!song.paused) {
                song.pause();
            }
        };
    }
    let contactButton = document.querySelector('.contact');
    contactButton.addEventListener("click", function() {
        window.open("Contact.html", "_blank");
    });
});


song.addEventListener("loadedmetadata", function() {
    progress.max = song.duration; 
    progress.value = song.currentTime;
});

function playPause() { 
    if (ctrIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    } else { 
        song.play();
        ctrIcon.classList.remove("fa-play");
        ctrIcon.classList.add("fa-pause");
        
       
    }
}

if(song.play()){
   setInterval(()=>{
    progress.value=song.currentTime},100) 
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrIcon.classList.remove("fa-play");
    ctrIcon.classList.add("fa-pause");
}
circle.addEventListener("click", function() {
    song.pause();
    ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    window.open("aindex.html", "_blank");
});


forwardButton.addEventListener("click",function(){
    song.currentTime -= 10;
})
backwardButton.addEventListener("click",function(){
    
      song.currentTime += 10;
})