var outerbox = document.getElementById("outerbox");

for (var i = 0; i < 40; i++) {
    var mediumbox = document.createElement("div");
    mediumbox.className = "medium_box";
    mediumbox.id= "row"+i;
    outerbox.appendChild(mediumbox);
}

var mediumBoxes = document.querySelectorAll(".medium_box");

var j=0;

mediumBoxes.forEach(function(element) {
    for (var i = 0; i < 35; i++) {
        var smallbox = document.createElement("div");
        smallbox.className = "small_box_black";
        var id="row"+j+"col"+i;
        smallbox.id=id;
        element.appendChild(smallbox);
    }
    j++;
});


