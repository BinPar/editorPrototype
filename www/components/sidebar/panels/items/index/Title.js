import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontFamily, fontWeight, fontSize, colors,
} from '../../../../../utils/Constants';
import TextInput from '../../../../form/TextInput';

const Input = styled(TextInput)`
  letter-spacing: 0.07em;
  border-bottom: 1px solid ${props => props.theme.primaryLight};
  color: ${props => props.theme.primaryDarker};

  &.levelOne {
    font-size: ${fontSize.F14};
  }

  &.levelTwo {
    font-size: ${fontSize.F13};
  }
`;

const StyledTitle = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  color: ${props => props.theme.primaryDarker};
  letter-spacing: 0.07em;

  &.levelOne {
    font-size: ${fontSize.F14};
  }

  &.levelTwo {
    font-size: ${fontSize.F13};
  }
`;

const Title = ({ title, editing, className }) => (editing ? (
  <Input className={className} defaultValue={title} />
) : (
  <StyledTitle className={className}>{title}</StyledTitle>
));

Title.defaultProps = {
  editing: false,
  title: '',
  className: '',
};

Title.propTypes = {
  editing: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
