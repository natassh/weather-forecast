import React, { useState, useEffect } from 'react';
import { getWeather } from '../../core/services/weather';
import Title from '../components/Atoms/Title';
import ArticleWeather from '../components/Atoms/ArticleWeather';
import FormWeather from '../components/Molecules/FormWeather';
import Footer from '../components/Molecules/Footer';

import Ribbon from '../../packages/used-stack/Components/Ribbon/Ribbon';
import Modal from '../../packages/used-stack/Components/Modal/Modal';

import './styles/app.css';

function App() {
  const [modal, setModal] = useState({
    isOpen: false
  });

  const handleIsOpenModal = value => {
    setModal({ isOpen: value });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false });
  };

  const [weather, setWeather] = useState({});
  useEffect(() => {
    handleweather();
  }, []);

  const handleweather = async () => {
    const weather = await getWeather('Madrid', 'ES');
    setWeather(weather);
  };

  const handleWeatherObtained = async weatherObtained => {
    const citySelected = weatherObtained.city;
    const countrySelected = weatherObtained.country;

    const weatherWithFormData = await getWeather(citySelected, countrySelected);
    setWeather(weatherWithFormData);
  };

  return (
    <div className="App">
      <Title className="Title">El pronóstico del tiempo</Title>

      <Ribbon text="Used stack" onChange={handleIsOpenModal} />
      {modal.isOpen && <Modal onClose={handleCloseModal} />}
      <main>
        <div className="cw">
          <FormWeather
            className="Form"
            weatherObtained={handleWeatherObtained}
          />
          {Object.keys(weather).length > 0 && (
            <ArticleWeather weather={weather} className="ArticleWeather" />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
