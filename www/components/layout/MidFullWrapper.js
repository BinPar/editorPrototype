import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';
import Wrapper from './Wrapper';
import Holder from './Holder';

const alignment = {
  left: css`
    align-items: flex-start;
  `,
  right: css`
    align-items: flex-end;
  `,
};

const MidFull = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => alignment[props.align]}
`;

const AlignedWrapper = styled(Holder)`
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
    width: 100%;
    max-width: 89.8%;
  `}
  ${minMedia.minDeskHD`
    max-width: 90.3%;
  `}
  ${minMedia.minDeskHD`
    max-width: 90.7%;
  `}
`;

const MidFullWrapper = ({ children, align }) => (
  <MidFull layout="midFull" align={align}>
    {align ? (
      <AlignedWrapper align="start">{children}</AlignedWrapper>
    ) : (
      <Holder align="start">{children}</Holder>
    )}
  </MidFull>
);

MidFullWrapper.defaultProps = {
  align: false,
};

MidFullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.bool,
};

export default MidFullWrapper;