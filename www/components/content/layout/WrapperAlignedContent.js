import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';
import Holder from './Holder';

const alignment = {
  right: css`
    margin: 0 0 0 auto;
  `,
};

export default styled(Holder)`
  display: block;
  ${props => alignment[props.alignment]};
  ${maxMedia.maxMobile`
    width: 100%;
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
