// import logo from "../../logo.svg";
import "./App.css";
import ResponsiveAppBar from "../Navigation/ResponsiveAppBar";
import React, { Component, useState, useEffect } from "react";
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
import PlanInfo from "../Plans/PlanInfo"
import Protected from "../../util/Protected";
import Account from "../Account/Account"
import {useSelector, useDispatch} from 'react-redux';
import {login} from "../../store/slices/authSlice"
import AppLoader from "../utils/loaders/AppLoader"

function App() {
  const { loaded } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loaded) {
      const user = JSON.parse(localStorage.getItem('user'));
      setTimeout(() => {
        dispatch(login({
          firstName: user?.firstName || '',
          lastName: user?.lastName || '',
          email: user?.email || '',
          avatar: ''
        }))
      }, 2000)
    }
  })

  return (
    <div className="App">
      {!loaded && <AppLoader />}
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Plan A Trip" element={<PlanATrip />} />
        <Route path="Plans" element={<PlanPage />} />
        <Route path="Plans/:plan_id" element={<PlanInfo />} />
        <Route path="Hotels" element={<Hotels />} />
        <Route path="Guides" element={<Guides />} />
        <Route path="Guides/:guide_post_id" element={<GuidePage />} />
        <Route path="Activities" element={<Activities />} />
        <Route path="Restaurants" element={<RestaurantPage />} />
        <Route path="Login" element={<LoginForm />} />
        <Route path="Signup" element={<SignupForm />} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
