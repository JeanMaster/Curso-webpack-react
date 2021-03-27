// import {useState, useEffect} from 'react'

// const useInitialState = () => {
//     const API = "https://randomuser.me/api/" 
//     const [ person , setPerson] = useState([]);
//     useEffect(() => {
//       fetch(API)
//         .then(response => response.json())
//         .then(data => setPerson(data.results[0]))
//     },[]);
 
//     return person
// }

// export default useInitialState

import { useState, useEffect } from 'react';

const useInitialState = () => {
  const API = "https://randomuser.me/api/" ;

  const [info, setInfo] = useState({
    loading: true,
    error: null,
    data: undefined,
  });

  useEffect(async () => {
    try {
      setInfo({ loading: true, error: null });
      const response = await fetch(API);
      const { results } = await response.json();
      setInfo({ loading: false, data: results[0] });
    } catch (error) {
      setInfo({ loading: false, error: error.message });
    }
  }, []);

  return info;
};

export default useInitialState;