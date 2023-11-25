// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { Button } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; // here toast removed
import Home from './components/Home';
// import Header from './components/Header';

function App() {

  // const btnHandle = () => {
  //   toast.success("done...",{
  //     position:"top-center"
  //   });
  // }

  return (
    <div>
      <ToastContainer />
      <Home/>
      {/* <h1>Application Started</h1> */}
      {/* <Button outline color="primary" onClick={btnHandle}>First React Button</Button> */}

    </div>
  );
}

export default App;