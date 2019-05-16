import styled from 'styled-components';
import {
  fontFamily, fontSize, maxMedia,
} from '../../../utils/Constants';

export default styled.h1`
  font-size: ${fontSize.F40};
  text-align: left;
  color: ${props => props.theme.title};
  font-family: ${fontFamily.serif};
  ${maxMedia.maxMobile`
    hyphens: auto;
  `};
`;
