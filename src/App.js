
import { Col, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthComponent from './components/AuthComponent';
import FreeComponent from './components/FreeComponent';
import Login from './components/Login';
import Register from './components/Register';
// import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (<>
      <Row><Col>
    <h1>Your Movie App</h1>

          <section id="navigation">
            <a href="/">Login</a><a>{" "}</a>
            <a href="/free">Free Component</a><a>{" "}</a>
            <a href="/auth">Auth Component</a>
          </section></Col></Row>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/free' element={<FreeComponent/>}/>
      {/* <Route element={<ProtectedRoutes/>}> */}
        <Route path='/auth' element={<AuthComponent/>}/>
      {/* </Route> */}
    </Routes>


    </>
  );
}

export default App;
