import * as THREE from 'three'

const canvas = document.getElementById("canvas");
const width = 800;
const height = 600;
const scene = new THREE.Scene();
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mesh = new THREE.Mesh(boxGeometry, mat);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(60, width / height);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(width, height);
camera.position.set(0, 0, 2);

renderer.render(scene, camera);
