import { combineReducers } from 'redux';

// Containers reducers
import recordsListReducer from '../../containers/records-list/store/reducers';
import recordDetailsReducer from '../../containers/record-details/store/reducers';

const rootReducer = combineReducers({
  recordsListReducer,
  recordDetailsReducer,
});

export default (state, action) => rootReducer(state, action);
