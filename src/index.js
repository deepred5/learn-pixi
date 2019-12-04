import { Application, Container, Sprite, Graphics } from 'pixi.js';

const app = new Application({
  width: 300,
  height: 300,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0x1d9ce0
});

document.body.appendChild(app.view);

const avatar = new Sprite.from('http://anata.me/img/avatar.jpg');
avatar.scale.set(0.5, 0.5);
avatar.interactive = true;
avatar.on('click', () => {
  console.log('deepred');
})
app.stage.addChild(avatar);
