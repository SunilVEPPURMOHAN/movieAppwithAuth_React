
// import { Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FreeComponent from './components/FreeComponent';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './pages/Home';
import Mymovies from './pages/MyMovies';



function App() {
  return (<>
 
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/free' element={<FreeComponent/>}/>
      <Route element={<ProtectedRoutes/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/mymovies' element={<Mymovies/>}/>
      </Route>
      
      
    </Routes>


    </>
  );
}

export default App;
