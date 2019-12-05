import { Application, Container, Sprite, Graphics } from 'pixi.js';

const app = new Application({
  width: 300,
  height: 300,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0x1d9ce0
});

window.app = app;

const myContainer = new Container();
let rectangle = new Graphics();
rectangle.beginFill(0x000000);
rectangle.drawRect(0, 0, 64, 64);
rectangle.endFill();

let rectangle2 = new Graphics();
rectangle.beginFill(0xFFFFFF);
rectangle2.drawRect(0, 0, 64, 64);
rectangle2.endFill();

myContainer.addChild(rectangle);
myContainer.addChild(rectangle2);

app.stage.addChild(myContainer);

document.body.appendChild(app.view);
