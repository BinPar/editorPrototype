import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CircularProgressbar from 'react-circular-progressbar';
import {
  colors, minMedia, maxMedia,
} from '../../utils/Constants';


const SmallProgressBarWrapper = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${colors.primaryDarkerLighten};
`;

const SmallBar = styled.span`
  height: 7px;
  border-radius: 7px;
  background: ${colors.primaryDarkerMed};
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

const ProgressBarWrapper = styled.div`
  height: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 0;
  ${maxMedia.maxMobile`
    top: 125px;
    width: 100%;
    `}
  ${minMedia.minTablet`
    top: 65px;
    width: 100%;
  `}
`;

{/* const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrolled = (winScroll / height) * 100;

const Bar = styled.span`
  height: 5px;
  background: ${colors.primaryLight};
  width: ${`${scrolled}%`};
`; */}

const Bar = styled.span`
  height: 5px;
  background: ${colors.primaryLight};
  width: ${props => `${props.progress}%`};
`;


export const ProgressBar = ({ progress, ...props }) => (
  <ProgressBarWrapper {...props}>
    <Bar progress={progress} />
  </ProgressBarWrapper>
);

ProgressBar.defaultProps = {
};

ProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
};

const CircleProgressBarWrapper = styled(CircularProgressbar)`
  width: 20px;
  position: absolute;
  right: 10px;
  top: 0;
`;

export const CircleProgressBar = ({ progress }) => (
  <CircleProgressBarWrapper
    percentage={progress}
    strokeWidth={10}
    styles={{
      path: {
        stroke: colors.primary,
        strokeLinecap: 'round',
        transition: 'stroke-dashoffset 0.5s ease 0s',
      },
      trail: {
        stroke: colors.primaryLight,
        opacity: 0.3,
      },
    }}
  />
);

CircleProgressBar.defaultProps = {
};

CircleProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
};
