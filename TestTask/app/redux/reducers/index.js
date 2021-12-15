import auth from './AuthReducer';
import users from './UserReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites', 'users'],
};
const rootReducer = combineReducers({
  auth,
  users: persistReducer(persistConfig, users),
});
export default rootReducer;
