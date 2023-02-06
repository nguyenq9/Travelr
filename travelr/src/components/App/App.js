import logo from "../../logo.svg";
import "./App.css";
import ResponsiveAppBar from "../Navigation/ResponsiveAppBar";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Restaurants from "../Restaurants/Restaurants";
import Plan from "../Plan/Plan";
import Guides from "../Guides/Guides";
import Hotels from "../Hotels/Hotels";
import Activities from "../Activities/Activities";
import Landing from "../Landing/Landing";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Plan A Trip" element={<Plan />} />
        <Route path="Hotels" element={<Hotels />} />
        <Route path="Guides" element={<Guides />} />
        <Route path="Activities" element={<Activities />} />
        <Route path="Restaurants" element={<Restaurants />} />
        <Route path="Login" element={<LoginForm />} />
        <Route path="Signup" element={<SignupForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
