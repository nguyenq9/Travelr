// import logo from "../../logo.svg";
import "./App.css";
import ResponsiveAppBar from "../Navigation/ResponsiveAppBar";
import React from 'react';
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Restaurants from "../Restaurants/Restaurants";
import PlanATrip from "../PlanATrip/PlanATrip";
import Guides from "../Guides/Guides";
import Hotels from "../Hotels/Hotels";
import Activities from "../Activities/Activities";
import Landing from "../Landing/Landing";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import GuidePage from "../Guides/GuidePage";
import PageNotFound from "../Pages/PageNotFound";
import PlanPage from "../Pages/PlanPage";
import RestaurantPage from "../Pages/RestaurantPage";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Plan A Trip" element={<PlanATrip />} />
        <Route path="Plans" element={<PlanPage />} />
        <Route path="Hotels" element={<Hotels />} />
        <Route path="Guides" element={<Guides />} />
        <Route path="Guides/:guide_post_id" element={<GuidePage />} />
        <Route path="Activities" element={<Activities />} />
        <Route path="Restaurants" element={<RestaurantPage />} />
        <Route path="Login" element={<LoginForm />} />
        <Route path="Signup" element={<SignupForm />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
