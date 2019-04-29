import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontFamily, fontWeight, icon,
} from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';
import Button from '../../../../basics/Button';
import Icon from '../../../../basics/Icon';

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.p`
  font-family: ${fontFamily.sansSerif};
  background-color: ${props => props.color};
  color: ${props => props.textColor || colors.greyDarker};
  padding: 7px 10px;
  margin-left: 15px;
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.F11};
`;

const OptionButton = styled(Button)`
  & + & {
    margin-left: 10px;
  }
`;

const VisibilityButton = styled(OptionButton)`
  margin-left: 10px;

  &:before {
    content: '';
    width: 2px;
    border-radius: 1px;
    height: 15px;
    background-color: ${colors.primaryDarkerLighten};
    margin-right: 10px;
    opacity: 0.5;
  }
`;

// SUMMARY

const Summary = ({ color, name, ...props }) => (
  <SummaryWrapper>
    <Holder>
      <Icon name={icon.highlight} color={color} size={fontSize.F19} />
      <Name color={color} {...props}>
        {name}
      </Name>
    </Holder>
    <Holder>
      <OptionButton
        name={icon.editSmall}
        color={colors.primaryDarkerLighten}
        size={fontSize.F15}
        hoverColor={colors.primaryDarkerMed}
      />
      <OptionButton
        name={icon.trash}
        color={colors.primaryDarkerLighten}
        size={fontSize.F15}
        hoverColor={colors.primaryDarkerMed}
      />
      <VisibilityButton
        name={icon.eye}
        color={colors.primaryDarkerLighten}
        size={fontSize.F15}
        hoverColor={colors.primaryDarkerMed}
      />
    </Holder>
  </SummaryWrapper>
);

Summary.defaultProps = {};

Summary.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Summary;
