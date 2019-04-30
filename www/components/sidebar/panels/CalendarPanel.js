import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontWeight, fontStyle, minMedia, icon,
} from '../../../utils/Constants';
import Panel from './Panel';
import Holder from '../../layout/Holder';

const PanelWrapper = styled(Panel)`
  padding: 10px 30px;
`;

const CalendarWrapper = styled(Holder)`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.primaryDarkerLighten};
`;

const Date = styled(Holder)`
`;
const Day = styled.p`
`;
const Weekday = styled.p`
`;
const Month = styled.p`
`;

const CalendarPanel = ({ ...props }) => (
  <PanelWrapper>
    <CalendarWrapper>Calendar</CalendarWrapper>
    <Date justify="start">
      <Day>10</Day>
      <Holder column>
        <Weekday>Miércoles</Weekday>
        <Month>Abril 2019</Month>
      </Holder>
    </Date>
  </PanelWrapper>
);

CalendarPanel.defaultProps = {
};

CalendarPanel.propTypes = {
};

export default CalendarPanel;
