import { useState, useContext, createContext, useEffect } from 'react';
// make sure to use https

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

const AppProvider = (props) => {
  const [state, setState] = useState();

  const updateState = () => {
    setState('test');
  };

  const context = { state };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
