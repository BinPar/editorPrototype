import styled from 'styled-components';
import { fontSize, colors, fontFamily } from '../../utils/Constants';

export default styled.input`
  width: 100%;
  font-size: ${fontSize.F15};
  height: 40px;
  border-radius: 25px;
  padding-left: 20px;
  font-family: ${fontFamily.sansSerif};
  color: ${props => props.color || colors.darkPurpleLighter};

  ~ label {
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &.widthValue {
    ~ label {
      top: -5px;
      left: 15px;
      font-size: ${fontSize.F12};
      padding: 0 5px;
      transform: translateY(-125%);
    }
  }

  &:-webkit-autofill {
    ~ label {
      top: -5px;
      left: 15px;
      font-size: ${fontSize.F12};
      padding: 0 5px;
      transform: translateY(-125%);
    }
  }

  &:-moz-autofill {
    ~ label {
      top: -5px;
      left: 15px;
      font-size: ${fontSize.F12};
      padding: 0 5px;
      transform: translateY(-125%);
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
