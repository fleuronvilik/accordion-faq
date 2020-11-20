import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about Login</h3>
        <ul>
          {data.map(item => <SingleQuestion key={item.id} {...item}/>)}
        </ul>
      </div>
    </main>
  );
}

export default App;
