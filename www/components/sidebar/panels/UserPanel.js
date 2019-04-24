import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontWeight, fontStyle, minMedia, icon,
} from '../../../utils/Constants';
import Panel from './Panel';

const UserPanel = ({ ...props }) => (
  <Panel>
    user panel
  </Panel>
);

UserPanel.defaultProps = {
};

UserPanel.propTypes = {
};

export default UserPanel;
