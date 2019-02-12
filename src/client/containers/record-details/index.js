import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getRecordDetails } from './store/actions';

const RecordDetailsWrapper = styled.div`
  background-color: green;
`;

const RecordDetails = React.memo(({ recordDetails, getRecordDetails, match }) => {
  console.log('recordDetails', recordDetails);
  useEffect(() => {
    getRecordDetails(match.params.id);
  }, []);

  return (
    <RecordDetailsWrapper>
      <h1>Records list</h1>
    </RecordDetailsWrapper>
  );
});

RecordDetails.propTypes = {
  recordDetails: PropTypes.shape({}).isRequired,
  getRecordDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ recordDetailsReducer }) => ({
  recordDetails: recordDetailsReducer.recordDetails,
});

const mapDispatchToProps = {
  getRecordDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordDetails);
