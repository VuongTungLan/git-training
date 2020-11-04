var buttonRandom = document.querySelector(".login-button");
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
    $(".login-button").hover(function () {
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

/*-----------------------------------------------VALIDATE-----------------------------------------------*/
function validateForm() {
    var fname = document.forms["register"]["first_name"].value;
    var lname = document.forms["register"]["last_name"].value;
    var phone = document.forms["register"]["phone"].value;
    var email = document.forms["register"]["email"].value;
    var password = document.forms["register"]["password"].value;
    var cfpassword = document.forms["register"]["cfpassword"].value;


}


