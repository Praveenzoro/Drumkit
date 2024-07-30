
var doa = document.querySelectorAll(".drum").length;

for (var i=0; i<doa; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

var button = this.innerHTML;
makesound(button);
animation(button);



})
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    animation(event.key);
})

function makesound(key){

     var Lkey = key.toLowerCase();
    switch (Lkey) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3')
            return audio.play();
            break;    
        case 'a':
            var audio = new Audio('./sounds/tom-3.mp3')
            return audio.play();
            break;       
        case 's':
            var audio = new Audio('./sounds/crash.mp3')
            return audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/kick-bass.mp3')
            return audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3')
            return audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/tom-4.mp3')
            return audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/tom-2.mp3')
            return audio.play();
            break;
        default:
            break;
    }
}

function animation(Akey){
    var Mkey = Akey.toLowerCase();
var actbut = document.querySelector("."+ Mkey);
actbut.classList.add("pressed");


setTimeout(function(){
    actbut.classList.remove("pressed");
},100)

}



