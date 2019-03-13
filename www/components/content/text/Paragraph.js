import styled from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize, minMedia, maxMedia,
} from '../../../utils/Constants';

export default styled.p`
  ${maxMedia.maxMobile`
    font-size: ${fontSize.F16};
    letter-spacing: 0.02rem;
    line-height: ${fontSize.F30};
  `};
  ${minMedia.minTablet`
    font-size: ${fontSize.F20};
    letter-spacing: 0.05rem;
    line-height: ${fontSize.F32};
  `};
  text-align: justify;
  color: ${colors.greyDarker};
  font-family: ${fontFamily.serif};
  font-weight: ${fontWeight.regular};
  user-select: auto;
  ~ * {
    margin-top: 20px
  };
`;
