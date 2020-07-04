import AuthorizationAction from '../constants/actionType'

const initialState = {
    isAuth: null,
    id: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthorizationAction.LOGIN_IN:
            return {...state}
        case AuthorizationAction.AUTH_USER:
            return {...state, isAuth: true, id: action.id}
        case AuthorizationAction.ERROR_AUTH_USER:
            return {...state, isAuth: false}
        case AuthorizationAction.EXIT_IS_AUTH:
            return {...state, isAuth: 0, id: null}
        default:
            return state
    }
}

export default authReducer