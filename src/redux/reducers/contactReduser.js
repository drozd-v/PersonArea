import ContactAction from '../constants/actionTypeContact'

const initialState = {
   cont: []
}

const contactReducer = (state = initialState, action) => {
    switch (action.type){
        case ContactAction.FETCH_CONTACTS:
            return {...state}
        case ContactAction.FETCH_CONTACTS_SUCCESS:
            return {...state, cont: action.data}
        case ContactAction.FETCH_CONTACTS_ERROR:
            return {...state}
        case ContactAction.ADD_CONTACT_SUCCESS:
            return {...state}
        case ContactAction.ADD_CONTACT_ERROR:
            return {...state}
        case ContactAction.DELETE_CONTACT_SUCCESS:
            return {...state}
        case ContactAction.DELETE_CONTACT_ERROR:
            return {...state}
        case ContactAction.SEARCH_CONTACT:
            return {...state}
        case ContactAction.SEARCH_CONTACT_SUCCESS:
            return {...state, cont: action.data}
        case ContactAction.SEARCH_CONTACT_ERROR:
            return {...state}
        default:
            return state
    }
}

export default contactReducer