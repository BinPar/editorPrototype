import styled from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';
import Holder from './Holder';

export default styled(Holder)`
  ${maxMedia.maxMobile`
    width: 100%;
  `}
  ${minMedia.minTablet`
    width: calc(100% - 75px);
  `}
  ${minMedia.minDesk`
    width: calc(100% - 125px);
  `}
  ${minMedia.minDeskLarge`
    width: 85%;
  `}
  ${minMedia.minDeskHD`
    width: 81%;
  `}
  ${minMedia.minDeskUltraHD`
    width: 76.5%;
  `}
  ${minMedia.minDeskMegaHD`
    width: 71.5%;
  `}
`;
