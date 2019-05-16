import styled from 'styled-components';
import { fontWeight, fontStyle } from '../../../utils/Constants';

export default styled.a`
  color: ${props => props.theme.link};
  font-style: ${fontStyle.italic};
  font-weight: ${fontWeight.semibold};
  :hover {
    color: ${props => props.theme.linkHover};
  }
`;
