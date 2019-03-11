import styled from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontStyle,
} from '../../utils/Constants';

export default styled.h2`
  font-size: 1.8rem;
  text-align: ${props => (props.right ? 'right' : 'left')};
  font-weight: ${fontWeight.bold};
  font-style: ${fontStyle.normal};
  color: ${props => props.color || colors.greyDarker};
  font-family: ${fontFamily.sansSerif};
`;
