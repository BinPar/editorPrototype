import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';

const DateWrapper = styled(Holder)`
  padding: 10px 30px 0;
  margin-top: 10px;
  border-top: 1px solid ${props => props.theme.calendarDivision};
`;
const Text = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.black};
  text-transform: uppercase;
  color: ${props => props.theme.calendarDateText};
`;
const Day = styled(Text)`
  font-size: ${fontSize.F45};
  margin-right: 10px;
`;
const Weekday = styled(Text)`
  font-size: ${fontSize.F13};
`;
const Month = styled(Text)`
  font-size: ${fontSize.F13};
  margin-right: 5px;
`;

const Year = styled(Text)`
  font-size: ${fontSize.F13};
`;

const Date = ({
  day, weekday, month, year,
}) => (
  <DateWrapper justify="start">
    <Day>{day}</Day>
    <Holder column align="start">
      <Weekday>{weekday}</Weekday>
      <Holder>
        <Month>{month}</Month>
        <Year>{year}</Year>
      </Holder>
    </Holder>
  </DateWrapper>
);

Date.defaultProps = {};

Date.propTypes = {
  day: PropTypes.number.isRequired,
  weekday: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Date;
