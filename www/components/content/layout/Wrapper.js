import styled, { css } from 'styled-components';
import { maxMedia, minMedia } from '../../../utils/Constants';

const layout = {
  wrapper: css`
    margin: 0 auto;
    ${maxMedia.maxMobile`
      width: calc(100% - 50px);
    `}
    ${minMedia.minTablet`
      width: calc(100% - 150px);
    `}
    ${minMedia.minDesk`
      width: calc(100% - 250px);
    `}
    ${minMedia.minDeskLarge`
      ${maxMedia.maxDeskLarge`
        width: ${props => (props.sidebarOpen ? 'calc(100% - 350px)' : '970px')};
      `}
    `}
    ${minMedia.minDeskHD`
      width: ${props => (props.sidebarOpen ? 'calc(1280px - 350px)' : '970px')};
    `}
  `,
  midFull: css`
    margin: 0 auto;
    ${maxMedia.maxDesk`
      width: calc(100% - 50px);
    `}
    ${minMedia.minDeskLarge`
      width: ${props => (props.sidebarOpen ? 'calc(1280px - 350px)' : '1280px')};
    `}
  `,
  full: css`
    width: 100%;
  `,
};

export default styled.div`
  ${props => layout[props.layout] || layout.wrapper};
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
  & ~ & {
    margin-top: 40px;
  }
`;
