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
  width: 100%;
  ${props => alignment[props.align]}
`;

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
        pointer-events: none;
      }
    }
  }
`;

const FullWrapper = ({
  children, align, alignContent, className, editing,
}) => (
  <Full layout="full" align={align}>
    {align ? (
      <FullWrapperAlignedContent
        position="flex"
        justify={alignContent}
        align="start"
        className={`${className}${editing ? ' editing' : ''}`}
      >
        {children}
      </FullWrapperAlignedContent>
    ) : (
      <CenteredContent className={`${className}${editing ? ' editing' : ''}`}>
        {children}
      </CenteredContent>
    )}
  </Full>
);

FullWrapper.defaultProps = {
  align: '',
  alignContent: '',
  className: '',
  editing: false,
};

FullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  alignContent: PropTypes.string,
  className: PropTypes.string,
  editing: PropTypes.bool,
};

export default FullWrapper;
