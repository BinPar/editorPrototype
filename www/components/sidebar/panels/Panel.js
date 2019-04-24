import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
`;

const Panel = ({ children, className }) => (
  <PanelWrapper className={`panel ${className}`}>
    {children}
  </PanelWrapper>
);

Panel.defaultProps = {
  className: '',
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Panel;
