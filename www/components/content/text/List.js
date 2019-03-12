import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize,
} from '../../../utils/Constants';
import Paragraph from './Paragraph';

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
      top: 0;
      right: calc(100% + 10px);
      color: ${colors.secondary};
      font-weight: ${fontWeight.medium};
      font-size: ${fontSize.F19};
    }
  `,
  letter: css`
    counter-increment: listStyle;
    ::before {
      content: counter(listStyle, lower-alpha) '.';
      position: absolute;
      top: 0;
      right: calc(100% + 10px);
      color: ${colors.secondary};
      font-weight: ${fontWeight.medium};
      font-size: ${fontSize.F19};
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
  `,
};

const Item = styled.li`
  font-size: ${fontSize.F20};
  text-align: justify;
  color: ${colors.greyDarker};
  font-family: ${fontFamily.serif};
  font-weight: ${fontWeight.regular};
  line-height: ${fontSize.F32};
  letter-spacing: 0.05rem;
  user-select: auto;
  position: relative;
  margin-left: 2rem;
  ${props => listType[props.type] || listType.bullet};
  & + & {
    margin-top: 20px;
  }
`;

export const ListItem = ({ children, type }) => (
  <Item type={type}>
    <Paragraph>{children}</Paragraph>
  </Item>
);

ListItem.defaultProps = {
  type: '',
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
