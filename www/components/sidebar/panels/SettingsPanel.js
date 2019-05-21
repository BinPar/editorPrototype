import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import Skins from './items/settings/Skins';

const PanelWrapper = styled(Panel)`
  padding-left: 10px;
  padding-right: 10px;
`;

const SettingsPanel = () => (
  <PanelWrapper>
    <Skins />
  </PanelWrapper>
);

SettingsPanel.defaultProps = {};

SettingsPanel.propTypes = {};

export default SettingsPanel;
