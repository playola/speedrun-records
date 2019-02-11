import { combineReducers } from 'redux';

// Containers reducers
import recordsListReducer from '../../containers/records-list/store/reducers';

const rootReducer = combineReducers({
  recordsListReducer,
});

export default (state, action) => rootReducer(state, action);
