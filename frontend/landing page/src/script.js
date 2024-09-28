import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

//blob

// Add an event listener for mouse movement
const blob = document.getElementById('blob');

// Add an event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    
    // Update the blob's position
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2500, fill: "forwards" });
});
document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    
    
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(50px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(feature);
    });
    
    // Add hover effect
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0) scale(1)';
        });
    });
});


/**
 * Lighting
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5,5,5);
scene.add(pointLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5); // Light angle
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0, 10, 30);
camera.lookAt(0, 0, 0);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Orbit Controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 100;
controls.minDistance = 5;

/**
 * Backup Cube (to ensure scene is working)
 */
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'white' });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0, 0);
scene.add(cube);

/**
 * Load Custom 3D Models
 */
const loader = new GLTFLoader();

let human;
let nutrients = [];

// Load the human model
loader.load(
    'heal.glb',
    (gltf) => {
        human = gltf.scene;
        human.scale.set(3,3,3);
        human.position.set(0,15,0);
        scene.add(human);
        console.log('Human model loaded', human);
        cube.visible = false; // Hide backup cube when human is loaded
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('An error occurred loading the human model:', error);
    }
);

// Function to load nutrient models
// function loadNutrientModel(path, size, speed) {
//     loader.load(
//         path,
//         (gltf) => {
//             const nutrient = gltf.scene;
//             nutrient.scale.set(size, size, size);
//             nutrient.userData.speed = speed;
//             nutrient.userData.angle = Math.random() * Math.PI * 2; // Random starting position
//             nutrients.push(nutrient);
//             scene.add(nutrient);
//             console.log('Nutrient loaded:', nutrient);
//         },
//         (xhr) => {
//             console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//         },
//         (error) => {
//             console.error('An error occurred loading a nutrient model:', error);
//         }
//     );
// }

// const orbitRadius = 15; // All nutrients will orbit at this radius

// // Load nutrients with different speeds
// loadNutrientModel('carrot.glb', 1, 0.5);
// loadNutrientModel('egg.glb', 0.8, 0.7);
// loadNutrientModel('apple.glb', 0.6, 0.9);

/**
 * Resize Handler
 */
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Animation
 */
const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    if (human) {
        human.rotation.y = elapsedTime * 0.1;
    }

    nutrients.forEach((nutrient) => {
        nutrient.userData.angle += nutrient.userData.speed * 0.02; // Adjust speed factor as needed
        nutrient.position.x = Math.cos(nutrient.userData.angle) * orbitRadius;
        nutrient.position.z = Math.sin(nutrient.userData.angle) * orbitRadius;
        nutrient.rotation.y = elapsedTime * 0.5;
    });

    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
};
animate();