import React, { createContext, useContext, useState } from 'react';

export const UnitContext = createContext(null);

export const UnitProvider = (props) => {
  const { children } = props;

  const [unit, setUnit] = useState(null);

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

export const useUnit = () => {
  return useContext(UnitContext);
};
