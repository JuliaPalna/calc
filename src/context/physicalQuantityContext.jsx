import React, { createContext, useContext, useState } from 'react';

export const PhysicalQuntityContext = createContext(null);

export const PhysicalQuntityProvider = (props) => {
  const { children } = props;

  const [physicalQuntity, setPhysicalQuntity] = useState({ name: null });

  return (
    <PhysicalQuntityContext.Provider
      value={{ physicalQuntity, setPhysicalQuntity }}
    >
      {children}
    </PhysicalQuntityContext.Provider>
  );
};

export const usePhysicalQuntityContext = () => {
  return useContext(PhysicalQuntityContext);
};
