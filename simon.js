console.log("simon game");


let buttoncolors= ["red","green","blue","yellow"];

let gamepattern=[];
let userpattern=[];
let started= false;
let level=0;

function next_sequence(){

    userpattern=[];
    level++;

    //5. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);
    let random_number= Math.floor(Math.random()*4);
    
    
let chosencolor= buttoncolors[random_number];

playsound(random_number);

gamepattern.push(chosencolor);
$("#"+chosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
console.log(random_number);


}

$(document).keypress(function () { 
    if (!started) {

        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        next_sequence();
        started = true;
      }
    
});
 $(".btn").click(function(){

    let userchosen = $(this).attr("id");
    userpattern.push(userchosen); 

    animatepress(userchosen);
    playsound(userchosen); 
    checkanswer(userpattern.length-1);

 })
 function startover(){

    
gamepattern=[]; 
userpattern=[];
 started= false;
 level=0;

 }

 
function checkanswer(currentlevel){
    if(gamepattern[currentlevel]==userpattern[currentlevel]){
        console.log("matched");

        if(userpattern.length==gamepattern.length){
        setTimeout(() => {
            next_sequence();
            console.log("right one");
            
        }, 1000);
        
        }}

    else{

        console.log("wrong");
        let wrong= new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        $("h1").text("Game Over,Press Any Key To Restart");
        setTimeout(() => {
            $("body").removeClass("game-over");
            wrong.pause();
            
        }, 200);
        startover();
    }

}




function playsound(name){
    let audio= new Audio("sounds/"+name+".mp3");
    audio.play();

  
}
function animatepress(currentcolor){

        $("#"+currentcolor).addClass("pressed");
        setTimeout(function(){
            $("#"+currentcolor).removeClass("pressed");
        },50)
    
}