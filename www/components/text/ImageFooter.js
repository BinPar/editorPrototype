import styled from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontStyle, fontSize,
} from '../../utils/Constants';

export default styled.p`
  font-size: ${fontSize.F14};
  text-align: center;
  color: ${colors.greyMed};
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  font-style: ${fontStyle.italic};
  line-height: ${fontSize.F18};
  letter-spacing: 0.02rem;
  margin-top: 15px;
`;
