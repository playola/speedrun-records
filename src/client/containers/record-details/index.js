import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecordDetails } from './store/actions';
import { Button } from '../../components';
import { ContainerWrapper, Title } from '../styles';

/**
 * Get the first player run details.
 * @param   {array}   recordDetails [{ place: 1, runs: { run: { ... } } }]
 * @returns {object}                { ... }
 */
const getFirstPlayer = recordDetails => (
  recordDetails && recordDetails.length > 0 && recordDetails[0].runs[0].run
);

const RecordDetails = React.memo(({ recordDetails, getRecordDetails, match }) => {
  /**
   * Get record details by id when the component mounts.
   */
  useEffect(() => {
    getRecordDetails(match.params.id);
  }, []);

  /**
   * Get first player and destructuring util parameters.
   */
  const firstPlayer = getFirstPlayer(recordDetails);
  const {
    id, players, times, videos,
  } = firstPlayer;
  return (
    <ContainerWrapper>
      <Title>Record details</Title>
      { firstPlayer && (
        <div>
          <p>{`ID: ${id}`}</p>
          <p>{`Player: ${players[0].rel}`}</p>
          <p>{`Primary time: ${times.primary_t}`}</p>
          <p>{`Real time: ${times.realtime_t}`}</p>
          <a href={videos.links[0].uri}>
            <Button>See video</Button>
          </a>
        </div>
      )}
      <Link to="/">
        <Button>Go to records list</Button>
      </Link>
    </ContainerWrapper>
  );
});

RecordDetails.propTypes = {
  recordDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
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
