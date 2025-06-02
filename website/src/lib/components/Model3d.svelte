<!--<script lang="ts">-->
<!--  import { onMount } from 'svelte';-->
<!--  import * as THREE from 'three';-->
<!--  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';-->
<!--  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';-->

<!--  // Model path (can be a prop)-->
<!--  let modelPath = '/gaming_setup.glb';-->

<!--  // Canvas reference-->
<!--  let canvas;-->

<!--  // Three.js variables-->
<!--  let scene, camera, renderer, controls, model;-->

<!--  onMount(() => {-->
<!--    // Initialize Three.js scene-->
<!--    initThreeJS();-->
<!--    loadModel();-->

<!--    // Animation loop-->
<!--    const animate = () => {-->
<!--      requestAnimationFrame(animate);-->
<!--      controls.update();-->
<!--      renderer.render(scene, camera);-->
<!--    };-->
<!--    animate();-->

<!--    return () => {-->
<!--      // Cleanup-->
<!--      if (renderer) {-->
<!--        renderer.dispose();-->
<!--      }-->
<!--    };-->
<!--  });-->

<!--  function initThreeJS() {-->
<!--        // Scene-->
<!--    scene = new THREE.Scene();-->
<!--    scene.background = null // Optional: Set a background color-->
<!--    // Camera-->
<!--    camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);-->
<!--    // Adjust camera position for a top-down view-->
<!--    camera.position.set(10, 10, 10); // X, Y (up), Z. Y value will be your "top" position-->
<!--    camera.lookAt(0, 1, 0); // Make the camera look at the center of the scene-->

<!--    // Renderer-->
<!--    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });-->
<!--    renderer.setClearColor(0x000000, 0);-->
<!--    renderer.setSize(canvas.clientWidth, canvas.clientHeight);-->
<!--    renderer.setPixelRatio(window.devicePixelRatio);-->

<!--    // Controls-->
<!--    controls = new OrbitControls(camera, canvas);-->
<!--    controls.enableDamping = true;-->
<!--    // Optional: If you want to restrict the orbit controls to prevent going below the model-->
<!--    controls.maxPolarAngle = Math.PI / 1.5 - 0.1; // Restricts downward movement, keeps it above the horizon-->

<!--    // Lighting-->
<!--    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);-->
<!--    scene.add(ambientLight);-->

<!--    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);-->
<!--    directionalLight.position.set(1, 1, 1);-->
<!--    scene.add(directionalLight);-->
<!--  }-->

<!--  function loadModel() {-->
<!--    const loader = new GLTFLoader();-->
<!--    loader.load(-->
<!--      modelPath,-->
<!--      (gltf) => {-->
<!--        model = gltf.scene;-->
<!--        scene.add(model);-->
<!--        model.scale.set(40, 40, 40);-->

<!--        // Optional: Center the model-->
<!--        const box = new THREE.Box3().setFromObject(model);-->
<!--        const center = box.getCenter(new THREE.Vector3());-->
<!--        model.position.sub(center);-->
<!--      },-->
<!--      undefined,-->
<!--      (error) => {-->
<!--        console.error('Error loading model:', error);-->
<!--      }-->
<!--    );-->
<!--  }-->

<!--  function handleResize() {-->
<!--    camera.aspect = canvas.clientWidth / canvas.clientHeight;-->
<!--    camera.updateProjectionMatrix();-->
<!--    renderer.setSize(canvas.clientWidth, canvas.clientHeight);-->
<!--  }-->
<!--</script>-->

<!--<svelte:window on:resize={handleResize} />-->

<!--<div class="model-container">-->
<!--  <canvas bind:this={canvas} />-->
<!--</div>-->

<!--<style>-->
<!--  .model-container {-->
<!--    width: 100%;-->
<!--    height: 100vh;-->
<!--    position: relative;-->
<!--    overflow: hidden;-->
<!--  }-->

<!--  canvas {-->
<!--    display: block;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--  }-->
<!--</style>-->