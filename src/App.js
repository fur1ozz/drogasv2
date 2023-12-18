import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
      <Router>
        <div className="min-h-screen dark:bg-[#1d2125]">
          <Routes>
            <Route exact path="/home" element = {<HomePage />}/>
            <Route path="/register" element = {<Register />}/>
            <Route path="/login" element = {<Login />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
