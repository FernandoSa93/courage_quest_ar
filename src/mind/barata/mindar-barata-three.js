import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Marcador from './assets/band.mind';
import Modelo from './assets/raccoon/scene.gltf';

const ARComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc: Marcador
    });

    const { renderer, scene, camera } = mindarThree;
    const anchor = mindarThree.addAnchor(0);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(Modelo, (gltf) => {
      const avatar = gltf.scene;

      avatar.scale.set(0.05, 0.05, 0.05);
      avatar.position.set(0, -0.25, 0);
      avatar.rotation.set(0, 0, 0);
      //Fim teste

      // Add rotation animation
      avatar.rotation.x = Math.PI / 4;
      anchor.group.add(avatar);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0x0000ff, 2);
      scene.add(ambientLight);

      // Add point light
      const pointLight = new THREE.PointLight(0x0000ff, 8);
      pointLight.position.set(0, 1, 0);
      anchor.group.add(pointLight);
    });

    mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    return () => {
      mindarThree.stop();
      renderer.setAnimationLoop(null);
    };
  }, []);

  return <div style={{ width: '100%', height: '100%' }} ref={containerRef}></div>;
};

export default ARComponent;