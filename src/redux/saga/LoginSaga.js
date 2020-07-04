import AuthorizationAction from '../constants/actionType'
import * as actions from '../actions/authAction' 
import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'


export function* watchLoginIn() {
    yield takeEvery (AuthorizationAction.LOGIN_IN, fetchLoginIn)
}

function* fetchLoginIn(action){
    try{
        const data = yield call( () => axios.get('http://localhost:3000/users')
        .then( (response)=> {
            return response;
          })
        .catch(function (error) {
            console.error(error);
          }))
        const userCheck = data.data.filter(item => {if(item.name === action.data.login && item.password === action.data.password) return item.id})
        if (!!userCheck.length){
            yield put(actions.loginUser(userCheck[0].id))
        } else {
            yield put(actions.errorLoginUser())
        }
    } catch (err){
        yield console.error(err)
    }
}

