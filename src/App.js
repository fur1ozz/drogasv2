import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./pages/PageNotFound";
import TeamPage from "./pages/TeamPage";
import ResetPass from "./components/ResetPassword";
import WorkerWelcomePage from "./pages/WorkerWelcomePage";
import OrderShopChoose from "./components/OrderShopChoose";
import OrderChose from "./components/OrderChose";
import OrderDetails from "./components/OrderDetails";
import OrderStatusShelf from "./components/OrderItemShelf";


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
            {/*Pages*/}
            <Route exact path="/home" element = {<HomePage />}/>
            <Route path="/team" element = {<TeamPage />}/>
            <Route path="/worker" element = {<WorkerWelcomePage />}/>

            {/*Orders*/}
              <Route path="/orders" element = {<OrderShopChoose />}/>
              <Route path="/orders/shop" element = {<OrderChose />}/>
              <Route path="/order-details" element = {<OrderDetails />}/>
              <Route path="/shelf-place" element = {<OrderStatusShelf />}/>

              {/*User processing*/}
            <Route path="/register" element = {<Register />}/>
            <Route path="/login" element = {<Login />}/>
            <Route path="/ResetPass" element = {<ResetPass />}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
