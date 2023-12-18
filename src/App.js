import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./pages/PageNotFound";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
      <Router>
        <div className="min-h-screen dark:bg-[#1d2125]">
          <Routes>
              <Route
                  path="/"
                  element={<Navigate to="/home" />}
              />
              <Route
                  path="*"
                  element={<PageNotFound />}
              />
            <Route exact path="/home" element = {<HomePage />}/>
            <Route path="/team" element = {<TeamPage />}/>
            <Route path="/register" element = {<Register />}/>
            <Route path="/login" element = {<Login />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
