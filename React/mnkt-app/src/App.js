import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Player from './js/layouts/player/Player';
import Header from './js/components/Header';
import NotFound from "./js/utils/NotFound";
import EnterPasscode from "./js/layouts/EnterPasscode";
import EditQuestionnaire from "./js/layouts/EditQuestionnaire";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/mnkt" element={<EnterPasscode />}/>
        <Route path="/mnkt/player" element={<Player />}/>
        <Route path="/mnkt/edit" element={<EditQuestionnaire />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
