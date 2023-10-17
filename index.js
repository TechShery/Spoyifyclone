let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));
// audioElement.play();
let songs = [
    {songName: "Thoka Thoka", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "O Jane Jana", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Kabhi jo Badal", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "2 Raflaan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "8 Raflaan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ashiq mujhy Ashiq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ae Dil Bta Re", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Chal Dil Mere", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Channa Merraya", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Chief Saab", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]


songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

audioElement.addEventListener('timeupdate', function(){
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressBar.value = progress;
myprogressBar.addEventListener('change', function(){
        audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
    })
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})