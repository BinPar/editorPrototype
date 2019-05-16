import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Holder from '../../layout/Holder';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled(Holder)`
  position: relative;
  border-left: 2px solid ${props => props.theme.addOptionsDivision};
  width: 0;
  padding: 10px;
  transform: scale(0);
  transform-origin: left;
  transition: width 500ms ease, transform 500ms ease;
  z-index: 2;
  animation: ${fadeOut} 500ms ease;
  &:after {
    content: '';
    width: ${props => (props.sidebar ? 'calc(100% + 5px)' : 'calc(100% + 15px)')};
    height: 100%;
    position: absolute;
    background-color: ${props => (props.sidebar ? props.theme.addBgSidebar : props.theme.addBg)};
    left: ${props => (props.sidebar ? '-5px' : '-15px')};
    right: ${props => (props.sidebar ? '-5px' : '-15px')};
    top: 0;
    z-index: -1;
  }
  &.expanded {
    padding-left: 5px;
    margin-left: ${props => (props.sidebar ? '5px' : '10px')};
    width: 100%;
    transform: scale(1);
    animation: ${fadeIn} 500ms ease;
  }
`;

const OptionsWrapper = ({ children, sidebar, className }) => (
  <Wrapper sidebar={sidebar} className={className}>
    {children}
  </Wrapper>
);

OptionsWrapper.defaultProps = {
  sidebar: false,
  className: '',
};

OptionsWrapper.propTypes = {
  sidebar: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default OptionsWrapper;
