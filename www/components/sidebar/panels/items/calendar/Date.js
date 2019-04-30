import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';

const DateWrapper = styled(Holder)`
`;
const Day = styled.p`
`;
const Weekday = styled.p`
`;
const Month = styled.p`
`;

const Date = () => (
  <DateWrapper justify="start">
    <Day>10</Day>
    <Holder column>
      <Weekday>Miércoles</Weekday>
      <Month>Abril 2019</Month>
    </Holder>
  </DateWrapper>
);

Date.defaultProps = {};

Date.propTypes = {};

export default Date;
