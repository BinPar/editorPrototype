import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import Date from './items/calendar/Date';
import Event from './items/calendar/Event';
import Calendar from './items/calendar/Calendar';
import { maxMedia, minMedia } from '../../../utils/Constants';

const PanelWrapper = styled(Panel)`
  padding-bottom: 0;
`;

const EventsWrapper = styled.div`
  margin-top: 20px;
  padding: 0 30px 20px;
  height: calc(100vh - 300px);
  overflow: auto;
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.sidebarBg};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.sidebarScroll};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.sidebarScrollHover};
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    * {
      -ms-overflow-style: -ms-autohiding-scrollbar;
      -ms-scrollbar-highlight-color: ${props => props.theme.sidebarBg};
      -ms-scrollbar-arrow-color: ${props => props.theme.sidebarScroll};
      -ms-scrollbar-face-color: ${props => props.theme.sidebarScroll};
    }
  }
  ${maxMedia.maxMobile`
    height: calc(100vh - 460px);
  `}
  ${minMedia.minTablet`
    ${maxMedia.maxTablet`
      @media (orientation: landscape) {
        height: calc(100vh - 460px);
      }
      @media (orientation: portrait) {
        height: calc(100vh - 460px);
      }
    `}
  `}
  ${minMedia.minDesk`
    height: calc(100vh - 300px);
  `}
`;

const CalendarPanel = () => (
  <PanelWrapper>
    <Calendar />
    <Date day={10} weekday="Miércoles" month="Mayo" year={2019} />
    <EventsWrapper>
      <Event
        type="evaluation"
        typeTitle="Evaluación"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        typeTitle="Lorem"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        type="evaluation"
        typeTitle="Evaluación"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        typeTitle="Lorem"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        type="evaluation"
        typeTitle="Evaluación"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        typeTitle="Lorem"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        type="evaluation"
        typeTitle="Evaluación"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        typeTitle="Lorem"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        type="evaluation"
        typeTitle="Evaluación"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
      <Event
        typeTitle="Lorem"
        title="Módulo 1"
        description="Fundamentos, equipos y anatomía ecográfica"
      />
    </EventsWrapper>
  </PanelWrapper>
);

CalendarPanel.defaultProps = {};

CalendarPanel.propTypes = {};

export default CalendarPanel;
