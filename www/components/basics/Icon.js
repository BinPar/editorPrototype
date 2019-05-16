import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontFamily, fontSize } from '../../utils/Constants';

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
  width: ${props => props.size || fontSize.F24};
  height: ${props => props.size || fontSize.F24};
  font-size: ${props => props.size || fontSize.F24};
  color: ${props => props.color || props.theme.iconColor};
`;

const Icon = ({ name, className, ...props }) => (
  <IconWrapper className={`icon ${name || ''} ${className}`} {...props} />
);

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
