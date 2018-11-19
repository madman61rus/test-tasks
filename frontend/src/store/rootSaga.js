//@flow
import {fork, all} from 'redux-saga/effects';

import dashboardWatcher from '../modules/dashboard/saga';

export default function* root(): any {
  yield all([fork(dashboardWatcher)]);
}
