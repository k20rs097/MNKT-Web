import React, { useState, useEffect } from "react";
import api from './js/services/api';
import Player from './js/components/Player';
import Header from './js/components/Header';
import { handleError } from "./js/utils/handleError";
import React_YouTube from "./js/components/test/React-youtubeTest";

const App = () => {
  const [questionnaire, setQuestionnaire] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: ''
  });

  const fetchQuestionnaires = async () => {
    try {
      const response = await api.get('/questionnaires/');
      setQuestionnaire(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchQuestionnaires();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.post('/questionnaires/', formData);
    fetchQuestionnaires();
    setFormData({
      amount: '',
      category: '',
      description: '',
      is_income: false,
      date: ''
    });
  };

  return (
    <div>
      <Header />
      <Player />
      {/* <React_YouTube /> */}
    </div>
  );
};

export default App;
