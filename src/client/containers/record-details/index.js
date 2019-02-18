import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecordDetails, getPlayerInformation } from './store/actions';
import { Button } from '../../components';
import {
  ContainerWrapper,
  Title,
  Logo,
} from '../styles';

/**
 * Get the first player run details.
 * @param   {array}   recordDetails [{ place: 1, runs: { run: { ... } } }]
 * @returns {object}                { ... }
 */
const getFirstPlayer = recordDetails => (
  recordDetails && recordDetails.length > 0 && recordDetails[0].runs[0].run
);

const RecordDetails = React.memo(({
  recordDetails,
  getRecordDetails,
  playerInformation,
  getPlayerInformation,
  recordsList,
  match,
}) => {
  /**
   * Set first player initial state.
   */
  const [firstPlayer, setFirstPlayer] = useState(getFirstPlayer(recordDetails));

  /**
   * Fetch record details by id when the component mounts.
   */
  useEffect(() => {
    getRecordDetails(match.params.id);
  }, []);

  /**
   * Update first player every time we have a change in the record details.
   */
  useEffect(() => {
    setFirstPlayer(getFirstPlayer(recordDetails));
  }, [recordDetails]);

  /**
   * Fetch player's information when first player changes.
   */
  useEffect(() => {
    const playerId = firstPlayer && firstPlayer.players[0].id;
    if (playerId) {
      getPlayerInformation(playerId);
    }
  }, [firstPlayer]);

  const { id, times, videos } = firstPlayer;
  const { names } = playerInformation;

  /**
   * Get name and logo from records list data.
   */
  const currentRecord = recordsList && recordsList.find(record => record.id === match.params.id);
  const { names: gameName, assets: gameAssets } = currentRecord || {
    names: {
      international: 'Name not found',
    },
    assets: {
      icon: { uri: 'Icon not found' },
    },
  };

  return (
    <ContainerWrapper>
      <Title>Record details</Title>
      { firstPlayer && (
        <div>
          <p>{`Game: ${gameName.international}`}</p>
          <Logo src={gameAssets.icon.uri} alt="" />
          <p>{`ID: ${id}`}</p>
          <p>{`Player: ${(names && names.international) || 'loading...'}`}</p>
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
  playerInformation: PropTypes.shape({}).isRequired,
  getPlayerInformation: PropTypes.func.isRequired,
  recordsList: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({}).isRequired,
};

RecordDetails.defaultProps = {
  recordsList: [],
};

const mapStateToProps = ({ recordDetailsReducer, recordsListReducer }) => ({
  recordDetails: recordDetailsReducer.recordDetails,
  playerInformation: recordDetailsReducer.playerInformation,
  recordsList: recordsListReducer.records,
});

const mapDispatchToProps = {
  getRecordDetails,
  getPlayerInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordDetails);
