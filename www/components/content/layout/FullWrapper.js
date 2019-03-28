import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Wrapper from './Wrapper';
import FullWrapperAlignedContent from './FullWrapperAlignedContent';
import { colors } from '../../../utils/Constants';

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
        border: 4px solid ${colors.greyMed};
        opacity: 0.3;
        border-radius: 10px;
      }
    }
  }
`;

const editing = true; // Posiblemente haya que usar el Hook de estado

const FullWrapper = ({
  children, align, alignContent, className,
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
};

FullWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  alignContent: PropTypes.string,
  className: PropTypes.string,
};

export default FullWrapper;
