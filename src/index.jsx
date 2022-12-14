import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx'

function App () {

  return (
    <div>
      <Search />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))