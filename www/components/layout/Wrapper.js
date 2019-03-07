import styled from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';

export default styled.div`
  margin: 0 auto;
  width: 100%;
  ${maxMedia.maxMobile`
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
  `}
`;
