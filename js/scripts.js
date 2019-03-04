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

Member.prototype.sideOne = function() {
if (this.roll === 1) {
  this.currentScore = 0;
  alert("You rolled 1,Pass to next Player! ");
} else {
  this.total += this.roll;
}
}

Member.prototype.switch = function() {
this.total += this.currentScore;
this.currentScore = 0;
alert("Next players turn!");
}

Member.prototype.winner = function() {
if(this.total >= 100) {
  alert("Winner!!")
}
newRound();
}

Member.prototype.newRound = function() {
this.roll = 0;
this.currentScore = 0;
this.total = 0;
}
// User Interface logic
