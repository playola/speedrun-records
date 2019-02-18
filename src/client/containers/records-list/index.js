import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRecords } from './store/actions';
import {
  ContainerWrapper,
  Title,
  Logo,
} from '../styles';
import {
  RecordItemWrapper,
  Text,
  StyledLink,
} from './styles';

const RecordsList = React.memo(({ recordsList, getRecords }) => {
  useEffect(() => {
    getRecords();
  }, []);

  return (
    <ContainerWrapper>
      <Title>Records list</Title>
      { recordsList && recordsList.length > 0 && recordsList.map(record => (
        <StyledLink key={record.id} to={`/record-detail/${record.id}`}>
          <RecordItemWrapper>
            <Logo src={record.assets.icon.uri} alt={`logo_${record.id}`} />
            <Text>
              { record.names.international }
            </Text>
          </RecordItemWrapper>
        </StyledLink>
      ))}
    </ContainerWrapper>
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
