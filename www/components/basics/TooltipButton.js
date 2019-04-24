import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/Constants';
import Icon from './Icon';

const Button = styled.button`
  &:hover {
    .icon {
      color: ${colors.primary}
    }
  }
  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  ~ * {
    margin-left: 10px;
  };
`;

export const TooltipButton = ({ active, disabled, name }) => (
  <Button className={disabled ? 'disabled' : ''}>
    <Icon name={name} color={active ? colors.primary : colors.white} />
  </Button>
);

TooltipButton.defaultProps = {
  disabled: false,
  active: false,
};

TooltipButton.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default TooltipButton;
