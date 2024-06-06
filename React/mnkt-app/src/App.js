import React, {useState, useEffect} from "react"
import api from './api'
import Player from '../src/components/Player';
import Header from '../src/components/Header';
import './css/App.scss';

const App = () => {
  // const [questionnaire, setQuestionnaire] = useState([]);
  // const [formData, setFormData] = useState({
  //   amount: '',
  //   category: '',
  //   description: '',
  //   is_income: false,
  //   date: ''
  // })

  // const fetchQuestionnaires = async () => {
  //   const response = await api.get('/questionnaires/');
  //   setQuestionnaire(response.data);
  // }

  // useEffect(() => {
  //   fetchQuestionnaires();
  // }, []);

  // const handleInputChange = (event) => {
  //   const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: value
  //   });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   await api.post('/questionnaires/', formData);
  //   fetchQuestionnaires();
  //   setFormData({
  //     amount: '',
  //     category: '',
  //     description: '',
  //     is_income: false,
  //     date: ''
  //   });
  // };


  // return (
  //   <div>
  //     <h2>Questionnaires</h2>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Movie ID</th>
  //           <th>Priority</th>
  //           <th>Question</th>
  //           <th>choice_1</th>
  //           <th>choice_2</th>
  //           <th>choice_3</th>
  //           <th>choice_4</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //       {/* 状態から質問票データを表示 */}
  //       {questionnaire.map((item) => (
  //         <tr key={item.id}>
  //           <td>{item.id}</td>
  //           <td>{item.movie_id}</td>
  //           <td>{item.priority}</td>
  //           <td>{item.question}</td>
  //           <td>{item.choice_1}</td>
  //           <td>{item.choice_2}</td>
  //           <td>{item.choice_3}</td>
  //           <td>{item.choice_4}</td>
  //         </tr>
  //       ))}
  //       </tbody>
  //     </table>
  //   </div>
  // )
  return (
    <div>
      <Header/>
      <Player/>
    </div>
  );
}

export default App;
