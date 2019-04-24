import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Item from './Item';

const StyledItemWrapper = styled.li`
  ul {
    padding-left: 15px;
  }
  ~ * {
    margin-top: 15px;
  }
`;

const ItemWrapper = ({ children, open, ...props }) => (
  <StyledItemWrapper {...props}>
    <Item open={open} {...props} />
    {children}
  </StyledItemWrapper>
);

ItemWrapper.defaultProps = {
  open: false,
  children: null,
};

ItemWrapper.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default ItemWrapper;
