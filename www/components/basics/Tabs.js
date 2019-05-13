import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  minMedia,
  maxMedia,
} from '../../utils/Constants';
import Holder from '../layout/Holder';

const Marker = styled.span`
  position: absolute;
  bottom: -2px;
  border-bottom: 3px solid ${colors.primaryMed};
  width: ${props => props.markerWidth};
  left: ${props => props.markerPosition};
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

export const Tabs = ({ children, ...props }) => (
  <TabsWrapper>
    {children}
    <Marker {...props} />
  </TabsWrapper>
);

Tabs.defaultProps = {};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

const TabWrapper = styled.button`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.extrabold};
  letter-spacing: 0.05em;
  color: ${colors.primaryDarkerLighten};

  ${maxMedia.maxMobile`
    font-size: ${fontSize.F10};
  `};
  ${minMedia.minTablet`
    font-size: ${fontSize.F09};
  `};

  &:hover,
  &.active {
    color: ${colors.primaryMed};
  }
  & + & {
    margin-left: 10px;
  }
`;

export const Tab = ({ active, text }) => (
  <TabWrapper className={`${active ? 'active' : ''}`}>
    {text}
  </TabWrapper>
);

Tab.defaultProps = {
  active: false,
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
