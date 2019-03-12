import styled from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize,
} from '../../../utils/Constants';

export default styled.p`
  font-size: ${fontSize.F20};
  text-align: justify;
  color: ${colors.greyDarker};
  font-family: ${fontFamily.serif};
  font-weight: ${fontWeight.regular};
  line-height: ${fontSize.F32};
  letter-spacing: 0.05rem;
  user-select: auto;
  ~ * {
    margin-top: 20px
  };
`;
