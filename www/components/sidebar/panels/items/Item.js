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

const StyledItem = styled(Holder)`
  position: relative;
  ~ * {
    margin-top: 15px;
  }
  &.active {
    a {
      &:after {
        content: '';
        width: ${props => (props.editing ? 'calc(100% - 35px)' : 'calc(100% - 12px)')};
        height: calc(100% + 10px);
        background-color: ${colors.primaryDarkerLighten};
        opacity: 0.2;
        position: absolute;
        top: -5px;
        left: ${props => (props.editing ? '35px' : '12px')};
        right: 0;
        pointer-events: none;
      }
    }
  }
`;

const DragButton = styled(Button)`
  cursor: grab;
  margin-right: 5px;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 10px;
`;

const ExpandButton = styled(Button)`
  margin-top: -3px;
  margin-left: -5px;
`;

const TypeIcon = styled(Icon)`
  margin-top: -1px;
  margin-left: -3px;
  margin-right: 3px;
  opacity: 0.8;
`;

const Link = styled.a`
  width: calc(100% - 65px);
  z-index: 1;
  &:hover {
    &:after {
      content: '';
      width: ${props => (props.editing ? 'calc(100% - 35px)' : 'calc(100% - 12px)')};
      height: calc(100% + 10px);
      background-color: ${colors.primaryDarkerLighten};
      opacity: 0.2;
      position: absolute;
      top: -5px;
      left: ${props => (props.editing ? '35px' : '12px')};
      right: 0;
      pointer-events: none;
    }
  }
`;

const Section = styled.p`
  font-family: ${fontFamily.sansSerif};
  color: ${colors.primaryDarkerLighten};
  text-transform: uppercase;
  font-weight: ${fontWeight.extrabold};
  margin-bottom: 5px;
`;

const Module = styled(Section)`
  font-size: ${fontSize.F13};
`;

const Theme = styled(Section)`
  font-size: ${fontSize.F12};
`;

const Evaluation = styled(Section)`
  font-size: ${fontSize.F12};
`;

const Title = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  letter-spacing: 0.07em;
`;

const LevelOneTitle = styled(Title)`
  font-size: ${fontSize.F14};
  color: ${colors.primaryDarker};
`;

const LevelTwoTitle = styled(Title)`
  font-size: ${fontSize.F13};
  color: ${colors.primaryDarker};
`;

const LevelThreeTitle = styled(Title)`
  font-size: ${fontSize.F12};
  color: ${colors.primaryDarkerMed};
`;

const Lock = styled(Icon)`
  width: 20px;
  position: absolute;
  right: 12px;
  top: 0;
  opacity: 0.4;
`;

const Item = ({
  active,
  hasChildren,
  route,
  text,
  open,
  module,
  theme,
  evaluation,
  progress,
  count,
  type,
  locked,
  editing,
}) => (
  <StyledItem justify="start" align="start" className={`${active ? ' active' : ''} `}>
    {editing && (
      <DragButton
        name={icon.drag}
        color={colors.primaryDarkerLighten}
        hoverColor={colors.primaryDarkerMed}
        size={fontSize.F16}
      />
    )}
    {hasChildren ? (
      <ExpandButton
        name={open ? icon.minimize : icon.maximize}
        color={colors.primaryDarkerLighten}
        hoverColor={colors.primaryDarkerMed}
        size={fontSize.F20}
      />
    ) : (
      <TypeIcon color={colors.primaryDarkerLighten} name={type} size={fontSize.F16} />
    )}
    <Link href={route}>
      <Holder column justify="start" align="start">
        {module && [
          <Module>
            Módulo
            {' '}
            {module}
          </Module>,
          <LevelOneTitle>{text}</LevelOneTitle>]}
        {theme && [
          <Theme>
            Tema
            {' '}
            {theme}
          </Theme>,
          <LevelTwoTitle>{text}</LevelTwoTitle>]}
        {evaluation && <Evaluation>Evaluación</Evaluation>}
        {module || theme || evaluation ? null : <LevelThreeTitle>{text}</LevelThreeTitle>}
      </Holder>
      {progress && !editing && <CircleProgressBar progress={progress} />}
      {locked && !editing && <Lock name={icon.lock} color={colors.primaryLight} />}
      {count && !editing && <Counter number={count} />}
    </Link>
    {editing && (module || theme) && (
      <DeleteButton
        name={icon.trash}
        color={colors.primaryDarkerLighten}
        hoverColor={colors.primaryDarkerMed}
        size={fontSize.F15}
      />
    )}
  </StyledItem>
);

Item.defaultProps = {
  hasChildren: false,
  active: false,
  open: false,
  route: '',
  type: '',
  module: null,
  theme: null,
  evaluation: false,
  editing: false,
  locked: false,
  progress: '',
  count: null,
};

Item.propTypes = {
  hasChildren: PropTypes.bool,
  active: PropTypes.bool,
  open: PropTypes.bool,
  route: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  module: PropTypes.number,
  theme: PropTypes.number,
  evaluation: PropTypes.bool,
  progress: PropTypes.string,
  editing: PropTypes.bool,
  locked: PropTypes.bool,
  count: PropTypes.number,
};

export default Item;
