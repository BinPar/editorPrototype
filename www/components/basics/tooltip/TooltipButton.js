import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Icon from '../Icon';

const Button = styled.button`
  &:hover {
    .icon {
      color: ${props => props.theme.tooltipIconActive};
    }
  }
  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  ~ * {
    margin-left: 10px;
  }
`;

const TooltipButton = ({
  active, disabled, name, theme,
}) => (
  <Button className={disabled ? 'disabled' : ''}>
    <Icon name={name} color={active ? theme.tooltipIconActive : theme.tooltipIcon} />
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
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(TooltipButton);
