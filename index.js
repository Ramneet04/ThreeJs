// Import Three.js (ensure you have set up the import correctly in your environment)
// import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a box geometry and material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

// Create a mesh (geometry + material) and add it to the scene
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Set box position at the center (default is already at (0, 0, 0))
mesh.position.set(0.7, -0.6, 1);
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

// Select the canvas from the DOM
const canvas = document.getElementsByClassName("wgl")[0];

// Create the WebGL renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(size.width, size.height);

// Render the scene with the camera
renderer.render(scene, camera);
