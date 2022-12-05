import { Route, Routes } from "react-router-dom";
import Contacts from "../../Pages/Contacts";
import Entry from "../../Pages/Entry";
import HomePage from "../../Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/entry" element={<Entry/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="" />
      </Routes>
    </div>
  );
}

export default App;
