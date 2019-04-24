import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontFamily, fontSize, fontWeight,
} from '../../utils/Constants';
import Holder from '../layout/Holder';

const CounterWrapper = styled(Holder)`
  position: absolute;
  top: 0;
  right: 10px;
  width: 22px;
  height: 22px;
  background-color: ${colors.primaryLight};
  border-radius: 50%;
`;

const Number = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F10};
  color: ${colors.white};
  letter-spacing: 0.05em;
  text-align: center;
`;

const Counter = ({ number }) => (
  <CounterWrapper>
    <Number>{number}</Number>
  </CounterWrapper>
);

Counter.defaultProps = {};

Counter.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Counter;
