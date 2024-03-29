import styled from 'styled-components';
import {
  fontFamily, fontWeight, fontSize, minMedia, maxMedia,
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
  color: ${props => props.theme.paragraph};
  font-family: ${fontFamily.serif};
  font-weight: ${fontWeight.regular};
  user-select: auto;
  hyphens: auto;
  ~ * {
    margin-top: 20px
  };
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    width: 100%;
  }
`;
