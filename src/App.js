import './App.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {

  const [slidePerView, setSlidePerView] = useState(1);
  const animals = [
    { id: '1', image: '/static/images/barata.jpg' },
    { id: '2', image: '/static/images/aranha.png' }
  ];

  const [animalId, setAnimalId] = useState('1');

  function beginARExperience() {
    if (animalId === '1') {
      alert("Barata!");
    } else {
      alert("Aranha!");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Courage Quest</h1>
      <h2 className="subtitle">Selecione um animal:</h2>

      <Swiper
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
        onSlideChange={() => (animalId === '1' ? setAnimalId('2') : setAnimalId('1'))}
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

      <button
        className="button"
        onClick={beginARExperience}>
        Iniciar Tratamento em AR
      </button>
    </div >
  );
}

export default App;
