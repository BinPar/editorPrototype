import styled from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontStyle, fontSize,
} from '../../../utils/Constants';

export default styled.h2`
  font-size: ${fontSize.F30};
  text-align: ${props => (props.right ? 'right' : 'left')};
  font-weight: ${fontWeight.extrabold};
  font-style: ${fontStyle.normal};
  color: ${props => (props.color ? colors.primaryDarker : colors.greyDarker)};
  font-family: ${fontFamily.sansSerif};
  margin-bottom: 30px;
`;
