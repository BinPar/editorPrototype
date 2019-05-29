import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  minMedia, maxMedia,
} from '../../utils/Constants';


const SmallProgressBarWrapper = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.theme.smallProgressBarTrail};
`;

const SmallBar = styled.span`
  height: 7px;
  border-radius: 7px;
  background: ${props => props.theme.smallProgressBarPath};
  width: ${props => `${props.progress}%`};
`;

export const SmallProgressBar = ({ progress, ...props }) => (
  <SmallProgressBarWrapper {...props}>
    <SmallBar progress={progress} />
  </SmallProgressBarWrapper>
);

SmallProgressBar.defaultProps = {
};

SmallProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
};

const progressBarMobile = css`
  top: 125px;
  width: 100%;
`;

const progressBarDesktop = css`
  top: 65px;
  width: ${props => (props.open ? 'calc(100vw - 350px)' : '100vw')};;
  left: ${props => (props.open ? '350px' : 0)};
`;

const ProgressBarWrapper = styled.div`
  height: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  transition: all 500ms ease;
  z-index: 800;
  ${maxMedia.maxMobile`
    ${progressBarMobile}
  `}
  ${minMedia.minTablet`
    ${maxMedia.maxTablet`
      @media (orientation: landscape) {
        ${progressBarDesktop}
      }
      @media (orientation: portrait) {
        ${progressBarMobile}
      }
    `}
  `}
  ${minMedia.minDesk`
    ${progressBarDesktop}
  `}
`;

const Bar = styled.span`
  height: 5px;
  background: ${props => props.theme.largeProgressBarPath};
`;


export const ProgressBar = React.forwardRef((props, ref) => (
  <ProgressBarWrapper {...props}>
    <Bar ref={ref} />
  </ProgressBarWrapper>
));

ProgressBar.defaultProps = {
};

ProgressBar.propTypes = {
};
