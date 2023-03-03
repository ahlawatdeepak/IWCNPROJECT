import thunk from "redux-thunk";

const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");
const { Reducer } = require("./store.reducer");



const rootReducer=combineReducers({
    list:Reducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))