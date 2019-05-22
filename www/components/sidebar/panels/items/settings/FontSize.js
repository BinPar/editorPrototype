import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import Holder from '../../../../layout/Holder';
import Icon from '../../../../basics/Icon';
import {
  icon, fontFamily, fontSize, fontWeight,
} from '../../../../../utils/Constants';

const FontSizeWrapper = styled.div`
  padding: 20px 0;
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

const SliderWrapper = styled(Holder)``;

const FontIcon = styled(Icon)``;

const Input = styled.input`
  &[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    margin: 6.85px 0;
    filter: contrast(20);

    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      background: #1e71a9;
      border-radius: 25px;
      border: 0px solid rgba(0, 0, 0, 0);
    }
    &::-webkit-slider-thumb {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      border: 0px solid rgba(0, 0, 0, 0);
      height: 20px;
      width: 20px;
      border-radius: 50px;
      background: #1e71a9;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -6.85px;
      
      
    }
    &::-moz-range-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      background: #1e71a9;
      border-radius: 25px;
      border: 0px solid rgba(0, 0, 0, 0);
    }
    &::-moz-range-thumb {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      border: 0px solid rgba(0, 0, 0, 0);
      height: 20px;
      width: 20px;
      border-radius: 50px;
      background: #1e71a9;
      cursor: pointer;
    }
    &::-ms-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    &::-ms-fill-lower {
      background: #0f3752;
      border: 0px solid rgba(0, 0, 0, 0);
      border-radius: 50px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
    }
    &::-ms-fill-upper {
      background: #1e71a9;
      border: 0px solid rgba(0, 0, 0, 0);
      border-radius: 50px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
    }
    &::-ms-thumb {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      border: 0px solid rgba(0, 0, 0, 0);
      height: 20px;
      width: 20px;
      border-radius: 50px;
      background: #1e71a9;
      cursor: pointer;
      height: 5px;
    }
    &:focus::-ms-fill-lower {
      background: #1e71a9;
    }
  }
  /* filter: url(#goo); */
`;

const Svg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

const FontSize = ({}) => (
  <FontSizeWrapper>
    <Title>Tamaño de Fuente</Title>
    <SliderWrapper className="wrapper">
      <FontIcon name={icon.fontSmall} />
      <Input
        name="thumb-roundness"
        ngmodel="slider['contrast']"
        label=""
        className="form-control ng-valid ng-scope ng-dirty"
        type="range"
        min="12"
        max="30"
        step="1"
        defaultValue="20"
      />
      <FontIcon name={icon.fontBig} />
    </SliderWrapper>
    <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </Svg>
  </FontSizeWrapper>
);

FontSize.defaultProps = {};

FontSize.propTypes = {};

export default FontSize;
