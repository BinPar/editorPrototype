import styled from 'styled-components';
import { fontSize, fontFamily } from '../../utils/Constants';

export default styled.input`
  width: 100%;
  font-size: ${fontSize.F15};
  height: 55px;
  border-radius: 30px;
  padding-left: 20px;
  font-family: ${fontFamily.sansSerif};
  border-width: 2px;
  border-style: solid;

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
