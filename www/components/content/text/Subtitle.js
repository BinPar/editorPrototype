import styled from 'styled-components';
import {
  fontFamily, fontWeight, fontStyle, fontSize,
} from '../../../utils/Constants';

export default styled.h2`
  font-size: ${fontSize.F30};
  text-align: ${props => (props.right ? 'right' : 'left')};
  font-weight: ${fontWeight.extrabold};
  font-style: ${fontStyle.normal};
  color: ${props => (props.useColor ? props.theme.highlightedText : props.theme.subtitle)};
  font-family: ${fontFamily.sansSerif};
  margin-bottom: 30px;
`;
