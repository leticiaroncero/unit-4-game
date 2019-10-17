var wins = 0
var losses = 0
var winCounter = $("#wins")
var lossCounter = $("#losses")

var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
$("#target-number").text(randomNumber);

var totalScore = 0;
$("#total-score").text(totalScore);

var imageCrystal = $(".crystal-image");
for (var i = 0; i < 4; i++) {
    randomValue = Math.floor(Math.random() * 12 + 1);
    imageCrystal.eq(i).attr("data-crystalvalue", randomValue)
}

$(".crystal-image").on("click", function () {
    totalScore += $(this).attr("data-crystalvalue")
    $("#total-score").text(totalScore);


    if (totalScore === randomNumber) {
        wins++
        winCounter.text(wins)
        reset()
    } else if (totalScore > randomNumber) {
        losses++
        lossCounter.text(losses)
        reset()
    }
})

function reset() {
    var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#target-number").text(randomNumber);
    var totalScore = 0;
    $("#total-score").text(totalScore);
}