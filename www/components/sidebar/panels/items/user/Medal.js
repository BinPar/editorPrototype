import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, icon, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Icon from '../../../../basics/Icon';
import Holder from '../../../../layout/Holder';

const Title = styled.p``;

const Medal = ({ badge, title }) => (
  <Holder column>
    <Icon name={badge} color={colors.primaryDark} />
    <Title>{title}</Title>
  </Holder>
);

Medal.defaultProps = {};

Medal.propTypes = {
  title: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
};

export default Medal;
