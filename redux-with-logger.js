// npm install redux-logger
const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger(); // redux-logger

/*Implement the actions*/
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

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

const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM,
        info: 'Second reducx action'
    }
};

/*Implement the reducer*/

const initialCakeState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCreams: 20
};

/**
 * this is a reducer function
 * @param state
 * @param action
 * @returns {{numOfCake: number}|{numOfCake, numOfCakes: number}}
 */

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1 // Only update the numOfCakes. Other properties would not change
        }
        default: return state
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1 // Only update the numOfIceCreams. Other properties would not change
        }
        default: return state
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

/*Implement the store*/

// reducx store hold the application state
const store = createStore(rootReducer, applyMiddleware(logger));
// Current state of the store
console.log('Initial state', store.getState());
// Allow the app subscribe to changes to store
store.subscribe(() => console.log('Update state', store.getState()));
// Update the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

