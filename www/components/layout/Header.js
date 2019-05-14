import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontWeight, minMedia, maxMedia, icon,
} from '../../utils/Constants';
import Holder from './Holder';
import Paragraph from '../content/text/Paragraph';
import Button from '../basics/Button';
import { ProgressBar } from './ProgressBar';

const HeaderWrapper = styled.header`
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  ${maxMedia.maxMobile`
    width: 100%;
    left: 0;
  `};
  ${minMedia.minTablet`
    width: ${props => (props.open ? 'calc(100% - 350px)' : '100%')};
    left: ${props => (props.open ? '350px' : 0)};
    transition: all 500ms ease;
  `};
`;

const Content = styled(Holder)`
  width: 100%;
  height: 65px;
  background: ${colors.primaryDark};
  padding: 0 20px;
  position: relative;
  ${maxMedia.maxMobile`
    justify-content: flex-end;
  `};
  ${minMedia.minTablet`
    justify-content: space-between;
  `};
`;

const TitleWrapper = styled(Holder)`
  width: 30%;
  ${maxMedia.maxMobile`
    display: none;
  `};
`;

const Module = styled(Paragraph)`
  color: ${colors.white};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.F19};
`;

const Title = styled(Paragraph)`
  color: ${colors.white};
  margin-top: 0;
  margin-left: 10px;
  border-left: 1px solid ${colors.white};
  padding-left: 10px;
  hyphens: none;
  text-align: left;
  ${minMedia.minTablet`
    font-size: ${fontSize.F16};
    letter-spacing: 0.02rem;
    line-height: ${fontSize.F18};
    max-width: 300px;
  `};

  display: block;
  display: -webkit-box;
  -webkit-box-align: stretch;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 35px;
  height: 35px;
  position: relative;
  word-break: break-all;

  &:before {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 20%;
    height: 35px;
    background: linear-gradient(to right, rgba(#8dc3b9, 0), rgba(#8dc3b9, 1) 80%);
  }

  @supports (-webkit-line-clamp: 2) {
    word-break: normal;
    -webkit-box-orient: vertical;

    &:before {
      display: none;
    }
  }
`;

const Logo = styled.a`
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const EditTools = styled(Holder)`
  margin-right: 15px;
  padding-right: 15px;
  position: relative;
  &:after {
    content: '';
    width: 2px;
    height: 25px;
    border-radius: 2px;
    background-color: ${colors.white};
    opacity: 0.3;
    position: absolute;
    left: 100%;
  }
`;

const EditButton = styled(Button)`
  margin-right: 15px;
`;

const EditToolButton = styled(Button)`
  & + & {
    margin-left: 15px;
  }
`;

const PrintButton = styled(Button)`
  margin-right: 15px;
`;

const Header = ({ editing, author, ...props }) => (
  <HeaderWrapper {...props}>
    <Content>
      <TitleWrapper justify="start">
        <Module>1.1</Module>
        <Title>Fundamentos y Objetivos de la monitorización fetal intraparto</Title>
      </TitleWrapper>
      <Logo href="https://www.medicapanamericana.com" target="blank">
        <img
          src="/static/img/logoPanamericana-noclaim-white.svg"
          alt="Editorial Médica Panamericana"
        />
      </Logo>
      <Holder>
        {editing && author ? (
          <EditTools>
            <EditToolButton
              name={icon.clock}
              color={colors.white}
              hoverColor={colors.primaryLight}
            />
            <EditToolButton
              name={icon.undo}
              color={colors.white}
              hoverColor={colors.primaryLight}
            />
            <EditToolButton
              name={icon.redo}
              color={colors.white}
              hoverColor={colors.primaryLight}
            />
          </EditTools>
        ) : null}
        <Holder>
          {author && (
            <EditButton name={icon.edit} color={colors.white} hoverColor={colors.primaryLight} />
          )}
          <PrintButton name={icon.print} color={colors.white} hoverColor={colors.primaryLight} />
          <Button name={icon.bell} color={colors.white} hoverColor={colors.primaryLight} />
        </Holder>
      </Holder>
    </Content>
    <ProgressBar {...props} progress="40" />
  </HeaderWrapper>
);

Header.defaultProps = {
  editing: false,
  author: false,
};

Header.propTypes = {
  editing: PropTypes.bool,
  author: PropTypes.bool,
};

export default Header;
