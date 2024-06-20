import React, { useState, useEffect } from "react";
import "./App.scss";
import api from './js/services/api';
import Player from './js/components/Player';
import Header from './js/components/Header';
import EnterPasscode from "./js/components/EnterPasscode";
import { handleError } from "./js/utils/handleError";


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
      {/* <EnterPasscode /> */}
    </div>
  );
};

export default App;
