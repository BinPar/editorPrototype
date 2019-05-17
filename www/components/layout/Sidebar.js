import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  maxMedia, minMedia, icon,
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
import SettingsPanel from '../sidebar/panels/SettingsPanel';

const SidebarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.sidebarBg};
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.sidebarBg};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.sidebarScroll};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.sidebarScrollHover};
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    * {
      -ms-scrollbar-highlight-color: ${props => props.theme.sidebarScrollHover};
      -ms-scrollbar-arrow-color: ${props => props.theme.sidebarScroll};
      -ms-scrollbar-face-color: ${props => props.theme.sidebarScroll};
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
    transition: width 500ms ease;
  `}
`;

const FixedMenu = styled(Holder)`
  background-color: ${props => props.theme.sidebarMenuBg};
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
    width: 71px;
    height: 420px;
    border-radius: 35px;
    top: 100px;
    left: ${props => (props.open ? '355px' : '5px')};
    transition: left 500ms ease;
  `}
`;

const StyledMenuButton = styled(Button)`
  z-index: 1;
  .icon {
    color: ${props => props.theme.sidebarMenuIcon};
  }
  &:hover {
    .icon {
      color: ${props => props.theme.sidebarMenuIconHover};
    }
  }
  &.active {
    .icon {
      color: ${props => props.theme.sidebarMenuIconHover};
    }
    &:hover {
      .icon {
        color: ${props => props.theme.sidebarMenuIconActiveHover};
      }
    }
  }
`;

const renderPanel = (panelName, editing) => {
  if (!panelName) {
    return null;
  }
  switch (panelName) {
    case 'user':
      return <UserPanel />;
    case 'index':
      return <IndexPanel editing={editing} />;
    case 'calendar':
      return <CalendarPanel />;
    case 'resources':
      return <ResourcesPanel />;
    case 'highlights':
      return <HighlightsPanel />;
    case 'doubts':
      return <DoubtsPanel />;
    case 'settings':
      return <SettingsPanel />;
    default:
      return null;
  }
};

const MenuButton = ({
  tabName, name, active, onClick,
}) => {
  const onTabClick = e => onClick(tabName, e);
  return <StyledMenuButton active={active} name={name} onClick={onTabClick} />;
};

MenuButton.defaultProps = {
  active: false,
};

MenuButton.propTypes = {
  tabName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const Sidebar = ({
  activeTab: panelName, onTabClick, editing, ...props
}) => {
  const [topSidebarShape, setTopSidebarShape] = useState(0);
  const onClick = (tabName, e) => {
    const top = e.target.offsetTop;
    setTopSidebarShape(top - 55);
    onTabClick(tabName);
  };
  return (
    <SidebarWrapper {...props}>
      {renderPanel(panelName, editing)}
      <FixedMenu {...props} column justify="around">
        <MenuButton
          tabName="user"
          active={panelName === 'user'}
          name={icon.user}
          onClick={onClick}
        />
        <MenuButton
          tabName="index"
          active={panelName === 'index'}
          name={icon.index}
          onClick={onClick}
        />
        <MenuButton
          tabName="calendar"
          active={panelName === 'calendar'}
          name={icon.calendar}
          onClick={onClick}
        />
        <MenuButton
          tabName="resources"
          active={panelName === 'resources'}
          name={icon.resources}
          onClick={onClick}
        />
        <MenuButton
          tabName="highlights"
          active={panelName === 'highlights'}
          name={icon.highlight}
          onClick={onClick}
        />
        <MenuButton
          tabName="doubts"
          active={panelName === 'doubts'}
          name={icon.doubt}
          onClick={onClick}
        />
        <MenuButton
          tabName="settings"
          active={panelName === 'settings'}
          name={icon.adjustment}
          onClick={onClick}
        />
        {panelName && <SidebarShape top={topSidebarShape} />}
      </FixedMenu>
    </SidebarWrapper>
  );
};
Sidebar.defaultProps = {
  activeTab: null,
  editing: false,
};

Sidebar.propTypes = {
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
  editing: PropTypes.bool,
};

export default Sidebar;
