import React from 'react';

function Search (props) {

  var test = props.options.map( (currOption) =>
    <li><a href={currOption.url} target="_blank"> {currOption.name}</a></li>
  )

  // props.options is our array of restaurants
  return (
    <div className="row">
      <div className="column">
        <button type="button" name="Breakfast" onClick={props.name}> Breakfast </button>
      </div>
      <div className="column">
        <button type="button" name="Lunch" onClick={props.name}> Lunch </button>
      </div>
      <div className="column">
        <button type="button" name="Dinner" onClick={props.name}> Dinner </button>
      </div>
      <div className="rest">
        {test}
      </div>
    </div>
  )
}

export default Search;
