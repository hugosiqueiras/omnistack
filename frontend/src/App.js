import React from 'react';
import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;


// import React, { useState } from 'react';


// import Header from './Header';

  // const [counter, setCounter] = useState(0);

  // // useState retorna um array [valor, funcaoDeAtualizacao]
  // function increment() {
  //   setCounter(counter + 1);
  // }
 // <div>
    //   <Header>
    //     Contador: {counter}
    //   </Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>