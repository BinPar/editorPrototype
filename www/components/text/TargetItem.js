import styled from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize,
} from '../../utils/Constants';

export default styled.p`
  font-size: ${fontSize.F19};
  text-align: right;
  color: ${colors.primaryDarker};
  font-family: ${fontFamily.serif};
  font-weight: ${fontWeight.regular};
  line-height: ${fontSize.F32};
  letter-spacing: 0.05rem;
  & + & {
    margin-top: 20px
  };
`;
