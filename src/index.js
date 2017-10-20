import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './components/counter';

import './index.css';
function counter(state = 0, action) {

  switch (action.type) {
    case 'INCREMENT': {
      return state += action.payload
    }
    case 'DECREMENT': {
      return state -= action.payload
    }
    default: return state;
  }
}

let store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState())
})

// function incrementState() {
//   store.dispatch({ type: 'INCREMENT' });
// };

// function decrementState() {
//     store.dispatch({ type: 'DECREMENT' });
// };

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter />
      {/* <input type="submit" value="Increment Number" onClick={incrementState} />
      <input type="submit" value="Decrement Number" onClick={decrementState} /> */}
    </div>
  </Provider>
  , document.getElementById('root'));