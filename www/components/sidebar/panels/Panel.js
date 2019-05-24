import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { maxMedia } from '../../../utils/Constants';

const PanelWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  ${maxMedia.maxMobile`
    background-color: ${props => props.theme.sidebarBg};
    height: calc(100vh - 115px);
    margin-top: 60px;
    overflow-y: auto;
    padding-bottom: 50px;
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
