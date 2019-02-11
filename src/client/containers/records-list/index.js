import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const RecordsListWrapper = styled.div`
  background-color: beige;
`;

const RecordsList = ({ recordsList }) => {
  console.log('recordsList', recordsList);
  return (
    <RecordsListWrapper>
      <h1>Records list</h1>
      <Link to="/record-detail"><p>Go to record details</p></Link>
    </RecordsListWrapper>
  );
};

const mapStateToProps = ({ recordsListReducer }) => ({
  recordsList: recordsListReducer.records,
});

export default connect(mapStateToProps)(RecordsList);
