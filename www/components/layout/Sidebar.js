import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import SettingsPanel from '../sidebar/panels/SettingsPanel';

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
    transition: width 500ms ease;
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
    width: 71px;
    height: 420px;
    border-radius: 35px;
    top: 100px;
    left: ${props => (props.open ? '355px' : '5px')};
    transition: left 500ms ease;
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
    case 'settings':
      return <SettingsPanel />;
    default:
      return null;
  }
};

// TODO: MenuButton a componente que lance el onClick interno con su nombre

const MyMenuButton = ({
  tabName, name, active, onClick,
}) => {
  const onTabClick = e => onClick(tabName, e);
  return <MenuButton active={active} name={name} onClick={onTabClick} />;
};

MyMenuButton.defaultProps = {
  active: '',
};

MyMenuButton.propTypes = {
  tabName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};


const Sidebar = ({ activeTab: panelName, onTabClick, ...props }) => {
  const [topSidebarShape, setTopSidebarShape] = useState(0);
  const onClick = (tabName, e) => {
    const top = e.target.offsetTop;
    setTopSidebarShape(top - 55);
    onTabClick(tabName);
  };
  return (
    <SidebarWrapper {...props}>
      {renderPanel(panelName)}
      <FixedMenu {...props} column justify="around">
        <MyMenuButton
          tabName="user"
          active={panelName === 'user'}
          name={icon.user}
          onClick={onClick}
        />
        <MyMenuButton
          tabName="index"
          active={panelName === 'index'}
          name={icon.index}
          onClick={onClick}
        />
        <MyMenuButton
          tabName="calendar"
          active={panelName === 'calendar'}
          name={icon.calendar}
          onClick={onClick}
        />
        <MyMenuButton
          tabName="resources"
          active={panelName === 'resources'}
          name={icon.resources}
          onClick={onClick}
        />
        <MyMenuButton
          tabName="highlights"
          active={panelName === 'highlights'}
          name={icon.highlight}
          onClick={onClick}
        />
        <MyMenuButton
          tabName="doubts"
          active={panelName === 'doubts'}
          name={icon.doubt}
          onClick={onClick}
        />
        <MyMenuButton
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
Sidebar.defaultProps = {};

Sidebar.propTypes = {
  onTabClick: PropTypes.func.isRequired,
};

export default Sidebar;
