import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import {
  fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Icon from '../../../../basics/Icon';
import Holder from '../../../../layout/Holder';

const Title = styled.p`
  font-family: ${fontFamily.sansSerif};
  color: ${props => props.theme.userProgressTitle};
  text-transform: uppercase;
  font-weight: ${fontWeight.extrabold};
  font-size: ${fontSize.F09};
  letter-spacing: 0.2em;
  margin: 10px auto;
`;

const Progress = styled.p`
  font-family: ${fontFamily.sansSerif};
  color: ${props => props.theme.userProgress};
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F17};
`;

const UserProgressItem = ({
  iconName, title, progress, theme,
}) => (
  <Holder column>
    <Icon name={iconName} color={theme.userProgressIcon} />
    <Title>{title}</Title>
    <Progress>{progress}</Progress>
  </Holder>
);

UserProgressItem.defaultProps = {};

UserProgressItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(UserProgressItem);
