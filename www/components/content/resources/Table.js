import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  fontSize, fontFamily, fontWeight, maxMedia, minMedia,
} from '../../../utils/Constants';
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
    background: ${props => props.theme.tableBasicBg};
    padding: 20px;
    border: 3px solid ${props => props.theme.tableBasicBorder};
  `,
  highlight: css`
    background: ${props => props.theme.tableHighlightedBg};
    padding: 10px;
    border-bottom: 3px solid ${props => props.theme.tableHighlightedBorder};
    & + & {
      border-left: 3px solid ${props => props.theme.tableHighlightedBorder};
    }
  `,
};

const maxMobileMinWidth = maxMedia.maxMobile`
  min-width: 200px;
`;

const minTabletMinWidth = minMedia.minTablet`
  min-width: 150px;
`;

export const Cell = styled.td`
  ${props => type[props.type] || type.basic};
  vertical-align: middle;
  min-height: 50px;
  ${maxMobileMinWidth}
  ${minTabletMinWidth}
`;

export const CellHeader = styled.th`
  background: ${props => props.theme.cellHeaderBg};
  padding: 20px 10px;
  vertical-align: middle;
`;

// TEXTO

const style = {
  basic: css`
    color: ${props => props.theme.tableBasicText};
    font-size: ${fontSize.F14};
    line-height: ${fontSize.F21};
    font-weight: ${fontWeight.medium};
    text-align: left;
  `,
  highlight: css`
    color: ${props => props.theme.tableHighlightedText};
    font-size: ${fontSize.F16};
    font-weight: ${fontWeight.bold};
    text-align: center;
    line-height: ${fontSize.F20};
  `,
  header: css`
    color: ${props => props.theme.cellHeaderText};
    font-size: ${fontSize.F16};
    font-weight: ${fontWeight.bold};
    line-height: ${fontSize.F22};
    text-align: left;
  `,
};

export const Text = styled.p`
  font-family: ${fontFamily.sansSerif};
  ${props => style[props.type] || style.basic}
  ~ * {
    margin-top: 10px
  };
`;
