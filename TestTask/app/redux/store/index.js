import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default store;