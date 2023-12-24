import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../api';

import styles from './home.styles.pcss';

function Home() {

  const [bct, setBct] = useState();
  const [dct, setDct] = useState();

  const init = [
    {
      item: 'Environment Load Test',
      description: 'Proceed with the environment variable loading test.',
      data: [
        "BACKEND_URL : " + BACKEND_URL,
        "BACKEND_PORT : " + BACKEND_PORT,
        "BACKEND_CONTEXT_PATH : " + BACKEND_CONTEXT_PATH
      ]
    },
    {
      item: 'Backend Connection Test',
      description: 'Proceed with the Backend interlocking test.',
      data: [bct]
    },
    {
      item: 'Mysql Connection Test',
      description: 'Proceed with the Mysql interlocking test.',
      data: [dct]
    }
  ];

  async function getData() {
    try {
      const response =  await api.get('/bs');
      setBct("STATUS : " + response.data)
    } catch(err) {
      setBct("STATUS : " + err)
    }

    try {
      const response = await api.get('/db/connection');
      setDct("STATUS : " + response.data.data);
    } catch(err) {
      setDct("STATUS : " + err);
    }
  }

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div className={styles.homeArea}>
        <h1 className={styles.title}>Init Test</h1>
        {init.map((init) => (
          <div
            key={init.description}
            className={styles.init}
          >
            <div className={styles.item}>
              {init.item}
            </div>

            <div className={styles.description}>
              {init.description}
            </div>
            <ul className={styles.data}>
              {init.data.map((data) => (
                <li key={data}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
