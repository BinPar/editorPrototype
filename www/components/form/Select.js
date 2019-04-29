import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  inputSize, colors, icon, fontSize, fontFamily, fontWeight
} from '../../utils/Constants';
import { Options } from './Options';
import Label from './Label';
import Icon from '../basics/Icon';

const Placeholder = styled(Label)`
  top: -5px;
  left: 15px;
  padding: 0 5px;
  transform: translateY(-125%);
`;

const PlaceholderSelected = styled(Label)`
  position: relative;
  transform: none;
  left: 0;
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.1em;
`;

const Selected = styled.span`
  font-size: ${fontSize.F15};
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.medium};
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  align-self: flex-start;
  height: 55px;
  ${props => inputSize[props.size] || inputSize.full};
  border-radius: 30px;
  border-width: 2px;
  border-style: solid;
  margin-bottom: 25px;
  margin-left: ${props => (props.marginLeft ? '15px' : null)};

  ${Label} {
    pointer-events: none;
  }

  &.unfolded {
    border-radius: 25px 25px 0 0;
    border: none;
    background-color: ${colors.primary};

    ${Label} {
      color: ${colors.primary};
    }

    ${Selected} {
      color: ${colors.primary};
    }
  }
  &.required {
    label {
      &:after {
        content: '*';
        margin-left: 5px;
        font-family: ${fontFamily.sansSerif};
      }
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const unfolded = false;

const Select = ({
  placeholder, children, size, selected, selectedOption, required,
}) => (
  <SelectWrapper
    {...{ size }}
    className={`${unfolded ? 'unfolded' : ''}${required ? ' required' : ''}`}
  >
    {selected && <Placeholder>{placeholder}</Placeholder>}
    <Button type="button">
      {!selected ? (
        <PlaceholderSelected>{placeholder}</PlaceholderSelected>
      ) : (
        <Selected>{selectedOption}</Selected>
      )}
      <Icon
        name={unfolded ? icon.arrowTop : icon.arrowBottom}
        color={unfolded ? colors.darkPurpleDark : colors.darkPurpleLighter}
      />
    </Button>
    {unfolded && <Options>{children}</Options>}
  </SelectWrapper>
);

Select.defaultProps = {
  placeholder: '',
  children: [],
  selected: false,
  selectedOption: '',
  required: false,
};

Select.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
  selected: PropTypes.bool,
  selectedOption: PropTypes.string,
  required: PropTypes.bool,
};

export default Select;
