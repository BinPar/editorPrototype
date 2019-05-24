import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Holder from '../../../../layout/Holder';
import Icon from '../../../../basics/Icon';
import {
  icon, fontFamily, fontSize, fontWeight, maxMedia, minMedia,
} from '../../../../../utils/Constants';

const SkinsWrapper = styled.div`
  
  ${minMedia.minTablet`
    border-bottom: 1px solid ${props => props.theme.settingsDivision};
    margin-bottom: 20px;
    padding: 30px 0;
  `};

  ${maxMedia.maxMobile`
    @media (orientation: portrait) {
      border-bottom: 1px solid ${props => props.theme.settingsDivision};
      margin-bottom: 20px;
      padding: 30px 0;
    }
    @media (orientation: landscape) {
      border-right: 1px solid ${props => props.theme.settingsDivision};
      margin-right: 20px;
      padding: 0 30px;
    }
  `};
`;

const Title = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-size: ${fontSize.F11};
  font-weight: ${fontWeight.semibold};
  margin-bottom: 30px;
  color: ${props => props.theme.skinTitleText};
  text-align: center;
`;

const ThumbWrapper = styled(Holder)`
  margin-bottom: 10px;
  position: relative;
`;

const ThumbBorder = styled(Icon)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -6px;
  left: -9px;
  font-size: 5.5em;
  color: ${props => props.theme.skinBorder};
`;

const ThumbTitle = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-size: ${fontSize.F11};
  font-weight: ${fontWeight.black};
  color: ${props => props.theme.skinThumbText};
`;

const SkinButton = styled.button`
  &:hover {
    ${ThumbTitle} {
      color: ${props => props.theme.skinThumbTextHover};
    }
    ${ThumbBorder} {
      color: ${props => props.theme.skinBorderHover};
    }
  }
  &.active {
    ${ThumbTitle} {
      color: ${props => props.theme.skinThumbTextHover};
    }
    ${ThumbBorder} {
      color: ${props => props.theme.skinBorderHover};
    }
  }
`;

const Button = ({
  alt, title, active, source,
}) => (
  <SkinButton className={active ? ' active' : ''}>
    <ThumbWrapper>
      <img alt={alt} src={source} />
      <ThumbBorder name={icon.hexagon} />
    </ThumbWrapper>
    <ThumbTitle>{title}</ThumbTitle>
  </SkinButton>
);

Button.defaultProps = {
  active: false,
};

Button.propTypes = {
  alt: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

const Skins = () => (
  <SkinsWrapper>
    <Title>Selector de Skins</Title>
    <Holder justify="between">
      <Button active alt="Default Skin" source="/static/img/thumbDefault.svg" title="Default" />
      <Button alt="Dark Skin" source="/static/img/thumbDark.svg" title="Dark" />
      <Button alt="Sepia Skin" source="/static/img/thumbSepia.svg" title="Sepia" />
    </Holder>
  </SkinsWrapper>
);

Skins.defaultProps = {};

Skins.propTypes = {};

export default Skins;
