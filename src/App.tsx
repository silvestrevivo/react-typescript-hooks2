import React from 'react';
import { Store } from './Store';

function App(): JSX.Element {
  const store = React.useContext(Store);
  console.log('store', store)
  return (
    <div className="App">
      react-typescript-hooks2
    </div>
  );
}

export default App;
