import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import {
  fontSize, fontFamily, fontWeight, icon,
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
  color: ${props => props.textColor || props.theme.highlightSummaryText};
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
    background-color: ${props => props.theme.highlightSummaryOptionsDivision};
    margin-right: 10px;
    opacity: 0.5;
  }
`;

// SUMMARY

const Summary = ({
  color, name, theme, ...props
}) => (
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
        color={theme.highlightSummaryOptionIcon}
        size={fontSize.F15}
        hoverColor={theme.highlightSummaryOptionIconHover}
      />
      <OptionButton
        name={icon.trash}
        color={theme.highlightSummaryOptionIcon}
        size={fontSize.F15}
        hoverColor={theme.highlightSummaryOptionIconHover}
      />
      <VisibilityButton
        name={icon.eye}
        color={theme.highlightSummaryOptionIcon}
        size={fontSize.F15}
        hoverColor={theme.highlightSummaryOptionIconHover}
      />
    </Holder>
  </SummaryWrapper>
);

Summary.defaultProps = {};

Summary.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(Summary);
