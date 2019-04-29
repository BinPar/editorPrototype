import React from 'react';
import styled from 'styled-components';
import {
  colors, maxMedia, minMedia, icon,
} from '../../utils/Constants';
import Holder from './Holder';
import Button from '../basics/Button';
import SidebarShape from '../sidebar/SidebarShape';
import UserPanel from '../sidebar/panels/UserPanel';
import IndexPanel from '../sidebar/panels/IndexPanel';
import CalendarPanel from '../sidebar/panels/CalendarPanel';
import ResourcesPanel from '../sidebar/panels/ResourcesPanel';
import HighlightsPanel from '../sidebar/panels/HighlightsPanel';
import DoubtsPanel from '../sidebar/panels/DoubtsPanel';

const SidebarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.primaryLightest};
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${colors.primaryLightest};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.primaryLighter};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary};
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    * {
      -ms-overflow-style: -ms-autohiding-scrollbar;
      -ms-scrollbar-highlight-color: ${colors.primaryLightest};
      -ms-scrollbar-arrow-color: ${colors.primaryLighter};
      -ms-scrollbar-face-color: ${colors.primaryLighter};
    }
  }
  ${maxMedia.maxMobile`
    position: absolute;
    width: ${props => (props.open ? '100%' : 0)};
    z-index: 2000;
    height: calc(100% - 125px);
    .sidebarShape {
      display: none;
    }
  `}
  ${minMedia.minTablet`
    width: ${props => (props.open ? '350px' : 0)};
    height: 100%;
  `}
`;

const FixedMenu = styled(Holder)`
  background-color: ${colors.white};
  position: fixed;
  z-index: 1100;
  padding: 10px 0;
  ${maxMedia.maxMobile`
    flex-direction: row;
    width: 100%;
    height: 60px;
    top: 65px;
    left: 0;
  `}
  ${minMedia.minTablet`
    width: 70px;
    height: 360px;
    border-radius: 35px;
    top: 100px;
    left: ${props => (props.open ? '355px' : '5px')};
  `}
`;

const MenuButton = styled(Button)`
  z-index: 1;
  .icon {
    color: ${colors.greyMed};
  }
  &:hover {
    .icon {
      color: ${colors.primary};
    }
  }
  &.active {
    .icon {
      color: ${colors.primary};
    }
    &:hover {
      .icon {
        color: ${colors.primaryLight};
      }
    }
  }
`;

const renderPanel = (panelName) => {
  if (!panelName) {
    return null;
  }
  switch (panelName) {
    case 'user':
      return <UserPanel />;
    case 'index':
      return <IndexPanel />;
    case 'calendar':
      return <CalendarPanel />;
    case 'resources':
      return <ResourcesPanel />;
    case 'highlights':
      return <HighlightsPanel />;
    case 'doubts':
      return <DoubtsPanel />;
    default:
      return null;
  }
};

const activeTop = (panelName) => {
  switch (panelName) {
    case 'user':
      return -28;
    case 'index':
      return 28;
    case 'calendar':
      return 85;
    case 'resources':
      return 140;
    case 'highlights':
      return 200;
    case 'doubts':
      return 255;
    default:
      return null;
  }
};

const panelName = 'user'; // Posiblemente haya que usar el Hook de estado

const Sidebar = ({ ...props }) => (
  <SidebarWrapper {...props}>
    {renderPanel(panelName)}
    <FixedMenu {...props} column justify="around">
      <MenuButton active={panelName === 'user'} name={icon.user} />
      <MenuButton active={panelName === 'index'} name={icon.index} />
      <MenuButton active={panelName === 'calendar'} name={icon.calendar} />
      <MenuButton active={panelName === 'resources'} name={icon.resources} />
      <MenuButton active={panelName === 'highlights'} name={icon.highlight} />
      <MenuButton active={panelName === 'doubts'} name={icon.doubt} />
      {panelName && <SidebarShape top={activeTop(panelName)} />}
    </FixedMenu>
  </SidebarWrapper>
);

Sidebar.defaultProps = {};

Sidebar.propTypes = {};

export default Sidebar;
