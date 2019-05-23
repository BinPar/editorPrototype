import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import Skins from './items/settings/Skins';
import FontSize from './items/settings/FontSize';

const PanelWrapper = styled(Panel)`
  padding: 0 30px;
`;

const SettingsPanel = () => (
  <PanelWrapper>
    <Skins />
    <FontSize />
  </PanelWrapper>
);

SettingsPanel.defaultProps = {};

SettingsPanel.propTypes = {};

export default SettingsPanel;
