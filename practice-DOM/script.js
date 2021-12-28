console.log("Hello DOM");

// console.log(document);

let elementH1 = document.getElementById('heading');
    // console.log(elementH1)

let elementsLI = document.getElementsByClassName('item');
    // console.log(elementsLI);

let elementH2 = document.createElement('h2');
    // console.log(elementH2);

elementH2.textContent = 'this is an h2 tag we made aka .innerHTML this is inside the elementH2';
    // console.log(elementH2);

let containerDiv = document.getElementById('container');

containerDiv.appendChild(elementH2);

elementH1.style.color = 'red'

let myButton = document.getElementById('home');
myButton.addEventListener('click', () => {
    alert("the button was clicked");
    element.style.color = 'grey';
})
// addEventListener('event, anonfucnt')
//if you want or view all the deets in chrome you need to console.dir(document);

//basic steps are to create a variable and assign it a location in teh dom get...()... then you can use methods on this variable.