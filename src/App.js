// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div style={{background:'cyan',padding:20}}>
      <Header name="Vikas Yadav" title="First Card"/>
      <hr/>
      <Header name="Kareena Yadav" title="Second Card"/>
      <hr/>
      <Header name="Harsh Yadav" title="Third Card"/>
      <hr/>
      <h1>This is my ReactJS Application</h1>
      <h1>Learning Something New</h1>
    </div>
    
  );
}

export default App;
