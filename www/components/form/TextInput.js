import styled from 'styled-components';
import {
  fontSize, fontFamily, fontWeight, colors,
} from '../../utils/Constants';

export default styled.input`
  width: 100%;
  font-size: ${fontSize.F15};
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  padding: 5px 10px 5px 0;
  font-family: ${fontFamily.sansSerif};
  border-bottom: 2px solid ${colors.primaryDarkerLighten};

  ~ label {
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:valid,
  &.withValue {
    border-bottom-color: ${colors.primaryMed};
    ~ label {
      top: 5px;
      left: 0;
      font-size: ${fontSize.F08};
      transform: translateY(-125%);
      color: ${colors.primaryMed};
    }
  }

  &:-webkit-autofill {
    ~ label {
      top: 5px;
      left: 0;
      font-size: ${fontSize.F08};
      transform: translateY(-125%);
      color: ${colors.primaryMed};
    }
  }

  &:-moz-autofill {
    ~ label {
      top: 5px;
      left: 0;
      font-size: ${fontSize.F08};
      transform: translateY(-125%);
      color: ${colors.primaryMed};
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
