import logo from '../../logo.svg';
import './App.css';
import ResponsiveAppBar from '../Navigation/ResponsiveAppBar';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Restaurants from '../Restaurants/Restaurants';
import Home from '../Home/Home';
import Guides from '../Guides/Guides';
import Hotels from '../Hotels/Hotels';
import Activities from '../Activities/Activities';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
          <Route path="Home" element={<Home/>}/>
          <Route path="Hotels" element={<Hotels/>}/>
          <Route path="Guides" element={<Guides/>}/>
          <Route path="Activities" element={<Activities/>}/>
          <Route path="Restaurants" element={<Restaurants/>}/>
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Thai Nguyen!
      </header>
      <Footer />
    </div>
  );
}

export default App;
