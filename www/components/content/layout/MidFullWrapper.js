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

const CenteredContent = styled.div`
  &.editing {
    position: relative;
    &:hover {
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 50px);
        height: calc(100% + 50px);
        border: 4px solid ${props => props.theme.editWrapperBorder};
        opacity: 0.3;
        border-radius: 10px;
        pointer-events:none;
      }
    }
  }
`;

const MidFull = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => alignment[props.align]}
`;

const MidFullWrapper = ({
  children, align, alignContent, className, position, editing, ...props
}) => (
  <MidFull layout="midFull" align={align} {...props}>
    {align ? (
      <MidFullWrapperAlignedContent
        position={position || 'flex'}
        justify={alignContent}
        align="start"
        className={`${className}${editing ? ' editing' : ''}`}
      >
        {children}
      </MidFullWrapperAlignedContent>
    ) : (
      <CenteredContent className={`${className}${editing ? ' editing' : ''}`}>
        {children}
      </CenteredContent>
    )}
  </MidFull>
);

MidFullWrapper.defaultProps = {
  align: '',
  alignContent: '',
  className: '',
  position: '',
  editing: false,
};

MidFullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  alignContent: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
  editing: PropTypes.bool,
};

export default MidFullWrapper;
