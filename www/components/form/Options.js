import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize,
} from '../../utils/Constants';

export const Options = styled.ul`
  position: absolute;
  top: 100%;
  background-color: ${colors.darkPurpleLight};
  width: 100%;
  border-radius: 0 0 25px 25px;
  min-height: 25px;
  overflow: hidden;
  z-index: 1;
`;

const Item = styled.li`
  position: relative;
  padding: 10px 20px;
  list-style-type: none;
  font-size: ${fontSize.F13};
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.medium};
  color: ${colors.darkPurpleDarker};
  &:hover {
    background-color: ${colors.darkPurpleLighter};
    color: ${colors.darkPurpleMed};
    cursor: pointer;
  }
`;

const OptionItem = ({ selected, text }) => (
  <Item className={selected ? 'selected' : ''}>{text}</Item>
);

OptionItem.propTypes = {
  selected: PropTypes.bool,
  text: PropTypes.string,
};

OptionItem.defaultProps = {
  selected: false,
  text: '',
};

export default OptionItem;
