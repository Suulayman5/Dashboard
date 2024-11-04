// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchActivityData,
  fetchActivityDataSuccess,
  fetchActivityDataFailure,
} from './activitySlice';

// API call to fetch activity data
const fetchActivityDataApi = async () => {
  const response = await fetch('http://localhost:5000/activities');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Worker saga: makes the API call when fetchActivityData is dispatched
function* fetchActivityDataSaga() {
  try {
    const data = yield call(fetchActivityDataApi);
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
