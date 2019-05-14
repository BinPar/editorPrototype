import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, icon,
} from '../../utils/Constants';
import Holder from '../layout/Holder';
import Button from './Button';

const AddWrapper = styled(Holder)`
  width: calc(100% - 20px);
  position: absolute;
  text-align: center;
  margin: 0;
  opacity: 0;
  transition: opacity 500ms ease;
  &:before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.greyMed};
    opacity: 0.3;
  }
  &:hover {
    opacity: 1;
  }
`;

const OptionsHolder = styled(Holder)`
  padding: 5px 10px;
  position: relative;
  width: auto;
  background-color: ${colors.primaryLightest};
  transition: width 1s ease-in;
`;

const AddButton = styled(Button)`
  transition: transform 500ms ease-in;
  &.rotate {
    transform: rotate(45deg);
  }
`;

const OptionsWrapper = styled(Holder)`
  position: relative;
  background-color: ${colors.primaryLightest};
  margin-left: 5px;
  padding-left: 5px;
  border-left: 2px solid ${colors.primaryDarkerLightest};
`;

const Options = () => (
  <OptionsWrapper>
    <Button
      name={icon.subtitle}
      color={colors.primaryDarkerLighten}
      size={fontSize.F15}
      hoverColor={colors.primaryDarkerMed}
    />
    <Button
      name={icon.subtitle}
      color={colors.primaryDarkerLighten}
      size={fontSize.F15}
      hoverColor={colors.primaryDarkerMed}
    />
    <Button
      name={icon.subtitle}
      color={colors.primaryDarkerLighten}
      size={fontSize.F15}
      hoverColor={colors.primaryDarkerMed}
    />
    <Button
      name={icon.subtitle}
      color={colors.primaryDarkerLighten}
      size={fontSize.F15}
      hoverColor={colors.primaryDarkerMed}
    />
    <Button
      name={icon.subtitle}
      color={colors.primaryDarkerLighten}
      size={fontSize.F15}
      hoverColor={colors.primaryDarkerMed}
    />
    <Button
      name={icon.subtitle}
      color={colors.primaryDarkerLighten}
      size={fontSize.F15}
      hoverColor={colors.primaryDarkerMed}
    />
  </OptionsWrapper>
);

const Add = ({ options }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AddWrapper>
      <OptionsHolder>
        <AddButton
          name={icon.addCircle}
          color={colors.primaryDarkerLighten}
          size={fontSize.F15}
          hoverColor={colors.primaryDarkerMed}
          open={expanded}
          onClick={() => setExpanded(!expanded)}
          className={expanded ? ' rotate' : ''}
        />
        {expanded && <Options />}
      </OptionsHolder>
    </AddWrapper>
  );
};
Add.defaultProps = {
  // options: []
};

Add.propTypes = {
  // options: PropTypes...
};

export default Add;
