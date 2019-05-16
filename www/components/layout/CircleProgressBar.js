import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import CircularProgressbar from 'react-circular-progressbar';

const CircleProgressBarWrapper = styled(CircularProgressbar)`
  width: 20px;
  position: absolute;
  right: 10px;
  top: 0;
`;

const CircleProgressBar = ({ progress, theme }) => (
  <CircleProgressBarWrapper
    percentage={progress}
    strokeWidth={10}
    styles={{
      path: {
        stroke: theme.circleProgressBarPath,
        strokeLinecap: 'round',
        transition: 'stroke-dashoffset 0.5s ease 0s',
      },
      trail: {
        stroke: theme.circleProgressBarTrail,
        opacity: 0.3,
      },
    }}
  />
);

CircleProgressBar.defaultProps = {};

CircleProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(CircleProgressBar);
