import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  colors, fontFamily, fontWeight, fontSize, icon,
} from '../../../../../utils/Constants';
import Holder from '../../../../layout/Holder';
import Button from '../../../../basics/Button';

const CalendarWrapper = styled(Holder)`
  width: 100%;
  padding: 0 30px;
`;

const MonthWrapper = styled(Holder)`
  width: 100%;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-family: ${fontFamily.sansSerif};
`;

const ArrowButton = styled(Button)`
  margin-right: 10px;
`;

const Month = styled(Text)`
  font-weight: ${fontWeight.black};
  color: ${colors.primaryDarkerMed};
  font-size: ${fontSize.F13};
  text-transform: uppercase;
  letter-spacing: 0.3em;
`;

const WeekWrapper = styled(Holder)`
  width: 100%;
  margin-bottom: 10px;
`;

const Weekday = styled(Text)`
  font-weight: ${fontWeight.black};
  color: ${colors.primaryDarkerLighten};
  font-size: ${fontSize.F14};
  text-transform: uppercase;
  letter-spacing: 0.3em;
  width: calc(100% / 7);
  text-align: center;
`;

const DaysWrapper = styled(Holder)`
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.primaryDarkerLighten};
`;

const DayText = styled(Text)`
  text-align: center;
  font-size: ${fontSize.F11};
  color: ${colors.primaryDarkerMed};
  font-weight: ${fontWeight.extrabold};
  z-index: 1;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayButton = styled.button`
  width: calc(100% / 7);
  height: 25px;
  text-align: center;
  position: relative;
  z-index: 1;

  &.notCurrent {
    pointer-events: none;
    opacity: 0.25;
  }

  &.event {
    &:before {
      content: '';
      width: 8px;
      height: 2px;
      border-radius: 2px;
      background-color: ${colors.primaryDarkerLighten};
      position: absolute;
      left: 50%;
      bottom: -1px;
      transform: translateX(-50%);
    }
  }
  &:hover,
  &.currentDay,
  &.active {
    ${DayText} {
      color: ${colors.white};
      position: relative;
      &:after {
        content: '';
        width: 20px;
        height: 17px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
  }
  &:hover {
    ${DayText} {
      &:after {
        background-color: ${colors.primaryLight};
      }
    }
  }
  &.currentDay {
    ${DayText} {
      &:after {
        background-color: ${colors.primaryDark};
      }
    }
    &:hover {
      ${DayText} {
        &:after {
          background-color: ${colors.primaryDarker};
        }
      }
    }
  }
  &.active {
    ${DayText} {
      &:after {
        background-color: ${colors.primary};
      }
    }
    &:hover {
      ${DayText} {
        &:after {
          background-color: ${colors.primaryLight};
        }
      }
    }
  }
`;

const Day = ({
  number, event, currentDay, notCurrent, active,
}) => (
  <DayButton
    className={`${event ? ' event' : ''}${active ? ' active' : ''}${
      currentDay ? ' currentDay' : ''
    }${notCurrent ? ' notCurrent' : ''}`}
  >
    <DayText>{number}</DayText>
  </DayButton>
);

Day.defaultProps = {
  number: null,
  event: false,
  active: false,
  currentDay: false,
  notCurrent: false,
};

Day.propTypes = {
  number: PropTypes.number,
  event: PropTypes.bool,
  active: PropTypes.bool,
  currentDay: PropTypes.bool,
  notCurrent: PropTypes.bool,
};

const Calendar = ({}) => (
  <CalendarWrapper column>
    <MonthWrapper justify="between">
      <Month>Mayo</Month>
      <Holder>
        <ArrowButton
          name={icon.longArrowLeft}
          color={colors.primaryDarkerLighten}
          hoverColor={colors.primaryDarkerMed}
          size={fontSize.F20}
        />
        <Button
          name={icon.longArrowRight}
          color={colors.primaryDarkerLighten}
          hoverColor={colors.primaryDarkerMed}
          size={fontSize.F20}
        />
      </Holder>
    </MonthWrapper>
    <WeekWrapper justify="between">
      <Weekday>D</Weekday>
      <Weekday>L</Weekday>
      <Weekday>M</Weekday>
      <Weekday>X</Weekday>
      <Weekday>J</Weekday>
      <Weekday>V</Weekday>
      <Weekday>S</Weekday>
    </WeekWrapper>
    <DaysWrapper justify="between">
      <Day number={29} notCurrent />
      <Day number={30} notCurrent />
      <Day number={1} currentDay />
      <Day number={2} />
      <Day number={3} event />
      <Day number={4} event />
      <Day number={5} />
      <Day number={6} />
      <Day number={7} />
      <Day number={8} />
      <Day number={9} />
      <Day number={10} active event />
      <Day number={11} />
      <Day number={12} />
      <Day number={13} />
      <Day number={14} />
      <Day number={15} />
      <Day number={16} />
      <Day number={17} />
      <Day number={18} />
      <Day number={19} />
      <Day number={20} />
      <Day number={21} />
      <Day number={22} />
      <Day number={23} />
      <Day number={24} />
      <Day number={25} />
      <Day number={26} />
      <Day number={27} />
      <Day number={28} />
      <Day number={29} />
      <Day number={30} />
      <Day number={31} />
      <Day number={1} notCurrent />
      <Day number={2} notCurrent />
    </DaysWrapper>
  </CalendarWrapper>
);

Calendar.defaultProps = {};

Calendar.propTypes = {};

export default Calendar;
