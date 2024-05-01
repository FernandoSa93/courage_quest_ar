import './App.css';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MindARBarata from './mind/barata/mindar-barata-three';

function App() {

  const animals = [
    { id: '1', image: '/static/images/barata.jpg' },
    { id: '2', image: '/static/images/aranha.png' }
  ];

  const [ARstarted, setARStarted] = useState(null);
  const [animalId, setAnimalId] = useState('barata');

  const renderViewer = () => {
    if (ARstarted === '1') {
      return (
        <div className="ARView">
          <MindARBarata />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <h1 className="title">Courage Quest</h1>

      {ARstarted === null && (
        <h2 className="subtitle">Selecione um animal:</h2>
      )}

      {ARstarted === null && (
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
      {ARstarted !== null && renderViewer()}

      <div className="control-buttons">
        {ARstarted === null && (
          <button className="buttonStart" onClick={() => setARStarted('1')}>INICIAR TRATAMENTO EM REALIDADE AUMENTADA</button>
        )}
        {ARstarted !== null && <button className="buttonStop" onClick={() => setARStarted(null)}>PARAR TRATAMENTO EM REALIDADE AUMENTADA</button>}
      </div>

    </div >
  );
}

export default App;