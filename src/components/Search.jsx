import React from 'react';

function Search (props) {

  return (
    <div className="row">
      <div className="column">
        <button type="button" name="Breakfast" onClick={props.name}> Breakfast </button></div>
      <div className="column">
        <button type="button" name="Lunch" onClick={props.name}> Lunch </button>
      </div>
      <div className="column">
        <button type="button" name="Dinner" onClick={props.name}> Dinner </button>
      </div>
    </div>
  )
}

export default Search;
