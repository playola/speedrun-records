import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecords } from './store/actions';
import {
  RecordsListWrapper,
  Title,
  RecordItemWrapper,
  Logo,
  Text,
} from './styles';

const RecordsList = React.memo(({ recordsList, getRecords }) => {
  console.log('recordsList', recordsList);
  useEffect(() => {
    getRecords();
  }, []);

  return (
    <RecordsListWrapper>
      <Title>Records list</Title>
      { recordsList && recordsList.length > 0 && recordsList.map(record => (
        <RecordItemWrapper key={record.id}>
          <Logo src={record.assets.logo.uri} alt={`logo_${record.id}`} />
          <Text>
            { record.names.international }
          </Text>
          <Link to={`/record-detail/${record.id}`}><p>Go</p></Link>
        </RecordItemWrapper>
      ))}
    </RecordsListWrapper>
  );
});

RecordsList.propTypes = {
  recordsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRecords: PropTypes.func.isRequired,
};

const mapStateToProps = ({ recordsListReducer }) => ({
  recordsList: recordsListReducer.records,
});

const mapDispatchToProps = {
  getRecords,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordsList);
