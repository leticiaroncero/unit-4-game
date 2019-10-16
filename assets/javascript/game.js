var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

$("#target-number").text(randomNumber);

var totalScore = 0;

$("#total-score").text(totalScore);

var crystalValue = [];

var  imageCrystal = $(".crystal-image");


for (var i = 0; i < 4; i++) {
    randomValue = Math.floor(Math.random() * 12 + 1);
    crystalValue.push(randomValue)
    imageCrystal.attr("data-crystalvalue", crystalValue[i])
}

$(".crystal-image").on("click", function () {
    totalScore += $(this).attr("data-crystalvalue")

    console.log(this)
    console.log()
    // if (totalScore == randomNumber) {

    // }
})