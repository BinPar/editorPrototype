import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize,
} from '../../../utils/Constants';
import Paragraph from './Paragraph';
import { Text } from '../resources/Table';

export const OrderedList = styled.ol`
  list-style: none;
  counter-reset: listStyle;
  ~ * {
    margin-top: 40px;
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  ~ * {
    margin-top: 40px;
  }
`;

const listType = {
  number: css`
    counter-increment: listStyle;
    ::before {
      content: counter(listStyle, decimal) '.';
      position: absolute;
      top: 6px;
      right: calc(100% + 10px);
      color: ${colors.secondary};
      font-weight: ${fontWeight.bold};
      font-size: ${fontSize.F19};
      font-family: ${fontFamily.sansSerif};
    }
  `,
  letter: css`
    counter-increment: listStyle;
    ::before {
      content: counter(listStyle, lower-alpha) '.';
      position: absolute;
      top: 6px;
      right: calc(100% + 10px);
      color: ${colors.secondary};
      font-weight: ${fontWeight.bold};
      font-size: ${fontSize.F19};
      font-family: ${fontFamily.sansSerif};
    }
  `,
  bullet: css`
    ::before {
      content: '';
      position: absolute;
      top: 13px;
      right: calc(100% + 17px);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${colors.secondary};
    }
    &.table {
      margin-left: 1rem;
      ::before {
        width: 5px;
        height: 5px;
        background: ${colors.primary};
        top: 8px;
        right: calc(100% + 10px);
      }
    }
  `,
};

const Item = styled.li`
  position: relative;
  margin-left: 2rem;
  ${props => listType[props.type] || listType.bullet};
  & + & {
    margin-top: 20px;
  }
`;

export const ListItem = ({ children, type, table }) => (
  <Item className={table ? 'table' : ''} type={type}>{table ? <Text>{children}</Text> : <Paragraph>{children}</Paragraph>}</Item>
);

ListItem.defaultProps = {
  type: '',
  table: false,
};

ListItem.propTypes = {
  table: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
