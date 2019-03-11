import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../utils/Constants';

const layout = {
  column: css`
    width: 30%;
    ${maxMedia.maxMobile`
      background: red;
      color: Red;
      max-width: calc(100% - 50px);
    `}
  `,
  midFull: css`
    width: 100%;
  `,
  full: css`
    width: 100%;
  `,
};

export default styled.div`
  margin: 0 auto;
  ${props => layout[props.layout]}
`;

{
  /*   ${maxMedia.maxMobile`
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
  `} */
}
