import React, {useState, useEffect} from "react"
import api from './api'

const App = () => {
  const [questionnaire, setQuestionnaire] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: ''
  })

  const fetchQuestionnaires = async () => {
    const response = await api.get('/questionnaires/');
    setQuestionnaire(response.data);
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
      <nav>
        
      </nav>
    </div>
  )
}

export default App;
