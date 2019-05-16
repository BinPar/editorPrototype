import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  fontFamily, fontSize, fontWeight,
} from '../../utils/Constants';
import Icon from './Icon';

const type = {
  outline: css`
    border: 2px solid ${props => props.theme.outlineButtonBorder};
    color: ${props => props.theme.outlineButtonText};
    &:hover {
      background-color: ${props => props.theme.outlineButtonBg};
      color: ${props => props.theme.outlineButtonTextHover};
    }
  `,
  full: css`
    background-color: ${props => props.theme.buttonBg};
    color: ${props => props.theme.buttonText};
    &:hover {
      background-color: ${props => props.theme.buttonBgHover};
    }
  `,
};

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${fontWeight.extrabold};
  letter-spacing: 0.05em;
  font-size: ${fontSize.F11};
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 5px;
  font-family: ${fontFamily.sansSerif};
  ${props => type[props.type] || type.full};
`;

const ButtonIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 500ms ease;
  .icon {
    transition: color 250ms ease;
  }
  &:hover {
    .icon {
      color: ${props => props.hoverColor || props.theme.buttonIconHover};
    }
  }
  &.active {
    .icon {
      color: ${props => props.activeColor || props.theme.buttonIconActive};
    }
    &:hover {
      .icon {
        color: ${props => props.activeHoverColor || props.theme.buttonIconActiveHover};
      }
    }
  }
`;

const Button = ({
  active, className, text, hoverColor, onClick, ...props
}) => (text ? (
  <ButtonWrapper {...{ className, onClick }} {...props}>
    {text}
  </ButtonWrapper>
) : (
  <ButtonIconWrapper
    className={`${className}${active ? ' active' : ''}`}
    {...{ hoverColor, onClick }}
  >
    <Icon {...props} />
  </ButtonIconWrapper>
));

Button.defaultProps = {
  text: '',
  hoverColor: '',
  className: '',
  active: false,
  onClick: null,
};

Button.propTypes = {
  text: PropTypes.string,
  hoverColor: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
