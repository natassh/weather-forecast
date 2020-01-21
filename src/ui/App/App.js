import React, { useState } from 'react';
import Title from '../components/Atoms/Title';
import ArticleWeather from '../components/Atoms/ArticleWeather';
import FormWeather from '../components/Molecules/FormWeather';
import Footer from '../components/Molecules/Footer';

import Ribbon from '../../packages/used-stack/Components/Ribbon/Ribbon';
import Modal from '../../packages/used-stack/Components/Modal/Modal';

import './styles/app.css';

function App() {
  const [state, setState] = useState({
    isOpen: false
  });

  const handleIsOpen = value => {
    setState({ isOpen: value });
  };

  const handleCloseModal = () => {
    setState({ isOpen: false });
  };

  const [weather, setWeather] = useState();

  const handleWeather = weatherObtained => {
    setWeather({ weather: weatherObtained });
  };
  console.log(weather);
  return (
    <div className="App">
      <Title className="Title">El pronóstico del tiempo</Title>

      <Ribbon text="Used stack" onChange={handleIsOpen} />
      {state.isOpen && <Modal onClose={handleCloseModal} />}
      <main>
        <div className="cw">
          <FormWeather className="Form" onWeatherObtained={handleWeather} />

          {weather && (
            <ArticleWeather weather={weather} className="ArticleWeather" />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
