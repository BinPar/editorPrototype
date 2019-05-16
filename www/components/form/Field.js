import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inputSize } from '../../utils/Constants';
import TextInput from './TextInput';
import CheckInput from './CheckInput';
import Textarea from './Textarea';
import Search from './Search';
import Label from './Label';

const renderInput = (input, className, props = {}) => {
  switch (input) {
    case 'textarea': {
      return <Textarea {...props} />;
    }
    case 'check': {
      return <CheckInput {...props} />;
    }
    case 'search': {
      return <Search {...props} />;
    }
    default: {
      return <TextInput className={className} {...props} />;
    }
  }
};
const FieldWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  align-self: flex-start;
  margin-bottom: 15px;
  margin-left: ${props => (props.marginLeft ? '15px' : null)};
  ${props => inputSize[props.size] || inputSize.full};
`;

const Field = ({
  label, input, size, children, className, ...props
}) => (
  <FieldWrapper className={className} {...{ size }}>
    {renderInput(input, className, props)}
    {label && <Label>{label}</Label>}
  </FieldWrapper>
);

Field.defaultProps = {
  label: '',
  size: '',
  children: '',
  input: '',
  className: '',
};

Field.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  input: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Field;
