import { all, spawn } from 'redux-saga/effects'
import * as LoginSaga from './LoginSaga'
import * as ContactSaga from './ContactSaga'

export default function* rootSaga() {
    yield all([
      spawn(LoginSaga.watchLoginIn),
      spawn(ContactSaga.watchContactList)
    ])
  } 