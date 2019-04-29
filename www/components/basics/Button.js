import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontFamily, fontSize, fontWeight,
} from '../../utils/Constants';
import Icon from './Icon';

const type = {
  outline: css`
    border: 2px solid ${colors.primaryMed};
    color: ${colors.primaryMed};
    &:hover {
      background-color: ${colors.primaryMed};
      color: ${colors.white};
    }
  `,
  full: css`
    background-color: ${colors.primaryMed};
    color: ${colors.white};
    &:hover {
      background-color: ${colors.primaryDark};
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
  &:hover {
    .icon {
      color: ${props => props.hoverColor || colors.greyDarker};
    }
  }
  &.active {
    .icon {
      color: ${colors.greyDarker};
    }
    &:hover {
      .icon {
        color: ${colors.greyDark};
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
