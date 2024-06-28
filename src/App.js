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

  const [EncontrouAlvo, setEncontrouAlvo] = useState(false);

  const TempoProximoNivel = 15000; //15 segundos
  const TempoUltimoNivel = 20000; //20 segundos

  //Método para controlar o nível atual do modelo
  function subirNivelModelo() {
    if (!ModeloNivel2) {
      setModeloNivel2(true);
    } else if (!ModeloNivel3) {
      setModeloNivel3(true);
    } else {
      alert("Parabéns!\n\nVocê venceu todos os desafios do Courage Quest e superou seu medo de " + animalId + "s!");
      window.location.reload(true);
    }

    setEncontrouAlvo(false);

    renderViewer();
  }

  //Método para receber do componente filho(modelos) o sinal
  //de que o card foi localizado e então iniciar a contagem para o próximo nível
  const definirEncontrouAlvo = (childdata) => {
    setEncontrouAlvo(childdata);
  }

  const renderViewer = () => {
    if (ARstarted) {
      if (animalId === 'barata') {
        if (!ModeloNivel2) {
          return (
            <div className="ARView">
              <MindARBarata1 childToParent={definirEncontrouAlvo} />
              <video></video>
              {EncontrouAlvo && setTimeout(function () { subirNivelModelo() }, TempoProximoNivel)}
            </div>
          );
        } else if (!ModeloNivel3) {
          return (
            <div className="ARView">
              <MindARBarata2 childToParent={definirEncontrouAlvo} />
              <video></video>
              {EncontrouAlvo && setTimeout(function () { subirNivelModelo() }, TempoProximoNivel)}
            </div>
          );
        } else {
          return (
            <div className="ARView">
              <MindARBarata3 childToParent={definirEncontrouAlvo} />
              <video></video>
              {EncontrouAlvo && setTimeout(function () { subirNivelModelo() }, TempoUltimoNivel)}
            </div>
          );
        }
      } else {
        if (!ModeloNivel2) {
          return (
            <div className="ARView">
              <MindARAranha1 childToParent={definirEncontrouAlvo} />
              <video></video>
              {EncontrouAlvo && setTimeout(function () { subirNivelModelo() }, TempoProximoNivel)}
            </div>
          );
        } else if (!ModeloNivel3) {
          return (
            <div className="ARView">
              <MindARAranha2 childToParent={definirEncontrouAlvo} />
              <video></video>
              {EncontrouAlvo && setTimeout(function () { subirNivelModelo() }, TempoProximoNivel)}
            </div>
          );
        } else {
          return (
            <div className="ARView">
              <MindARAranha3 childToParent={definirEncontrouAlvo} />
              <video></video>
              {EncontrouAlvo && setTimeout(function () { subirNivelModelo() }, TempoUltimoNivel)}
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