import styled, { css } from 'styled-components';

const layout = {
  normal: css`
    flex-wrap: wrap;
  `,
  oneLine: css`
    flex-wrap: nowrap;
  `,
  column: css`
    flex-direction: column;
  `,
};

export default styled.form`
  display: flex;
  justify-content: ${props => props.justify || 'space-between'};
  align-items: flex-start;
  width: 100%;
  position: relative;
  ${props => layout[props.layout] || layout.normal};

  .holder {
    width: 100%;
  }
`;
