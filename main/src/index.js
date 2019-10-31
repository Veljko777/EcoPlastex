import React from "react"
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import reduxThunk from "redux-thunk"
import App from "./components/App";
import reducers from "./reducers";

function saveToLocalStorage(state){
    try{
        const serializedState=JSON.stringify(state) 
        localStorage.setItem("state",serializedState)
    } catch(e){
        console.log(e)
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState=localStorage.getItem("state")
        if(serializedState===null) return undefined
        return JSON.parse(serializedState)
    } catch(e){
        console.log(e)
        return undefined
    }
}


const persistedState=loadFromLocalStorage()



const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,persistedState, composeEnhancers(applyMiddleware (reduxThunk)));

store.subscribe(()=> saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);

