import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, icon, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Icon from '../../../../basics/Icon';
import Holder from '../../../../layout/Holder';
import { SmallProgressBar } from '../../../../layout/ProgressBar';

const CurrentMedalWrapper = styled(Holder)`
  width: 100%;
  & + & {
    margin-top: 20px;
  }
`;

const InfoWrapper = styled(Holder)`
  margin-left: 10px;
  width: calc(100% - 80px);
`;

const Name = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F11};
  color: ${colors.primaryDarker};
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.F11};
  color: ${colors.primaryDarker};
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  width: 100%;

  display: block;
  display: -webkit-box;
  -webkit-box-align: stretch;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 38px;
  position: relative;
  word-break: break-all;

  &:before {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 20%;
    height: 38px;
    background: linear-gradient(to right, rgba(#8DC3B9, 0), rgba(#8DC3B9, 1) 80%);
  }

  @supports (-webkit-line-clamp: 3 ) {
    word-break: normal;
    -webkit-box-orient: vertical;

    &:before {
      display: none;
    }
  }
`;

const CurrentMedal = ({
  badge, name, description, progress,
}) => (
  <CurrentMedalWrapper justify="start">
    <Icon name={badge} size={fontSize.F70} color={colors.primaryDarker} />
    <InfoWrapper column align="start">
      <Name>{name}</Name>
      <Description>{description}</Description>
      <SmallProgressBar progress={progress} />
    </InfoWrapper>
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
