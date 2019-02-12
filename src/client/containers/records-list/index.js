import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecords } from './store/actions';

const RecordsListWrapper = styled.div`
  background-color: beige;
`;

const RecordsList = React.memo(({ recordsList, getRecords }) => {
  console.log('recordsList', recordsList);
  useEffect(() => {
    getRecords();
  }, []);

  return (
    <RecordsListWrapper>
      <h1>Records list</h1>
      { recordsList && recordsList.length > 0 && recordsList.map(record => (
        <div key={record.id}>
          <span>
            { record.names.international }
          </span>
          <Link to={`/record-detail/${record.id}`}><p>Go</p></Link>
        </div>
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
