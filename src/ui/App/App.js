import React, { useState } from 'react';
import Title from '../components/Atoms/Title';
import ArticleWeather from '../components/Atoms/ArticleWeather';
import Form from '../components/Molecules/Form';

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

  return (
    <div className="App">
      <Title className="Title">El pronóstico del tiempo</Title>

      <Ribbon text="Used stack" onChange={handleIsOpen} />
      {state.isOpen && <Modal onClose={handleCloseModal} />}
      <main>
        <Form className="Form" onWeatherObtained={handleWeather} />

        {weather && (
          <ArticleWeather weather={weather} className="ArticleWeather" />
        )}
      </main>
    </div>
  );
}

export default App;
