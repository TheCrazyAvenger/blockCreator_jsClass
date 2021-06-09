'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width; 
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createDiv = function() {
    const newDiv = document.createElement('div');
    this.selector.substr(0, 1) === '.' && newDiv.classList.add(this.selector.substr(1));
    this.selector.substr(0, 1) === '#' && (newDiv.id = this.selector.substr(1));

    newDiv.style.cssText=`width: ${this.width}px;
    height: ${this.height}px;
    background-color: ${this.bg};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: ${this.fontSize}px;
    `;
    newDiv.innerHTML = 'Div';
    document.body.appendChild(newDiv);
}

const dom = new DomElement('.block', 100, 100, 'red', 20);

function moveRectangle(e){
     
    const rect = document.querySelector('div');

    const position = getComputedStyle(rect);
     
    let left = parseInt(position.marginLeft);
    let top = parseInt(position.marginTop);
     
    switch(e.key){
        case "ArrowLeft":
            if(left>0)
                rect.style.marginLeft = left - 10 + "px";
            break;
        case "ArrowUp":
            if(top>0)
                rect.style.marginTop = top - 10 + "px";
            break;
        case "ArrowRight":
                rect.style.marginLeft = left + 10 + "px";
            break;
        case "ArrowDown":
                rect.style.marginTop = top + 10 + "px";
            break;
    }
}
 


document.addEventListener('DOMContentLoaded', () => {
    dom.createDiv();
    addEventListener("keydown", moveRectangle);
})