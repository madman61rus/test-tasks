//@flow
import {call, put, takeLatest} from 'redux-saga/effects';

function* dashboardFlow(action) {
  yield console.log('saga');
}

export default function* dashboardWatcher() {}
