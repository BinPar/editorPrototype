import styled from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';

export default styled.div`
  margin: 0 auto;
  ${props => (props.full ? 'width: 100%; background: dodgerblue;' : 'padding: 0 20px;')};
  ${props => (props.column && 'max-width: 970px; background: palevioletred;')};
  ${props => (props.column && 'max-width: 970px; background: palevioletred;')};
  ${props => (props.midFull && 'max-width: 1230px; background: mediumseagreen;')};
`;

{
  /*   ${maxMedia.maxMobile`
    background: pink;
    max-width: calc(100% - 50px);
  `}
  ${minMedia.minTablet`
    background: grey;
    max-width: calc(100% - 200px);
  `}
  ${minMedia.minDesk`
    background: mediumseagreen;
    max-width: 900px;
  `}
  ${minMedia.minDeskLarge`
    background: palevioletred;
    max-width: 970px;
  `}
  ${minMedia.minDeskHD`
    background: dodgerblue;
    max-width: 970px;
  `} */
}
