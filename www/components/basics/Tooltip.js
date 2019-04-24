import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/Constants';

const TooltipPosition = styled.div`
  position: absolute;
  top: ${props => (props.top)};
  left: ${props => (props.left)};
  right: ${props => (props.right)};
  bottom: ${props => (props.bottom)};
  z-index: 100;
  height: 50px;
`;
const TooltipWrapper = styled.div`
  height: 50px;
  min-width: 60px;
  border-radius: 30px;
  background-color: ${colors.greyDarker};
  position: relative;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    width: 23px;
    height: 23px;
    background-color: ${colors.greyDarker};
    top: 35px;
    left: 50%;
    border-radius: 5px;
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
  }
`;

export const Tooltip = ({ children }) => (
  <TooltipPosition>
    <TooltipWrapper>
      {children}
    </TooltipWrapper>
  </TooltipPosition>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tooltip;
