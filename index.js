import * as THREE from 'three';
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const box = new THREE.Mesh(geometry,material);
scene.add(box);
const size = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, size.width/size.height);
camera.position.z=4;
camera.position.x=2;
scene.add(camera);

const canvas = document.getElementsByClassName("wgl")[0];
const renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(size.width,size.height);
renderer.render(scene, camera);
