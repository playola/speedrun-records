import { all, fork } from 'redux-saga/effects';

// Containers sagas
import recordsListSaga from '../../containers/records-list/store/sagas';

export default function* root() {
  yield all([
    fork(recordsListSaga),
  ]);
}
