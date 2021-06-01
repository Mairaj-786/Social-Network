import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';

const rootReducers = combineReducers({
    authReducer
});
const middleware = [thunk]
const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)))
export default Store;