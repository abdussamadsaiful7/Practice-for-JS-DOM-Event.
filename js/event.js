

//option-1, directly set on the html element.
//<button onclick="console.log(65)">Another button</button>

//option-2, add onclick function.
//  <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor='red';
}


//option-3 

const makeBlueButton= document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        };

//option-3, another 
    const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurpleButton(){
            document.body.style.backgroundColor = 'purple';
        };

//option-4, 

    const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click', makePink);

        function makePink(){
            document.body.style.backgroundColor = 'pink';
        };

//option-4, another 

