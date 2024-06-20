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
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/card.mind; filterMinCF:0.1; filterBeta: 10; maxTrack: 1" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="aranha2" src="https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/aranha/aranha2/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="0 0 0" position="0 -0.25 0" scale="10.02 10.02 10.02" src="#aranha2" animation-mixer />
      </a-entity>
    </a-scene>
  );
}

export default ARComponent;