import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';

const panelMobile = css`
  background-color: ${props => props.theme.sidebarBg};
  height: calc(100vh - 115px);
  margin-top: 60px;
  overflow-y: auto;
  padding-bottom: 50px;
  width: 100%;
`;

const PanelWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  ${maxMedia.maxMobile`
    ${panelMobile}
  `}
  ${minMedia.minTablet`
    ${maxMedia.maxTablet`
      @media (orientation: landscape) {
      }
      @media (orientation: portrait) {
        ${panelMobile}
      }
    `}
    @media (orientation: landscape) {
      @media (hover: none) and (pointer: coarse) {
        background-color: ${props => props.theme.sidebarBg};
        width: 350px;
        height: 100vh;
        overflow-y: auto;
        padding-bottom: 20px;
      }
    }
  `}
`;

const Panel = ({ children, className }) => (
  <PanelWrapper className={`panel ${className}`}>
    {children}
  </PanelWrapper>
);

Panel.defaultProps = {
  className: '',
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Panel;
