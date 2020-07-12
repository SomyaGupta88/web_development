
//detecting button press
var len=document.getElementsByClassName("drum").length;

for(var i=0;i<len;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });

}

//detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var a1= new Audio("wav/2.wav");
            a1.play();
            break;

        case "a":
            var a2= new Audio("wav/3.wav");
            a2.play();
            break;

        case "s":
            var a3= new Audio("wav/4.wav");
            a3.play();
            break;

        case "d":
            var a4= new Audio("wav/5.wav");
            a4.play();
            break;

        case "j":
            var a5= new Audio("wav/6.wav");
            a5.play();
            break;

        case "k":
            var a6= new Audio("wav/7.wav");
            a6.play();
            break;

        case "l":
            var a7= new Audio("wav/8.wav");
            a7.play();
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },
    300);

}
