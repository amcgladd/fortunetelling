$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();

    var countToInput = parseInt($("#countTo").val());
    var countByInput = parseInt($("#countBy").val());
    var outputs = [];
    var currentTotal = 1;

    /*handles empty input*/
    if (!countToInput || !countByInput) {
      alert("You gotta enter a number, derp!");
    };
console.log(countToInput, countByInput, outputs, currentTotal);
    /*handles ratio issue*/
    if (countToInput < countByInput) {
        alert("Try harder. You can't count to a number with more than whatcha got.");
        }

    /*handling negative numbers- bug: doesn't handle counting negatively with positive numbers
    if (countToInput < 0 ) {
      for(var index = -1; currentTotal > countToInput; index -= 1) {
        currentTotal = countByInput * index;
        outputs.push(currentTotal);
        console.log(outputs);
    }
    }
    */

    if (countToInput < 0 || countByInput < 0) {
        alert("Please stay positive. No negative numbers.");
        }


    /*handling postive numbers*/
    for(var index = 1; currentTotal < countToInput; index += 1) {
      currentTotal = countByInput * index;
      outputs.push(currentTotal);
      console.log(outputs);
    }

    $("#output").text(outputs);
  });
});
