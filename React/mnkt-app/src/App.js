import React, {useState, useEffect} from "react"
import api from './api'
import Player from './js/Player';
import Header from './js/Header';
import './css/App.scss';

const App = () => {
  const [questionnaire, setQuestionnaire] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: ''
  })

  const fetchQuestionnaires = async () => {
    try {
      const response = await api.get('/questionnaires/');
      setQuestionnaire(response.data);
    } catch {
      console.error('Error fetching questionnaires:', error);
      setError('Connection Refused');
    }
  }

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
      <Header/>
      <Player/>
    </div>
  );
}

export default App;
