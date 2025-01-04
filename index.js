// Import Three.js (ensure you have set up the import correctly in your environment)
// import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();
const group = new THREE.Group();
scene.add(group);
// Create a box geometry and material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

// Create a mesh (geometry + material) and add it to the scene
const mesh = new THREE.Mesh(geometry, material);
const mesh2= new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"blue"}),
);
const mesh3= new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"green"}),
);
group.add(mesh);
group.add(mesh2);
group.add(mesh3);

// Set box position at the center (default is already at (0, 0, 0))
mesh.position.set(0, 0, 0);
mesh.rotation.y=2;
mesh2.position.x=-2;
mesh3.position.x=2;
group.position.y=1;
console.log(mesh.position.length());
// Define the canvas size
const size = {
    width: 800,
    height: 600
};

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3; // Move the camera back to view the scene
scene.add(camera);
camera.lookAt(mesh.position);
// Select the canvas from the DOM
const canvas = document.getElementsByClassName("wgl")[0];

// Create the WebGL renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(size.width, size.height);

// Render the scene with the camera
// let time = Date.now();
// const tick = ()=>{
//     const currTime = Date.now();
//     const delta = currTime - time;
//     time = currTime;
//     // console.log(delta);
//     group.rotation.y+=0.01 * delta;
//     renderer.render(scene, camera);
//     window.requestAnimationFrame(tick);
// }
let clock = new THREE.Clock();
const tick = ()=>{
    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime);
    // group.rotation.y=elapsedTime;
    group.position.x= Math.sin(elapsedTime);
    // group.position.x= Math.cos(elapsedTime);
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick();
