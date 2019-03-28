import styled from 'styled-components';
import { maxMedia, minMedia, colors } from '../../../utils/Constants';
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
    width: calc(970px + (100% - 970px)/2);
  `}
  &.editing {
    position: relative;
    &:hover {
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 50px);
        height: calc(100% + 50px);
        border: 4px solid ${colors.greyMed};
        opacity: 0.3;
        border-radius: 10px;
      }
    }
  }
`;
