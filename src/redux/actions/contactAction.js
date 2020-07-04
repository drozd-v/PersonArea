import ContactAction from '../constants/actionTypeContact'

export function fetchContactList(id) {
    return {
        type: ContactAction.FETCH_CONTACTS,
        id
    }
}

export function fetchContactListSuccess(data) {
    return {
        type: ContactAction.FETCH_CONTACTS_SUCCESS,
        data
    }
}

export function fetchContactListError() {
    return {
        type: ContactAction.FETCH_CONTACTS_ERROR
    }
}

export function addContact(id, data) {
    return {
        type: ContactAction.ADD_CONTACT,
        id,
        data
    }
}

export function addContactSuccess() {
    return {
        type: ContactAction.ADD_CONTACT_SUCCESS,
    }
}

export function addContactError() {
    return {
        type: ContactAction.ADD_CONTACT_ERROR
    }
}

export function deleteContact(userId,id) {
    return {
        type: ContactAction.DELETE_CONTACT,
        userId,
        id
    }
}
export function deleteContactSuccess() {
    return {
        type: ContactAction.DELETE_CONTACT_SUCCESS,
    }
}
export function deleteContactError() {
    return {
        type: ContactAction.DELETE_CONTACT_ERROR,
    }
}
export function editContact(data) {
    return {
        type: ContactAction.EDIT_CONTACT,
        data
    }
}

export function editContactSuccess() {
    return {
        type: ContactAction.EDIT_CONTACT_SUCCESS,
    }
}
export function editContactError() {
    return {
        type: ContactAction.EDIT_CONTACT_ERROR,
    }
}

export function searchContact(id ,data) {
    return {
        type: ContactAction.SEARCH_CONTACT,
        id,
        data
    }
}
export function searchContactSuccess(data) {
    return {
        type: ContactAction.SEARCH_CONTACT_SUCCESS,
        data
    }
}
export function searchContactError() {
    return {
        type: ContactAction.SEARCH_CONTACT_ERROR,
    }
}