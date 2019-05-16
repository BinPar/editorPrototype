import styled from 'styled-components';
import {
  fontSize, fontFamily, fontWeight,
} from '../../utils/Constants';

export default styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: ${fontSize.F11};
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.black};
  transform: translateY(-50%);
  transition: font-size 150ms ease-out, transform 150ms ease-out;
  color: ${props => props.theme.label};
  user-select: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
