import { Application, Ticker, Container, Sprite, Loader } from 'pixi.js';
import * as PIXI from 'pixi.js';
import gsap, { TweenMax, PixiPlugin } from 'gsap/all';

gsap.registerPlugin(PixiPlugin);

PixiPlugin.registerPIXI(PIXI);

import door from './assets/door.png';

const loader = new Loader();

// Create the application
const app = new Application({
  width: 300,
  height: 300,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0xfffcccefe,
});

// Add the view to the DOM
document.body.appendChild(app.view);

// app.stage -> this.stage = new Container();
// app.render -> this.renderer = autoDetectRenderer(options);
// app.view -> app.renderer.view  是canvas dom元素

// app.renderer.resize(10, 10);

// var background = new Sprite.from(door);
// app.stage.addChild(background);

loader.add('door', door).load(setup)

function setup() {

  let sprite = new Sprite(
    loader.resources["door"].texture
  );

  sprite.x = 10;
  sprite.y = 10;

  app.stage.addChild(sprite);

  // TweenMax.to(sprite, 1, {pixi: { x: 40, y: 40 }});

  // TweenMax.to(sprite, 1, { pixi: { scaleX: 2 } });

  TweenMax.to(sprite, 1, { x: 200, y: 200 });

  sprite.interactive = true;
  sprite.on('pointertap', () => {
    console.log('13');
  })
}