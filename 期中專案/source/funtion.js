function makeColourValue() {
  return Math.round(Math.random() * 255);
}

function setButtonColour(button, red, green, blue) {
  button.setAttribute('style',
    'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
  );
}

var a = document.getElementById('counter');
var b=0;
var buttons = document.getElementsByClassName('colourButton');

var heading = document.getElementById('colourValue');

var answerMessage = document.getElementById('answer');

function startGame() {
  answerMessage.innerHTML = "";
  a.innerHTML= b;
  
  var answerButton = Math.round(Math.random() * buttons.length);

  
  for (var i = 0; i < buttons.length; i++) {

    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML =`(${red}, ${green}, ${blue})`;;
    }

    buttons[i].addEventListener('click', function(){
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "正確!";
          b++;
          
         
        } else {
            answerMessage.innerHTML = "錯誤! 再猜一次!";
          
        }
    });

  }

}

document.getElementById('resetButton').addEventListener('click', startGame);

startGame();

