// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchActivityData,
  fetchActivityDataSuccess,
  fetchActivityDataFailure,
} from './activitySlice';
import activitiesJson from './../db.json';

function* fetchActivityDataSaga() {
  try {
       const data = activitiesJson.activities;  

    yield put(fetchActivityDataSuccess(data));
  } catch (error) {
    yield put(fetchActivityDataFailure(error.message));
  }
}

// Watcher saga: watches for fetchActivityData action
function* rootSaga() {
  yield takeLatest(fetchActivityData.type, fetchActivityDataSaga);
}

export default rootSaga;
