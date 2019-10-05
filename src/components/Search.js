import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
class Search extends Component {
  state = {
    searchText: ""
  };

  getSearch = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.getSearch}
          name="search"
          ref={input => (this.query = input)}
          placeholder="Recipe..."
          className="search"
        />
        <Button className="button" variant="warning" type="submit" id="submit">
          Search
        </Button>
      </form>
    );
  }
}

export default Search;
