import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontWeight, fontStyle, minMedia, icon,
} from '../../../utils/Constants';
import Panel from './Panel';

const CalendarPanel = ({ ...props }) => (
  <Panel>
    calendar panel
  </Panel>
);

CalendarPanel.defaultProps = {
};

CalendarPanel.propTypes = {
};

export default CalendarPanel;
