import React, { Component } from "react";
import Search from "./components/Search";
import Recipe from "./components/Recipe";
import "./App.css";

const APP_ID = "2bfe6d34";
const APP_KEY = "97eb0e2b8c9386521819289cf74b98bc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "food") => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipes: data.hits,
          loading: false
        });
      });
  };

  render() {
    const { recipes } = this.state;
    return (
      <div className="container">
        <Search onSearch={this.performSearch} />
        <div>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
