import React, { createContext, useContext, useReducer } from "react";

// Prepared the dataLayer ( adds items to this datalayer and then to basket)
export const StateContext = createContext();

// This Wraps our app and provide the dataLayer to every component // Similar to provider in flutter
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
