import './App.css';
import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom';


import HomePage from './components/HomePage/HomePage';
import List from './components/List/List';
import Restaurant from './components/Restaurant/Restaurant';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <BrowserRouter>

        <Header/>
        <Routes>
          <Route path='/homepage' element = {<HomePage/>}/>
          <Route path='/list' element = {<List/>}/>
          <Route path='/restaurant' element = {<Restaurant/>}/>
          <Route path='/' element = {<HomePage/>}/>
        </Routes>
        <Footer/>


    {/* <div className='app'>
      <div className='container bg-info'>
        <div className='row'>
          <div className='col-12'>
            <h2>Foodie App</h2>
          </div>
        </div>
      </div>
    </div> */}

    </BrowserRouter>
  );
}

export default App;
