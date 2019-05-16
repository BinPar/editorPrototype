import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontFamily,
  fontSize,
  fontWeight,
  minMedia,
  maxMedia,
} from '../../utils/Constants';
import Holder from '../layout/Holder';

const Marker = styled.span`
  position: absolute;
  bottom: -2px;
  border-bottom: 3px solid ${props => props.theme.tabMarker};
  width: ${props => props.width};
  left: ${props => props.left};
  transition: all 1s ease;
`;

const Tab = ({
  active, text, onClick, onMouseEnter, onMouseLeave,
}) => (
  <TabWrapper
    className={`${active ? 'active' : ''}`}
    onClick={e => onClick(text, e)}
    {...{ onMouseEnter, onMouseLeave }}
  >
    {text}
  </TabWrapper>
);
Tab.defaultProps = {
  active: false,
  onMouseEnter: null,
  onMouseLeave: null,
};

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

const TabsWrapper = styled(Holder)`
  border-bottom: 2px solid ${props => props.theme.tabBorder};
  margin-bottom: 10px;
  padding-bottom: 10px;
  position: relative;
`;

const TabWrapper = styled.button`
  font-family: ${fontFamily.sansSerif};
  text-transform: uppercase;
  font-weight: ${fontWeight.extrabold};
  letter-spacing: 0.05em;
  color: ${props => props.theme.tabText};

  ${maxMedia.maxMobile`
    font-size: ${fontSize.F10};
  `};
  ${minMedia.minTablet`
    font-size: ${fontSize.F09};
  `};

  &:hover,
  &.active {
    color: ${props => props.theme.tabTextHover};
  }
  & + & {
    margin-left: 10px;
  }
`;

// TODO: Establecer marker inicial

const Tabs = ({ tabs, initialTab }) => {
  const [activeTab, setActiveTab] = React.useState({
    text: initialTab || tabs[0],
    marker: { width: '0px', left: '50%' },
  });
  const [tempMarker, setTempMarker] = React.useState({
    text: '',
    marker: { width: '0px', left: '50%' },
  });
  const onClick = (text, e) => {
    const boundingRect = e.target.getBoundingClientRect();
    setActiveTab({
      text,
      marker: { width: `${boundingRect.width}px`, left: `${boundingRect.left}px` },
    });
  };
  const onMouseEnter = (e) => {
    const boundingRect = e.target.getBoundingClientRect();
    setTempMarker({
      width: `${boundingRect.width}px`,
      left: `${boundingRect.left}px`,
    });
  };
  const onMouseLeave = () => {
    setTempMarker(null);
  };
  const marker = tempMarker || activeTab.marker;
  return (
    <TabsWrapper>
      {tabs.map(text => (
        <Tab
          active={activeTab.text === text}
          text={text}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
      <Marker {...marker} />
    </TabsWrapper>
  );
};

Tabs.defaultProps = {
  initialTab: null,
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialTab: PropTypes.string,
};

export default Tabs;
