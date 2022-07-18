import './App.css';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom';


import HomePage from './components/HomePage/HomePage';
import List from './components/List/List';
import Restaurant from './components/Restaurant/Restaurant';
import Registration from './components/User/Registration';
import Login from './components/User/Login';
import Cart from './components/User/Cart';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <BrowserRouter>

        <Header/>
        <Routes>
          <Route path='/homepage' element = {<HomePage/>}/>
          <Route path='/list/:city' element = {<List/>}/>
          <Route path='/restaurant/:id' element = {<Restaurant/>}/>
          <Route path='/registration/' element = {<Registration/>}/>
          <Route path='/login/' element = {<Login/>}/>
          <Route path='/cart/' element = {<Cart/>}/>
          <Route path='/' element = {<HomePage/>}/>
        </Routes>
        <Footer/>

    </BrowserRouter>
  );
}

export default App;
