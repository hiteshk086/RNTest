import {
  GET_USERS,
  ADD_TO_FAVORITE_LIST,
  REMOVE_FROM_FAVORITE_LIST,
} from '../actions';

const initialState = {
  users: [],
  favorites: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.payload};
    case ADD_TO_FAVORITE_LIST:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FROM_FAVORITE_LIST:
      return {
        ...state,
        favorites: state.favorites.filter(
          user => user.picture.large !== action.payload.picture.large,
        ),
      };
    default:
      return state;
  }
}

export default userReducer;
