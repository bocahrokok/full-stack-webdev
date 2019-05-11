//

var secretNumber = 4;

var guess = prompt("Guess a number");


//check if guess is right

if(Number(guess) === secretNumber){
    alert("you got it right");
}
//otherwise if higher
else if(Number(guess) > secretNumber){
    alert("To high, Guess again!");
}
//otherwise, check if lower

else{
    alert("too lowe, guess again!");
}