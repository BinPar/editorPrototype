import styled from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';
import Holder from '../../layout/Holder';

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
    width: calc(970px + (100% - 970px)/2);
  `}
`;
