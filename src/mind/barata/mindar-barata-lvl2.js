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
      alert("Muito bem, você superou o primeiro desafio!\n\nAgora mantenha a calma, respire fundo e quando estiver pronto(a), feche esta mensagem para começar o nível 2.");
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
        <a-asset-item id="barata2" src="https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/barata/modelos/barata2/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="180 180 0" position="0 0 0" scale="20.0 20.0 17.0" src="#barata2" animation-mixer />
      </a-entity>
    </a-scene>
  );
}

export default ARComponent;