import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: -6px;
  transition: top 500ms ease;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    svg {
      display: none;
    }
    &:after {
      content: '';
      background-image: url('/static/img/sidebarShape.svg');
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 77px;
      height: 134px;
      background-repeat: no-repeat;
    }
  }
`;

const Group = styled.g`
  fill: ${props => props.theme.sidebarBg};
`;

const Svg = styled.svg``;

const StaticShape = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="77" height="134" viewBox="0 0 77 134">
    <Group>
      <path d="M0.8 134.2C0.8 112.6 22.8 95 50 94.5 50.6 94.5 51.3 94.5 51.3 94.5L51.3 94.4C65.5 93.8 76.8 81.9 76.8 67.2 76.8 52.5 65.5 40.6 51.3 39.9L51.3 39.9C51.3 39.9 50.5 39.9 50 39.9 22.8 39.4 0.8 21.8 0.8 0.2" />
    </Group>
  </Svg>
);

const InitShape = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="77" height="134" viewBox="0 0 77 134">
    <Group>
      <path d="M0.8 134.0C0.8 112.6 0 95 0 94.5 0 94.5 0 94.5 0 94.0L0.3 94.0C0.5 93.8 0 81.9 0 67.2 0 52.5 0 40.6 0 39.9L51.3 39.5C51.3 39.9 0 39.9 0 39.9 0 39.4 0 21.8 0 0.2">
        <animate
          dur="3s"
          repeatCount="1"
          attributeName="d"
          values="
             M0.8 134.0C0.8 112.6 0 95 0 94.5 0 94.5 0 94.5 0 94.0L0.3 94.0C0.5 93.8 0 81.9 0 67.2 0 52.5 0 40.6 0 39.9L51.3 39.5C51.3 39.9 0 39.9 0 39.9 0 39.4 0 21.8 0 0.2;
             M0.8 134.2C0.8 112.6 22.8 95 50 94.5 50.6 94.5 51.3 94.5 51.3 94.5L51.3 94.4C65.5 93.8 76.8 81.9 76.8 67.2 76.8 52.5 65.5 40.6 51.3 39.9L51.3 39.9C51.3 39.9 50.5 39.9 50 39.9 22.8 39.4 0.8 21.8 0.8 0.2;
            M0.8 134.2C0.8 112.6 22.8 95 50 94.5 50.6 94.5 51.3 94.5 51.3 94.5L51.3 94.4C65.5 93.8 76.8 81.9 76.8 67.2 76.8 52.5 65.5 40.6 51.3 39.9L51.3 39.9C51.3 39.9 50.5 39.9 50 39.9 22.8 39.4 0.8 21.8 0.8 0.2"
          fill="freeze"
          calcMode="spline"
          keySplines="0 1 0 1; 0 1 0 1"
        />
      </path>
    </Group>
  </Svg>
);

const EndShape = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="77" height="134" viewBox="0 0 77 134">
    <Group>
      <path d="M0.8 134.2C0.8 112.6 22.8 95 50 94.5 50.6 94.5 51.3 94.5 51.3 94.5L51.3 94.4C65.5 93.8 76.8 81.9 76.8 67.2 76.8 52.5 65.5 40.6 51.3 39.9L51.3 39.9C51.3 39.9 50.5 39.9 50 39.9 22.8 39.4 0.8 21.8 0.8 0.2">
        <animate
          dur="3s"
          repeatCount="1"
          attributeName="d"
          values="
           M0.8 134.2C0.8 112.6 22.8 95 50 94.5 50.6 94.5 51.3 94.5 51.3 94.5L51.3 94.4C65.5 93.8 76.8 81.9 76.8 67.2 76.8 52.5 65.5 40.6 51.3 39.9L51.3 39.9C51.3 39.9 50.5 39.9 50 39.9 22.8 39.4 0.8 21.8 0.8 0.2;
            M0.8 134.0C0.8 112.6 0 95 0 94.5 0 94.5 0 94.5 0 94.0L0.3 94.0C0.5 93.8 0 81.9 0 67.2 0 52.5 0 40.6 0 39.9L51.3 39.5C51.3 39.9 0 39.9 0 39.9 0 39.4 0 21.8 0 0.2;
           M0.8 134.0C0.8 112.6 0 95 0 94.5 0 94.5 0 94.5 0 94.0L0.3 94.0C0.5 93.8 0 81.9 0 67.2 0 52.5 0 40.6 0 39.9L51.3 39.5C51.3 39.9 0 39.9 0 39.9 0 39.4 0 21.8 0 0.2;"
          fill="freeze"
          calcMode="spline"
          keySplines="0 1 0 1; 0 1 0 1"
        />
      </path>
    </Group>
  </Svg>
);

const SidebarShape = ({ top }) => (
  <Wrapper className="sidebarShape" {...{ top }}>
    <StaticShape />
  </Wrapper>
);

SidebarShape.defaultProps = {
};

SidebarShape.propTypes = {
  top: PropTypes.number.isRequired,
};

export default SidebarShape;
