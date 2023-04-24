import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cocktails, setCocktails] = useState("");
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url + searchTerm);
      const data = await res.json();
      setCocktails(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);
  return (
    <AppContext.Provider
      value={{ isLoading, isError, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
