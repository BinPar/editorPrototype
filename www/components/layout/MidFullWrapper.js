import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';
import Wrapper from './Wrapper';
import MidFullWrapperAlignedContent from './MidFullWrapperAlignedContent';
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

const MidFullWrapper = ({
  children, align, alignContent, className,
}) => (
  <MidFull layout="midFull" align={align}>
    {align ? (
      <MidFullWrapperAlignedContent position="flex" justify={alignContent} align="start" className={className}>
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
};

MidFullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  alignContent: PropTypes.string,
  className: PropTypes.string,
};

export default MidFullWrapper;
