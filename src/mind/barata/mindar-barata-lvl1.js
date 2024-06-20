import React, { useEffect, useRef } from 'react';
import 'aframe';
import 'aframe-extras';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const ARComponent = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR 
    });
    return () => {
      arSystem.stop();
    }
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/card.mind; filterMinCF:0.1; filterBeta: 10; maxTrack: 1" color-space="sRGB" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="barata1" src="https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/barata/modelos/barata1/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="270 180 0" position="0 -0.25 0" scale="0.8 0.8 0.7" src="#barata1" animation-mixer />
      </a-entity>
    </a-scene>
  );
}

export default ARComponent;