import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import Search from './components/Search.jsx';
import $ from 'jquery';


function App() {

  // have our state here
  // state for list of food places
  const [options, setOptions] = useState([]);

  // need to create functions we can pass down
  // function that makes a post request
  function getFoods (e) {
    e.preventDefault();
    // e.target.name gives us which category we're looking for
    var data = {
      name: e.target.name
    }

    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    // pass to server the category
    // use a ajax fetch with post method
    fetch('/getfoods', options)
      .then( (result) => {
        result.json()
          .then ((result) => {
            // go through all the data here
            setOptions(result);
          })
      })
  }

  return (
    <div>
      <Search options={options} name={getFoods}/>
    </div>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)