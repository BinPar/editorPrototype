import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontFamily, icon,
} from '../../utils/Constants';
import Icon from '../basics/Icon';
import Label from './Label';

const IconWrapper = styled(Icon)`
  position: relative;
  width: 30px;
  height: 30px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background-color: ${props => props.theme.checkBg};
    border-radius: 30px;
  }
  &:before {
    color: ${props => props.theme.checkIcon};
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  padding: 0;
  opacity: 0;
  z-index: 3;
  cursor: pointer;

  ~ label {
    position: relative;
    left: 10px;
    top: 5px;
  }

  &:hover {
    ~ label {
      color: ${props => props.theme.checkLabelHover};
    }
  }

  &:checked {
    ~ label {
      color: ${props => props.theme.checkLabelHover};
    }
    ~ .icon {
      &:before {
        opacity: 1;
      }
    }
  }

  &:required {
    ~ label {
      &:after {
        content: '*';
        margin-left: 5px;
        font-family: ${fontFamily.sansSerif};
      }
    }
  }
`;

const CheckInput = () => (
  <React.Fragment>
    <Input type="checkbox" />
    <IconWrapper name={icon.check} className=" " />
  </React.Fragment>
);

CheckInput.propTypes = {};

export default CheckInput;
