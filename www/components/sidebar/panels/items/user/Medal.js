import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize,
} from '../../../../../utils/Constants';
import Icon from '../../../../basics/Icon';
import Holder from '../../../../layout/Holder';

const MedalWrapper = styled(Holder)`
  width: calc(100% / 3);
  margin: 10px 0;
  &.disabled {
    opacity: 0.5;
  }
`;

const Name = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F10};
  color: ${props => props.theme.medalName};
  margin-top: 10px;
  text-align: center;
  letter-spacing: 0.04em;

  display: block;
  display: -webkit-box;
  -webkit-box-align: stretch;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 22px;
  position: relative;
  word-break: break-all;

  &:before {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 20%;
    height: 22px;
    background: linear-gradient(to right, rgba(#8DC3B9, 0), rgba(#8DC3B9, 1) 80%);
  }

  @supports (-webkit-line-clamp: 2 ) {
    word-break: normal;
    -webkit-box-orient: vertical;

    &:before {
      display: none;
    }
  }
`;

const Medal = ({ badge, name, disabled, theme }) => (
  <MedalWrapper column className={disabled ? 'disabled' : ''}>
    <Icon name={badge} size={fontSize.F70} color={theme.medalIcon} />
    <Name>{name}</Name>
  </MedalWrapper>
);

Medal.defaultProps = {
  disabled: false,
};

Medal.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(Medal);
