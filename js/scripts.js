$(document).ready(function(){
  $("form#luckSurvey").submit(function(event){
    event.preventDefault();

    var luckScore = 0;

    $("input:checkbox[name=lucky]:checked").each(function() {
      luckScore += parseInt($(this).val());
    });
    $("input:checkbox[name=unlucky]:checked").each(function() {
      luckScore += parseInt($(this).val());
    });
    console.log(luckScore);
    $('#luckSurvey').hide();


    if (luckScore >= 3) {
      $("#luckPositive").show();
    }
    else if (luckScore >= -2 && luckScore <= 2) {
      $("#luckNeutral").show();
    }
    else if (luckScore <= -3) {
      $("#luckNegative").show();
    }
    else {
      $("#luckNegative").show();
    }
  });
});
