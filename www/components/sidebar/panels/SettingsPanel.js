import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import ItemGroup from './items/ItemGroup';
import ItemWrapper from './items/ItemWrapper';

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
