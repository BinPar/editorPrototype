import styled from 'styled-components';
import { fontSize, fontFamily } from '../../utils/Constants';

export default styled.textarea`
  width: 100%;
  font-size: ${fontSize.F15};
  border-radius: 25px;
  padding: 20px;
  font-family: ${fontFamily.sansSerif};
  border-width: 2px;
  border-style: solid;

  ~ label {
    pointer-events: none;
    top: 20px;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &.withValue {
    ~ label {
      top: -2px;
      left: 15px;
      font-size: ${fontSize.F10};
      padding: 0 5px;
      transform: translateY(-125%);
    }
  }

  &:-webkit-autofill {
    ~ label {
      top: -2px;
      left: 15px;
      font-size: ${fontSize.F10};
      padding: 0 5px;
      transform: translateY(-125%);
    }
  }

  &:-moz-autofill {
    ~ label {
      top: -2px;
      left: 15px;
      font-size: ${fontSize.F10};
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
