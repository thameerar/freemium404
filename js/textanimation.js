$('#opps').text("O");

$(document).ready(function(){

  var textCon = $('#opps');
  var letterCount = 0;

function textanimation(){

 var repeat = setTimeout(function(){
    var elementText = textCon.text();
    if (letterCount == 0){
    textCon.text( elementText +"P");
    letterCount ++;
    textanimation();
    }

    else if (letterCount == 1) {
        textCon.text(elementText + "P");
        letterCount ++;
        textanimation();
    }

    else if (letterCount == 2) {
        textCon.text(elementText + "S");
        letterCount ++;
        clearTimeout(repeat);
    }

  }, 1000);

};

textanimation();

});
