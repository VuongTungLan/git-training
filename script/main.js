var buttonRandom = document.querySelector("#login-button");
const colors = ["#00aefd",
"#ffa400",
"#07a787",
"#ff7870",
"black",
"pink",
"yellow",
"#e74c3c",
"#2979ff",
];

// buttonRandom.addEventListener("mouseenter", setInterval(function() {
//     var rdColor = colors[Math.floor(Math.random()*colors.length)];
//     buttonRandom.style.backgroundColor = rdColor;
// }, 1000))

Array.prototype.randomDiffElement = function (lastElement) {
    if(this.length == 0) {
        return;
    } else if (this.length == 1) {
        return this[0];
    } else {
        let index = 0;
        do {
            index = Math.floor(Math.random()*this.length);
        } while (this[index] == lastElement);
        return this[index];
    }
}

var rdColor = colors[(Math.floor(Math.random()*colors.length))];
$(document).ready(function () {
    $("#login-button").hover(function () {
            // over
            
            rdColor = colors.randomDiffElement(rdColor)
            $(this).css("background-color", rdColor);
            rdColor = colors.randomDiffElement(rdColor)
            $(this).css("color", rdColor);
        }, function () {
            // out
            rdColor = colors.randomDiffElement(rdColor)
            $(this).css("background-color", rdColor);
            rdColor = colors.randomDiffElement(rdColor)
            $(this).css("color", rdColor);
        }
    );
});


