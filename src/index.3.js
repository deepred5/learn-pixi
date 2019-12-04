import { Application, Ticker, Container, Sprite, Loader, Renderer, autoDetectRenderer } from 'pixi.js';
import * as PIXI from 'pixi.js';
import gsap, { TweenMax, PixiPlugin } from 'gsap/all';

gsap.registerPlugin(PixiPlugin);

PixiPlugin.registerPIXI(PIXI);

import door from './assets/door.png';

const loader = new Loader();

const ticker = new Ticker();

const renderer = new autoDetectRenderer({
  width: 300,
  height: 300,
  backgroundColor: 0xfffcccefe,
});

document.body.appendChild(renderer.view);

const stage = new Container();

var background = new Sprite.from(door);
stage.addChild(background);
background.x = 120;
background.y = 120;

// render一个stage之后，renderer.view才有颜色
renderer.render(stage);

// function test() {
//   renderer.render(stage);
//   requestAnimationFrame(test)
// }

// test();

// loader.add('door', door).load(setup)

// function setup() {

//   let sprite = new Sprite(
//     loader.resources["door"].texture
//   );

//   sprite.x = 10;
//   sprite.y = 10;

//   stage.addChild(sprite);
//   renderer.render(stage);
// }

ticker.add(() => {
	background.rotation += .01
  renderer.render(stage)
});

ticker.start();