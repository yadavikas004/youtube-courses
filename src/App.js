// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import Header from './components/Header';

function App() {

  const btnHandle = () => {
    toast("this is my first message");
  }

  return (
    <div>
      <ToastContainer />
      <h1>Application Started</h1>
      <Button outline color="primary" onClick={btnHandle}>First React Button</Button>

    </div>
  );
}

export default App;