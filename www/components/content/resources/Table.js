import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontSize, fontFamily, fontWeight, maxMedia, minMedia,
} from '../../../utils/Constants';
import Paragraph from '../text/Paragraph';
import Holder from '../../layout/Holder';

// ESTRUCTURA

const TableWrapper = styled(Holder)`
  overflow-x: auto;
  padding: 4px;
  :not(:only-child) {
    margin-bottom: 50px;
  }
`;

const TableContent = styled.table`
  width: auto;
`;

export const Table = ({ children }) => (
  <TableWrapper justify="start">
    <TableContent>{children}</TableContent>
  </TableWrapper>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};


export const Header = styled.thead``;

export const Body = styled.tbody``;

export const Footer = styled.tfoot``;

export const Row = styled.tr``;

// CELDAS

const type = {
  basic: css`
    background: ${colors.white};
    padding: 20px;
    border: 3px solid ${colors.primaryLightest};
  `,
  highlight: css`
    background: ${colors.primaryLightest};
    padding: 10px;
    border-bottom: 3px solid ${colors.white};
    & + & {
      border-left: 3px solid ${colors.white};
    }
  `,
};

export const Cell = styled.td`
  ${props => type[props.type] || type.basic};
  vertical-align: middle;
  min-height: 50px;
  ${maxMedia.maxMobile`
    min-width: 200px;
  `}
  ${minMedia.minTablet`
    min-width: 150px;
  `}
`;

export const CellHeader = styled.th`
  background: ${colors.primaryLight};
  padding: 20px 10px;
  vertical-align: middle;
`;

// TEXTO

const style = {
  basic: css`
    color: ${colors.greyDark};
    font-size: ${fontSize.F14};
    line-height: ${fontSize.F21};
    text-align: left;
  `,
  highlight: css`
    color: ${colors.primaryMed};
    font-size: ${fontSize.F16};
    font-weight: ${fontWeight.bold};
    text-align: center;
    line-height: ${fontSize.F22};
  `,
  header: css`
    color: ${colors.white};
    font-size: ${fontSize.F16};
    font-weight: ${fontWeight.bold};
    line-height: ${fontSize.F22};
  `,
};

export const Text = styled(Paragraph)`
  font-family: ${fontFamily.sansSerif};
  ${props => style[props.type] || style.basic}
`;
