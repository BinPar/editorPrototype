import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';
import Wrapper from './Wrapper';

const MidFull = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.right ? 'flex-end' : 'flex-start')};
  background: white;
`;

const Holder = styled.div`
  background: red;
  ${maxMedia.maxMobile`
    width: 100%;
  `}
  ${minMedia.minTablet`
    width: calc(100% - 50px);
  `}
  ${minMedia.minDesk`
    width: calc(100% - 100px);
  `}
  ${minMedia.minDeskLarge`
    width: calc(100% - 120px);
  `}
`;

const MidFullWrapper = ({ children, right }) => (
  <MidFull layout="midFull" right={right}>
    <Holder>{children}</Holder>
  </MidFull>
);

MidFullWrapper.defaultProps = {
  right: false,
};

MidFullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
};


export default MidFullWrapper;
