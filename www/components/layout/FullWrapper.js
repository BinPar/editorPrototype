import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';
import Wrapper from './Wrapper';

const alignment = {
  left: css`
    align-items: flex-start;
  `,
  right: css`
    align-items: flex-end;
  `,
};

const Full = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => alignment[props.align]}
`;

const Holder = styled.div`
  ${maxMedia.maxMobile`
    width: 100%;
  `}
  ${minMedia.minTablet`
    width: calc(100% - 75px);
  `}
  ${minMedia.minDesk`
    width: calc(100% - 125px);
  `}
  ${minMedia.minDeskLarge`
    width: 85%;
  `}
  ${minMedia.minDeskHD`
    width: 81%;
  `}
  ${minMedia.minDeskUltraHD`
    width: 76.5%;
  `}
  ${minMedia.minDeskMegaHD`
    width: 71.5%;
  `}
`;

const FullWrapper = ({ children, align }) => (
  <Full layout="full" align={align}>
    {align ? <Holder>{children}</Holder> : children}
  </Full>
);

FullWrapper.defaultProps = {
  align: false,
};

FullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.bool,
};

export default FullWrapper;
