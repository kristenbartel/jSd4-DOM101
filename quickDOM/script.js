let divContainer = document.getElementById('container');

let button = document.createElement('button'); //these need to be actual HTML element-- ex <button> so use the 'button' in its' place here in the ()
    button.textContent = "click"
    divContainer.appendChild(button);
    button.addEventListener('click', () => {
        alert("this is a clicked button");
    })

let elementH1 = document.createElement('h1');
    elementH1.textContent = 'this is a heading 1';
    divContainer.appendChild(elementH1);

let elementH2 = document.createElement('h2');
elementH2.textContent = 'This is a heading 2';
divContainer.appendChild(elementH2);

let elementP1 = document.createElement('p');
elementP1.textContent = 'para 1';
divContainer.appendChild(elementP1);

let elementP2 = document.createElement('p');
elementP2.textContent = 'para 2';
divContainer.appendChild(elementP2);

let elementP3 = document.createElement('p');
elementP3.textContent = 'para 3';
divContainer.appendChild(elementP3);


let elementUL = document.createElement('ul');
elementUL.textContent = 'this is a list';
divContainer.appendChild(elementUL);

let elementsLi1 = document.createElement.appendChild('li');
elementsLi1.textContent = 'item 1';
elementUL.appendChild(elementsLi1);

    // let elementsLi2 = document.createElement.appendChild('li');
    //     elementsLi2.textContent = 'item 2';
    //     elementUL.appendChild(elementsLi2);
        
    // let elementsLi3 = document.createElement.appendChild('li');
    //     elementsLi3.textContent = 'item 3';
    //     elementUL.appendChild(elementsLi3);
