import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Wrapper from './Wrapper';
import FullWrapperAlignedContent from './FullWrapperAlignedContent';

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

const FullWrapper = ({
  children, align, alignContent, className,
}) => (
  <Full layout="full" align={align}>
    {align ? (
      <FullWrapperAlignedContent position="flex" justify={alignContent} align="start" className={className}>
        {children}
      </FullWrapperAlignedContent>
    ) : (
      children
    )}
  </Full>
);

FullWrapper.defaultProps = {
  align: '',
  alignContent: '',
  className: '',
};

FullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  alignContent: PropTypes.string,
  className: PropTypes.string,
};

export default FullWrapper;
