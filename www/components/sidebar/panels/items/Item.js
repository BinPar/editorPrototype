import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import {
  fontSize, fontFamily, fontWeight, icon,
} from '../../../../utils/Constants';
import Holder from '../../../layout/Holder';
import Button from '../../../basics/Button';
import Icon from '../../../basics/Icon';
import CircleProgressBar from '../../../layout/CircleProgressBar';
import Counter from '../../../basics/Counter';
import Title from './index/Title';

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
        background-color: ${props => props.theme.itemLinkHoverBg};
        opacity: 0.2;
        position: absolute;
        top: -5px;
        left: ${props => (props.editing ? '35px' : '12px')};
        right: 0;
        pointer-events: none;
      }
      &:hover {
        &:after {
          background-color: ${props => props.theme.itemLinkActiveHoverBg};
        }
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

const CalendarButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 10px;
`;

const ExpandButton = styled(Button)`
  margin-top: -3px;
  margin-left: -5px;
  &.locked {
    user-select: none;
    cursor: default;
    &:hover {
      .icon {
        color: ${props => props.theme.itemIcon}
      }
    }
  }
`;

const TypeIcon = styled(Icon)`
  margin-top: -1px;
  margin-left: -3px;
  margin-right: 3px;
  opacity: 0.8;
`;

const Link = styled.a`
  width: calc(100% - 70px);
  z-index: 1;
  &:hover {
    &:after {
      content: '';
      width: ${props => (props.editing ? 'calc(100% - 35px)' : 'calc(100% - 12px)')};
      height: calc(100% + 10px);
      background-color: ${props => props.theme.itemLinkHoverBg};
      opacity: 0.2;
      position: absolute;
      top: -5px;
      left: ${props => (props.editing ? '35px' : '12px')};
      right: 0;
      user-select: none;
    }
  }
  &.locked {
    user-select: none;
    cursor: default;
    &:hover {
      &:after {
        content: none;
      }
    }
  }
`;

const Section = styled.p`
  font-family: ${fontFamily.sansSerif};
  color: ${props => props.theme.itemSection};
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

const LevelThreeTitle = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.semibold};
  letter-spacing: 0.07em;
  font-size: ${fontSize.F12};
  color: ${props => props.theme.itemLevelThree};
`;

const LockedDate = styled(Holder)`
  position: absolute;
  right: 12px;
  top: 0;
  user-select: none;
`;

const Lock = styled(Icon)`
  opacity: 0.4;
`;

const Date = styled.p`
  font-family: ${fontFamily.sansSerif};
  font-weight: ${fontWeight.black};
  font-size: ${fontSize.F09};
  color: ${props => props.theme.itemUnlockDate};
  text-transform: uppercase;
`;

const ItemHolder = styled(Holder)`
  width: 100%;
`;

const ItemWrapper = styled(Holder)`
  width: calc(100% - 40px);
`;

const Item = ({
  active,
  hasChildren,
  route,
  text,
  open,
  module,
  levelTheme,
  evaluation,
  progress,
  count,
  type,
  locked,
  editing,
  day,
  month,
  theme,
}) => (
  <StyledItem justify="start" align="start" className={`${active ? ' active' : ''} `}>
    {editing && (
      <DragButton
        name={icon.drag}
        color={theme.itemIcon}
        hoverColor={theme.itemIconHover}
        size={fontSize.F16}
      />
    )}
    {hasChildren ? (
      <ExpandButton
        name={open ? icon.minimize : icon.maximize}
        color={theme.itemIcon}
        hoverColor={theme.itemIconHover}
        size={fontSize.F20}
        className={`${locked && !editing ? ' locked' : ''}`}
      />
    ) : (
      <TypeIcon color={theme.itemIcon} name={type} size={fontSize.F16} />
    )}
    {editing ? (
      <ItemHolder justify="start">
        <ItemWrapper column justify="start" align="start">
          {module && [
            <Module>
              Módulo
              {' '}
              {module}
            </Module>,
            <Title className="levelOne" editing title={text} />,
          ]}
          {levelTheme && [
            <Theme>
              Tema
              {' '}
              {levelTheme}
            </Theme>,
            <Title className="levelTwo" editing title={text} />,
          ]}
          {evaluation && <Evaluation>Evaluación</Evaluation>}
          {module || levelTheme || evaluation ? null : <LevelThreeTitle>{text}</LevelThreeTitle>}
        </ItemWrapper>
      </ItemHolder>
    ) : (
      // TODO: Al estar locked, no debe ser link
      <Link href={route} className={`${locked && !editing ? ' locked' : ''}`}>
        <Holder column justify="start" align="start">
          {module && [
            <Module>
              Módulo
              {' '}
              {module}
            </Module>,
            <Title className="levelOne" title={text} />,
          ]}
          {levelTheme && [
            <Theme>
              Tema
              {' '}
              {levelTheme}
            </Theme>,
            <Title className="levelTwo" title={text} />,
          ]}
          {evaluation && <Evaluation>Evaluación</Evaluation>}
          {module || levelTheme || evaluation ? null : <LevelThreeTitle>{text}</LevelThreeTitle>}
        </Holder>
        {progress && !editing && <CircleProgressBar progress={progress} />}
        {locked && !editing && (
          <LockedDate column>
            <Lock name={icon.lock} color={theme.itemLockIcon} />
            <Date>
              {day}
              {' '}
              {month}
            </Date>
          </LockedDate>
        )}
        {count && !editing && <Counter number={count} />}
      </Link>
    )}
    {editing
      && (module || levelTheme) && [
        <DeleteButton
          name={icon.trash}
          color={theme.itemIcon}
          hoverColor={theme.itemIconHover}
          size={fontSize.F15}
        />,
        <CalendarButton
          name={icon.calendar}
          color={theme.itemIcon}
          hoverColor={theme.itemIconHover}
          size={fontSize.F15}
        />,
    ]}
  </StyledItem>
);

Item.defaultProps = {
  hasChildren: false,
  active: false,
  open: false,
  route: '',
  type: '',
  text: '',
  module: null,
  levelTheme: null,
  evaluation: false,
  editing: false,
  locked: false,
  progress: '',
  day: null,
  month: '',
  count: null,
};

Item.propTypes = {
  hasChildren: PropTypes.bool,
  active: PropTypes.bool,
  open: PropTypes.bool,
  route: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  module: PropTypes.number,
  levelTheme: PropTypes.number,
  evaluation: PropTypes.bool,
  progress: PropTypes.string,
  day: PropTypes.number,
  month: PropTypes.string,
  editing: PropTypes.bool,
  locked: PropTypes.bool,
  count: PropTypes.number,
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(Item);
