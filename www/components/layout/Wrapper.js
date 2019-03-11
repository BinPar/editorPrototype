import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';

const layout = {
  column: css`
    margin: 0 auto;
    background: mediumseagreen;
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
      max-width: 970px;
    `}
  `,
  midFull: css`
    margin: 0 auto;
    background: palevioletred;
    ${maxMedia.maxDesk`
      max-width: calc(100% - 50px);
    `}
    ${minMedia.minDeskLarge`
      max-width: 1230px;
    `}
  `,
  full: css`
    width: 100%;
    background: dodgerblue;
  `,
};

export default styled.div`
  ${props => layout[props.layout]}
`;
