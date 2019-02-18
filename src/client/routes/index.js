// Containers routes
import {
  RecordsList,
  RecordDetails,
  NotFoundPage,
} from '../containers';

// Containers load data
import { loadData as loadRecordsListData } from '../containers/records-list';
import { loadData as loadRecordDetailsData } from '../containers/record-details';

const Routes = [
  {
    path: '/',
    exact: true,
    component: RecordsList,
    loadData: loadRecordsListData,
  },
  {
    path: '/record-detail/:id',
    exact: true,
    component: RecordDetails,
    loadData: loadRecordDetailsData,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export default Routes;
