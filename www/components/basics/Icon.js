import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors,
  fontFamily,
  fontSize,
} from '../../utils/Constants';

const IconWrapper = styled.i`
  font-family: ${fontFamily.icon};
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: ${props => (props.size || fontSize.F24)};
  height: ${props => (props.size || fontSize.F24)};
  font-size: ${props => (props.size || fontSize.F24)};
  color: ${props => (props.color || colors.greyDark)};
`;

export const Icon = ({ name, ...props }) => <IconWrapper className={`icon ${name || ''}`} {...props} />;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;