import React, { useEffect, useRef } from 'react';
import 'aframe';
import 'aframe-extras';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

const ARComponent = ({ childToParent }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];

    sceneEl.addEventListener('renderstart', () => {
      alert("Seja bem-vindo(a) ao Courage Quest!\n\nEste é o primeiro passo para superar seu medo de baratas.\n\nPonha o card na palma da sua mão, posicione a câmera nele e aguente firme até o tempo acabar.\n\nBoa sorte!");
      arSystem.start(); // start AR 
    });

    //Se encontrou o alvo, envia o sinal para a aplicação iniciar a contagem para o próximo nível
    sceneEl.addEventListener("targetFound", () => {
      childToParent(true);
    });

    //Se perder o alvo de vista(Se assustou)
    sceneEl.addEventListener("targetLost", () => {
      alert("Ops, infelizmente você perdeu desta vez...\n\nMas não se preocupe, se acalme e tente novamente.\n\nBoa sorte na próxima!");
      window.location.reload(true);
    });

    return () => {
      arSystem.stop();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/card.mind; filterMinCF:0.1; filterBeta: 10; maxTrack: 1" color-space="sRGB" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="barata1" src="https://cdn.jsdelivr.net/gh/FernandoSa93/courage_quest_ar@main/src/mind/barata/modelos/barata1/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="270 180 0" position="0 0 0" scale="0.8 0.8 0.7" src="#barata1" animation-mixer />
      </a-entity>
    </a-scene>
  );
}

export default ARComponent;