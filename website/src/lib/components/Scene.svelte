<!-- Scene.svelte -->
<script>
  import { Canvas } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import Model3d from './Model3d.svelte';
</script>

<div class="scene-container">
  <Canvas>
    <!-- Camera setup -->
    <T.PerspectiveCamera
      makeDefault
      position={[5, 5, 5]}
      fov={45}
    />

    <!-- Lighting -->
    <T.AmbientLight intensity={0.4} />
    <T.DirectionalLight
      position={[10, 10, 5]}
      intensity={1}
      castShadow
    />

    <!-- Controls -->
    <OrbitControls
      enableDamping
      dampingFactor={0.05}
    />

    <!-- Your 3D model -->
    <Model3d src="/gaming_setup/scene.gltf" />
  </Canvas>
</div>

<style>
  .scene-container {
    width: 100%;
    height: 100vh;
  }
</style>