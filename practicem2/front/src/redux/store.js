import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; // esta linea es para conectar con la extension del navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)) // esta linea es para poder hacer peticiones a un server
);

export default store; 