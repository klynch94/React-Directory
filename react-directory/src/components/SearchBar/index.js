import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
        </div>
        <div>
            <button onClick={props.handleFormSubmit} >Acending</button>
        </div>
      </form>
    );
  }

export default SearchBar;
