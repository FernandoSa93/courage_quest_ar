import './App.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import MindARBarata1 from './mind/barata/mindar-barata-lvl1';
import MindARBarata2 from './mind/barata/mindar-barata-lvl2';
import MindARBarata3 from './mind/barata/mindar-barata-lvl3';

import MindARAranha1 from './mind/aranha/mindar-aranha-lvl1';
import MindARAranha2 from './mind/aranha/mindar-aranha-lvl2';
import MindARAranha3 from './mind/aranha/mindar-aranha-lvl3';

function App() {

  const animals = [
    { id: '1', image: '/static/images/barata.jpg' },
    { id: '2', image: '/static/images/aranha.png' }
  ];

  const [ModeloNivel2, setModeloNivel2] = useState(false);
  const [ModeloNivel3, setModeloNivel3] = useState(false);

  const [ARstarted, setARStarted] = useState(false);
  const [animalId, setAnimalId] = useState('barata');

  const TempoProximoNivel = 15000; //15 segundos

  //Método para controlar o nível atual do modelo
  function subirNivelModelo() {
    if (!ModeloNivel2) {
      setModeloNivel2(true);
      renderViewer();
    } else {
      setModeloNivel3(true);
      renderViewer();
    }
  }

  const renderViewer = () => {
    if (ARstarted) {
      if (animalId === 'barata') {
        if (!ModeloNivel2) {
          setTimeout(function () { subirNivelModelo() }, TempoProximoNivel);
          return (
            <div className="ARView">
              <MindARBarata1 />
              <video></video>
            </div>
          );
        } else if (!ModeloNivel3) {
          setTimeout(function () { subirNivelModelo() }, TempoProximoNivel);
          return (
            <div className="ARView">
              <MindARBarata2 />
              <video></video>
            </div>
          );
        } else {
          return (
            <div className="ARView">
              <MindARBarata3 />
              <video></video>
            </div>
          );
        }
      } else {
        if (!ModeloNivel2) {
          setTimeout(function () { subirNivelModelo() }, TempoProximoNivel);
          return (
            <div className="ARView">
              <MindARAranha1 />
              <video></video>
            </div>
          );
        } else if (!ModeloNivel3) {
          setTimeout(function () { subirNivelModelo() }, TempoProximoNivel);
          return (
            <div className="ARView">
              <MindARAranha2 />
              <video></video>
            </div>
          );
        } else {
          return (
            <div className="ARView">
              <MindARAranha3 />
              <video></video>
            </div>
          );
        }
      }
    }
    return null;
  };

  return (
    <div className="container">
      <h1 className="title">Courage Quest</h1>

      {!ARstarted && (
        <h2 className="subtitle">Selecione um animal:</h2>
      )}

      {!ARstarted && (
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          onSlideChange={() => (animalId === 'barata' ? setAnimalId('aranha') : setAnimalId('barata'))}
        >
          {animals.map((animal) => (
            <SwiperSlide key={animal.id}>
              <img
                src={animal.image}
                alt='Slider'
                className='slide-item'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {ARstarted && renderViewer()}

      <div className="control-buttons">
        {!ARstarted && (
          <button className="buttonStart" onClick={() => setARStarted(true)}>INICIAR TRATAMENTO EM REALIDADE AUMENTADA</button>
        )}
        {ARstarted && <button className="buttonStop" onClick={() => window.location.reload(true)}>PARAR TRATAMENTO EM REALIDADE AUMENTADA</button>}
      </div>
    </div >
  );
}

export default App;