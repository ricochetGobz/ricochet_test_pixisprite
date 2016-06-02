/**
*
* app/main.styl
* The entry point of your javascript application.
*
**/

import { pixi as Pixi } from 'pixi.js';

const width = window.innerWidth;
const height = window.innerHeight;
const nbrOfNotes = 6;
const nbrOfSprites = 78;
const animations = [];

const stage = new PIXI.Stage(0xffffff);
const renderer = new PIXI.WebGLRenderer(width, height, { antialias: true });
renderer.backgroundColor = 0xffffff;

document.body.appendChild(renderer.view);


let i, j, k;
for (i = 1; i <= nbrOfNotes; i++) {
  animations[i] = [];

  // Load images
  for (j = 0; j < nbrOfSprites; j++) {
    animations[i].push(
      PIXI.Texture.fromImage(`imgs/son_0${i}/son_0${i}_000${j}.png`)
    );
  }

  for (k = 0; k < 10; k++) {
    const animNote = new PIXI.MovieClip(animations[i]);

    animNote.position.x = Math.random() * width;
    animNote.position.y = Math.random() * height;
    animNote.anchor.x = 0.5;
    animNote.anchor.y = 0.5;

    animNote.rotation = Math.random() * Math.PI;
    animNote.scale.x = animNote.scale.y = 0.75 + Math.random();

    animNote.gotoAndPlay(Math.random() * nbrOfSprites);

    stage.addChild(animNote);
  }
}

function animate() {
  requestAnimationFrame(animate);

  renderer.render(stage);
}

animate();
