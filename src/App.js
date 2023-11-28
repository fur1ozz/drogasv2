import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="min-h-screen dark:bg-[#1d2125]">
          <Routes>
            <Route exact path="/Home" element = {<Home />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
