import React, { PureComponent } from 'react';
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

const SliderShell = styled.div`
  height: 30px;
  width: 100%;
  margin: 0 20px;
  vertical-align: middle;
  display: inline-block;
  border: 0 none;
  position: relative;
  left: 0;
  top: 0;
  overflow: visible;
  filter: url(#goo);
`;

const Svg = styled.svg`
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
`;

class FontSize extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 10 },
    };
  }

  render() {
    return (
      <FontSizeWrapper>
        <Title>Tamaño de Fuente</Title>
        <SliderWrapper className="wrapper">
          <FontIcon name={icon.fontSmall} />
          <InputRange
            maxValue={20}
            minValue={0}
            value={this.state.value}
            onChange={value => this.setState({ value })}
          />
          <FontIcon name={icon.fontBig} />
        </SliderWrapper>
        <Svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur id="blur" in="SourceGraphic" result="blur" stdDeviation="10" />
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
  }
}

FontSize.defaultProps = {};

FontSize.propTypes = {};

export default FontSize;
