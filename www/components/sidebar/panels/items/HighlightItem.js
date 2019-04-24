import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontSize, fontFamily, fontWeight, icon,
} from '../../../../utils/Constants';
import Holder from '../../../layout/Holder';
import Button from '../../../basics/Button';
import Icon from '../../../basics/Icon';
import { CircleProgressBar } from '../../../layout/ProgressBar';
import Counter from '../../../basics/Counter';

const editing = false;

const StyledItem = styled.li`
  display: flex;
  position: relative;
  ~ * {
    margin-top: 15px;
  }
  &.active {
    a {
      &:after  {
        content: '';
        width: calc(100% - 12px);
        height: calc(100% + 10px);
        background-color: ${colors.primaryDarkerLighten};
        opacity: 0.2;
        position: absolute;
        top: -5px;
        left: 12px;
        right: 0;
        pointer-events: none;
      }
    }
  }
`;

const OptionsWrapper = styled(Holder)`
  position: relative;
  padding-left: 15px;
  margin-left: 10px;
  &:after {
    content: '';
    width: 2px;
    height: 100%;
    border-radius: 2px;
    background-color: ${colors.primaryDarkerLighten};
    opacity: 0.3;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const DeleteButton = styled(Button)`
`;


const TypeIcon = styled(Icon)`
  margin-top: -1px;
  margin-left: -3px;
  margin-right: 3px;
  opacity: 0.8;
`;

const Link = styled.a`
  width: calc(100% - 80px);
  z-index: 1;
  margin-left: 10px;
  &:hover {
    &:after  {
      content: '';
      width: calc(100% - 20px);
      height: calc(100% + 10px);
      background-color: ${colors.primaryDarkerLighten};
      opacity: 0.2;
      position: absolute;
      top: -5px;
      left: 20px;
      right: 0;
      pointer-events: none;
    }
  }
`;

const Text = styled.p`
font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.regular};
  letter-spacing: 0.07em;
  font-size: ${fontSize.F12};
  color: ${colors.primaryDarkerMed};
`;

const HighlightItem = ({
  active, route, text,
}) => (
  <StyledItem className={`${active ? ' active' : ''} `}>
    <TypeIcon color={colors.primaryDarkerLighten} name={icon.highlight} size={fontSize.F16} />
    <Link href={route}>
      <Text>{text}</Text>
    </Link>
    <OptionsWrapper column justify="start">
      <DeleteButton
        name={icon.trash}
        color={colors.primaryDarkerLighten}
        hoverColor={colors.primaryDarkerMed}
        size={fontSize.F16}
      />
    </OptionsWrapper>
  </StyledItem>
);

HighlightItem.defaultProps = {
  active: false,
  route: '',
  type: '',
  progress: '',
  count: null,
};

HighlightItem.propTypes = {
  active: PropTypes.bool,
  route: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  progress: PropTypes.string,
  count: PropTypes.number,
};

export default HighlightItem;
