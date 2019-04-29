import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontFamily, fontSize, fontWeight,
} from '../../utils/Constants';
import Holder from '../layout/Holder';

const Marker = styled.span`
  position: absolute;
  bottom: -2px;
  border-bottom: 4px solid ${colors.primaryMed};
  transform: translateX(-60px);
  width: 100px;
`;

const TabsWrapper = styled(Holder)`
  border-bottom: 2px solid ${colors.primaryLighter};
  margin-bottom: 10px;
  padding-bottom: 10px;
  position: relative;
  ${Marker} {
    transition: all 2ms ease;
  }
`;


export const Tabs = ({ active, children }) => (
  <TabsWrapper>
    {children}
    <Marker />
  </TabsWrapper>
);

Tabs.defaultProps = {
  active: false,
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

const TabWrapper = styled.button`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-size: ${fontSize.F12};
  font-weight: ${fontWeight.extrabold};
  letter-spacing: 0.05em;
  color: ${colors.primaryDarkerLighten};
  &:hover,
  &.active {
    color: ${colors.primaryMed};
  }
  & + & {
    margin-left: 10px;
  }
`;

export const Tab = ({ active, text }) => (
  <TabWrapper className={`${active ? 'active' : ''}`}>{text}</TabWrapper>
);

Tab.defaultProps = {
  active: false,
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
