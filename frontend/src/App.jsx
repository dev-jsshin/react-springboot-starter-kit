import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

function App() {
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
        Server URL : {BACKEND_URL} <br></br>
        Backend Interlocking : {bsData} <br></br>
        Backend-DB Interlocking : {dbData}
    </div>
  );
}

export default App;