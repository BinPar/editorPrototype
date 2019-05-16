import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';
import { colors, fontFamily, fontWeight, fontSize } from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';

const ColorPickerWrapper = styled(Holder)`
  position: relative;
  & + & {
    margin-left: 10px;
  }
`;

const PopUp = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Swatch = styled.button`
  margin-left: 5px;
  padding: 4px;
  background-color: ${props => props.theme.white};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 2px solid ${props => props.theme.greyMed};
`;

const Color = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
  background-color: rgb(
    ${state => state.color.r},
    ${state => state.color.g},
    ${state => state.color.b}
  );
`;

const Label = styled.p`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F11};
  color: ${props => props.theme.primaryDarkerLighten};
  letter-spacing: 0.08em;
`;

class ColorPicker extends PureComponent {
  state = {
    open: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
    },
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = color => {
    this.setState({ color: color.rgb });
  };

  render() {
    const { open, color } = this.state;
    const { label } = this.props;
    return (
      <ColorPickerWrapper justify="start">
        <Label>{label}</Label>
        <Swatch onClick={this.handleClick}>
          <Color color={color} />
        </Swatch>
        {open && (
          <PopUp>
            <Cover tabIndex={-999} onClick={this.handleClose} />
            <ChromePicker disableAlpha color={color} onChange={this.handleChange} />
          </PopUp>
        )}
      </ColorPickerWrapper>
    );
  }
}

ColorPicker.defaultProps = {};

ColorPicker.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ColorPicker;
