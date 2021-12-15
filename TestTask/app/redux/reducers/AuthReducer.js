const initialState = {
    loggedIn: '',
}
const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return { loggedIn: true }
        case 'LOGOUT_USER':
            return { loggedIn: false }
        default:
            return state;
    }
}
export default AuthReducer;