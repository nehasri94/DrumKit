// To add event listener to only the first button

/*
document.querySelector("button").addEventListener("click",handleClick);

function handleClick() {
    alert("I got clicked");
}
*/

// To use anonymous function : a function without any name
/* 
document.querySelector("button").addEventListener("click",function () {
    alert("I got clicked");
} );

*/

// to add event listener to all the buttons with class drum (so used .drum to be more specific rather than just button)
/* for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        // alert("I got clicked");
   this.style.color = "white"; // It changes the color of text written on button to white when clicked
  var audio = new Audio('sounds/tom-1.mp3'); // to play the sound
  audio.play(); 
    } ); 
}
*/

// Below code is used when we only wanna detect the button presses using the click event
/* for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHtml = this.innerHTML;
        switch (buttonInnerHtml){

            case "w" : var tom1 = new Audio("sounds/tom-1.mp3");
                       tom1.play();
                       break;
            case "a" : var tom2 = new Audio("sounds/tom-2.mp3");
                       tom2.play();
                       break; 
            case "s" : var tom3 = new Audio("sounds/tom-3.mp3");
                       tom3.play();
                       break; 
            case "d" : var tom4 = new Audio("sounds/tom-4.mp3");
                       tom4.play();
                       break;   
            case "j" : var snare = new Audio("sounds/snare.mp3");
                       snare.play();
                       break;    
            case "k" : var crash = new Audio("sounds/crash.mp3");
                       crash.play();
                       break; 
            case "l" : var kick = new Audio("sounds/kick-bass.mp3");
                       kick.play();
                       break; 
            default : console.log(buttonInnerHtml);
        }
    } ); 
} */


// TASK : Write a function that takes a character as input and check it against switch statement to play the correct sound and call that function as a event listener for keypress event as well for the drum buttons click event to play the correct sound when either the button is clicked or the corresponding key is pressed.
//Detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

 var buttonInnerHtml = this.innerHTML;
 makeSound(buttonInnerHtml);
 buttonAnimation(buttonInnerHtml); // for animation on click of a button
        
});

}

//Detecting Keyboard press
// event passed as parameter triggers the keypress
// this code is related to callbacks and how to respond to events
document.addEventListener("keypress", function (event) {

makeSound(event.key); // key is the property of the event so it will give the value of the character pressed from keyboard
buttonAnimation(event.key); // for animation to show up on keypress as well
});

function makeSound(key) {

switch (key) {

            case "w" : var tom1 = new Audio("sounds/tom-1.mp3");
                       tom1.play();
                       break;
            case "a" : var tom2 = new Audio("sounds/tom-2.mp3");
                       tom2.play();
                       break; 
            case "s" : var tom3 = new Audio("sounds/tom-3.mp3");
                       tom3.play();
                       break; 
            case "d" : var tom4 = new Audio("sounds/tom-4.mp3");
                       tom4.play();
                       break;   
            case "j" : var snare = new Audio("sounds/snare.mp3");
                       snare.play();
                       break;    
            case "k" : var crash = new Audio("sounds/crash.mp3");
                       crash.play();
                       break; 
            case "l" : var kick = new Audio("sounds/kick-bass.mp3");
                       kick.play();
                       break; 
            default : console.log(buttonInnerHtml);
        }
}

function buttonAnimation(currentKey){
     
    var activeButton = document.querySelector("."+ currentKey) // adding class to an HTML element which is defined in css using javascript classList
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100); // first parameter is the function which tells what to execute after a certain amount of time and second parameter is the time it need to wait before executing the function passed in as a first parameter
    
}
