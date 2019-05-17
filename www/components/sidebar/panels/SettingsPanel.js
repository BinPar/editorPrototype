import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';

const PanelWrapper = styled(Panel)`
  padding-left: 10px;
  padding-right: 10px;
`;

const SettingsPanel = () => (
  <PanelWrapper>
    settings
  </PanelWrapper>
);

SettingsPanel.defaultProps = {};

SettingsPanel.propTypes = {};

export default SettingsPanel;
