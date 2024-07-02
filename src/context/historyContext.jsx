import React, { createContext, useContext, useState } from 'react';

export const HistoryContext = createContext(null);

export const HistoryProvider = (props) => {
  const { children } = props;

  const [history, setHistory] = useState([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  return useContext(HistoryContext);
};
