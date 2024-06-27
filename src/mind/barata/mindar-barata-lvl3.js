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
      alert("Excelente, você é incrível!\n\nVocê está a um passo de superar seus medos, pois este é o último desafio...\n\nTenho certeza de que você irá conseguir, boa sorte!");
      arSystem.start(); // start AR 
    });

    //Se perder o alvo de vista(Se assustou)
    sceneEl.addEventListener("targetLost", () => {
      alert("Ops, infelizmente você perdeu desta vez...\n\nMas não se preocupe, se acalme e tente novamente.\n\nBoa sorte na próxima!");
      window.location.reload(true);
    });

    return () => {
      arSystem.stop();
    }
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/card.mind; filterMinCF:0.1; filterBeta: 10; maxTrack: 1" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="barata3" src="https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/barata/modelos/barata3/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="90 0 0" position="0 -0.25 0" scale="0.4 0.4 0.3" src="#barata3" animation-mixer />
      </a-entity>
    </a-scene>
  );
}

export default ARComponent;