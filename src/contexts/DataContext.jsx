import React, { createContext, useContext, useReducer } from "react";
import { DataReducer, initialState } from "../reducers/product.reducer";

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const { data, loading, cartData, wishlistData } = state;
  return (
    <DataContext.Provider
      value={{ data, loading, cartData, dispatch, wishlistData }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
