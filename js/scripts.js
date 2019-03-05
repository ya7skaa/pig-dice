//Business Logic
var memberOne;
var memberTwo;

var rollDice = function() {
  return Math.floor(6 * Math.random()) + 1
}

function Member(turn) {
  this.roll = 0;
  this.currentScore = 0;
  this.total = 0;
  this.turn = turn;
};

Member.prototype.sideOne = function() {
  if (this.roll === 1) {
    this.currentScore = 0;
    alert("You rolled 1,Pass to next Player!");
  } else {
    this.currentScore += this.roll;
  }
}

Member.prototype.switch = function() {
  this.total += this.currentScore;
  this.currentScore = 0;
  alert("Next players turn!");
}

Member.prototype.winner = function() {
  if (this.total >= 100) {
    alert("Good job Winner!!")
  }
  // newRound();
}

Member.prototype.newRound = function() {
  this.roll = 0;
  this.currentScore = 0;
  this.total = 0;
}



// User Interface logic
$("document").ready(function() {
  $("#newRound").click(function newRound() {
    $("#roll-val1, #score-val1, #total-val1, #roll-val2, #score-val2, #total-val2").empty();
  });
  memberOne = new Member;
  memberTwo = new Member;
  $("button#roll1").click(function() {
    memberOne.roll = rollDice();
    $("#roll-val1").text(memberOne.roll);
    memberOne.sideOne();
    $("#score-val1").text(memberOne.currentScore);
  });

  $("button#hold1").click(function() {
    memberOne.switch();
    $("#totalval1").text(memberOne.total);
    $("#score-val1").empty();
    $("#roll-val1").empty();
    memberOne.winner();
  })
  $("button#roll2").click(function() {
    memberTwo.roll = rollDice();
    $("#roll-val2").text(memberTwo.roll);
    memberTwo.sideOne();
    $("#score-val2").text(memberTwo.currentScore);
  });

  $("button#hold2").click(function() {
    memberTwo.switch();
    $("#total-val2").text(memberTwo.total);
    $("#roll-val2,#score-val2").empty();
    memberTwo.winner();
  });









});
