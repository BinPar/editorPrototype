import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Wrapper from './Wrapper';
import MidFullWrapperAlignedContent from './MidFullWrapperAlignedContent';
import { maxMedia, minMedia } from '../../../utils/Constants';

const maxTabletAlign = maxMedia.maxTablet`
  align-items: center;
`;

const minDeskAlignLeft = minMedia.minDesk`
  align-items: flex-start;
`;

const minDeskAlignRight = minMedia.minDesk`
  align-items: flex-end;
`;

const alignment = {
  left: css`
    ${maxTabletAlign};
    ${minDeskAlignLeft};
  `,
  right: css`
    ${maxTabletAlign};
    ${minDeskAlignRight};
  `,
};

const MidFull = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => alignment[props.align]}
`;

const MidFullWrapper = ({
  children, align, alignContent, className, position,
}) => (
  <MidFull layout="midFull" align={align}>
    {align ? (
      <MidFullWrapperAlignedContent
        position={position || 'flex'}
        justify={alignContent}
        align="start"
        className={className}
      >
        {children}
      </MidFullWrapperAlignedContent>
    ) : (
      children
    )}
  </MidFull>
);

MidFullWrapper.defaultProps = {
  align: '',
  alignContent: '',
  className: '',
  position: '',
};

MidFullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  alignContent: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
};

export default MidFullWrapper;
