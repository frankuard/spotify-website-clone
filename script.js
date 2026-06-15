console.log("Welcome to Spotify");


// INITALIZING THE VARIABLES

let songIndex= 0;
let audioElement = new Audio('audio/1.m4a');
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("ProgressBar")
// LIST OF SONGS 

console.log(masterPlay);
console.log(audioElement.src);
// let songs = [{
//     songName: "Pretty Girls Make Graves", filPath: "audio/1.m4a", coverPath: "covers/The_Smiths_The_Smiths.jpg",
//     songName: "Pretty Girls Make Graves", filPath: "audio/1.m4a", coverPath: "covers/The_Smiths_The_Smiths.jpg",
//     songName: "Pretty Girls Make Graves", filPath: "audio/1.m4a", coverPath: "covers/The_Smiths_The_Smiths.jpg",
//     songName: "Pretty Girls Make Graves", filPath: "audio/1.m4a", coverPath: "covers/The_Smiths_The_Smiths.jpg",
//     songName: "Pretty Girls Make Graves", filPath: "audio/1.m4a", coverPath: "covers/The_Smiths_The_Smiths.jpg",
//     songName: "Pretty Girls Make Graves", filPath: "audio/1.m4a", coverPath: "covers/The_Smiths_The_Smiths.jpg",
// }]

//audioElement.play();

// LISTENING TO EVENTS

// FOR HANDLING PLAY/ PAUSE CLICK
masterPlay.addEventListener('click', () => {
    
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();

    }
    else{
        audioElement.pause();
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log("Time Update")

    // UPDATING SEEKBAR


})
