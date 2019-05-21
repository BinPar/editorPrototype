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
    width: ${props => (props.sidebarOpen ? 'calc((970px - 400px) + (100% - (970px - 400px))/2)' : 'calc(970px + (100% - 970px)/2)')};
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
        border: 4px solid ${props => props.theme.editWrapperBorder};
        opacity: 0.3;
        border-radius: 10px;
        pointer-events: none;
      }
    }
  }
`;
