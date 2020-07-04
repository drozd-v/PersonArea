import * as actions from '../actions/contactAction' 
import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'
import ContactAction from '../constants/actionTypeContact';

export function* watchContactList() {
    yield takeEvery (ContactAction.FETCH_CONTACTS, fetchContacts)
    yield takeEvery (ContactAction.ADD_CONTACT, addContact)
    yield takeEvery (ContactAction.DELETE_CONTACT, deleteContact)
    yield takeEvery (ContactAction.EDIT_CONTACT, editContact)
    yield takeEvery (ContactAction.SEARCH_CONTACT, searchContact)

}

function* fetchContacts(action) {
    try {
        const data = yield call( () => axios.get(`http://localhost:3000/users/${action.id}/contacts`)
        .then( (response)=> {
            return response;
          })
        .catch(function (error) {
            console.error(error);
          }))
        yield put(actions.fetchContactListSuccess(data.data))
    } catch (err){
        console.error(err)
        yield put(actions.fetchContactListError())
    }
}

function* addContact(action) {
    try {
        yield call( () => axios.post(`http://localhost:3000/users/${action.id}/contacts`, {...action.data}))
        yield put(actions.addContactSuccess())
        yield put(actions.fetchContactList(action.id))
    } catch (err){
        console.error(err)
        yield put(actions.addContactError())
    }
}

function* deleteContact(action) {
    try {
        yield call( () => axios.delete(`http://localhost:3000/contacts/${action.id}`))
        yield put(actions.deleteContactSuccess())
        yield put(actions.fetchContactList(action.userId))
    } catch (err){
        console.error(err)
        yield put(actions.deleteContactError())
    }
}

function* editContact(action) {
    try {
        yield call( () => axios.put(`http://localhost:3000/contacts/${action.data.id}`, {name: action.data.name, tel: action.data.tel, mail: action.data.mail, userId: action.data.userId,}))
        yield put(actions.editContactSuccess())
        yield put(actions.fetchContactList(action.data.userId))
    } catch (err){
        console.error(err)
        yield put(actions.editContactError())
    }
}

function* searchContact(action) {
    try {
        const data =  yield call( () => axios.get(`http://localhost:3000/users/${action.id}/contacts`, {params: {name: action.data}})
        .then( (response)=> {
            return response;
          })
        .catch(function (error) {
            console.error(error);
          }))

        yield put(actions.searchContactSuccess(data.data))
    } catch (err){
        console.error(err)
        yield put(actions.searchContactError())
    }
}

