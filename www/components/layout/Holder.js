import styled, { css } from 'styled-components';

const justify = {
  center: css`
    justify-content: center;
  `,
  start: css`
    justify-content: flex-start;
  `,
  end: css`
    justify-content: flex-end
  `,
  between: css`
    justify-content: space-between;
  `,
  around: css`
    justify-content: space-around;
  `,
};

const align = {
  center: css`
    align-items: center;
  `,
  start: css`
    align-items: flex-start;
  `,
  end: css`
    align-items: flex-end
  `,
  stretch: css`
    align-items: stretch;
  `,
};

export default styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: center;
  ${props => justify[props.justify] || justify.center}
  ${props => align[props.align] || align.center}
`;
