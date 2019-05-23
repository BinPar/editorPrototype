import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Holder from '../../../../layout/Holder';
import Icon from '../../../../basics/Icon';
import {
  icon, fontFamily, fontSize, fontWeight, colors,
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

const Slider = styled.div`
  height: 30px;
  width: 100%;
  margin: 0 20px;
  position: relative;
  overflow: visible;
`;

const SliderShell = styled.div`
  height: 100%;
  width: 100%;
  overflow: visible;
  filter: url(#goo);
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  position: absolute;
  background: ${props => props.theme.fontSizeBar};
`;

const SliderThumb = styled.div`
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: ${props => props.theme.fontSizeBar};
  border-radius: 50%;
  position: absolute;
  border: 0 none;
  padding: 0px;
  margin: 0px;
  text-align: center;
  pointer-events: none;
`;

const SliderInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  overflow: visible;
  z-index: 100;

  &[type='range'] {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0 none;
    background: transparent;
    color: transparent;
    overflow: visible;
  }
  &:focus {
    outline: none;
  }
  &[type='range']{
    &::-webkit-slider-thumb {
      width: 50px;
      height: 50px;
      border-radius: 0px;
      border: 0 none;
      background: transparent;
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      border: 0px solid rgba(0, 0, 0, 0);
      height: 50px;
      width: 50px;
      border-radius: 50px;
      background: transparent;
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      background: transparent;
      border-radius: 25px;
      border: 0px solid rgba(0, 0, 0, 0);
    }
    &::-webkit-slider-thumb {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      border: 0px solid rgba(0, 0, 0, 0);
      height: 20px;
      width: 20px;
      border-radius: 50px;
      background: transparent;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -6.85px;
    }
    &::-moz-range-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      background: transparent;
      border-radius: 25px;
      border: 0px solid rgba(0, 0, 0, 0);
    }
    &::-moz-range-thumb {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
      border: 0px solid rgba(0, 0, 0, 0);
      height: 20px;
      width: 20px;
      border-radius: 50px;
      background: transparent;
      cursor: pointer;
    }
    &::-ms-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      background: ${props => props.theme.fontSizeBar};
      border-color: ${props => props.theme.fontSizeBar};
      color: ${props => props.theme.fontSizeBar};
    }
    &::-ms-fill-lower {
      background: ${props => props.theme.fontSizeBar};
      border: 0px solid rgba(0, 0, 0, 0);
      border-radius: 50px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
    }
    &::-ms-fill-upper {
      background: ${props => props.theme.fontSizeBar};
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
      background: ${props => props.theme.fontSizeBar};
      cursor: pointer;
      height: 5px;
    }
    &:focus::-ms-fill-lower {
      background: ${props => props.theme.fontSizeBar};
    }
  }
`;

const Button = styled.button``;

const FontIcon = styled(Icon)`
  color: ${props => props.theme.fontSizeIcon};
`;

const Size = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F12};
  color: ${props => props.theme.fontSizeIcon};
  letter-spacing: 0.2em;
`;

const CurrentSize = styled.p`
  font-family: ${fontFamily.sansSerif};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 99;
  pointer-events: none;
  color: ${colors.white};
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F12};
`;

const Svg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
  shape-rendering: geometricPrecision;
`;

function showValue(val, sliderNum) {
  /* setup variables for the elements of our slider */
  const thumb = document.getElementById(`sliderthumb${sliderNum}`);
  const shell = document.getElementById(`slidershell${sliderNum}`);
  const slider = document.getElementById(`slider${sliderNum}`);
  const currentValue = document.getElementById('currentValue');
  const min = Number.parseInt(slider.min, 10);
  const max = Number.parseInt(slider.max, 10);
  const pc = (val - min) / (max - min); /* the percentage slider value */
  const thumbSize = 30; /* must match the thumb size in your css */
  const bigVal = shell.clientWidth; /* widest or tallest value depending on orientation */
  const trackSize = bigVal - thumbSize;
  const loc = pc * trackSize;

  thumb.style.left = `${loc}px`;
  currentValue.style.left = `${loc}px`;
}

const sliderNum = 1;

const FontSize = () => (
  <FontSizeWrapper>
    <Title>Tamaño de Fuente</Title>
    <SliderWrapper className="wrapper">
      <Button>
        <FontIcon name={icon.fontSmall} />
        <Size>12</Size>
      </Button>
      <Slider>
        <CurrentSize id="currentValue">48</CurrentSize>
        <SliderShell className="slidershell" id="slidershell1">
          <SliderTrack className="slidertrack" id="slidertrack1" />
          <SliderThumb className="sliderthumb" id="sliderthumb1" />
          <SliderInput
            className="slider"
            id="slider1"
            type="range"
            min={12}
            max={48}
            defaultValue={20}
            onChange={e => showValue(e.target.valueAsNumber, sliderNum)}
          />
        </SliderShell>
      </Slider>
      <Button>
        <FontIcon name={icon.fontBig} />
        <Size>48</Size>
      </Button>
    </SliderWrapper>
    <Svg xmlns="http://www.w3.org/2000/svg" version="1.1" shape-rendering="geometricPrecision">
      <defs>
        <filter id="goo">
          <feGaussianBlur id="blur" in="SourceGraphic" result="blur" stdDeviation="4.2" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -9.5"
            result="goo"
          />
        </filter>
      </defs>
    </Svg>
  </FontSizeWrapper>
);

FontSize.propTypes = {};

export default FontSize;
