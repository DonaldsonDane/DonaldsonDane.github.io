/* Toggle between adding and removing the "responsive" 
class to topNav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  } 



//Calculator Project Code
let currentDate = new Date(); //Creates new date object
let timeToDisplay;
if(currentDate.getSeconds() < 10){
    timeToDisplay = document.getElementById('time_display').innerHTML =  `${currentDate.getHours()}:${currentDate.getMinutes()}:0${currentDate.getSeconds()} PM!`; 
    
}else{
    timeToDisplay = document.getElementById('time_display').innerHTML =  `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} PM!`;   
}

function calcValue(numSpace){

    let chosenNum = 0;
    let displayNum = document.getElementsByClassName("numDisplay")[0];
    let buttonValue = document.getElementsByClassName("calc-item")[numSpace].innerHTML;

    switch (true) {
        case buttonValue >= 0 && buttonValue <=9:
            chosenNum += parseInt(buttonValue);
            displayNum.innerHTML += chosenNum;
            break;
        case buttonValue == "Clear":
            console.log("Clear Pressed!");
            document.getElementsByClassName("numDisplay")[0].innerHTML = "";
            break;
        case buttonValue == "+":
            console.log("Plus pressed!");
            displayNum.innerHTML += "+";
            break;
        case buttonValue == "/":
            displayNum.innerHTML += "/";
            break;
        case buttonValue == "-":
            displayNum.innerHTML += "-";
            break;
        case buttonValue == "*":
            displayNum.innerHTML += "*";
            break;
        case buttonValue == "=":
            document.getElementsByClassName("numDisplay")[0].innerHTML = (eval(displayNum.innerHTML)); //Eval converts a string equation into ints. "5+5" returns 10.
            break;
        default:
            break;
    }

    }



    



