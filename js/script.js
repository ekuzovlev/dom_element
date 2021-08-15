'use strict';

function DomElement(selector, height, width, bg, fontsize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontsize;

  this.createElement = function () {
    let styles = `height          : ${this.height}px;
                  width: ${this.width}px;
                  background-color: ${this.bg};
                  font-size: ${this.fontSize}pt;`;

    if (this.selector.startsWith('.')) {
      let div = document.createElement('div');
      div.className = this.selector;
      document.body.append(div);
      div.innerHTML = "Hello World!";
      div.style.cssText = styles;

    } else if (this.selector.startsWith('#')) {
      let p = document.createElement('p');
      p.id = this.selector;
      document.body.append(p);
      p.innerHTML = "Hello World!";
      p.style.cssText = styles;
    }
  };
}

let domElementClass = new DomElement('.block', 300, 500, 'red', 20);
domElementClass.createElement();

let domElementId = new DomElement('#best', 200, 300, 'blue', 30);
domElementId.createElement();
