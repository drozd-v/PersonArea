import AuthorizationAction from '../constants/actionType'

export function loginIn (data){
    return {
        type: AuthorizationAction.LOGIN_IN,
        data
    }
}
export function loginUser (id){
    return {
        type: AuthorizationAction.AUTH_USER,
        id
    }
}
export function errorLoginUser (){
    return {
        type: AuthorizationAction.ERROR_AUTH_USER
    }
}

export function exitIsAuth (){
    return {
        type: AuthorizationAction.EXIT_IS_AUTH
    }
}