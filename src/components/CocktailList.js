import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { isLoading, isError, cocktails } = useGlobalContext();

  if (isLoading) {
    return (
      <section className="section">
        <Loading />
      </section>
    );
  }
  if (isError) {
    return (
      <section className="error-page">
        <div className="section error-container">
          <h1>Oops...Something's wrong.</h1>
        </div>
      </section>
    );
  }

  if (cocktails.drinks === null) {
    console.log(cocktails.drinks);
    return (
      <section className="error-page">
        <div className="section error-container">
          <h1>No match found</h1>
        </div>
      </section>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.drinks.map((item) => {
          return <Cocktail item={item} key={item.idDrink} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
