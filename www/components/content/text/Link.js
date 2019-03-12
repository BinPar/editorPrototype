import styled from 'styled-components';
import {
  colors, fontWeight, fontStyle,
} from '../../../utils/Constants';

export default styled.a`
  color: ${colors.primaryDark};
  font-style: ${fontStyle.normal};
  font-weight: ${fontWeight.semibold};

  :hover {
    color: ${colors.primaryDarker};
  }
`;
