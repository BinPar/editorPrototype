import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';
import Holder from '../../layout/Holder';

const alignment = {
  right: css`
    ${maxMedia.maxTablet`
      margin: 0 auto;
    `};
    ${minMedia.minDesk`
      margin: 0 0 0 auto;
    `};
  `,
  left: css`
    ${maxMedia.maxTablet`
      margin: 0 auto;
    `};
  `,
};

export default styled(Holder)`
  display: block;
  ${props => alignment[props.alignment] || alignment.left};
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
    width: 970px;
  `}
  
`;
