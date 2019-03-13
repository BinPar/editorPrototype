import styled from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';
import Holder from '../../layout/Holder';

export default styled(Holder)`
  ${maxMedia.maxMobile`
    width: 100%;
  `}
  ${maxMedia.maxTablet`
    display: block;
  `}
  ${minMedia.minTablet`
    width: calc(100% - 50px);
  `}
  ${minMedia.minDesk`
    width: calc(100% - 100px);
  `}
  ${minMedia.minDeskLarge`
    width: 100%;
    max-width: 89.8%;
  `}
  ${minMedia.minDeskHD`
    max-width: 90.3%;
  `}
  ${minMedia.minDeskHD`
    max-width: 90.7%;
  `}
`;
