import styled from 'styled-components';
import { colors, fontFamily, fontWeight } from '../utils/Constants';

export default styled.p`
font-size: 1.2rem;
text-align: justify;
color: ${colors.greyDarker};
font-family: ${fontFamily.serif};
font-weight: ${fontWeight.regular};
line-height: 2rem;
letter-spacing: 0.05rem;
`;
