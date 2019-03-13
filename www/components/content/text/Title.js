import styled from 'styled-components';
import {
  colors, fontFamily, fontSize, maxMedia,
} from '../../../utils/Constants';

export default styled.h1`
  font-size: ${fontSize.F40};
  text-align: left;
  color: ${colors.greyDarker};
  font-family: ${fontFamily.serif};
  ${maxMedia.maxMobile`
    hyphens: auto;
  `};
`;
