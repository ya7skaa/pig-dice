//Business Logic
var memberOne;
var memberTwo;

var rollDice=function() {
return Math.floor(6*Math.random()) + 1
}

function Member(turn) {
this.roll = 0;
this.currentScore = 0;
this.total = 0;
this.turn=turn;
};
