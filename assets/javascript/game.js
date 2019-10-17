var wins = 0
var losses = 0
var winsCounter = $()
var winsCounter

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


    if (totalScore === randomNumber) {
        wins++
        reset()
    } else if (totalScore > randomNumber) {
        losses++
        reset()
    }
})

function reset() {
    var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#target-number").text(randomNumber);
    var totalScore = 0;
    $("#total-score").text(totalScore);
}