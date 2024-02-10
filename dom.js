function makeRed(){
      document.body.style.backgroundColor = 'red';
}


const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue ;
function makeBlue(){
   document.body.style.backgroundColor = 'blue';
}

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;
function makePurple(){
document.body.style.backgroundColor = 'purple'
}


const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', makeGreen)
function makeGreen(){
      document.body.style.backgroundColor = 'green'
}

const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = makeYellow;
function makeYellow(){

     document.body.style.backgroundColor = 'yellow';
}


const makeBlackButton = document.getElementById('make-black');
makeBlackButton.addEventListener('click', makeBlack );
function makeBlack(){
      document.body.style.backgroundColor = 'black';
} 


const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', function makeGreen(){
      document.body.style.backgroundColor = 'pink';
})

// final

document.getElementById('make-goldenrod').addEventListener('click', function(){
      document.body.style.backgroundColor = 'goldenrod'
})