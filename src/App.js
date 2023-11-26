// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { Button } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; // here toast removed
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menu';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";


function App() {

  // const btnHandle = () => {
  //   toast.success("done...",{
  //     position:"top-center"
  //   });
  // }

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' Component={Home} exact />
                <Route path='/add-course' Component={Addcourse} exact />
                <Route path='/view-course' Component={Allcourses} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
      {/* <Home/>

      <Allcourses/>

      <Addcourse/> */}

    </div>
  );
}

export default App;