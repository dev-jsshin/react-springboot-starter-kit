import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;
  const BACKEND_PORT = `${process.env.REACT_APP_BACKEND_PORT}`;
  const BACKEND_CONTEXT_PATH = `${process.env.REACT_APP_BACKEND_CONTEXT_PATH}`;

  const [bsData, setBsData] = useState([]);
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    axios.get('http://' + BACKEND_URL + ':' + BACKEND_PORT + BACKEND_CONTEXT_PATH + '/bs').then(reponse => {
      setBsData(reponse.data);
    });
    
    axios.get('http://' + BACKEND_URL + ':' + BACKEND_PORT + BACKEND_CONTEXT_PATH +  '/db/connection').then(reponse => {
      setDbData(reponse.data.data);
    });
  }, []);

  return (
      <div className="App">
          <header className="App-header">
            Server URL : {BACKEND_URL} <br></br>
            Backend Interlocking : {bsData} <br></br>
            Backend-DB Interlocking : {dbData}
          </header>
      </div>
  );
}

export default App;