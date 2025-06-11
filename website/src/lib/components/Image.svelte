<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { cn } from '$lib/utils'; // Assuming you have a utility for combining classes

  export let src = '/images/rocher-1.jpg';
  export let className: string = ''; // Renamed from className to class for Svelte best practices

  let container: HTMLElement; // Use HTMLElement for better type clarity
  let scene: THREE.Scene;
  let camera: THREE.OrthographicCamera;
  let renderer: THREE.WebGLRenderer;
  let plane: THREE.Mesh;
  let colorTexture: THREE.Texture;
  let grayTexture: THREE.CanvasTexture;
  let maskTexture: THREE.CanvasTexture;
  let material: THREE.ShaderMaterial;
  let mouse = new THREE.Vector2();
  let brushCanvas: HTMLCanvasElement;
  let brushCtx: CanvasRenderingContext2D;
  let isHovering = false;
  export let brushSize = 0.25; // Normalized brush size

  // Shaders remain the same as they operate on UV coordinates
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D colorTexture;
    uniform sampler2D grayTexture;
    uniform sampler2D maskTexture;
    varying vec2 vUv;

    void main() {
      vec4 colorImage = texture2D(colorTexture, vUv);
      vec4 grayImage = texture2D(grayTexture, vUv);
      vec4 mask = texture2D(maskTexture, vUv);

      // Mix between color and gray based on mask
      vec4 finalColor = mix(colorImage, grayImage, mask.r);
      gl_FragColor = finalColor;
    }
  `;

  onMount(() => {
    initThree();
    loadTextures(); // This now calls createPlane after textures are loaded

    // Only start animation loop and event listeners once everything is ready
    animate();

    const handleResize = () => {
      if (renderer && camera && container) {
        const rect = container.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);

        // Adjust camera to fit the new container aspect ratio
        const aspect = rect.width / rect.height;
        if (aspect >= 1) { // Landscape or square container
            camera.left = -aspect;
            camera.right = aspect;
            camera.top = 1;
            camera.bottom = -1;
        } else { // Portrait container
            camera.left = -1;
            camera.right = 1;
            camera.top = 1 / aspect;
            camera.bottom = -1 / aspect;
        }
        camera.updateProjectionMatrix();

        // Adjust plane scale to fill the new container aspect ratio
        if (plane && colorTexture) {
          const imageAspect = colorTexture.image.width / colorTexture.image.height;
          let scaleX = 1;
          let scaleY = 1;

          if (aspect > imageAspect) { // Container is wider than image
            scaleX = aspect / imageAspect;
          } else { // Container is taller than image
            scaleY = imageAspect / aspect;
          }
          plane.scale.set(scaleX, scaleY, 1);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    // Call once initially to set correct aspect
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        renderer.dispose();
      }
      // Clean up DOM elements if needed
      if (container && renderer && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  });

  function initThree() {
    const rect = container.getBoundingClientRect();

    // Scene
    scene = new THREE.Scene();

    // Camera - Initial setup, will be updated by handleResize
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 0.5; // Slightly move camera to ensure it's "in front" of the plane

    // Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement); // Append canvas to container

    // Create brush canvas for mask (512x512 for better resolution)
    brushCanvas = document.createElement('canvas');
    brushCanvas.width = 512;
    brushCanvas.height = 512;
    brushCtx = brushCanvas.getContext('2d')!; // Assert non-null
    brushCtx.fillStyle = 'black';
    brushCtx.fillRect(0, 0, 512, 512);

    // Create mask texture
    maskTexture = new THREE.CanvasTexture(brushCanvas);
    maskTexture.needsUpdate = true;
    maskTexture.minFilter = THREE.LinearFilter; // Improve quality for mask
    maskTexture.magFilter = THREE.LinearFilter;
  }

  function loadTextures() {
    const loader = new THREE.TextureLoader();

    // Load original image
    loader.load(
      src,
      (texture) => {
        colorTexture = texture;
        colorTexture.minFilter = THREE.LinearFilter; // Improve quality for image
        colorTexture.magFilter = THREE.LinearFilter;

        // Create grayscale version
        createGrayscaleTexture(texture);

        // Create material and plane *after* both color and gray textures are ready
        createPlane();
        // Immediately call handleResize to fit the image correctly
        const rect = container.getBoundingClientRect();
        const aspect = rect.width / rect.height;
        updatePlaneAndCameraAspect(colorTexture.image.width / colorTexture.image.height, aspect);
      },
      undefined, // onProgress callback
      (error) => {
        console.error('Error loading texture:', error);
      }
    );
  }

  function createGrayscaleTexture(originalTexture: THREE.Texture) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = originalTexture.image;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx!.drawImage(img, 0, 0); // Assert non-null
    const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height); // Assert non-null
    const data = imageData.data;

    // Convert to grayscale
    for (let i = 0; i < data.length; i += 4) {
      const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
      data[i] = gray;     // Red
      data[i + 1] = gray; // Green
      data[i + 2] = gray; // Blue
    }

    ctx!.putImageData(imageData, 0, 0); // Assert non-null
    grayTexture = new THREE.CanvasTexture(canvas);
    grayTexture.minFilter = THREE.LinearFilter; // Improve quality
    grayTexture.magFilter = THREE.LinearFilter;
  }

  function createPlane() {
    const geometry = new THREE.PlaneGeometry(2, 2); // Initial size, will be scaled

    material = new THREE.ShaderMaterial({
      uniforms: {
        colorTexture: { value: colorTexture },
        grayTexture: { value: grayTexture },
        maskTexture: { value: maskTexture }
      },
      vertexShader,
      fragmentShader,
      transparent: true // Enable transparency for blending
    });

    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
  }

  function updatePlaneAndCameraAspect(imageAspect: number, containerAspect: number) {
    // Adjust camera projection to match container aspect
    if (containerAspect >= 1) { // Landscape or square container
        camera.left = -containerAspect;
        camera.right = containerAspect;
        camera.top = 1;
        camera.bottom = -1;
    } else { // Portrait container
        camera.left = -1;
        camera.right = 1;
        camera.top = 1 / containerAspect;
        camera.bottom = -1 / containerAspect;
    }
    camera.updateProjectionMatrix();

    // Scale the plane to achieve 'object-cover'
    let scaleX = 1;
    let scaleY = 1;

    // Determine if the container is wider or taller than the image
    if (containerAspect > imageAspect) {
        // Container is wider, so scale plane's X to fill the width
        scaleX = containerAspect / imageAspect;
    } else {
        // Container is taller, so scale plane's Y to fill the height
        scaleY = imageAspect / containerAspect;
    }
    plane.scale.set(scaleX, scaleY, 1);
  }


  function updateMouse(event: MouseEvent) {
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function drawBrush(x: number, y: number) {
    if (!brushCtx) return;

    // Convert mouse coordinates (-1 to 1) to brush canvas coordinates (0 to 512)
    const canvasX = (x + 1) * 256;
    const canvasY = (-y + 1) * 256;
    const brushPixelSize = brushSize * 300; // Larger brush

    brushCtx.save();
    brushCtx.globalCompositeOperation = 'lighter';
    brushCtx.globalAlpha = 0.8;

    const numStrokes = 8;
    for (let i = 0; i < numStrokes; i++) {
      const angle = (i / numStrokes) * Math.PI * 2;
      const offsetX = Math.cos(angle) * (Math.random() * 20);
      const offsetY = Math.sin(angle) * (Math.random() * 20);

      const gradient = brushCtx.createRadialGradient(
        canvasX + offsetX, canvasY + offsetY, 0,
        canvasX + offsetX, canvasY + offsetY, brushPixelSize * (0.8 + Math.random() * 0.4)
      );

      gradient.addColorStop(0, `rgba(255, 255, 255, ${0.8 + Math.random() * 0.2})`);
      gradient.addColorStop(0.4, `rgba(255, 255, 255, ${0.4 + Math.random() * 0.3})`);
      gradient.addColorStop(0.8, `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      brushCtx.fillStyle = gradient;
      brushCtx.beginPath();
      brushCtx.arc(canvasX + offsetX, canvasY + offsetY, brushPixelSize, 0, Math.PI * 2);
      brushCtx.fill();
    }

    for (let i = 0; i < 15; i++) {
      const dotX = canvasX + (Math.random() - 0.5) * brushPixelSize * 2;
      const dotY = canvasY + (Math.random() - 0.5) * brushPixelSize * 2;
      const dotSize = Math.random() * 8 + 2;

      brushCtx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
      brushCtx.beginPath();
      brushCtx.arc(dotX, dotY, dotSize, 0, Math.PI * 2);
      brushCtx.fill();
    }

    brushCtx.restore();
    maskTexture.needsUpdate = true;
  }

  function clearMask() {
    if (brushCtx) {
      brushCtx.globalCompositeOperation = 'source-over';
      brushCtx.fillStyle = 'black';
      brushCtx.fillRect(0, 0, 512, 512);
      maskTexture.needsUpdate = true;
    }
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isHovering) return;
    updateMouse(event);
    drawBrush(mouse.x, mouse.y);
  }

  function handleMouseEnter(event: MouseEvent) {
    isHovering = true;
    updateMouse(event);
    drawBrush(mouse.x, mouse.y); // Draw initial brush on hover entry
  }

  function handleMouseLeave() {
    isHovering = false;
    fadeToOriginal();
  }

  function fadeToOriginal() {
    if (!brushCtx || !maskTexture) return;

    const fadeSteps = 20;
    let currentStep = 0;
    const fadeOpacity = 0.1; // Amount of black to draw per step

    const fadeInterval = setInterval(() => {
      brushCtx.globalCompositeOperation = 'source-over'; // ensures drawing black over existing white
      brushCtx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
      brushCtx.fillRect(0, 0, 512, 512);

      maskTexture.needsUpdate = true;
      currentStep++;

      if (currentStep >= fadeSteps) {
        clearInterval(fadeInterval);
        clearMask(); // Ensure it's fully black at the end
      }
    }, 50); // 50ms intervals for smooth fade
  }

  function animate() {
    requestAnimationFrame(animate);
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }
</script>

<div
  bind:this={container}
  class={cn(
    "mx-3 md:block md:absolute md:inset-0 md:top-1/3 md:left-20 brush-container",
    className
  )}
  on:mousemove={handleMouseMove}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <div class="absolute -bottom-16 left-0 flex gap-2 z-10"> <button
      on:click={clearMask}
      class="px-3 py-1 bg-gray-800 text-white text-xs rounded hover:bg-gray-700 transition-colors"
    >
      Clear
    </button>

    <div class="flex items-center gap-2">
      <label class="text-xs text-gray-600">Brush:</label>
      <input
        type="range"
        min="0.15"
        max="0.4"
        step="0.01"
        bind:value={brushSize}
        class="w-16 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  </div>
</div>

<style>
  .brush-container {
    position: relative;
    height: 30vh;
    width: 13rem; /* w-52 equivalent */
    transform: rotate(12deg);
    border-radius: 1.5rem;
    overflow: hidden;
    cursor: none; /* Hide default cursor */
  }

  @media (min-width: 768px) {
    .brush-container {
      height: auto; /* Let content dictate height or adjust as needed for desktop */
      min-height: 250px; /* Example: ensure minimum height on desktop */
      max-height: 400px; /* Example: ensure maximum height on desktop */
      transform: rotate(-30deg);
    }
  }

  .brush-container :global(canvas) {
    width: 100% !important;
    height: 100% !important;
    display: block; /* Remove extra space below canvas */
    border-radius: 1.5rem;
  }

  /* Custom brush cursor - larger to match brush size */
  .brush-container::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    pointer-events: none; /* Crucial: allows mouse events to pass through to the container */
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 10;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  /* When container is hovered, make the custom cursor visible */
  .brush-container:hover::after {
    opacity: 1;
  }
</style>