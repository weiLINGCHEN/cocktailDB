import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { cocktailId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${url}${cocktailId}`);
        const data = await res.json();
        setCocktail(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, [cocktailId]);

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

  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
  } = cocktail.drinks[0];

  let ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (cocktail.drinks[0][`strIngredient${i}`]) {
      ingredients[i - 1] = cocktail.drinks[0][`strIngredient${i}`];
    }
  }

  return (
    <div className="section cocktail-section">
      <Link to="/" className="btn btn-primary" style={{ marginBottom: "1rem" }}>
        Back Home
      </Link>
      <h1>{strDrink}</h1>
      <article className="drink ">
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data ">Name:</span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data ">Category:</span>
            {strCategory}
          </p>
          <p>
            <span className="drink-data ">info:</span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-data ">glass:</span>
            {strGlass}
          </p>
          <p>
            <span className="drink-data ">instructions:</span>
            {strInstructions}
          </p>
          <p>
            <span className="drink-data ">ingredients:</span>
            <span>
              {ingredients.map((item, index) => {
                if (index + 1 === ingredients.length) {
                  return <span key={item}>{`${item}`}</span>;
                }
                return <span key={item}>{`${item}, `}</span>;
              })}
            </span>
          </p>
        </div>
      </article>
    </div>
  );
};
export default SingleCocktail;
