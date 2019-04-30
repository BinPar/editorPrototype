import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../../../utils/Constants';
import Summary from './Summary';
import Settings from './Settings';

const HighlighterItemWrapper = styled.li`
  width: 100%;
  background-color: ${colors.white};
  padding: 10px;
  & + & {
    margin-top: 10px;
  }
`;

const HighlighterItem = ({ editing, color, name, ...props }) => (
  <HighlighterItemWrapper>
    <Summary name={name} color={color} {...props} />
    {editing && <Settings />}
  </HighlighterItemWrapper>
);

HighlighterItem.defaultProps = {
  editing: false,
};

HighlighterItem.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editing: PropTypes.bool,
};

export default HighlighterItem;