import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import Skins from './items/settings/Skins';
import FontSize from './items/settings/FontSize';
import { maxMedia } from '../../../utils/Constants';

const PanelWrapper = styled(Panel)`
  padding: 0 30px;

  ${maxMedia.maxMobile`
    @media (orientation: landscape) {
      padding-bottom: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      >div {
        width: calc(50% - 10px);
      }
    }
  `};
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
