import React from 'react';
import { createRoot } from 'react-dom/client';
import Search from './components/Search.jsx';
import $ from 'jquery';


function App() {

  // need to create functions we can pass down

  // handle change function


  // function that reads the text in the input form

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
        console.log('working');
      })

  }

  return (
    <div>
      <Search name={getFoods}/>
    </div>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)