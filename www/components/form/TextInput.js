import styled from 'styled-components';
import {
  fontSize, fontFamily, fontWeight,
} from '../../utils/Constants';

export default styled.input`
  width: 100%;
  font-size: ${fontSize.F15};
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  padding: 5px 10px 5px 0;
  border-bottom: 2px solid ${props => props.theme.inputBorder};

  ~ label {
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &.withValue {
    border-bottom-color: ${props => props.theme.inputBorderWithValue};
    ~ label {
      top: 5px;
      left: 0;
      font-size: ${fontSize.F08};
      transform: translateY(-125%);
      color: ${props => props.theme.labelWithValue};
    }
  }

  &:-webkit-autofill {
    ~ label {
      top: 5px;
      left: 0;
      font-size: ${fontSize.F08};
      transform: translateY(-125%);
      color: ${props => props.theme.labelWithValue};
    }
  }

  &:-moz-autofill {
    ~ label {
      top: 5px;
      left: 0;
      font-size: ${fontSize.F08};
      transform: translateY(-125%);
      color: ${props => props.theme.labelWithValue};
    }
  }

  &:required {
    ~ label {
      &:after {
        content: '*';
        margin-left: 5px;
        font-family: ${fontFamily.sansSerif};
      }
    }
  }
`;
