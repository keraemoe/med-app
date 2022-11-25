import { Route, Routes } from "react-router-dom";
import Contacts from "../../Pages/ContactsPage/Contacts";
import Entry from "../../Pages/Entry/Entry";
import HomePage from "../../Pages/Home/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="" />
      </Routes>
    </div>
  );
}

export default App;
