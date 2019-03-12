import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';

const layout = {
  wrapper: css`
    margin: 0 auto;
    ${maxMedia.maxMobile`
      max-width: calc(100% - 50px);
    `}
    ${minMedia.minTablet`
      max-width: calc(100% - 150px);
    `}
    ${minMedia.minDesk`
      max-width: calc(100% - 250px);
    `}
    ${minMedia.minDeskLarge`
      max-width: 70%;
    `}
    ${minMedia.minDeskHD`
      max-width: 62%;
    `}
    ${minMedia.minDeskUltraHD`
      max-width: 53%;
    `}
    ${minMedia.minDeskMegaHD`
      max-width: 43%;
    `}
  `,
  midFull: css`
    margin: 0 auto;
    ${maxMedia.maxDesk`
      max-width: calc(100% - 50px);
    `}
    ${minMedia.minDeskLarge`
      max-width: 88%;
    `}
    ${minMedia.minDeskHD`
      max-width: 77%;
    `}
    ${minMedia.minDeskUltraHD`
      max-width: 66%;
    `}
    ${minMedia.minDeskMegaHD`
      max-width: 53%;
    `}
  `,
  full: css`
    width: 100%;
  `,
};

export default styled.div`
  ${props => layout[props.layout] || layout.wrapper};
  & ~ & {
    margin-top: 40px;
  }
`;
