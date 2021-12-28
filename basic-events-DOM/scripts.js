let body = document.getElementsByTagName('BODY')[0];
let blueButton = document.getElementById('blue');
let redButton = document.getElementById('red');
let buttonContainer = document.getElementById('buttonContainer');
let redQuote = document.createElement('p')
    redQuote.textContent = 'You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes.'
    redQuote.style.fontSize = 'x-large';
    redQuote.style.textAlign = 'center';
let blueQuote = document.createElement('p');
    blueQuote.textContent = 'You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe.'
    blueQuote.style.fontSize = 'x-large';
    blueQuote.style.textAlign = 'center';
let mouseOverDiv = document.getElementById('mouseOverText');
let title = document.getElementById('heading');

// --------blue button =>------------
blueButton.onmouseover = () => {
    mouseOverDiv.appendChild(blueQuote);
    blueQuote.style.fontFamily = 'Cormorant', serif;
}
blueButton.onmouseout = () => {
    mouseOverDiv.removeChild(blueQuote);
}
blueButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(0, 179, 255)';
    title.style.color = 'white';
    buttonContainer.removeChild(redButton);
    blueButton.onmouseover = () => {
        mouseOverDiv.removeChild(blueQuote);
    }
    //change the title
    //add another - with text content
})

// ----------red button =>----------------
redButton.onmouseover = () => {
    mouseOverDiv.appendChild(redQuote);
    redQuote.style.fontFamily = 'Cormorant', serif;
}
redButton.onmouseout = () => {
    mouseOverDiv.removeChild(redQuote);
}
redButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(255, 0, 102)';
    title.style.color = 'white';
    buttonContainer.removeChild(blueButton);
    redButton.onmouseover = () => {
        buttonContainer.removeChild(redQuote);
    }
})

// sample conditional 
    // document.getElementById('buttonContainer').addEventListener('click', () => {clickFunction});

    // let clickFunction = () => {
    //     let target = evt.target
    //     if (target.id === "blue") {
    //         body.style.backgroundColor = 'blue';
    //         title.style.color = 'white';
    //         buttonContainer.removeChild(redButton);
                
    //     } else if (target.id === 'red') {
    //         body.style.backgroundColor = 'red';
    //         title.style.color = 'white';
    //         buttonContainer.removeChild(blueButton);
    //     } else { 
    //         blueButton.onmouseover = () => {
    //             buttonContainer.appendChild(blueQuote);
    //         }
    //         blueButton.onmouseout = () => {
    //             buttonContainer.removeChild(blueQuote);
    //         }
    //         blueButton.onmouseover = () => {
    //             buttonContainer.appendChild(blueQuote);
    //         }
    //         blueButton.onmouseout = () => {
    //             buttonContainer.removeChild(blueQuote);
    //         }
    //     }
    // } 


