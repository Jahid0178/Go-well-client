import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/LogIn/LogIn";
import AuthProvider from "./contexts/AuthProvider";
import Footer from "./components/Footer/Footer";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddNewService from "./components/AddNewService/AddNewService";
import ManageService from "./components/ManageService/ManageService";
import UpdateService from "./components/UpdateService/UpdateService";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/manageService">
              <ManageService></ManageService>
            </PrivateRoute>
            <Route path="/updateService/:id">
              <UpdateService></UpdateService>
            </Route>
            <Route path="/addNewService">
              <AddNewService></AddNewService>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
