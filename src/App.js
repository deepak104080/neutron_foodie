import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom';


import HomePage from './components/HomePage/HomePage';
import List from './components/List/List';
import Restaurant from './components/Restaurant/Restaurant';


function App() {
  return (
    <BrowserRouter>


        <Routes>
          <Route path='/homepage' element = {<HomePage/>}/>
          <Route path='/list' element = {<List/>}/>
          <Route path='/restaurant' element = {<Restaurant/>}/>
        </Routes>

    <div className='app'>
      <div className='container bg-info'>
        <div className='row'>
          <div className='col-12'>
            <h2>Foodie App</h2>
          </div>
        </div>
      </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
