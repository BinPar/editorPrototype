import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontWeight, fontStyle, minMedia, icon,
} from '../../../utils/Constants';
import Panel from './Panel';

const ResourcesPanel = ({ ...props }) => (
  <Panel>
    resources panel
  </Panel>
);

ResourcesPanel.defaultProps = {
};

ResourcesPanel.propTypes = {
};

export default ResourcesPanel;
