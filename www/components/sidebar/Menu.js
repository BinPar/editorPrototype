import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  maxMedia, minMedia, icon,
} from '../../utils/Constants';
import Holder from '../layout/Holder';
import Button from '../basics/Button';
import SidebarShape from './SidebarShape';

const menuMobile = css`
  flex-direction: row;
  width: 100%;
  height: 60px;
  top: 65px;
  left: 0;
`;

const menuDesktop = css`
  width: 71px;
  height: 420px;
  border-radius: 35px;
  top: 100px;
  left: ${props => (props.open ? '355px' : '5px')};
  transition: left 500ms ease;
`;

const FixedMenuWrapper = styled(Holder)`
  background-color: ${props => props.theme.sidebarMenuBg};
  position: fixed;
  z-index: 1100;
  padding: 10px 0;
  ${maxMedia.maxMobile`
    ${menuMobile}
  `}
  ${minMedia.minTablet`
    ${maxMedia.maxTablet`
      @media (orientation: landscape) {
        ${menuDesktop}
      }
      @media (orientation: portrait) {
        ${menuMobile}
      }
    `}
  `}
  ${minMedia.minDesk`
    ${menuDesktop}
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

const Menu = ({
  activeTab: panelName, onTabClick, editing, ...props
}) => {
  const [topSidebarShape, setTopSidebarShape] = useState(0);
  const onClick = (tabName, e) => {
    const top = e.target.offsetTop;
    setTopSidebarShape(top - 55);
    onTabClick(tabName);
  };
  return (
    <FixedMenuWrapper {...props} column justify="around">
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
    </FixedMenuWrapper>
  );
};
Menu.defaultProps = {
  activeTab: null,
  editing: false,
};

Menu.propTypes = {
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
  editing: PropTypes.bool,
};

export default Menu;
