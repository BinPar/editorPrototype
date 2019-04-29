import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, icon, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Icon from '../../../../basics/Icon';
import Holder from '../../../../layout/Holder';
import { SmallProgressBar } from '../../../../layout/ProgressBar';

const CurrentMedalWrapper = styled.div``;

const InfoWrapper = styled(Holder)``;

const Name = styled.p``;

const Description = styled.p``;

const CurrentMedal = ({
  badge, name, description, progress,
}) => (
  <CurrentMedalWrapper>
    <CurrentMedal>
      <Icon name={badge} />
      <InfoWrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <SmallProgressBar progress={progress} />
      </InfoWrapper>
    </CurrentMedal>
  </CurrentMedalWrapper>
);

CurrentMedal.defaultProps = {};

CurrentMedal.propTypes = {
  badge: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default CurrentMedal;
