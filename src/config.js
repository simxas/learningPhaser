
/// <reference path="../typings/phaser.d.ts" />

import Phaser from 'phaser';

export default {
  type: Phaser.AUTO, // auto picks webgl if its possible
  parent: 'game', // name of the div in html file
  backgroundColor: '#33A5E7',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT, // Phaser tries automatically scalling canvas to fit the screen. For example zooming in. But its not changing 800x600
    autoCenter: Phaser.Scale.CENTER_BOTH, // centers canvas
  },
};
