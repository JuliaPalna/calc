import React, { createContext, useContext, useState } from 'react';

export const PhysicalQuntityContext = createContext(null);

export const PhysicalQuntityProvider = (props) => {
  const { children } = props;

  const [physicalQuntity, setPhysicalQuntity] = useState(null);

  return (
    <PhysicalQuntityContext.Provider
      value={{ physicalQuntity, setPhysicalQuntity }}
    >
      {children}
    </PhysicalQuntityContext.Provider>
  );
};

export const usePhysicalQuntity = () => {
  return useContext(PhysicalQuntityContext);
};
