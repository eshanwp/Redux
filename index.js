const redux = require('redux')
const createStore = redux.createStore

/*Implement the action*/
const BUY_CAKE = 'BUY_CAKE';

/**
 * This is a action creator function. That return an action
 * @returns {{type: *, info: string}}
 */

const buyCake = () => {
  return {
      type: BUY_CAKE,
      info: 'First reducx action'
  }
};

/*Implement the reducer*/

/**
 * this is a reducer function
 * @param state
 * @param action
 * @returns {{numOfCake: number}|{numOfCake, numOfCakes: number}}
 */
const counter = (state = 10, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return state - 1

        default: return state;
    }
};

/*Implement the store*/

// reducx store hold the application state
const store = createStore(counter);
// Current state of the store
console.log('Initial state', store.getState());
// Allow the app subscribe to changes to store
store.subscribe(() => console.log(store.getState()))
// Update the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
