'use strict';
// Three.js
var container, stats, g_loadedItems = 0, objects = [], trees = [];
var camera, scene, renderer, composer, controls, manager, peasant;
var surus, ground;
// shaderToy
var isMouseDown = false, mousePos = {x:0, y:0, z:0, w:0};
var startTime = new Date() / 1000;
var clock = new THREE.Clock();